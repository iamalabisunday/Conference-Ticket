import logo from "./assets/images/logo-full.svg";
import CardTicket from "./assets/images/pattern-ticket.svg";
import logoMark from "./assets/images/logo-mark.svg";
import profileImage from "./assets/images/image-avatar.jpg";
import githubLogo from "./assets/images/icon-github.svg";

export default function CodeCard({ formData }) {
  // Extract data from formData or use defaults
  const userName = formData?.name || "Jonatan Kristof";
  const userGithub = formData?.github || "@jonatankristof0101";
  const userAvatar = formData?.upload
    ? URL.createObjectURL(formData.upload)
    : profileImage;

  // Generate a random ticket number
  const ticketNumber = `#${Math.floor(Math.random() * 99999)
    .toString()
    .padStart(5, "0")}`;
  return (
    <section className="w-full flex items-center justify-center mx-auto">
      <div className="relative md:w-[55%] w-[90%] max-w-2xl">
        {/* Ticket Background */}
        <div className="w-full h-auto aspect-[600/280] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/pattern-ticket.svg')]">
          {/* Content overlay */}
          <div className="relative w-full h-full p-2 sm:p-2 lg:p-4 flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-center gap-3 sm:gap-3 mb-4">
              <img
                src={logoMark || "/placeholder.svg"}
                alt="Logo Mark"
                className="w-8 h-8 sm:w-8 sm:h-8 lg:w-8 lg:h-8 object-contain"
              />
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--Neutral-0)]">
                  Coding Conf
                </h1>
                <p className="text-xs sm:text-sm text-[var(--Neutral-300)] font-light">
                  Jan 31, 2025 / Austin, TX
                </p>
              </div>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <img
                src={userAvatar || "/placeholder.svg"}
                alt="Jonatan Kristof"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-lg sm:text-xl lg:text-1xl font-medium text-[var(--Neutral-0)] ">
                  {userName}
                </h2>
                <div className="flex items-center gap-1">
                  <img
                    src={githubLogo || "/placeholder.svg"}
                    alt="Github Logo"
                    className="w-4 h-4"
                  />
                  <p className="text-xs sm:text-sm font-light text-[var(--Neutral-300)]">
                    {userGithub}
                  </p>
                </div>
              </div>
            </div>

            {/* Ticket Number */}
            <div className="absolute right-2 md:right-2 sm:right-6 top-1/2 transform -translate-y-1/2 rotate-90">
              <p className="md:text-2xl sm:text-sm font-light text-[var(--Neutral-300)] tracking-wider">
                {ticketNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
