"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getOpportunities } from "@/mock/OpportunitiesApi";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedOpportunities, setSavedOpportunities] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // Load saved opportunities
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );

    setSavedOpportunities(saved);

    const all = getOpportunities();

    const items = all.filter((item) => saved.includes(item.id));

    setSavedItems(items);
  }, []);

  const updateSavedItems = (ids) => {
    const all = getOpportunities();

    const items = all.filter((item) => ids.includes(item.id));

    setSavedItems(items);
  };

  const saveOpportunity = (id) => {
    if (savedOpportunities.includes(id)) return;

    const updated = [...savedOpportunities, id];

    setSavedOpportunities(updated);

    localStorage.setItem("savedOpportunities", JSON.stringify(updated));

    updateSavedItems(updated);
  };

  const unsaveOpportunity = (id) => {
    const updated = savedOpportunities.filter((savedId) => savedId !== id);

    setSavedOpportunities(updated);

    localStorage.setItem("savedOpportunities", JSON.stringify(updated));

    updateSavedItems(updated);
  };

  const isSaved = (id) => {
    return savedOpportunities.includes(id);
  };

  return (
    <SavedContext.Provider
      value={{
        savedOpportunities,
        savedItems,
        saveOpportunity,
        unsaveOpportunity,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
