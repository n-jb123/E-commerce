"use client";
import { useQuery } from "@tanstack/react-query";
import { ProfilesFn } from "./profilesFn";

export const useProfiles = () => {
  return useQuery({
    queryKey: ["allProfiles"],
    queryFn: ProfilesFn,
  });
};
