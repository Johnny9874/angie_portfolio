export type NavigationItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  details: string[];
};

export type ProjectItem = {
  name: string;
  location: string;
  type: string;
  summary: string;
  palette: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

// Central brand copy and configuration live here so pages stay small and DRY.
export const site = {
  name: "Angie Atelier",
  role: "Designer d'intérieur",
  description:
    "Studio d'intérieur éditorial et intemporel pour des espaces résidentiels élégants, fonctionnels et durables.",
};

// Main navigation used by the header and footer.
export const navigation: NavigationItem[] = [
  { label: "Accueil", href: "/accueil" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Small proof points for the hero section.
export const heroStats = [
  { label: "Projets livrés", value: "48" },
  { label: "Années d'expérience", value: "12" },
  { label: "Villes accompagnées", value: "8" },
];

// Services are kept in a single source so the home page and services page stay aligned.
export const serviceItems: ServiceItem[] = [
  {
    title: "Conception sur mesure",
    description:
      "Organisation des volumes, moodboards, sélection de matériaux et direction artistique.",
    details: ["Plans d'ambiance", "Palette matières", "Références mobiliers"],
  },
  {
    title: "Accompagnement chantier",
    description:
      "Coordination des artisans, validation des étapes clés et suivi des finitions.",
    details: ["Planning détaillé", "Suivi de fabrication", "Contrôle qualité"],
  },
  {
    title: "Décoration finale",
    description:
      "Styling, sourcing des pièces finales et mise en scène pour un résultat cohérent.",
    details: ["Luminaires", "Textiles", "Objets signature"],
  },
];

// Featured projects power the portfolio cards on multiple pages.
export const featuredProjects: ProjectItem[] = [
  {
    name: "Villa Alba",
    location: "Lyon",
    type: "Résidentiel complet",
    summary:
      "Rééquilibrage des circulations, matières naturelles et palette chaude pour un intérieur apaisé.",
    palette: "Travertin, chêne fumé, lin brut",
  },
  {
    name: "Appartement Orsay",
    location: "Paris",
    type: "Rénovation partielle",
    summary:
      "Optimisation d'un séjour traversant avec des rangements discrets et une lumière plus douce.",
    palette: "Beige sable, noyer, bronze patiné",
  },
  {
    name: "Maison Cèdre",
    location: "Annecy",
    type: "Cuisine et pièce de vie",
    summary:
      "Un ensemble monochrome chaleureux qui relie cuisine, salle à manger et salon avec fluidité.",
    palette: "Argile, pierre claire, cuir cognac",
  },
];

// The process section explains how the studio works from start to finish.
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Cadrage",
    description:
      "Échange sur les usages, les contraintes techniques, le budget et l'intention esthétique.",
  },
  {
    step: "02",
    title: "Création",
    description:
      "Production du concept, des plans et des arbitrages matières pour une direction nette.",
  },
  {
    step: "03",
    title: "Exécution",
    description:
      "Pilotage des achats, coordination des intervenants et finalisation du lieu dans le détail.",
  },
];

// Short testimonial used to add trust and social proof.
export const testimonials = [
  {
    quote:
      "Le projet a gagné en calme et en lisibilité. Chaque détail semble à sa place sans effort.",
    author: "Camille et Hugo",
    role: "Maison familiale, Lyon",
  },
];

// Contact touchpoints displayed on the contact page and in the footer.
export const contactChannels: ContactChannel[] = [
  { label: "Email", value: "bonjour@angieatelier.fr", href: "mailto:bonjour@angieatelier.fr" },
  { label: "Disponibilité", value: "Lundi - Vendredi, 9h - 18h", href: "/contact" },
];