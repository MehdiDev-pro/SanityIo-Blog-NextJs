"use client";
import PreviewSuspense from "next-sanity/preview";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";

export default function DraftSuspense({ children }: any) {
  return (
    <>
      <Suspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">Loading Draft Data...</p>
          </div>
        }>
        <PreviewSuspense client={client}>{children}</PreviewSuspense>
      </Suspense>
    </>
  );
}
