"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

async function generateArticle() {
  if (!topic) return;

  setLoading(true);

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: topic,
    }),
  });

  const data = await res.json();
console.log(data);

if (data.success) {
  alert("AI article created!");
  setTopic("");
} else {
  alert(data.error || "Failed to generate article");
}

  setLoading(false);
}

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-amber-400">
          AI Article Generator
        </h1>

        <p className="mt-4 text-white/70">
          Generate investment articles using AI
        </p>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter article topic..."
          className="w-full mt-10 p-4 rounded-xl bg-white/10 border border-white/10"
        />

        <button
          onClick={generateArticle}
          disabled={loading}
          className="mt-6 px-6 py-3 rounded-xl bg-amber-400 text-black font-bold"
        >
          {loading ? "Generating..." : "Generate Article"}
        </button>

      </div>
    </div>
  );
}
