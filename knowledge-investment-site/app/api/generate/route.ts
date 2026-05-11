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
  const body = await req.json();

  const title = body.title;

const completion = await openai.chat.completions.create({
  model: "gpt-4.1-mini",
  messages: [
    {
      role: "user",
      content: `
Write a detailed professional investment article about: ${title}

Requirements:
- 1200 to 1800 words
- Clear introduction
- Use subheadings
- Explain risks and opportunities
- Write for beginner investors
- Avoid financial advice language
- End with a balanced conclusion
`,
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
      desc: `AI generated investment article about ${title}`,
      image,
      content: completion.choices[0].message.content || "",
    },
  ]);
  return Response.json({
    success: true,
    data,
    error,
  });
}
