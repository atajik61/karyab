"use client";

import { useState } from "react";
import { opportunitySchema } from "../validation/opportunitySchema";

export default function OpportunityForm({
  title,
  setTitle,
  organization,
  setOrganization,
  location,
  setLocation,
  category,
  setCategory,
  type,
  setType,
  deadline,
  setDeadline,
  description,
  setDescription,
  requirements,
  setRequirements,
  tags,
  setTags,
  apply,
  setApply,
  onSubmit,
  buttonText,
}) {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      organization,
      location,
      category,
      type,
      deadline,
      description,
      requirements,
      tags,
      apply,
    };

    const result = opportunitySchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        newErrors[field] = issue.message;
      });

      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      {/* Title */}
      <div className="mt-8">
        <label htmlFor="title" className="mb-2 block font-medium">
          Title
        </label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter opportunity title"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.title && (
          <p
            id="title-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.title}
          </p>
        )}
      </div>

      {/* Organization */}
      <div className="mt-8">
        <label htmlFor="organization" className="mb-2 block font-medium">
          Organization
        </label>

        <input
          id="organization"
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Enter organization name"
          aria-invalid={!!errors.organization}
          aria-describedby={
            errors.organization ? "organization-error" : undefined
          }
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.organization && (
          <p
            id="organization-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.organization}
          </p>
        )}
      </div>

      {/* Location */}
      <div className="mt-6">
        <label htmlFor="location" className="mb-2 block font-medium">
          Location
        </label>

        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? "location-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.location && (
          <p
            id="location-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.location}
          </p>
        )}
      </div>

      {/* Category */}
      <div className="mt-6">
        <label htmlFor="category" className="mb-2 block font-medium">
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-invalid={!!errors.category}
          aria-describedby={errors.category ? "category-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        >
          <option value="">Select category</option>
          <option value="Job">Job</option>
          <option value="Internship">Internship</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Training">Training</option>
        </select>

        {errors.category && (
          <p
            id="category-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.category}
          </p>
        )}
      </div>

      {/* Type */}
      <div className="mt-6">
        <label htmlFor="type" className="mb-2 block font-medium">
          Type
        </label>

        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-invalid={!!errors.type}
          aria-describedby={errors.type ? "type-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        >
          <option value="">Select type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>

        {errors.type && (
          <p id="type-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.type}
          </p>
        )}
      </div>

      {/* Deadline */}
      <div className="mt-6">
        <label htmlFor="deadline" className="mb-2 block font-medium">
          Deadline
        </label>

        <input
          id="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          aria-invalid={!!errors.deadline}
          aria-describedby={errors.deadline ? "deadline-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.deadline && (
          <p
            id="deadline-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.deadline}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="mt-6">
        <label htmlFor="description" className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter opportunity description"
          rows="5"
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.description && (
          <p
            id="description-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.description}
          </p>
        )}
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <label htmlFor="requirements" className="mb-2 block font-medium">
          Requirements
        </label>

        <textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Example: English, Bachelor degree, MS Office"
          rows="4"
          aria-invalid={!!errors.requirements}
          aria-describedby={
            errors.requirements ? "requirements-error" : undefined
          }
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.requirements && (
          <p
            id="requirements-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.requirements}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="mt-6">
        <label htmlFor="tags" className="mb-2 block font-medium">
          Tags
        </label>

        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Example: React, Next.js, Frontend"
          aria-invalid={!!errors.tags}
          aria-describedby={errors.tags ? "tags-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.tags && (
          <p id="tags-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.tags}
          </p>
        )}
      </div>

      {/* Application Link */}
      <div className="mt-6">
        <label htmlFor="apply" className="mb-2 block font-medium">
          Application Link
        </label>

        <input
          id="apply"
          type="url"
          value={apply}
          onChange={(e) => setApply(e.target.value)}
          placeholder="https://example.com/apply"
          aria-invalid={!!errors.apply}
          aria-describedby={errors.apply ? "apply-error" : undefined}
          className="w-full rounded-lg border px-4 py-3"
        />

        {errors.apply && (
          <p
            id="apply-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.apply}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </form>
  );
}
