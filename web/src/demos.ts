const README_URL =
  process.env.NEXT_PUBLIC_README_URL ||
  "https://github.com/nownabe/cloud-demos";

type Demo = {
  path: string;
  products: string[];
  icon: string;
  link?: string;
};

const demos: { [key: string]: Demo } = {
  readme: {
    path: "",
    products: [],
    icon: "/images/readme.jpg",
    link: README_URL,
  },
  contactCenterAnalysis: {
    path: "/contactCenterAnalysis",
    products: ["speech-to-text", "natural-language-api"],
    icon: "/images/contactCenterAnalysis.jpg",
  },
  serverlessWebAppWithDevOps: {
    path: "/serverlessWebAppWithDevOps",
    products: ["app-engine", "build"],
    icon: "/images/serverlessWebAppWithDevOps.jpg",
  },
  simultaneousInterpreter: {
    path: "/simultaneousInterpreter",
    products: ["speech-to-text", "translation-api"],
    icon: "/images/simultaneousInterpreter.jpg",
  },
  wikipediaPageview: {
    path: "/wikipediaPageview",
    products: ["bigquery"],
    icon: "/wikipediaPageview/icon.jpg",
  },
};

const demoIds = Object.keys(demos);

export { demos, demoIds };
