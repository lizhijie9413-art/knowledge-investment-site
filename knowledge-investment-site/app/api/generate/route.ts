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

    const image =
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3";

    const { data, error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          slug,
          desc: `AI generated investment article about ${title}`,
          image,
          content,
        },
      ])
      .select();

    if (error) {
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
