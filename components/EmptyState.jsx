"use client";

export default function EmptyState() {
  return (
    <div
      className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
      role="status"
      aria-live="polite"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        No opportunities found
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-300">
        Try changing your search or filters.
      </p>
    </div>
  );
}
