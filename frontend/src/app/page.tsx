import { ProductQueryType } from "@/components/filter/Filter";
import { Suspense } from "react";
import LandingPageContent from "@/components/landingPageContent";

export const experimental_ppr = true;

export default function Home({
  searchParams,
}: {
  searchParams?: ProductQueryType;
}) {
  return (
    <main className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-black text-4xl font-bold mb-4">Shop</span>
        <div className="absolute inset-0 bg-white opacity-50"></div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPageContent query={searchParams} />
      </Suspense>
    </main>
  );
}

//PPR usage
