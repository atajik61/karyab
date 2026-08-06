"use client";

import Link from "next/link";
import { useSaved } from "@/context/SavedContext";

export default function OpportunityCard({ opportunity, onDelete }) {
  const { isSaved, saveOpportunity, unsaveOpportunity } = useSaved();

  const saved = isSaved(opportunity.id);

  const handleSave = () => {
    if (saved) {
      unsaveOpportunity(opportunity.id);
    } else {
      saveOpportunity(opportunity.id);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {opportunity.category}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {opportunity.type}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">{opportunity.title}</h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {opportunity.organization}
      </p>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        📍 {opportunity.location}
      </p>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Deadline: {opportunity.deadline}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(opportunity.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View Details →
      </Link>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/opportunities/edit/${opportunity.id}`}
          className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
        >
          Edit
        </Link>

        <button
          type="button"
          onClick={() => onDelete(opportunity.id)}
          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-900/60"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={handleSave}
          aria-pressed={saved}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {saved ? "❤️ Saved" : "♡ Save"}
        </button>
      </div>
    </div>
  );
}
