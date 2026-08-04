"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CategoryChart({ data }) {
  return (
    <div className="h-80 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
        Opportunities by Category
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-gray-200 dark:stroke-gray-600"
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "currentColor" }}
            className="text-gray-700 dark:text-gray-300"
          />

          <YAxis
            allowDecimals={false}
            tick={{ fill: "currentColor" }}
            className="text-gray-700 dark:text-gray-300"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--tooltip-bg)",
              border: "1px solid var(--tooltip-border)",
              color: "var(--tooltip-text)",
            }}
          />

          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
