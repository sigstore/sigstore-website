"use client";

import { useState } from "react";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface GroupData {
  groupDiagram: string;
  groupName: string;
  textOverview: string;
}

interface SigstoreEcosystemClientProps {
  groups: GroupData[];
}

export function SigstoreEcosystemClient({
  groups,
}: SigstoreEcosystemClientProps) {
  const [activeGroup, setActiveGroup] = useState("Overview");

  const groupTabs = groups.map((g) => g.groupName);
  const activeGroupData = groups.find((g) => g.groupName === activeGroup);

  return (
    <section
      className="py-64 md:py-128 bg-white"
      data-header-text="text-gray-dark"
    >
      <div className="text-gray-dark container inner text-center">
        <h3 className="text-36 pb-44">The Sigstore ecosystem</h3>
        <div className="flex justify-start md:justify-center items-start mb-64 overflow-x-scroll md:overflow-x-visible relative">
          {groupTabs.map((group, index) => (
            <button
              key={index}
              className={`border-2 hover:bg-pastel-blue p-14 text-12 h leading-15 rounded-full mx-12 hover:border-pastel-blue duration-150 whitespace-nowrap ${
                group === activeGroup
                  ? "bg-pastel-blue border-pastel-blue"
                  : "bg-white border-black"
              }`}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
        {activeGroupData && (
          <div className="w-full">
            <div className="w-full md:w-2/3 text-left markdown mx-auto">
              <MarkdownRenderer content={activeGroupData.textOverview} />
            </div>
            <div className="w-full mx-auto my-32">
              <img
                src={activeGroupData.groupDiagram}
                alt={`${activeGroupData.groupName} architecture diagram`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
