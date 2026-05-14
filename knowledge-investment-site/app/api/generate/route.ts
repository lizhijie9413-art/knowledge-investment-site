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
          content: `
content: `
Write a professional beginner-friendly investment article about: ${title}

Use beautiful markdown formatting.

Requirements:
- Use # for the main title
- Use ## for section headings
- Add blank lines between every paragraph
- Add blank lines between headings and text
- Use bullet points where useful
- Use bold text for important concepts
- Make the article look like a modern finance blog
- Keep paragraphs short and readable
- 500 to 800 words

Example format:

# Main Title

Intro paragraph here...

## Section Heading

Paragraph here...

- Bullet point
- Bullet point

Another paragraph here...
`,
        },
      ],
    });

    const content = completion.choices[0].message.content || "";

   const slug = title
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

 const lowerTitle = title.toLowerCase();

const image =
  lowerTitle.includes("bitcoin")
    ? "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
    : lowerTitle.includes("ethereum")
    ? "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
    : lowerTitle.includes("etf") || lowerTitle.includes("fund")
    ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    : lowerTitle.includes("risk")
    ? "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
    : "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3";
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
  
  }  catch (err) {
  return Response.json(
    { success: false, error: "Server error" },
    { status: 500 }
  );
}
}
