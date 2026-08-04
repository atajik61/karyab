"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ConfirmModal from "@/components/ConfirmModal";
import { opportunities } from "@/data/opportunities";
import OpportunitiesSearch from "@/components/OpportunitiesSearch";

import { getOpportunities, deleteOpportunity } from "@/mock/OpportunitiesApi";

export default function OpportunitiesContent() {
  const [allOpportunities, setAllOpportunities] = useState(opportunities);

  const router = useRouter();
  const searchParams = useSearchParams();
  const added = searchParams.get("added");

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const askDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const cancelDelete = () => {
    setSelectedId(null);
    setShowModal(false);
  };

  // Remove success message from URL
  useEffect(() => {
    if (added === "true") {
      const timer = setTimeout(() => {
        router.replace("/opportunities");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [added, router]);

  // Load opportunities
  useEffect(() => {
    const saved = getOpportunities();

    if (saved.length > 0) {
      setAllOpportunities(saved);
    } else {
      localStorage.setItem("opportunities", JSON.stringify(opportunities));

      setAllOpportunities(opportunities);
    }
  }, []);

  // Delete opportunity
  const handleDelete = (id) => {
    deleteOpportunity(id);

    const updatedOpportunities = getOpportunities();

    setAllOpportunities(updatedOpportunities);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Success Message */}
      {added === "true" && (
        <div className="px-6 pt-6">
          <div
            className="mx-auto max-w-6xl rounded-lg bg-green-100 px-4 py-3 text-green-700 dark:bg-green-900/40 dark:text-green-300"
            role="status"
            aria-live="polite"
          >
            Opportunity added successfully!
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">Search Opportunities</h1>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Search and filter opportunities based on your needs.
          </p>

          <div className="mt-8">
            <OpportunitiesSearch
              opportunities={allOpportunities}
              onDelete={askDelete}
            />
          </div>
        </div>
      </section>

      {/* Confirm Delete Modal */}
      {showModal && (
        <ConfirmModal
          onCancel={cancelDelete}
          onConfirm={() => {
            handleDelete(selectedId);
            setSelectedId(null);
            setShowModal(false);
          }}
        />
      )}
    </main>
  );
}
