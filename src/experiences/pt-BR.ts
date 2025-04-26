import { IExperience } from ".";
import { experiences as enExperiences } from "./en";

const [Danone, Meta, Disys, FCG, WS] = enExperiences;

export const experiences: IExperience[] = [
  {
    ...Danone,
    description:
      "Como desenvolvedor frontend, meu papel era focado em mentoria, revisão de código e programação em pares com desenvolvedores juniores, garantindo que eles ganhassem autonomia e começassem a compartilhar a forma de trabalho da empresa. A maior parte do meu tempo foi alocada em um projeto de e-commerce que consistia em um aplicativo web mobile-first e um aplicativo móvel para Android e iOS.",
    achievements: [
      "Migração de plataforma PWA Studio para Next.js.",
      "Melhoria de performance atingindo 2.5x melhor pontuação no Lighthouse.",
      "Implementação de melhorias de SEO atingindo ótimo score no Lighthouse.",
      "Construção de aplicativo React Native e lançamento em App Store e Play Store.",
    ],
  },

  {
    ...Meta,
    description:
      "Desenvolvimento de SPA de um aplicativo web de comércio que permite às pessoas venderem em diferentes marketplaces, sob a marca da empresa, gerenciando tudo a partir de um único lugar. Minha principal responsabilidade era implementar alterações em componentes visando melhorias em CRO.",
  },

  {
    ...Disys,
    description:
      "SPA de micro frontend para O Boticário. Construído para que as lojas franqueadas optassem por métodos de pagamento personalizados e benefícios para uma lista de campanhas de produtos. Um BFF Node integrava a aplicação com dados do SAP.",
    achievements: [
      "80%+ de cobertura de testes automatizados.",
      "Todos os fluxos cobertos por teste E2E utilizando Playwright.",
    ],
  },

  {
    ...FCG,
    description:
      "CRM baseado em nuvem com foco no mercado de carros usados. Aplicativo administrativo que lidava com os recursos de personalização e configuração de contas. SPA React focado em multi-temas, já que tinha muitas personalizações por país, por exemplo: cores, componentes que seriam exibidos ou não, conteúdo.",
  },

  {
    ...WS,
    description:
      "SPA React e aplicativo móvel para gestão agrícola. Posteriormente, reformulado para atender pequenas e médias empresas. Desenvolvimento dos componentes do Design System da empresa. Ocasionalmente, ajudei a equipe de backend com alguns ajustes e desenvolvimento de API.",
    achievements: [
      "Criação de mecanismo de recuperação de dados em formulários automático para app móvel em caso de falhas.",
      "Desenvolvimento de biblioteca de componentes utilizados pelos times nos módulos da aplicação.",
    ],
  },
];
