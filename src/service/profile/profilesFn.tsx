import { createClient } from "@/lib/supabase/client";

export const ProfilesFn = async () => {
  const supabase = createClient();
  const { data: profiles, error: profileError } = await (await supabase)
    .from("profiles")
    .select("*");

  if (profileError || !profiles) {
    return;
  } else {
    return profiles;
  }
};
