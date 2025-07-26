import logo from "./assets/images/logo-full.svg";
import iconInfo from "./assets/images/icon-info.svg";
import iconUpload from "./assets/images/icon-upload.svg";

export default function FormTicket() {
  return (
    <>
      <div className="w-fit h-auto flex flex-col items-center justify-center gap-8 md:pb-0 pb-10">
        <header className="w-full h-auto pt-8  md:pt-0 flex flex-col items-center justify-center gap-8">
          <img src={logo} alt="logo" className="md:w-[20%] w-[45%] " />
          <section className="md:w-full w-[90%] flex flex-col items-center justify-center gap-4 ">
            <h1 className="md:w-[70%] text-[var(--Neutral-0)] text-center md:text-4xl text-3xl font-[700] md:leading-[3rem]">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-[var(--Neutral-300)] md:text-sm text-[1.2rem] font-[400] text-center">
              Secure your spot at next year's biggest coding conference.
            </p>
          </section>
        </header>
        <main className="md:w-full w-[90%] h-auto text-[var(--Neutral-0)] flex flex-col items-center justify-start gap-4">
          <form
            action="submit"
            className="md:w-[38%] w-[90%] flex flex-col items-center justify-center gap-4 "
          >
            {/* Darg and drop Upload  section*/}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="upload"
                className="cursor-pointer text-sm font-medium"
              >
                Upload Avatar
              </label>

              {/* Upload box with custom placeholder */}
              <div className="w-full border border-dashed border-[var(--Neutral-300)] rounded-[0.5rem] py-4 px-2 flex flex-col justify-center items-center gap-2 cursor-pointer hover:border-gray-600 transition-all relative bg-[var(--Neutral-700)]">
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <img
                  src={iconUpload}
                  alt="Upload Icon"
                  className="w-12 h-12 bg-[var(--Neutral-500)] p-2 rounded-xl"
                />
                <p className="md:text-[0.75rem] text-[0.95rem] text-[var(--Neutral-300)] font-[400]">
                  Drag and drop or click to upload
                </p>
              </div>

              {/* Info message */}
              <div className="text-xs font-[400] flex items-center gap-1 text-gray-600">
                <img src={iconInfo} alt="Info Icon" className="w-[0.65rem]" />
                <p className="text-[0.60rem] text-[var(--Neutral-300)]">
                  Upload your photo (JPG or PNG, max size: 500KB).
                </p>
              </div>
            </div>

            {/* Full Name Section */}
            <div className="w-full flex flex-col gap-2  ">
              <label htmlFor="name" className="cursor-pointer">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full focus:outline-none border-1 rounded-[0.5rem] py-2 px-2 focus:border-[var(--Neutral-700)] bg-[var(--Neutral-700)] border-[var(--Neutral-300)]"
              />
            </div>
            {/* Email Address Section */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="cursor-pointer">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="w-full focus:outline-none border-1 rounded-[0.5rem] py-2 px-2 focus:border-[var(--Neutral-700)] placeholder:text-sm bg-[var(--Neutral-700)] placeholder:text-[var(--Neutral-300)] border-[var(--Neutral-300)]"
              />
            </div>
            {/* GiHub Username Section */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="github" className="cursor-pointer">
                GitHub Username
              </label>
              <input
                type="text"
                name="github"
                id="github"
                placeholder="@yourusername"
                className="w-full focus:outline-none border-1 rounded-[0.5rem] py-2 px-2 focus:border-[var(--Neutral-700)] placeholder:text-sm bg-[var(--Neutral-700)] placeholder:text-[var(--Neutral-300)] border-[var(--Neutral-300)]"
              />
            </div>
            <button
              value="submit"
              className="w-full mt-4 rounded-[0.5rem] h-auto p-3 cursor-pointer bg-[var(--Orange-500)] text-[var(--Neutral-900)] whitespace-nowrap font-[600]"
            >
              Generate My Ticket
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
