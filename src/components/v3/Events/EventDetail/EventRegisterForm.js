// pages\events\[eventsSlug]\index.js

import useAuthService from "@/src/hooks/auth/useAuthService";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EventRegisterForm = ({ event }) => {
  const { currentUser } = useAuthService();
  const initialName = currentUser?.displayName || "";
  const initialEmail = currentUser?.email || "";
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

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

    if (!phone.trim()) {
      setPhoneErr("Phone is required");
      hasError = true;
    } else {
      setPhoneErr("");
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      email,
      phone,
      eventId: event?._id,
      eventName: event?.title,
    };
    console.log(payload, "payload");
  };

  return (
    <div className="rounded-lg border bg-gray-50 p-5 lg:p-6">
      <h2 className="text-xl font-semibold lg:text-2xl ">
        Claim your free seat now
      </h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-4 mt-6">
          {/* <label
            htmlFor="name"
            className="block pb-1  text-sm  font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label> */}
          <input
            type="text"
            name="text"
            id="name"
            value={name}
            placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
              setNameErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {nameErr && <p className="mt-1 text-sm text-red-500">{nameErr}</p>}
        </div>

        <div className="mb-4">
          {/* <label
            htmlFor="email"
            className="block pb-1  text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label> */}
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailErr("");
            }}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {emailErr && <p className="mt-1 text-sm text-red-500">{emailErr}</p>}
        </div>

        <div className="mb-4">
          {/* <label
            htmlFor="phone"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label> */}
          <PhoneInput country={"in"} value={phone} onChange={setPhone} />
          {phoneErr && <p className="mt-1 text-sm text-red-500">{phoneErr}</p>}
        </div>
        <button
          type="submit"
          className=" mt-2 w-full rounded-3xl bg-primary px-2 py-3 font-semibold text-white hover:bg-primary_bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register for Free"}
        </button>
      </form>
      <p className="mt-2 text-xs text-[#4e4e4e] md:text-sm">
        By continuing, you agree to Xplainerr{" "}
        <Link
          className="font-semibold text-indigo-500"
          href="/terms-of-service"
        >
          Terms of Service
        </Link>{" "}
        and
        <Link className="font-semibold text-indigo-500" href="/privacy-policy">
          {" "}
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default EventRegisterForm;
