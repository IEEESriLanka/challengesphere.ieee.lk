import React, { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IoCalendarSharp } from "react-icons/io5";

// Import logos
import AIChallengeLogo from "../../assets/logos/challenges/AI_Challenge.png";
import ArduinoChallengeLogo from "../../assets/logos/challenges/Arduino_Challenge.png";
import CircuitsChallengeLogo from "../../assets/logos/challenges/Circuits_Challenge.png";
import ChipsChallengeLogo from "../../assets/logos/challenges/Chips_Challenge.png";
import CommunicationsChallengeLogo from "../../assets/logos/challenges/Commnunication_Challenge.png";
import HealthcareChallengeLogo from "../../assets/logos/challenges/Healthcare_Challenge.png";
import RoboticsChallengeLogo from "../../assets/logos/challenges/Robotics_Challenge.png";

const logoMap = {
  "AI_Challenge.png": AIChallengeLogo,
  "Arduino_Challenge.png": ArduinoChallengeLogo,
  "Circuits_Challenge.png": CircuitsChallengeLogo,
  "Chips_Challenge.png": ChipsChallengeLogo,
  "Commnunication_Challenge.png": CommunicationsChallengeLogo,
  "Healthcare_Challenge.png": HealthcareChallengeLogo,
  "Robotics_Challenge.png": RoboticsChallengeLogo,
};

const getChallengeColors = (title) => {
  switch (title) {
    case "Artificial Intelligence Challenge":
      return { bgColor: "#FF7719", hoverColor: "#EB4F06" };
    case "Arduino Challenge":
      return { bgColor: "#07989D", hoverColor: "#108185" };
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

  if (loading || !challenge) return null;

  const { bgColor, hoverColor } = getChallengeColors(challenge.title);
  const imageSrc = logoMap[challenge.image];
  const contact = challenge.contact;

  return (
    <div className="flex flex-col w-full h-full px-[5%] pt-20 lg:pt-28 pb-14 lg:px-[10%] cursor-default">
      <button
        className="flex items-center font-semibold text-lg md:text-xl"
        onClick={() => navigate("/#challenges")}
      >
        <GoArrowLeft className="text-base md:text-2xl mr-2" />
        Back to home page
      </button>
      <div className="flex flex-col w-full items-center h-full">
        <p className="text-3xl md:text-5xl font-semibold mb-4 md:mb-10 text-center mt-5">
          {challenge.title}
        </p>
        <img
          src={imageSrc}
          alt={`${challenge.title} Logo`}
          className="w-auto md:h-60 h-52 mb-4 md:mb-5"
        />
        <p className="text-center text-lg md:text-xl md:px-[15%] mb-4 md:mb-5">
          {challenge.description}
        </p>
        <div className="text-center text-lg md:text-xl md:px-[15%] pt-[1%] w-full">
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
                    <span className="font-semibold" style={{ color: bgColor }}>
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
                {challenge.title}.
              </p>
              <Link
                className="text-white font-semibold text-2xl px-4 py-2 rounded-xl opacity-60"
                style={{ backgroundColor: bgColor }}
                disabled
                title="Registration is closed"
              >
                Register Now
              </Link>
            </div>
          )}
          {challenge.status === "soon" && (
            <p className="text-red font-medium">
              Stay tuned, registrations will open soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
