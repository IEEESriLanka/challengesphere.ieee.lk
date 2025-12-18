import React, { useState } from "react";
import { OrganizingCommitee } from "../../Components/OrganizingCommitee/OrganizingCommitee";
import { ChallengeLeads } from "../../Components/ChallengeLeads/ChallengeLeads";

export const OurTeam = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <div className="px-[5%] pt-20 lg:pt-24 pb-14 cursor-default">
      <OrganizingCommitee
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <ChallengeLeads selectedYear={selectedYear} />
    </div>
  );
};
