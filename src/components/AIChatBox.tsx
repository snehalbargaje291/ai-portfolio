import React from "react";
import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { BotIcon, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AIChatBox = ({ open, onClose }: AIChatBoxProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hi, How can I help you today?",
      },
      {
        id: "2",
        role: "user",
        content: "Hello",
      },
      {
        id: "3",
        role: "assistant",
        content: `
[List of things you can do:](https://www.google.com)
- [x] Learn React
- [ ] Learn Next.js
- [ ] Learn Tailwind CSS
        `,
      },
    ],
  });

  return (
    <div
      className={cn(
        "xl:right-36 bottom-0 right-0 z-50 w-full max-w-[400px] p-1",
        open ? "fixed" : "hidden"
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[400px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3">
          {messages.map((message, i) => (
            <ChatMessage key={i} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIChatBox;

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage && <BotIcon className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-sm p-2 shadow-lg",
          isAiMessage ? "bg-background" : "bg-foreground"
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-2 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul {...props} className="mt-2 first:mt-0 list-disc list-inside" />
            ),
            li: ({ node, ...props }) => (
              <li {...props} className="mt-1" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
