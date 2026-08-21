import { Suspense } from "react";
import { SearchClient } from "@/futures/ecommerce/search/page/searchClient";

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}