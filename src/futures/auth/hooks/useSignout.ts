import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export const useSignout = ()=>{
const router=useRouter()
 const supabase = createClient();
   const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setError] = useState<string | undefined>("");
  const HandleOnSignout=async()=>{
    setLoading(true)
   const {error}= await supabase.auth.signOut()
   if(error){
    setError(error.message)
    setLoading(false)
    return;
   }
   router.push('/auth/signin')
    setLoading(false)
  }
  return({errorMessage,loading,HandleOnSignout})
}