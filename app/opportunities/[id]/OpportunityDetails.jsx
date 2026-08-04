"use client";

import { useEffect, useState } from "react";
import { opportunities } from "@/data/opportunities";
export default function OpportunityDetails({ id }) {
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("opportunities") || "[]");

    const foundInSaved = saved.find((item) => item.id === Number(id));

    if (foundInSaved) {
      setOpportunity(foundInSaved);
    } else {
      const foundInOriginal = opportunities.find(
        (item) => item.id === Number(id)
      );

      setOpportunity(foundInOriginal);
    }
  }, [id]);
  if (!opportunity) {
    return (
      <main className="px-6 py-16">
        <p>Opportunity not found.</p>
      </main>
    );
  }

  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <span className="text-blue-600">{opportunity.category}</span>

        <h1 className="mt-4 text-4xl font-bold">{opportunity.title}</h1>

        <p className="mt-4 text-gray-600">{opportunity.organization}</p>

        <p className="mt-4">📍 {opportunity.location}</p>

        <p className="mt-2">Type: {opportunity.type}</p>

        <p className="mt-2">Deadline: {opportunity.deadline}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Description</h2>

          <p className="mt-3 text-gray-600">{opportunity.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Requirements</h2>

          <ul className="mt-4 list-disc pl-5">
            {opportunity.requirements?.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Tags</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {opportunity.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {opportunity.apply && (
          <a
            href={opportunity.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Apply Now
          </a>
        )}
      </div>
    </main>
  );
}
