export interface Bookmark {
  id: number;
  title: string;
  url: string;
  description: string;
  tags: string[];

  visitCount: number;
  createdAt: string;
  updatedAt: string;
  lastVisitedAt: string | null;
}

export type CreateBookmarkInput = Omit<Bookmark, 'id' | 'visitCount' | 'createdAt' | 'updatedAt' | 'lastVisitedAt'>

export const sampleBookmarks: Bookmark[] = [
  {
    id: 1,
    title: "Claude",
    url: "claude.ai",
    description:
      "An AI assistant built by Anthropic designed for deep writing analysis, complex coding, and document processing.",
    tags: ["Tools", "AI", "Productivity"],
    visitCount: 24,
    lastVisitedAt: "12 Oct",
    updatedAt: "10 Oct",
    createdAt: "01 Sep"
  },
  {
    id: 2,
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    description:
      "A utility-first CSS framework packed with classes to build modern web user interfaces rapidly directly in HTML.",
    tags: ["CSS", "Frontend", "Design"],
    visitCount: 8,
    lastVisitedAt: "28 Oct",
    updatedAt: "15 Sep",
    createdAt: "01 Sep"
  },
  {
    id: 3,
    title: "GitHub",
    url: "github.com",
    description:
      "A developer platform for hosting repositories, managing code versions, and collaborating on software projects.",
    tags: ["DevOps", "Code", "Tools"],
    visitCount: 142,
    lastVisitedAt: "4 Nov",
    updatedAt: "1 Nov",
    createdAt: "01 Sep"
  },
  {
    id: 4,
    title: "Figma",
    url: "figma.com",
    description:
      "A collaborative browser-based UI/UX design tool used for creating mockups, design systems, and interactive prototypes.",
    tags: ["Design", "UI/UX", "Tools"],
    visitCount: 0,
    lastVisitedAt: "Never",
    updatedAt: "22 Aug",
    createdAt: "01 Sep"
  },
  {
    id: 5,
    title: "React",
    url: "react.dev",
    description:
      "Official documentation for the popular JavaScript library used to build component-driven user interfaces.",
    tags: ["Frontend", "JavaScript", "Learning"],
    visitCount: 57,
    lastVisitedAt: "1 Nov",
    updatedAt: "25 Oct",
    createdAt: "01 Sep"
  },
  {
    id: 6,
    title: "Excalidraw",
    url: "excalidraw.com",
    description:
      "A virtual hand-drawn style whiteboard for drafting architecture diagrams, wireframes, and quick sketches collaboratively.",
    tags: ["Tools", "Diagram", "Design"],
    visitCount: 3,
    lastVisitedAt: "18 Sep",
    updatedAt: "10 Sep",
    createdAt: "01 Sep"
  },
];