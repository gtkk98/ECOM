import ProductList from "@/components/ProductList";

const ProductPage = async ({
  searchParams
}:{
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>;
}) => {
  const { category, q, sort } = await searchParams;
  return(
        <ProductList category={category} query={q} sort={sort} params="products" />
    )
}

export default ProductPage