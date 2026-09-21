import type { ContactInfo, LeadershipMember } from "./types";

export const site = {
  name: "ETE-Optimiza",
  legalName: "ETE-Optimiza",
  tagline:
    "Upstream production optimization technology and engineering services.",
  description:
    "ETE-Optimiza develops software and engineering solutions for well surveillance, production optimization, and operational decision support in upstream oil and gas.",
  url: "https://ete-optimiza.com",
  founded: 2020,
  location: "Richmond, Texas",
  industry:
    "Upstream oil and gas production optimization technology and engineering services.",
} as const;

export const contact: ContactInfo = {
  email: "admin@ete-optimiza.com",
  address: {
    street: "24222 Leonforte Dr.",
    city: "Richmond",
    state: "Texas",
    postalCode: "77406",
  },
  hours: "Monday–Friday, 8:00 am–5:00 pm CST",
};

export const leadership: LeadershipMember[] = [
  { name: "Chinedu Emegwa", title: "CEO, Co-Founder" },
  { name: "Angus Ogubuike, DBA, PhD", title: "CTO, Co-Founder" },
];

export const companyValues = [
  "Honesty",
  "Integrity",
  "Innovation",
  "Collaboration",
] as const;

export const mission =
  "ETE-Optimiza delivers optimization solutions that maximize performance and efficiency in the upstream oil and gas sector, combining engineering expertise with technology to streamline production processes and support better engineering decisions.";

export const vision =
  "ETE-Optimiza aims to become a recognized authority in upstream production optimization by combining engineering expertise, technology, innovation, efficiency, and execution.";
