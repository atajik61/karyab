"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OpportunityCard({ opportunity, onUnsave, onDelete }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );

    const alreadySaved = saved.includes(opportunity.id);

    setIsSaved(alreadySaved);
  }, [opportunity.id]);

  const handleSave = () => {
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );

    if (isSaved) {
      const updatedSaved = saved.filter(
        (savedId) => savedId !== opportunity.id
      );

      localStorage.setItem("savedOpportunities", JSON.stringify(updatedSaved));

      setIsSaved(false);
    } else {
      const updatedSaved = [...saved, opportunity.id];

      localStorage.setItem("savedOpportunities", JSON.stringify(updatedSaved));

      setIsSaved(true);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-900 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      {/* Category and Type */}
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {opportunity.category}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          {opportunity.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
        {opportunity.title}
      </h3>

      {/* Organization */}
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {opportunity.organization}
      </p>

      {/* Location */}
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        📍 {opportunity.location}
      </p>

      {/* Details */}
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View Details →
      </Link>

      {/* Deadline */}
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Deadline: {opportunity.deadline}
      </p>

      {/* Tags */}
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

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/opportunities/edit/${opportunity.id}`}
          className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
        >
          Edit
        </Link>

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(opportunity.id)}
            className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-900/60"
          >
            Delete
          </button>
        )}

        <button
          type="button"
          onClick={handleSave}
          aria-pressed={isSaved}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {isSaved ? "❤️ Saved" : "♡ Save"}
        </button>
      </div>
    </div>
  );
}
