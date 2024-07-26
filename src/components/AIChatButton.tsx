"use client";
import { BotIcon } from "lucide-react";
import React, { useState } from "react";
import AIChatBox from "./AIChatBox";

const AIChatButton = () => {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
    <button
      onClick={() => setChatBoxOpen(!chatBoxOpen)}
    >
      <BotIcon size={24} />

    </button>
    <AIChatBox open={chatBoxOpen} onClose={()=>{setChatBoxOpen(!chatBoxOpen)}} />
    </>
  );
};

export default AIChatButton;
