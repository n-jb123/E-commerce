"use client";
import { useEffect, useState } from "react";
import { getProfileClient , getProfileServer } from "./getProfile";

export function useProfileClient() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getProfileClient();
      setUser(userData);
    }
    fetchUser();
  }, []);
return{user}
}

export function useProfileServer() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getProfileServer();
      setUser(userData);
    }
    fetchUser();
  }, []);
return{user}
}
