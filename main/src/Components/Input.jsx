import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";
import { AIResult } from "../utils/fetch";
import ReactMarkdown from "react-markdown";

export default function Input() {
  const [content, setContent] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const handleSubmit = async () => {
    const response = await AIResult(content);
    console.log(response);
    console.log(typeof response);
    setAiResponse(response || "");
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-5 ">
      <div
        className="bg-gray-100 flex items-center font-bold
    justify-between w-[80%] rounded-md font-serif px-3 py-1.5"
      >
        <input
          value={content}
          onChange={(text) => setContent(text.target.value)}
          placeholder="start asking BOo"
          type="text"
          className="w-[90%] text-start text-xl bg-transparent border-0 outline-0 text-black p-1 "
        />
        <MdOutlineSend
          onClick={handleSubmit}
          className="text-black  font-bold text-xl cursor-pointer duration-700 ease-in-out hover:text-gray-700"
        />
      </div>
      <div className="max-w-3xl bg-white/85 rounded-xl p-6 shadow-md">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mb-3 leading-7 text-gray-700">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-3">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-3">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ children }) => (
              <code className="bg-gray-500 px-1 py-0.5 rounded">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4">
                {children}
              </pre>
            ),
          }}
        >
          {aiResponse}
        </ReactMarkdown>
      </div>
    </div>
  );
}
