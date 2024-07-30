"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useResult } from "@/components/ResultContext";

const ApiConsumer = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const { setResult } = useResult();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim().length < 22) {
      alert("The minimun text characters to analyze are 22.");
      return;
    }

    if (text.trim().length > 10000) {
      alert("The maximum text characters to analyze are 10,000.");
      return;
    }

    if (language !== "en" && language !== "fr") {
      alert("Invalid language selected.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, language }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        router.push("/dashboard");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("There was an error analyzing the text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white text-black">
      <h1 className="text-2xl font-bold">Emotion Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full h-96 p-2 mt-2 border rounded"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        >
          <option value="en">English</option>
          <option value="fr">Francais</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
    </div>
  );
};

export default ApiConsumer;
