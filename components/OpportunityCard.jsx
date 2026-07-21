import Link from "next/link";
export default function OpportunityCard({ opportunity }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {opportunity.category}
        </span>

        <span className="text-sm text-gray-500">{opportunity.type}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{opportunity.title}</h3>

      <p className="mt-2 text-gray-600">{opportunity.organization}</p>
      <p className="mt-4 text-sm text-gray-500">📍 {opportunity.location}</p>
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
      >
        View Details →
      </Link>
      <p className="mt-4 text-sm text-gray-500">
        Deadline: {opportunity.deadline}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {opportunity.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
