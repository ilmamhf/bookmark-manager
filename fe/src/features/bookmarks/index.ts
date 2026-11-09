export interface Bookmark {
  id: number;
  title: string;
  detail: string;
  description: string;
  tags: string[];
  seenCount: number;
  lastSeen: string;
  lastEdited: string;
}

export const sampleBookmarks = [
  {
    id: 1,
    title: "Claude",
    detail: "claude.ai",
    description:
      "An AI assistant built by Anthropic designed for deep writing analysis, complex coding, and document processing.",
    tags: ["Tools", "AI", "Productivity"],
    seenCount: 24,
    lastSeen: "12 Oct",
    lastEdited: "10 Oct",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    detail: "tailwindcss.com",
    description:
      "A utility-first CSS framework packed with classes to build modern web user interfaces rapidly directly in HTML.",
    tags: ["CSS", "Frontend", "Design"],
    seenCount: 8,
    lastSeen: "28 Oct",
    lastEdited: "15 Sep",
  },
  {
    id: 3,
    title: "GitHub",
    detail: "github.com",
    description:
      "A developer platform for hosting repositories, managing code versions, and collaborating on software projects.",
    tags: ["DevOps", "Code", "Tools"],
    seenCount: 142,
    lastSeen: "4 Nov",
    lastEdited: "1 Nov",
  },
  {
    id: 4,
    title: "Figma",
    detail: "figma.com",
    description:
      "A collaborative browser-based UI/UX design tool used for creating mockups, design systems, and interactive prototypes.",
    tags: ["Design", "UI/UX", "Tools"],
    seenCount: 0,
    lastSeen: "Never",
    lastEdited: "22 Aug",
  },
  {
    id: 5,
    title: "React",
    detail: "react.dev",
    description:
      "Official documentation for the popular JavaScript library used to build component-driven user interfaces.",
    tags: ["Frontend", "JavaScript", "Learning"],
    seenCount: 57,
    lastSeen: "1 Nov",
    lastEdited: "25 Oct",
  },
  {
    id: 6,
    title: "Excalidraw",
    detail: "excalidraw.com",
    description:
      "A virtual hand-drawn style whiteboard for drafting architecture diagrams, wireframes, and quick sketches collaboratively.",
    tags: ["Tools", "Diagram", "Design"],
    seenCount: 3,
    lastSeen: "18 Sep",
    lastEdited: "10 Sep",
  },
];