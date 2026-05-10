import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  "https://fqfhfyjdfgqfwtufuuxm.supabase.co",
  "sb_secret_YeeeDHcMAwr9XnCVtMuxEA_v8Nw8yzq"
);

export async function POST(req: Request) {
  const body = await req.json();

  const title = body.title;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `Write a professional investment article about: ${title}`,
      },
    ],
  });

  const content =
    completion.choices[0].message.content || "";

  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-");

  const image =
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3";

  const { data, error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        slug,
        desc: title,
        image,
        content,
      },
    ]);

  return Response.json({
    success: true,
    data,
    error,
  });
}
