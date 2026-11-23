// ===========================================================
//  EDIT THIS FILE TO CHANGE THE WEBSITE CONTENT
// ===========================================================

// STORE SWITCH
// false = Store button hidden from the menu (store still works at /store)
// true  = "Store" button appears in the menu for everyone
export const SHOW_STORE_IN_MENU = false;

export const profile = {
  name: "Muhammad Ibrar Khan",
  short: "IBRAR KHAN",
  title: "Cloud & Infrastructure Engineer",
  headlineTop: "NETWORKS. SERVERS.",
  headlineBottom: "CLOUD & AUTOMATION.",
  intro:
    "Cloud & Infrastructure Engineer. I build data centers, secure networks and automated Azure pipelines that keep 3,500+ users running.",
  location: "RAWALPINDI · ISLAMABAD",
  photo: "", // to show your photo: put it in the "public" folder, then write "/photo.jpg" here
  cv: "/Muhammad_Ibrar_Khan_CV.pdf",
};

export const contact = {
  email: "ibrarniazi007@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-ibrar-khan",
  github: "https://github.com/niazi0007",
  whatsapp: "923106428310", // country code + number, no "+" or spaces
};

export const statusLines = [
  ["FW", "SOPHOS XGS", "OK"],
  ["CORE", "NEXUS", "OK"],
  ["HCI", "PROXMOX", "3/3"],
  ["VMs", "RUNNING", "15"],
  ["BACKUP", "VEEAM", "OK"],
  ["CI/CD", "AZURE", "PASS"],
];

export const numbers = [
  ["4+", "Years in enterprise IT"],
  ["3,500+", "Users supported"],
  ["48", "VMs in a data center built from scratch"],
  ["3", "Certifications"],
];

export const projects = [
  {
    cat: "CLOUD & DEVOPS",
    title: "This website: CI/CD on Azure",
    text: "Every code change is built in Docker and deployed to Azure automatically.",
    tags: ["Docker", "GitHub Actions", "Azure"],
    link: "https://github.com/niazi0007",
  },
  {
    cat: "INFRASTRUCTURE",
    title: "Data center + DR site",
    text: "Built from scratch: 7 racks, 16 servers, 48 VMs, with Veeam disaster recovery.",
    tags: ["VMware", "vCenter", "Veeam"],
  },
  {
    cat: "INFRASTRUCTURE",
    title: "Proxmox HCI cluster",
    text: "Open-source virtualization with Ceph storage that cut licensing costs.",
    tags: ["Proxmox", "Ceph"],
  },
  {
    cat: "NETWORK",
    title: "Head office relocation",
    text: "Complete head office network moved to a new building with minimal downtime.",
    tags: ["Cisco", "VLANs"],
  },
  {
    cat: "SECURITY",
    title: "Firewall & VPN across sites",
    text: "Sophos XGS firewalls, VPNs and security policies for three locations.",
    tags: ["Sophos", "VPN"],
  },
  {
    cat: "CLOUD & DEVOPS",
    title: "CI/CD pipeline for a Next.js app",
    text: "Docker image built and pushed automatically, deployed to Azure App Service.",
    tags: ["Azure DevOps", "Docker"],
    link: "https://github.com/niazi0007/azure-devops-nextjs-pipeline",
  },
];

export const experience = [
  {
    role: "System Administrator (Manager Grade)",
    org: "Saif Group of Companies",
    when: "12/2025 – Present",
    points: [
      "IT infrastructure for 3,500+ users across head office and two textile mills",
      "Leading a team of 4 IT staff across three locations",
      "Proxmox HCI with Ceph, Cisco Nexus/Catalyst, Sophos XGS 2300",
    ],
  },
  {
    role: "System Administrator",
    org: "Askari Colonies Management",
    when: "04/2022 – 12/2025",
    points: [
      "Built the data center from scratch and a Disaster Recovery site",
      "650+ users across 9 sites",
      "VMware vCenter, Active Directory, Veeam, endpoint security",
    ],
  },
  {
    role: "IT Consultant (Part-time)",
    org: "Unified Systems · Kareemiya Technologies & BPO",
    when: "01/2025 – 03/2026",
    points: ["Firewall, server and network optimisation for call centers"],
  },
  {
    role: "IT Support Engineer",
    org: "CSD Head Office",
    when: "02/2022 – 04/2022",
    points: ["Network setup for the new head office building"],
  },
];

export const certifications = [
  {
    name: "DevOps Engineer Expert",
    code: "AZ-400",
    by: "Microsoft",
    id: "6031C773D453D8CC",
  },
  {
    name: "Azure Administrator Associate",
    code: "AZ-104",
    by: "Microsoft",
    id: "B5EF5A0795743220",
  },
  {
    name: "Certified Ethical Hacker",
    code: "CEH",
    by: "EC-Council",
    id: "ECC6578209431",
  },
  {
    name: "Azure Solutions Architect Expert",
    code: "AZ-305",
    by: "Microsoft",
    id: "In progress",
  },
];

export const skills = {
  "Cloud & DevOps": ["Azure", "Azure DevOps", "CI/CD", "GitHub Actions", "Docker", "AKS", "Git"],
  Virtualization: ["Proxmox / Ceph", "VMware vCenter", "ESXi", "Hyper-V"],
  Networking: ["Cisco Nexus", "Catalyst", "VLANs", "VPN", "DNS / DHCP"],
  Security: ["Sophos XGS", "Fortinet", "Kaspersky", "Sangfor EDR", "CEH"],
  Systems: ["Windows Server", "Active Directory", "WSUS", "Linux", "Zimbra"],
  "Backup & Monitoring": ["Veeam", "SolarWinds", "PRTG", "iDRAC"],
};
