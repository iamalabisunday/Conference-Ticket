import logo from "./assets/images/logo-full.svg";
import CodeCard from "./CodeCard.jsx";
import FormTicket from "./FormTicket.jsx";

export default function Congrats({ formData }) {
  const emailAddress = formData?.email || "jonatan@email.com";
  const userName = formData?.name || "Jonatan Kristof";

  return (
    <>
      <div className="w-fit h-auto mx-auto flex flex-col items-center justify-center gap-20 md:pb-0 pb-10">
        <header className="w-full h-auto pt-8  md:pt-0 flex flex-col items-center justify-center gap-8">
          <img src={logo} alt="logo" className="md:w-[20%] w-[45%] " />
          <section className="md:w-full w-[90%] flex flex-col items-center justify-center gap-4 ">
            <h1 className="md:w-[60%] text-[var(--Neutral-0)] text-center md:text-4xl text-3xl font-[700] md:leading-[3rem]">
              Congrats,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {userName}
              </span>{" "}
              Your ticket is ready.
            </h1>
            <p className="md:w-[35%] text-[var(--Neutral-300)] md:text-sm text-[1.2rem] font-[400] text-center">
              We've emailed your ticket to{" "}
              <span className="text-[var(--Orange-500)] cursor-pointer">
                {emailAddress}
              </span>{" "}
              and will send updates in the run to the event.
            </p>
          </section>
        </header>
        {/* Code Card */}
        <div className="w-full">
          <CodeCard formData={formData} />
        </div>
      </div>
    </>
  );
}
