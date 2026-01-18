import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "GitHub",
    username: "xRiveria",
    icon: Icons.gitHub,
    link: "https://github.com/xRiveria",
  },
  {
    name: "LinkedIn",
    username: "Ryan Tan Wen Ter",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ryantanwt",
  },
  {
    name: "Twitter",
    username: "@HelloRiveria",
    icon: Icons.twitter,
    link: "https://x.com/HelloRiveria",
  },
  {
    name: "Email",
    username: "ryan.tan.wt",
    icon: Icons.gmail,
    link: "mailto:ryan.tan.wt@gmail.com",
  },
];
