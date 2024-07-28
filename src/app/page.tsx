import H1 from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/photomy.png";
import H2 from "@/components/ui/H2";
import { BotIcon } from "lucide-react";
import WavingHand from "@/components/ui/WavingHand";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Snehal Bargaje - my smart portfolio ",
  description:
    "Snehal Bargaje is a frontend developer specializing in responsive web experiences using Angular, React, Next.js, Bootstrap, and Tailwind.",
};

export default function Home() {
  
  return (
    <>
      <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <H1 className="text-center md:text-start">
            <WavingHand/> Hi, I&apos;m Snehal {" "}
            </H1>
            <p className="text-center md:text-start">
              Frontend enthusiast specializing in responsive web experiences
              using Angular, React, Next.js, Bootstrap, and Tailwind. Focused on
              mobile-first development and creating seamless user experiences
              with innovative designs.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={me}
              alt="my photo"
              height={300}
              width={300}
              className="aspect-square rounded-full border object-cover shadow-xl"
            />
          </div>
        </section>
        <section className="space-y-3 text-center">
          <H2>Ask the chatbot anything about me</H2>
          <p>
            Click the <BotIcon className="inline pb-1" /> icon in the top bar to
            activate the AI chat. You can inquire about me, my work, or any
            other topic, and the chatbot will provide relevant information.
            Additionally, the bot can offer links to the specific pages you are
            seeking.
          </p>
        </section>
        <section className="space-y-3 text-center">
          <Skills/>
        </section>
      </section>
    </>
  );
}
