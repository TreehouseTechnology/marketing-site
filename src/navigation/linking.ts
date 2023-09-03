import { LinkingOptions } from "@react-navigation/native";
import { AppParamList } from "./types";

const linking: LinkingOptions<AppParamList> = {
  prefixes: [
    "treehousetechnology://",
    "https://treehousetechnology.github.io/marketing-site",
    "https://treehousetechnology.github.io/marketing-site",
  ],
  config: {
    screens: {
      Home: "home",
      About: "about",
      Services: "services",
      Products: "products",
      Contact: "contact",

      NotFound: "*",
    },
  },
};

export default linking;
