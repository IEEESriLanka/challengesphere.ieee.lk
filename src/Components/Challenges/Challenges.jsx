import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Challenges = () => {
  const navigate = useNavigate();
  const [challengeList, setChallengeList] = useState([]);
  const [designChallenges, setDesignChallenges] = useState([]);
  const [codingChallenges, setCodingChallenges] = useState([]);

  useEffect(() => {
    fetch("/json/challenges/challenges.json")
      .then((res) => res.json())
      .then((data) => {
        setChallengeList(data);
        setCodingChallenges(data.codingChallenges);
        setDesignChallenges(data.designChallenges);
      });
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
  return (
    <section id="challenges">
      <div className="flex flex-col w-full h-fit bg-background-white-1 md:px-[20%] py-[10%] sm:py-[2%] cursor-default">
        <p className="text-text-black font-bold text-[250%] md:text-[350%] text-center">
          Challenges
        </p>

        <span className="flex lg:px-52 text-center italic text-sm lg:text-lg justify-center">
          Challenge Sphere brings together multiple national-level competitions
          designed to inspire creativity, innovation, and technical excellence
          among students and professionals to global level.
        </span>

        <div className="md:hidden flex flex-wrap justify-center md:justify-between w-full mt-10">
          {designChallenges.map((challenge, index) => (
            <div
              className="flex justify-center items-center w-1/4 p-2"
              key={index}
              onClick={() => {
                navigate(challenge.navigate);
              }}
            >
              <img
                src={challenge.image}
                className="w-[55%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <p className="text-text-black font-bold text-[150%] md:text-[250%] text-start mt-[5%]">
          Design Challenges
        </p>

        <span className="flex text-start italic text-sm lg:text-lg justify-start">
          Hands-on challenges focused on hardware, electronics, AI, robotics,
          and healthcare innovation.
        </span>

        <div className="hidden md:flex flex-col w-full">
          {chunkArray(designChallenges, 3).map((group, groupIndex) => (
            <div key={groupIndex} className="w-full">
              <div className="flex justify-center w-full">
                {group.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex justify-center w-1/3 p-2 mt-[4%]"
                    onClick={() => navigate(challenge.navigate)}
                  >
                    <img
                      src={challenge.image}
                      className="w-[50%] md:w-[40%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center w-full">
                {group.map((challenge, index) => (
                  <div key={index} className="w-1/3 p-2">
                    <p className="text-center">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full h-fit bg-background-white-2 md:px-[20%] cursor-default py-[5%]">
        <p className="text-text-black font-bold text-[150%] md:text-[250%] text-start">
          Coding Challenges
        </p>

        <span className="flex text-start italic text-sm lg:text-lg justify-start">
          Competitive programming contests that test problem-solving skills,
          algorithms, and coding efficiency.
        </span>

        <div className="hidden md:flex flex-col w-full">
          {chunkArray(codingChallenges, 3).map((group, groupIndex) => (
            <div key={groupIndex} className="w-full mt-[4%]">
              <div className="flex justify-center w-full">
                {group.map((challenge, index) => (
                  <a
                    key={index}
                    href={challenge.navigate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center w-1/3 p-2"
                  >
                    <img
                      src={challenge.image}
                      className="w-[70%] md:w-[40%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                  </a>
                ))}
              </div>

              <div className="flex justify-center w-full">
                {group.map((challenge, index) => (
                  <div key={index} className="w-1/3 p-2">
                    <p className="text-center">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
