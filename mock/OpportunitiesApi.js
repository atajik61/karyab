export function getOpportunities() {
  const saved = localStorage.getItem("opportunities");

  if (!saved) {
    return [];
  }

  return JSON.parse(saved);
}

export function addOpportunity(newOpportunity) {
  const opportunities = getOpportunities();

  const updatedOpportunities = [...opportunities, newOpportunity];

  localStorage.setItem("opportunities", JSON.stringify(updatedOpportunities));

  return newOpportunity;
}

export function updateOpportunity(updatedOpportunity) {
  const opportunities = getOpportunities();

  const updatedOpportunities = opportunities.map((opportunity) =>
    opportunity.id === updatedOpportunity.id ? updatedOpportunity : opportunity
  );

  localStorage.setItem("opportunities", JSON.stringify(updatedOpportunities));

  return updatedOpportunity;
}

export function deleteOpportunity(id) {
  const opportunities = getOpportunities();

  const updatedOpportunities = opportunities.filter(
    (opportunity) => opportunity.id !== id
  );

  localStorage.setItem("opportunities", JSON.stringify(updatedOpportunities));
}

export function initializeOpportunities(defaultOpportunities) {
  const saved = getOpportunities();

  if (saved.length === 0) {
    localStorage.setItem("opportunities", JSON.stringify(defaultOpportunities));

    return defaultOpportunities;
  }

  return saved;
}
