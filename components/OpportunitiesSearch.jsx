"use client";

import OpportunityCard from "./OpportunityCard";
import { useState } from "react";
import EmptyState from "./EmptyState";

export default function OpportunitiesSearch({ opportunities, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = [
    "All",
    ...new Set(opportunities.map((opportunity) => opportunity.category)),
  ];

  const locations = [
    "All",
    ...new Set(opportunities.map((opportunity) => opportunity.location)),
  ];

  const types = [
    "All",
    ...new Set(opportunities.map((opportunity) => opportunity.type)),
  ];

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch = opportunity.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || opportunity.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "All" || opportunity.location === selectedLocation;

    const matchesType =
      selectedType === "All" || opportunity.type === selectedType;

    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div>
      {/* Search and Filters */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {/* Search */}
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Search Opportunities
          </label>

          <input
            id="search"
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Filters */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Category
            </label>

            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Location
            </label>

            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label
              htmlFor="type"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Type
            </label>

            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredOpportunities.length === 0 ? (
        <div className="mt-10">
          <EmptyState />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-3" aria-live="polite">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
