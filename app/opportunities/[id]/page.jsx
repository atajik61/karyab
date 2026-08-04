import OpportunityDetails from "./OpportunityDetails";

export default async function OpportunitiesDetailsPage({ params }) {
  const { id } = await params;

  return <OpportunityDetails id={id} />;
}
