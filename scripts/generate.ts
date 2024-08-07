import dotenv from "dotenv";
dotenv.config({path: ".env.local"});
//Configure dotenv before importing anything else
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { generateEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();
  const vectorStore = await getVectorStore();
  (await generateEmbeddingsCollection()).deleteMany({});
  const loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );
  const docs = (await loader.load())
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app/")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "")
        .replace(/ className=(["']).*?\1| className={.*?}/g, "")
        .replace(/^\s*[\r]/gm, "")
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });
  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
  const splitDocs = await splitter.splitDocuments(docs);
  await vectorStore.addDocuments(splitDocs);
}
generateEmbeddings();
