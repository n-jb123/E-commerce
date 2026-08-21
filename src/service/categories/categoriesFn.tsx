import { categories } from "@/futures/ecommerce/home/types/typesHome";
import { createClient } from "@/lib/supabase/client";

export const CategoriesFn = async (): Promise<categories[]> => {
  const supabase = createClient();
  const { data, error } = await (await supabase).from("categories").select("*");
  if (error) {
    console.error(error.message);
    return [];
  }
  return data;
};
