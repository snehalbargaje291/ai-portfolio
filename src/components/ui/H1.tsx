import { cn } from "@/lib/utils";
import React from "react";

function H1(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <h1
      {...props}
      className={cn("text-3xl font-bold tracking-tight md:text-4xl", props.className)}
    ></h1>
  );
}

export default H1;
