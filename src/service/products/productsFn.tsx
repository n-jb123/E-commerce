import { createClient } from "@/lib/supabase/client";

export default async function ProductsFn() {
   const supabase =createClient ();
  const { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.error("service products :", error.message);
    return [];
  }
  return data;
}
