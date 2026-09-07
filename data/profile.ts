export interface Profile {
  name: string;
  avatar: string;
  tagline: string;
  role: string;
  dpoRole: string;
  company: string;
  companyUrl?: string;
  bioParagraphs: string[];
  spottingNote: string;
  socials: {
    linkedin: string;
    email: string;
    facebook: string;
    github: string;
  };
}

export const profileData: Profile = {
  name: "Alfredo Sanchez Jr.",
  avatar: "https://github.com/tildemark.png",
  tagline: "Building systems for land and sea.",
  role: "Head of IT",
  dpoRole: "Data Protection Officer (DPO)",
  company: "Avega Bros Integrated Shipping Corp.",
  bioParagraphs: [
    "I bridge the gap between enterprise software and rugged hardware. My work spans ERP development, data privacy compliance, and shipboard IoT integration.",
  ],
  spottingNote: "(And when I'm onboard, I swap the laptop for a camera to photograph the fleet.)",
  socials: {
    linkedin: "https://linkedin.com/in/tildemark",
    email: "mailto:derf@sanchez.ph",
    facebook: "https://facebook.com/tildemark",
    github: "https://github.com/tildemark",
  },
};
