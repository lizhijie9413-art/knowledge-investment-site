import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fqfhfyjdfgqfwtufuuxm.supabase.co";

const supabaseKey =
  "sb_publishable_-wV4as1OmrKmVqzal6Y9Cw_ASnBSXUL";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
