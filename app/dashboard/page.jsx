"use client";

import { useEffect, useState } from "react";
import { getOpportunities } from "@/mock/OpportunitiesApi";
import CategoryChart from "@/components/CategoryChart";

export default function DashboardPage() {
  const [allOpportunities, setAllOpportunities] = useState([]);
  const [savedCount, setSavedCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const opportunities = getOpportunities();

      const saved = JSON.parse(
        localStorage.getItem("savedOpportunities") || "[]"
      );

      setAllOpportunities(opportunities);
      setSavedCount(saved.length);
    } catch (error) {
      console.error(error);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  const jobCount = allOpportunities.filter(
    (opportunity) => opportunity.category === "Job"
  ).length;

  const categoryData = [
    {
      name: "Job",
      value: allOpportunities.filter(
        (opportunity) => opportunity.category === "Job"
      ).length,
    },
    {
      name: "Internship",
      value: allOpportunities.filter(
        (opportunity) => opportunity.category === "Internship"
      ).length,
    },
    {
      name: "Scholarship",
      value: allOpportunities.filter(
        (opportunity) => opportunity.category === "Scholarship"
      ).length,
    },
    {
      name: "Training",
      value: allOpportunities.filter(
        (opportunity) => opportunity.category === "Training"
      ).length,
    },
  ];

  const stats = [
    {
      label: "Total Opportunities",
      value: allOpportunities.length,
    },
    {
      label: "Saved Opportunities",
      value: savedCount,
    },
    {
      label: "Jobs",
      value: jobCount,
    },
  ];

  const recentOpportunities = [...allOpportunities].reverse().slice(0, 5);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-6xl">
          <p
            className="text-gray-500 dark:text-gray-300"
            role="status"
            aria-live="polite"
          >
            Loading dashboard...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-6xl">
          <p
            className="rounded-lg bg-red-100 px-4 py-3 
          text-red-700 dark:bg-red-900/40 dark:text-red-300"
            role="alert"
          >
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Dashboard Header */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your opportunities and saved items.
        </p>

        {/* Statistics Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Category Chart */}
        <div className="mt-10">
          <CategoryChart data={categoryData} />
        </div>

        {/* Recent Opportunities */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Opportunities
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Title
                  </th>

                  <th className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Organization
                  </th>

                  <th className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Category
                  </th>

                  <th className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Deadline
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentOpportunities.map((opportunity) => (
                  <tr
                    key={opportunity.id}
                    className="border-b border-gray-200 last:border-b-0 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {opportunity.title}
                    </td>

                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {opportunity.organization}
                    </td>

                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {opportunity.category}
                    </td>

                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {opportunity.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
