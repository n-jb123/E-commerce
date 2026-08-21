import { ProductsClient } from "@/futures/ecommerce/products/productsClient";

export default async function Products({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;
  return <ProductsClient category={category} />;
}
