import { ProductQueryType } from "@/components/filter/Filter";
import { Suspense } from "react";
import LandingPageContent from "@/components/landingPageContent";
import Spinner from "@/components/spinner";

export const experimental_ppr = true;

export default function Home({
  searchParams,
}: {
  searchParams?: ProductQueryType;
}) {
  return (
    <main className="bg-white">
      <span className="text-black text-4xl font-bold mb-4 center w-screen flex justify-center">
        Shop
      </span>
      <Suspense
        fallback={
          <div className="bg-white h-[50vw] w-screen flex justify-center align-center">
            <Spinner />
          </div>
        }
      >
        <LandingPageContent query={searchParams} />
      </Suspense>
    </main>
  );
}

//PPR usage
