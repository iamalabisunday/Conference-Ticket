import Background from "./Background.jsx";
import FormTicket from "./FormTicket.jsx";

export default function ConferenceTicket() {
  return (
    <main className="relative w-full md:h-screen h-full">
      {/* Background (absolute and behind) */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Content (on top) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <FormTicket />
      </div>
    </main>
  );
}
