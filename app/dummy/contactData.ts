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
    value: "ghifary.ahmad@example.com",
    link: "mailto:ghifary.ahmad@example.com",
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
    value: "+62 812-3456-7890",
    link: "tel:+6281234567890",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    color: "hover:text-gray-300",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-pink-400",
  },
];

export const contactPageData = {
  title: "CONTACT",
  description: "Let's work together! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
};

