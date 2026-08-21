import { ProductClient } from "@/futures/ecommerce/product/page/productClient";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductClient id={id} />;
}
