import TeamCard from "../../Components/TeamCard/TeamCard";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export const OrganizingCommitee = ({ selectedYear, setSelectedYear }) => {
  const [Leads, setChairs] = useState([]);
  const [VC, setViceChairs] = useState([]);
  const [Coordinators, setCoordinators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/json/oc-data/organizing-committee/ocByYear.json")
      .then((res) => res.json())
      .then((data) => {
        const oc = data[selectedYear];
        setChairs(oc.chairs);
        setViceChairs(oc.viceChairs);
        setCoordinators(oc.coordinators);
      });

    setLoading(false);
  }, [selectedYear]);

  const [leadHoveredIndex, setLeadHoveredIndex] = useState();
  const [vcHoveredIndex, setVcHoveredIndex] = useState();
  const [coordinatorHoveredIndex, setCoordinatorHoveredIndex] = useState();

  return (
    <div className="flex flex-col w-full h-fit px-[5%] lg:px-[10%] py-[10%] sm:py-[2%] cursor-default">
      <p className="text-sky-blue font-bold text-[250%] lg:text-[350%] text-center">
        Challenge Sphere
      </p>
      <p className="text-text-black font-bold text-[150%] lg:text-[250%] text-center pb-[2%]">
        Organizing Committee {selectedYear}
      </p>
      <div className="w-full flex gap-x-2 lg:gap-x-4 justify-center lg:justify-end">
        <span
          className={`flex px-4 py-2 border-2 rounded-full cursor-pointer transition-colors text-lg md:text-xl font-semibold ${
            selectedYear === 2025
              ? "bg-sky-blue text-white border-sky-blue"
              : "hover:bg-sky-blue hover:text-white text-sky-blue border-sky-blue"
          }`}
          onClick={() => setSelectedYear(2025)}
        >
          2025
        </span>
        <span
          className={`flex px-4 py-2 border-2 rounded-full cursor-pointer transition-colors text-lg md:text-xl font-semibold ${
            selectedYear === 2024
              ? "bg-sky-blue text-white border-sky-blue"
              : "hover:bg-sky-blue hover:text-white text-sky-blue border-sky-blue"
          }`}
          onClick={() => setSelectedYear(2024)}
        >
          2024
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full h-[80vh]">
          <InfinitySpin width="200" color="#006692" />
        </div>
      ) : (
        <>
          <h2 className="md:hidden text-center font-bold text-[175%]">
            Chairs
          </h2>{" "}
          <div className="flex flex-wrap w-full gap-y-5 md:gap-x-10 justify-center">
            {Leads.map((lead, index) => (
              <div
                className="flex flex-row w-full md:w-1/4 tb:w-1/2"
                onMouseEnter={() => setLeadHoveredIndex(index)}
                onMouseLeave={() => setLeadHoveredIndex(null)}
              >
                <TeamCard
                  key={index}
                  img={lead.image}
                  name={lead.name}
                  position={lead.position}
                  index={index}
                  hoveredIndex={leadHoveredIndex}
                  in_link={lead.in_link}
                />
              </div>
            ))}
          </div>
          <h2 className="md:hidden text-center font-bold text-[175%] mt-10">
            Vice Chairs
          </h2>
          <div className="flex flex-wrap w-full gap-y-10 justify-center md:mt-14">
            {VC.map((lead, index) => (
              <div
                className="flex w-full tb:w-1/2 md:w-1/4"
                onMouseEnter={() => setVcHoveredIndex(index)}
                onMouseLeave={() => setVcHoveredIndex(null)}
              >
                <TeamCard
                  key={index}
                  img={lead.image}
                  name={lead.name}
                  position={lead.position}
                  index={index}
                  hoveredIndex={vcHoveredIndex}
                  in_link={lead.in_link}
                />
              </div>
            ))}
          </div>
          <h2 className="text-center font-bold text-[175%] md:text-[200%] mt-16">
            Coordinators
          </h2>
          <div className="flex flex-wrap w-full gap-y-10 justify-center mt-5">
            {Coordinators.map((coordinator, index) => (
              <div
                className="flex w-full tb:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                onMouseEnter={() => setCoordinatorHoveredIndex(index)}
                onMouseLeave={() => setCoordinatorHoveredIndex(null)}
              >
                <TeamCard
                  key={index}
                  index={index}
                  img={coordinator.image}
                  name={coordinator.name}
                  hoveredIndex={coordinatorHoveredIndex}
                  in_link={coordinator.in_link}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
