import { createClient } from "@/lib/supabase/client";
import { createClientServer } from "@/lib/supabase/server";
export async function getProfileClient() {
  const supabase=createClient()
  const {data:{user}}=await supabase.auth.getUser()
  return user
}
export async function getProfileServer() {
const supabase = await createClientServer()
const { data: { user } } = await supabase.auth.getUser();
return user
}