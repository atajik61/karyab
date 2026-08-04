"use client";

import { useEffect, useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState([]);
  const [allOpportunities, setAllOpportunities] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );

    const savedOpportunities = JSON.parse(
      localStorage.getItem("opportunities") || "[]"
    );

    setSavedIds(savedIds);
    setAllOpportunities(savedOpportunities);
  }, []);

  const savedOpportunities = allOpportunities.filter((opportunity) =>
    savedIds.includes(opportunity.id)
  );

  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Saved Opportunities</h1>

        {savedOpportunities.length === 0 ? (
          <p className="mt-10 text-gray-500">
            You haven't saved any opportunities yet.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {savedOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
