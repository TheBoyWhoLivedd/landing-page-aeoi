"use client";

import { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
// import RegistrationForm from "../components/RegistrationForm";
import { FormContext } from "../context/FormContext";
import RegistrationForm from "@/components/registration-form";

export default function Hero() {
  const formRef = useRef<HTMLDivElement>(null);
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("FormContext.Provider is missing.");
  }

  const { showForm, setShowForm } = formContext;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between px-4 py-10">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex grow flex-col items-center text-center"
      >
        <h1 className=" text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text px-4 py-6 text-4xl font-semibold leading-tight tracking-tighter text-transparent dark:from-white dark:to-white/40">
          <span className="block sm:hidden">
            Enhancing Global Tax Transparency
          </span>
          <span className="hidden sm:block">
            Enhancing Global Tax Transparency Through Automatic Exchange of
            Information
          </span>
        </h1>

        <div
          ref={formRef}
          className="w-full max-w-screen-lg overflow-hidden"
          style={{
            clipPath: showForm ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            transition: "clip-path 1s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        >
          <RegistrationForm onSubmitSuccess={handleFormSubmit} />
        </div>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 border-l-4 border-green-500 bg-green-100 p-4 text-green-700"
            role="alert"
          >
            <p className="font-bold">Registration Successful!</p>
            <p>Please check your company email for further details.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
