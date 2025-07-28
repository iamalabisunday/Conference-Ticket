"use client";

import { useState } from "react";
import logo from "./assets/images/logo-full.svg";
import iconInfo from "./assets/images/icon-info.svg";
import iconUpload from "./assets/images/icon-upload.svg";

export default function FormTicket({ onSubmitSuccess }) {
  // State Variables
  const [upload, setUpload] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  // Error States
  const [errorUpload, setErrorUpload] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorGithub, setErrorGithub] = useState("");

  // UPload Avatar Section
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setErrorUpload("No file selected");
      return;
    }

    if (file.size > 500 * 1024) {
      setErrorUpload("File too large. Please upload a photo under 500KB");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      setErrorUpload("Invalid File Type (must be JPEG or PNG)");
      return;
    }

    setUpload(file);
    setErrorUpload("");
  };

  // Handle Name Section
  const handleName = (e) => {
    const fullName = e.target.value;
    setName(fullName);
    setErrorName(fullName.trim() ? "" : "Name is required");
  };

  // Handle Email Section
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setErrorEmail("Email is required");
    } else if (!emailRegex.test(value)) {
    } else {
      setErrorEmail("");
    }
  };

  // Handle GitHub Section
  const handleGithub = (e) => {
    const value = e.target.value;
    const githubRegex = /^@/;
    setGithub(value);

    if (!value.trim()) {
      setErrorGithub("GitHub username is required");
    } else if (!githubRegex.test(value)) {
      setErrorGithub("Please, GitHub username must start with '@'");
    } else {
      setErrorGithub("");
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Validate name
    if (!name.trim()) {
      setErrorName("Name is required");
      hasError = true;
    } else {
      setErrorName("");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrorEmail("Email is required");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setErrorEmail("Invalid Email Address");
      hasError = true;
    } else {
      setErrorEmail("");
    }

    // Validate GitHub
    const githubRegex = /^@/;
    if (!github.trim()) {
      setErrorGithub("GitHub is required");
      hasError = true;
    } else if (!githubRegex.test(github)) {
      setErrorGithub("Please, GitHub username must start with '@'");
      hasError = true;
    } else {
      setErrorGithub("");
    }

    // Validate upload
    if (!upload) {
      setErrorUpload("Avatar is required");
      hasError = true;
    } else {
      setErrorUpload("");
    }

    if (hasError) return;

    // Pass form data to parent component
    const formData = {
      name,
      email,
      github,
      upload,
    };

    // Reset form
    setUpload("");
    setName("");
    setEmail("");
    setGithub("");
    setErrorUpload("");
    setErrorName("");
    setErrorEmail("");
    setErrorGithub("");

    if (onSubmitSuccess) onSubmitSuccess(formData);
  };

  return (
    <div className="w-fit h-full flex flex-col items-center justify-center gap-8 md:pb-0 pb-10">
      <header className="w-full h-auto pt-8 md:pt-0 flex flex-col items-center gap-8">
        <img src={logo} alt="logo" className="md:w-[20%] w-[45%]" />
        <section className="md:w-full w-[90%] flex flex-col items-center gap-2">
          <h1 className="md:w-[70%] text-[var(--Neutral-0)] text-center md:text-4xl text-3xl font-bold md:leading-[3rem]">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-[var(--Neutral-300)] md:text-sm text-[1.2rem] text-center">
            Secure your spot at next year's biggest coding conference.
          </p>
        </section>
      </header>

      <main className="md:w-full w-[90%] text-[var(--Neutral-0)] flex flex-col items-center gap-2">
        <form
          onSubmit={handleSubmit}
          className="md:w-[38%] w-[90%] flex flex-col items-center gap-3"
        >
          {/* Upload Section */}
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="upload"
              className="text-sm font-medium cursor-pointer"
            >
              Upload Avatar
            </label>

            <div className="w-full border border-dashed border-[var(--Neutral-300)] rounded-[0.5rem] py-4 px-2 flex flex-col justify-center items-center gap-2 cursor-pointer hover:border-gray-600 bg-[var(--Neutral-700)] relative">
              <input
                type="file"
                name="upload"
                id="upload"
                onChange={handleUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <img
                src={iconUpload}
                alt="Upload Icon"
                className="w-10 h-10 bg-[var(--Neutral-500)] p-2 rounded-xl"
              />
              <p className="text-[0.95rem] md:text-[0.75rem] text-[var(--Neutral-300)]">
                Drag and drop or click to upload
              </p>
            </div>

            {/* Upload Info + Error */}
            {errorUpload ? (
              <div className="text-xs flex items-center gap-1">
                <img
                  src={iconInfo}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(48%) sepia(99%) saturate(749%) hue-rotate(-13deg) brightness(104%) contrast(101%)",
                  }}
                />
                <p className="text-[0.60rem] text-[var(--Orange-500)]">
                  {errorUpload}
                </p>
              </div>
            ) : upload ? (
              <div className="text-xs flex items-center gap-1">
                <img
                  src={iconInfo}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(56%) sepia(94%) saturate(469%) hue-rotate(86deg) brightness(97%) contrast(92%)",
                  }}
                />
                <p className="text-[0.60rem] text-green-500">
                  Upload successful!
                </p>
              </div>
            ) : (
              <div className="text-xs flex items-center gap-1">
                <img
                  src={iconInfo}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(81%) sepia(13%) saturate(464%) hue-rotate(227deg) brightness(92%) contrast(89%)",
                  }}
                />
                <p className="text-[0.60rem] text-[var(--Neutral-300)]">
                  Upload your photo (JPG or PNG, max size: 500KB).
                </p>
              </div>
            )}
          </div>

          {/* Full Name Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={handleName}
              className={`w-full focus:outline-none border-2 rounded-[0.5rem] py-2 px-2 bg-[var(--Neutral-700)] ${
                errorName
                  ? "border-[var(--Orange-500)]"
                  : "border-[var(--Neutral-300)] focus:border-[var(--Neutral-700)]"
              }`}
            />
            {errorName && (
              <div className="text-xs flex items-center gap-1 text-[var(--Orange-500)]">
                <img
                  src={iconInfo}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(48%) sepia(99%) saturate(749%) hue-rotate(-13deg) brightness(104%) contrast(101%)",
                  }}
                />
                <p className="text-[0.60rem] text-[var(--Orange-500)]">
                  {errorName}
                </p>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={handleEmail}
              placeholder="example@mail.com"
              className={`w-full focus:outline-none border-2 rounded-[0.5rem] py-2 px-2 bg-[var(--Neutral-700)] placeholder:text-sm placeholder:text-[var(--Neutral-300)] ${
                errorEmail
                  ? "border-[var(--Orange-500)]"
                  : "border-[var(--Neutral-300)] focus:border-[var(--Neutral-700)]"
              }`}
            />
            {errorEmail && (
              <div className="text-xs flex items-center gap-1 text-[var(--Orange-500)]">
                <img
                  src={iconInfo}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(48%) sepia(99%) saturate(749%) hue-rotate(-13deg) brightness(104%) contrast(101%)",
                  }}
                />
                <p className="text-[0.60rem] text-[var(--Orange-500)]">
                  {errorEmail}
                </p>
              </div>
            )}
          </div>

          {/* GitHub Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="github" className="cursor-pointer">
              GitHub Username
            </label>
            <input
              type="text"
              value={github}
              name="github"
              id="github"
              onChange={handleGithub}
              placeholder="@yourusername"
              className={`w-full focus:outline-none border-2 rounded-[0.5rem] py-2 px-2 bg-[var(--Neutral-700)] placeholder:text-sm placeholder:text-[var(--Neutral-300)] ${
                errorGithub
                  ? "border-[var(--Orange-500)]"
                  : "border-[var(--Neutral-300)] focus:border-[var(--Neutral-700)]"
              }`}
            />
            {errorGithub && (
              <div className="text-xs flex items-center gap-1 text-[var(--Orange-500)]">
                <img
                  src={iconInfo || "/placeholder.svg"}
                  alt="Info Icon"
                  className="w-[0.65rem]"
                  style={{
                    filter:
                      "invert(48%) sepia(99%) saturate(749%) hue-rotate(-13deg) brightness(104%) contrast(101%)",
                  }}
                />
                <p className="text-[0.60rem] text-[var(--Orange-500)]">
                  {errorGithub}
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 rounded-[0.5rem] p-3 cursor-pointer bg-[var(--Orange-500)] text-[var(--Neutral-900)] font-[600]"
          >
            Generate My Ticket
          </button>
        </form>
      </main>
    </div>
  );
}
