import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const title = body.title;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 800,
      messages: [
        {
          role: "user",
          content: `Write a 300 to 500 word beginner-friendly investment article about: ${title}`,
        },
      ],
    });

    const content = completion.choices[0].message.content || "";

   const slug = title
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

    let image = "";

if (title.toLowerCase().includes("bitcoin")) {
  image =
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d";
}
else if (title.toLowerCase().includes("ethereum")) {
  image =
    "https://images.unsplash.com/photo-1621761191319-c6fb62004040";
}
else if (
  title.toLowerCase().includes("etf") ||
  title.toLowerCase().includes("fund")
) {
  image =
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f";
}
else if (title.toLowerCase().includes("risk")) {
  image =
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a";
}
else {
  image =
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3";
};

