import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3 px-3 py-4">
        <div className="container mx-auto pt-8 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap font-semibold justify-center gap-4 text-xs lg:justify-end">
            <li className="uppercase">Snehal Bargaje</li>
            <li>aiportfolio@copyright2024</li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="#"
                target="_blank"
              >
                <span className="sr-only">Github</span>
                <Github />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                target="_blank"
              >
                <span className="sr-only">Mail</span>
                <Mail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
