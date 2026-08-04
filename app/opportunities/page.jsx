import { Suspense } from "react";
import OpportunitiesContent from "./OpportunitiesContent";

export default function OpportunitiesPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white px-6 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-gray-600 dark:text-gray-300">
              Loading opportunities...
            </p>
          </div>
        </main>
      }
    >
      <OpportunitiesContent />
    </Suspense>
  );
}
