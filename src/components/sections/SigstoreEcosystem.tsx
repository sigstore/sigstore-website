import { getJsonContent } from "@/lib/content";
import { SigstoreEcosystemClient } from "./SigstoreEcosystemClient";

interface GroupData {
  groupDiagram: string;
  groupName: string;
  textOverview: string;
}

interface GroupsData {
  group: GroupData[];
}

export function SigstoreEcosystem() {
  const data = getJsonContent<GroupsData>("groups", "groups");

  return <SigstoreEcosystemClient groups={data.group} />;
}
