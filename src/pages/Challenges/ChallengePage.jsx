import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IoCalendarSharp } from "react-icons/io5";

const logoMap = {
  "design/AI_Challenge.png": "public/assets/logos/challenges/design/AI_Challenge.png",
  "design/Arduino_Challenge.png":
    "public/assets/logos/challenges/design/Arduino_Challenge.png",
  "design/Circuits_Challenge.png":
    "public/assets/logos/challenges/design/Circuits_Challenge.png",
  "design/Chips_Challenge.png": "public/assets/logos/challenges/design/Chips_Challenge.png",
  "design/Commnunication_Challenge.png":
    "public/assets/logos/challenges/design/Commnunication_Challenge.png",
  "design/Healthcare_Challenge.png":
    "public/assets/logos/challenges/design/Healthcare_Challenge.png",
  "design/Robotics_Challenge.png":
    "public/assets/logos/challenges/design/Robotics_Challenge.png",
};

const getChallengeColors = (title) => {
  switch (title) {
    case "Artificial Intelligence Challenge":
      return { bgColor: "#FF7719", hoverColor: "#EB4F06" };
    case "Arduino Challenge":
      return { bgColor: "#06888C", hoverColor: "#08A8AD" };
    case "Chips Challenge":
      return { bgColor: "#7469B6", hoverColor: "#504979" };
    case "Circuits Challenge":
      return { bgColor: "#4A9D70", hoverColor: "#2F7E54" };
    case "Communications Challenge":
      return { bgColor: "#D74B61", hoverColor: "#8E2736" };
    case "Healthcare Innovation Challenge":
      return { bgColor: "#EA81B4", hoverColor: "#DD539B" };
    case "Robotics Challenge":
      return { bgColor: "#5DA6BC", hoverColor: "#17687F" };
    default:
      return { bgColor: "#000", hoverColor: "#000" };
  }
};

const ChallengePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [challenges, setChallenges] = useState({});
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);

  const url =
    "https://raw.githubusercontent.com/IEEESriLanka/challengesphere.ieee.lk/refs/heads/challenges/challenges.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching challenges:", err);
        setLoading(false);
      });
  }, []);

  const challenge = challenges[location.pathname];

  useEffect(() => {
    if (!loading && !challenge) {
      navigate("/");
    }
  }, [loading, challenge, navigate]);

  if (!challenge) return null;

  const { bgColor, hoverColor } = getChallengeColors(challenge.title);
  const imageSrc = logoMap[challenge.image];
  const contact = challenge.contact;

  return (
    <div className="flex flex-col w-full h-full px-[5%] pt-20 lg:pt-28 pb-14 lg:px-[10%] cursor-default">
      {loading ? (
        <span className="flex flex-col h-[50vh] items-center justify-center text-lg md:text-xl w-full">
          <svg
            className={`animate-spin h-8 w-8 text-gray-600`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="mt-2 font-medium">Loading...</span>
        </span>
      ) : (
        <div className="flex flex-col w-full h-full">
          <p className="text-3xl md:text-5xl font-semibold mb-4 md:mb-10 text-center mt-5">
            {challenge.title}
          </p>

          <div className="hidden lg:flex lg:flex-row w-full items-center h-full">
            <div className="flex flex-col h-full w-2/3">
              {challenge.description.map((para, pIndex) => (
                <p
                  key={pIndex}
                  className={`text-lg md:text-xl mb-4 md:mb-5 w-full h-full ${
                    challenge.description.length === 1
                      ? "text-center px-10"
                      : "text-justify"
                  }`}
                >
                  {para.blocks.map((block, bIndex) =>
                    block.type === "bold" ? (
                      <span key={bIndex} className="font-bold">
                        {block.value}
                      </span>
                    ) : (
                      <span key={bIndex}>{block.value}</span>
                    )
                  )}
                </p>
              ))}
            </div>
            <div className="flex w-1/3 justify-center">
              <img
                src={imageSrc}
                alt={`${challenge.title} Logo`}
                className="md:h-96 h-52 mb-4 md:mb-5 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col lg:hidden w-full items-center h-full">
            <div className="flex w-full justify-center">
              <img
                src={imageSrc}
                alt={`${challenge.title} Logo`}
                className="md:h-96 h-52 mb-4 md:mb-5"
              />
            </div>
            <div className="flex flex-col h-full w-full">
              {challenge.description.map((para, pIndex) => (
                <p
                  key={pIndex}
                  className="text-justify text-lg md:text-xl mb-4 md:mb-5 w-full h-full gap-y-2"
                >
                  {para.blocks.map((block, bIndex) =>
                    block.type === "bold" ? (
                      <span key={bIndex} className="font-bold">
                        {block.value}
                      </span>
                    ) : (
                      <span key={bIndex}>{block.value}</span>
                    )
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center text-lg md:text-xl md:px-[15%] pt-[3%] w-full">
            {challenge.status === "opened" && (
              <div className="flex flex-col items-center gap-y-8 w-full">
                <p>
                  Registration is <b>open</b> for the {challenge.title}.
                </p>
                {challenge.deadline && (
                  <div className="flex flex-row gap-x-5 items-center">
                    <IoCalendarSharp className="text-4xl" />
                    <p>
                      Registration Deadline:{" "}
                      <span
                        className="font-semibold"
                        style={{ color: bgColor }}
                      >
                        {challenge.deadline}
                      </span>
                    </p>
                  </div>
                )}
                <div className="text-left w-full flex flex-col px-10 xl:px-0">
                  <p>For more information, please contact:</p>
                  {contact.map((details, index) => (
                    <div
                      className="xl:px-0 xl:pl-14 flex xl:flex-row flex-col px-20 pt-2"
                      key={index}
                    >
                      <p>{details.name}</p>
                      <p className="hidden xl:block xl:pl-1">
                        {details.position && " - " + details.position}
                      </p>
                      <p className="block xl:hidden">
                        {details.position && details.position}
                      </p>
                      <p className="hidden xl:block">
                        {details.email && (
                          <>
                            {" - "}
                            <a
                              href={`mailto:${details.email}`}
                              className="text-light-blue hover:text-light-blue-hover underline"
                            >
                              {details.email}
                            </a>
                          </>
                        )}
                      </p>
                      <p className="block xl:hidden pb-5">
                        {details.email && (
                          <a
                            href={`mailto:${details.email}`}
                            className="text-light-blue hover:text-light-blue-hover underline"
                          >
                            {details.email}
                          </a>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to={challenge.form_link}
                  target="_blank"
                  className="text-white font-semibold text-2xl px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: hover ? hoverColor : bgColor,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Register Now
                </Link>
              </div>
            )}
            {challenge.status === "closed" && (
              <div className="flex flex-col items-center gap-y-8">
                <p>
                  Registration is <b className="text-red">closed</b> for the{" "}
                  {challenge.title} 2025.
                </p>
              </div>
            )}
            {challenge.status === "soon" && (
              <p className="text-red font-medium">
                Stay tuned, registrations will open soon!
              </p>
            )}
          </div>

          <div className="w-full flex gap-x-2 lg:gap-x-4 mt-5 lg:mt-10 mb-10 justify-center lg:justify-end">
            <span
              className="flex px-4 py-2 border-2 rounded-full cursor-pointer transition-colors text-lg md:text-xl font-semibold"
              style={{
                backgroundColor:
                  selectedYear === 2025 ? bgColor : "transparent",
                color: selectedYear === 2025 ? "#fff" : bgColor,
                borderColor: bgColor,
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== 2025)
                  e.currentTarget.style.backgroundColor = hoverColor;
                if (selectedYear !== 2025) e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                if (selectedYear !== 2025)
                  e.currentTarget.style.backgroundColor = "transparent";
                if (selectedYear !== 2025)
                  e.currentTarget.style.color = "inherit";
              }}
              onClick={() => setSelectedYear(2025)}
            >
              2025
            </span>
            <span
              className="flex px-4 py-2 border-2 rounded-full cursor-pointer transition-colors text-lg md:text-xl font-semibold"
              style={{
                backgroundColor:
                  selectedYear === 2024 ? bgColor : "transparent",
                color: selectedYear === 2024 ? "#fff" : bgColor,
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== 2024)
                  e.currentTarget.style.backgroundColor = hoverColor;
                if (selectedYear !== 2024) e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                if (selectedYear !== 2024)
                  e.currentTarget.style.backgroundColor = "transparent";
                if (selectedYear !== 2024)
                  e.currentTarget.style.color = "inherit";
              }}
              onClick={() => setSelectedYear(2024)}
            >
              2024
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengePage;
