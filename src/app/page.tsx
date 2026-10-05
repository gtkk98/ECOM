import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fresh comfort food",
  description: "Explore ChowUp favorites made fresh to order, from wood-fired pizza to rich ramen and desserts.",
  alternates: canonicalUrl("/") ? { canonical: canonicalUrl("/") } : undefined,
};

const Homepage = async ({
  searchParams
}:{
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>;
}) => {
  const { category, q, sort } = await searchParams;
  return (
    <div>
      <section className="relative isolate mb-12 min-h-[300px] overflow-hidden rounded-xl bg-[#18372f] sm:aspect-3/1 sm:min-h-0">
        <Image
          src="/header.jpeg"
          alt="Freshly prepared ChowUp favorites"
          fill
          priority
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102b25]/90 via-[#102b25]/55 to-transparent" />
        <div className="relative flex min-h-[300px] max-w-xl flex-col items-start justify-center gap-4 px-6 py-10 text-white sm:min-h-0 sm:h-full sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd6a9]">Made fresh, made for you</p>
          <h1 className="max-w-lg text-3xl font-semibold leading-tight sm:text-5xl">The good stuff is just a few clicks away.</h1>
          <p className="max-w-md text-sm leading-6 text-white/85 sm:text-base">Find your next favorite, choose your portion, and we’ll get cooking.</p>
          <Link href="/products" className="mt-2 inline-flex min-h-11 items-center rounded-md bg-[#ed9b52] px-5 text-sm font-semibold text-[#192a26] transition-colors hover:bg-[#f5b276]">
            Explore the menu
          </Link>
        </div>
      </section>
      <ProductList category={category} query={q} sort={sort} params="homepage" />
    </div>
  );
}

export default Homepage;