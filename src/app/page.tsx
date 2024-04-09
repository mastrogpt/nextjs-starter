import Image from "next/image";

const messagges = [
  {
    role: "user",
    text: "Hello, MastroGPT!",
  },
  {
    role: "bot",
    text: "Hello, user!",
  },
  {
    role: "user",
    text: "How are you?",
  },
  {
    role: "bot",
    text: "I'm fine, thank you!",
  },
  {
    role: "user",
    text: "What can you do?",
  },
  {
    role: "bot",
    text: "I can do a lot of things, like generating code!",
  },
  {
    role: "user",
    text: "Can you generate a Python code?",
  },
  {
    role: "bot",
    text: "Sure! What do you want me to generate?",
  },
  {
    role: "user",
    text: "Generate a Python code that prints 'Hello, World!'",
  },
  {
    role: "bot",
    text: "Here's the Python code that prints 'Hello, World!':\n\nprint('Hello, World!')",
  },
  {
    role: "user",
    text: "Thank you!",
  },
  {
    role: "bot",
    text: "You're welcome!",
  },
  {
    role: "user",
    text: "Goodbye!",
  },
  {
    role: "bot",
    text: "Goodbye!",
  },
];

export default function Home() {
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
          <div className="ml-auto">
            <button
              type="button"
              className="bg-zinc-500 hover:bg-zinc-600 py-2 px-4 text-white rounded-md"
            >
              TEST
            </button>
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
        <div className="mt-auto p-4">
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
      <section id="code-output"></section>
    </main>
  );
}
