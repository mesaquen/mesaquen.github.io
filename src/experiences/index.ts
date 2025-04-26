import "server-only";

const dictionaries = {
  en: () => import("./en").then((module) => module.experiences),
  "pt-BR": () => import("./pt-BR").then((module) => module.experiences),
};

type LocaleType = keyof typeof dictionaries;

export interface IExperience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements?: string[];
  skills: SKILLS[];
}

export function getExperience(locale: string) {
  return dictionaries[locale as LocaleType]();
}

export enum SKILLS {
  REACT = "React",
  REACT_NATIVE = "React Native",
  TYPESCRIPT = "Typescript",
  MAGENTO = "Magento",
  PWA_STUDIO = "PWA Studio",
  NEXT_JS = "NextJS",
  TALWIND = "Tailwind CSS",
  FIREBASE = "Firebase",
  GRAPHQL = "GraphQL",
  NEW_RELIC = "New Relic",
  GA = "Google Analytics",
  GTM = "Google Tag Manager",
  STORE_DEPLOY = "Apple Store and Google Play deployments",
  MICROSERVICES = "Microservices",
  REST = "RESTfull API",
  STYLED_COMPONENTS = "Styled Components",
  CI_CD = "CI/CD",
  NODE = "Node.js",
  REDUX = "Redux",
  JAVA = "Java",
  MOBX = "MobX",
}
