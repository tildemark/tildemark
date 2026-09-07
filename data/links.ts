export interface NavLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: 'briefcase' | 'laptop-code' | 'pen-tool' | 'github';
  highlight?: boolean;
}

export const navLinks: NavLink[] = [
  {
    id: "resume",
    title: "Professional Resume",
    subtitle: "IT Management, DPO, & Skills",
    url: "https://resume.sanchez.ph",
    icon: "briefcase",
  },
  {
    id: "solutions",
    title: "Software Portfolio",
    subtitle: "Featured Apps & Enterprise Solutions",
    url: "https://solutions.sanchez.ph",
    icon: "laptop-code",
  },
  {
    id: "syntax",
    title: "Syntax",
    subtitle: "Simple Yet Necessary Tips And eXperiments",
    url: "https://blog.sanchez.ph",
    icon: "pen-tool",
  },
  {
    id: "github",
    title: "The Code",
    subtitle: "Open Source & ERP Skeletons",
    url: "https://github.com/tildemark",
    icon: "github",
  },
];
