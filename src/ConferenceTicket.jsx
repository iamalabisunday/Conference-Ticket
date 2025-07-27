import Background from "./Background.jsx";
import FormTicket from "./FormTicket.jsx";
import Congrats from "./Congrats.jsx";

export default function ConferenceTicket() {
  return (
    <main className="relative w-full md:h-screen min-h-screen">
      {/* Background (absolute and behind) */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Content (on top) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <FormTicket /> */}
        <Congrats />
      </div>
    </main>
  );
}
