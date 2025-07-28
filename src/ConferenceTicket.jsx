import { useState } from "react";
import Background from "./Background.jsx";
import FormTicket from "./FormTicket.jsx";
import Congrats from "./Congrats.jsx";

export default function ConferenceTicket() {
  const [submitted, setSubmitted] = useState(false); // state moved here

  return (
    <main className="relative w-full md:min-h-screen min-h-screen flex justify-center items-center py-12">
      {/* Background (absolute and behind) */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Content (on top) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {submitted ? (
          <Congrats />
        ) : (
          <FormTicket onSubmitSuccess={() => setSubmitted(true)} />
        )}
      </div>
    </main>
  );
}
