import React, { use, useEffect, useRef } from "react";
import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { BotIcon, SendHorizonal, TrashIcon, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AIChatBox = ({ open, onClose }: AIChatBoxProps) => {
  const {
    messages,
    input,
    setMessages,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[430px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[400px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message, i) => (
            <ChatMessage key={i} message={message} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "An error occurred. Please try again later.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center">
              <BotIcon size={28} className="mb-2" />
              <p className="text-md mb-2 text-center font-medium">
                Send a message to start the AI chat!
              </p>
              <p className="mb-2 text-center">
                You can ask the chatbot any question about me and it will find
                the relevant information on this website.
              </p>
              <p className="text-center text-sm text-muted-foreground">
                PS: If you want to build your own chatbot, then you must check
                out{" "}
                <LinkPreview
                  url="https://www.botbyte.in/"
                  className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent"
                >
                  botbyte.in
                </LinkPreview>
                .
              </p>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="my-2 flex items-center justify-evenly"
        >
          <button
            title="Clear chat"
            type="button"
            onClick={() => {
              setMessages([]);
            }}
            className="p-2"
          >
            <TrashIcon size={24} />
          </button>
          <input
            type="text"
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Ask something..."
            className="flex-1 rounded-md border border-gray-300 bg-transparent p-2 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 disabled:opacity-50"
            // disabled={isLoading || input.length === 0}
            title="Send message"
          >
            <SendHorizonal size={24} />
          </button>
        </form>
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
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <BotIcon className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-sm border p-2 text-sm shadow-lg",
          isAiMessage
            ? "bg-background text-foreground"
            : "bg-foreground text-background",
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
              <ul
                {...props}
                className="mt-2 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
