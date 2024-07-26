import { cn } from "@/lib/utils";
import React from "react";

function H2(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <h2
      {...props}
      className={cn("text-xl font-semibold tracking-tight md:text-2xl", props.className)}
    ></h2>
  );
}

export default H2;
