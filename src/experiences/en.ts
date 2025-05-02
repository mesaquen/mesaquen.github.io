import { IExperience } from ".";
import { SKILLS } from "./skills";

export const experiences: IExperience[] = [
  {
    title: "Developer",
    company: "Danone",
    startDate: "01-22",
    endDate: "02-25",
    description:
      "As a frontend developer, my role was focused on mentoring, code review, and pair programming with junior developers, ensuring they gained autonomy and started sharing the company's way of working. Most of my time was allocated to an e-commerce project that consisted of a mobile-first web application and a mobile application for Android and iOS.",
    skills: [
      SKILLS.NEXT_JS,
      SKILLS.REACT,
      SKILLS.REACT_NATIVE,
      SKILLS.FIREBASE,
      SKILLS.PUSH_NOTIFICATION,
      SKILLS.GRAPHQL,
      SKILLS.GA,
      SKILLS.GTM,
      SKILLS.MAGENTO,
      SKILLS.NEW_RELIC,
      SKILLS.PWA_STUDIO,
      SKILLS.APP_STORE_DEPLOY,
      SKILLS.PLAY_STORE_DEPLOY,
      SKILLS.TALWIND,
      SKILLS.TYPESCRIPT,
      SKILLS.CI_CD,
    ],
    achievements: [
      "Platform migration from PWA Studio to Next.js.",
      "Performance improvement achieving a 2.5x better Lighthouse score.",
      "Implementation of SEO improvements achieving an excellent score in Lighthouse.",
      "Development of a React Native application and launch in the App Store and Play Store.",
    ],
  },

  {
    title: "Frontend developer",
    company: "Meta serviços de informática LTDA",
    startDate: "05-21",
    endDate: "10-21",
    skills: [
      SKILLS.REACT,
      SKILLS.STYLED_COMPONENTS,
      SKILLS.MICROSERVICES,
      SKILLS.REST,
    ],
    description:
      "Development of an SPA for a e-commerce web application that allows people to sell on different marketplaces, under the company's brand, managing everything from a single place. My main responsibility was to implement changes in components aiming at CRO improvements.",
  },

  {
    title: "Frontend developer",
    company: "DISYS do Brasil",
    startDate: "01-21",
    endDate: "05-21",
    skills: [
      SKILLS.REACT,
      SKILLS.STYLED_COMPONENTS,
      SKILLS.NODE,
      SKILLS.TYPESCRIPT,
      SKILLS.CI_CD,
    ],
    description:
      "Micro frontend SPA for O Boticário. Built so that franchised stores could opt-in personalized payment methods and benefits for a list of product campaigns. A BFF Node.js integrated the application with SAP data.",
    achievements: [
      "80%+ automated test coverage.",
      "All flows covered by E2E testing using Playwright.",
    ],
  },

  {
    title: "React developer",
    company: "Frontier Car Group GmbH",
    startDate: "03-20",
    endDate: "08-20",
    description:
      "Cloud-based CRM focused on the used car market. Administrative application that handled account customization and configuration features. React SPA focused on multi-themes, as it had many customizations per country, for example: colors, components that would be displayed or not, content.",
    skills: [SKILLS.REACT, SKILLS.TALWIND, SKILLS.GRAPHQL, SKILLS.REDUX],
  },

  {
    title: "Developer",
    company: "Wealth Systems",
    startDate: "06-17",
    endDate: "03-20",
    description:
      "React SPA and mobile application for agricultural management. Later, reformulated to serve small and medium-sized companies. Development of the company's Design System components. Occasionally, I helped the backend team with some adjustments and API development.",
    skills: [
      SKILLS.REACT,
      SKILLS.REACT_NATIVE,
      SKILLS.REDUX,
      SKILLS.MOBX,
      SKILLS.MICROSERVICES,
      SKILLS.REST,
      SKILLS.JAVA,
      SKILLS.CAMERA,
      SKILLS.NATIVE_MODULES,
      SKILLS.GPS_TRACKING
    ],

    achievements: [
      "Creation of an automatic form data recovery mechanism for the mobile app in case of failures.",
      "Development of a component library used by teams in the application modules.",
    ],
  },
];
