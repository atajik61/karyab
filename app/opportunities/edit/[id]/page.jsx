"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getOpportunities, updateOpportunity } from "@/mock/OpportunitiesApi";
import OpportunityForm from "@/components/OpportunityForm";

export default function EditPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [tags, setTags] = useState("");
  const [apply, setApply] = useState("");
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const saved = getOpportunities();

    const found = saved.find((item) => item.id === Number(id));

    if (found) {
      setTitle(found.title);
      setOrganization(found.organization);
      setLocation(found.location);
      setCategory(found.category);
      setType(found.type);
      setDeadline(found.deadline);
      setDescription(found.description || "");
      setRequirements((found.requirements || []).join(", "));
      setTags((found.tags || []).join(", "));
      setApply(found.apply || "");
    }
  }, [id]);

  {
    /*handle submit */
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedOpportunity = {
      id: Number(id),
      title,
      organization,
      location,
      category,
      type,
      deadline,

      description,

      requirements: requirements
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      apply,
    };
    updateOpportunity(updatedOpportunity);

    router.push("/opportunities");
  };
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Edit Opportunity</h1>

        <p className="mt-2 text-gray-600">
          Edit a job, internship, scholarship, or training opportunity.
        </p>
        <OpportunityForm
          title={title}
          setTitle={setTitle}
          organization={organization}
          setOrganization={setOrganization}
          location={location}
          setLocation={setLocation}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
          deadline={deadline}
          setDeadline={setDeadline}
          description={description}
          setDescription={setDescription}
          requirements={requirements}
          setRequirements={setRequirements}
          tags={tags}
          setTags={setTags}
          apply={apply}
          setApply={setApply}
          onSubmit={handleSubmit}
          buttonText="Save Changes"
        />
      </div>
    </main>
  );
}
