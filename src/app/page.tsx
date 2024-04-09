"use client";
import { Service } from "@/types";
import { fetcher } from "@/utils";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";

const messagges = [
  {
    role: "user",
    text: "Hello, MastroGPT!",
  },
  {
    role: "bot",
    text: "Hello, user!",
  },
];

export default function Home() {
  const router = useRouter();
  let services: Service[] = [];

  const { data, error, isLoading } = useSWR(
    router.basePath + "api/my/mastrogpt/index",
    fetcher
  );

  if (!isLoading && !error) {
    services = data.services;
  }

  return (
    <main className="md:grid grid-cols-2 bg-zinc-800 md:h-screen divide-purple-500 divide-x-2">
      <section id="chat" className="flex flex-col overflow-auto">
        <div className="p-4 flex gap-4 items-center border-b border-zinc-500">
          <div>
            <Image
              src="/logo.png"
              className=""
              width="64"
              height="64"
              alt="MastroGPT logo"
            />
          </div>
          <div className="ml-auto flex gap-4">
            {services.map((service: Service, index: number) => (
              <button
                key={index}
                type="button"
                className="bg-zinc-500 hover:bg-zinc-600 py-2 px-4 text-white rounded-md"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-auto overflow-y-auto">
          {messagges.map((message, index) => (
            <div
              key={index}
              className={`p-4 ${
                message.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`p-4 rounded-md inline-block ${
                  message.role === "user"
                    ? "bg-purple-500 text-white"
                    : "bg-zinc-900 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <form className="p-4 bg-zinc-900 rounded-md flex items-center gap-4">
            <input
              type="text"
              className="bg-zinc-900 text-white w-full focus:outline-none"
              placeholder="Type a message"
            />
            <button type="submit" className="text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <section id="code-output">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to MastroGPT
          </h1>
          <p className="text-white">
            Please select the chat you want to use on the top menu.
          </p>
        </div>
      </section>
    </main>
  );
}
