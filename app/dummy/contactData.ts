import { Mail, MapPin, Phone, Linkedin, Github, Instagram, LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ghifaryahmadwrap@gmail.com",
    link: "mailto:ghifaryahmadwrap@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    link: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 852-1900-8008",
    link: "tel:+6285219008008",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/ghifaryahmada",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/gips123",
    color: "hover:text-gray-300",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/ghifaryahmada",
    color: "hover:text-pink-400",
  },
];

export const contactPageData = {
  title: "CONTACT",
  description: "Let's work together! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
};

