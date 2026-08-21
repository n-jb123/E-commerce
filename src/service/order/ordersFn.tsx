import { createClient } from "@/lib/supabase/client";


export const OrdersFn = async () => {
   const supabase = createClient();
  const { data, error } = await (await supabase).from("orders").select("*");
  if (error) {
    console.error("service orders :", error.message);
    return [];
  }
  return data;
};
