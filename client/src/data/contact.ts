import { FACEBOOK_URL } from "./experiences";

export const contact = {
  phone: "622 130 7338",
  phoneHref: "tel:+526221307338",
  whatsappHref: "https://wa.me/526221307338",
  email: "sancarlos_adventures@hotmail.com",
  emailHref: "mailto:sancarlos_adventures@hotmail.com",
  messengerName: "San Carlos Adventures",
  messengerHref: "https://m.me/sancarlos.adventures",
  socials: [
    {
      platform: "Instagram",
      username: "sancarlos_adventures",
      href: "https://www.instagram.com/sancarlos_adventures/",
      icon: "instagram",
    },
    {
      platform: "Facebook",
      username: "San Carlos Adventures",
      href: FACEBOOK_URL,
      icon: "facebook",
    },
    {
      platform: "TikTok",
      username: "sancarlos_adventures",
      href: "https://www.tiktok.com/@sancarlos_adventures",
      icon: "tiktok",
    },
    {
      platform: "X",
      username: "adventures_sc",
      href: "https://x.com/adventures_sc",
      icon: "x",
    },
  ],
} as const;
