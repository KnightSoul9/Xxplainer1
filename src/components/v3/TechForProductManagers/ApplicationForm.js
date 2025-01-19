import { submitFormData } from "@/src/api";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ApplicationForm = () => {
  const { currentUser } = useAuthService();
  // console.log(currentUser, "currentUser");
  const initialName = currentUser?.displayName || "";
  const initialEmail = currentUser?.email || "";
  const router = useRouter();
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [whatsapp, setWhatsapp] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [whatsappErr, setWhatsappErr] = useState("");
  const [linkedInProfileErr, setLinkedInProfileErr] = useState("");
  const [yearsOfExperienceErr, setYearsOfExperienceErr] = useState("");
  const [learningObjectivesErr, setLearningObjectivesErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

// console.log(whatsapp, "whatsapp");

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const currentURL = origin + router.asPath;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const source = localStorage.getItem("source") || "Direct";
    setIsSubmitting(true);

    const device =
      window.innerWidth > 1024
        ? "Desktop"
        : window.innerWidth > 600
        ? "Tablet"
        : "Mobile";

    // Basic form validation
    let hasError = false;

    if (!name.trim()) {
      setNameErr("Name is required");
      hasError = true;
    } else {
      setNameErr("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailErr("Email is required");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailErr("This doesn’t seem like the right email");
      hasError = true;
    } else if (email.slice(-1) === ".") {
      setEmailErr("Email should not end with a full stop");
      hasError = true;
    } else {
      setEmailErr("");
    }

    if (!whatsapp.trim()) {
      setWhatsappErr("Whatsapp number is required");
      hasError = true;
    } else {
      setWhatsappErr("");
    }

    if (!linkedInProfile.trim()) {
      setLinkedInProfileErr("LinkedIn profile is required");
      hasError = true;
    } else {
      setLinkedInProfileErr("");
    }

    if (!yearsOfExperience.trim()) {
      setYearsOfExperienceErr("Years of experience is required");
      hasError = true;
    } else {
      setYearsOfExperienceErr("");
    }

    if (!learningObjectives.trim()) {
      setLearningObjectivesErr("Learning objectives is required");
      hasError = true;
    } else {
      setLearningObjectivesErr("");
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      email,
      whatsapp,
      linkedInProfile,
      yearsOfExperience,
      learningObjectives,
      url: currentURL,
      source,
      device,
    };
      // console.log(payload, "payload");

    try {
      await submitFormData(payload);
      // if want to  take payment  [then uncomment this] and go to submitFormData comment the toast
      router.push("/cohorts/tech-for-product-managers/payments");
      localStorage.setItem("applicantName", name);
    } catch (error) {
      // console.log(error, "err");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-5 py-8 lg:px-8 lg:py-12">
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block pb-1  text-sm  font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="name"
            value={name}
            // placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
              setNameErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {nameErr && <p className="mt-1 text-sm text-red-500">{nameErr}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block pb-1  text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            // placeholder="Your email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {emailErr && <p className="mt-1 text-sm text-red-500">{emailErr}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput country={"in"} value={whatsapp} onChange={setWhatsapp} />
          {whatsappErr && (
            <p className="mt-1 text-sm text-red-500">{whatsappErr}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="linkedInProfile"
            className="block pb-1  text-sm font-medium text-gray-700"
          >
            LinkedIn Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="linkedInProfile"
            id="linkedInProfile"
            // placeholder="Your LinkedIn Profile"
            onChange={(e) => {
              setLinkedInProfile(e.target.value);
              setLinkedInProfileErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {linkedInProfileErr && (
            <p className="mt-1 text-sm text-red-500">{linkedInProfileErr}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="yearsOfExperience"
            className="block pb-1  text-sm font-medium text-gray-700"
          >
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="yearsOfExperience"
            id="yearsOfExperience"
            // placeholder="Your Years of Experience"
            onChange={(e) => {
              setYearsOfExperience(e.target.value);
              setYearsOfExperienceErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {yearsOfExperienceErr && (
            <p className="mt-1 text-sm text-red-500">{yearsOfExperienceErr}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="learningObjectives"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            Learning Objectives <span className="text-red-500">*</span>
          </label>
          <select
            id="learningObjectives"
            name="learningObjectives"
            value={learningObjectives}
            placeholder="Choose your learning objective"
            onChange={(e) => {
              setLearningObjectives(e.target.value);
              setLearningObjectivesErr("");
            }}
            className="w-full rounded-lg border bg-white px-3 py-3 shadow-sm"
          >
            <option value="" disabled selected>
              Choose your learning objective
            </option>
            <option value="Crack tech round of PM interviews">
              Crack tech round of PM interviews
            </option>
            <option value="I am a non techie. I want to learn tech from 0 to 1">
              I am a non techie. I want to learn tech from 0 to 1
            </option>
            <option value="Upskill in my role as a PM">
              Upskill in my role as a PM
            </option>
            <option value="Learning just for curiosity and fun">
              Learning just for curiosity and fun
            </option>
          </select>
          {learningObjectivesErr && (
            <p className="mt-1 text-sm text-red-500">{learningObjectivesErr}</p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-2 py-3 font-medium text-white hover:bg-primary_bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
