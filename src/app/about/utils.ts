import path from "path";
import { TeamMetadataSchema } from "@/utils/schema";
import { getMDXData } from "@/utils/mdx";

export function getTeam() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "about", "team"),
    TeamMetadataSchema
  );
}
