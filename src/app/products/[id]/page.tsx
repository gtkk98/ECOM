import ProductDetails from "@/components/ProductDetails";
import { products } from "@/components/ProductList";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductPage({
    params,
}: PageProps<"/products/[id]">) {
    const { id } = await params;
    const product = products.find((item) => String(item.id) === id);

    if (!product) notFound();

    return <ProductDetails key={product.id} product={product} />;
}