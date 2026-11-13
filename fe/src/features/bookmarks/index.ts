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

export type SortOption = 
 | 'newest'
 | 'oldest'
 | 'most-visited'
 | 'last-visited'
 | 'title-asc'
 | 'title-desc'

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
    lastVisitedAt: "2026-10-12T08:34:21.000Z",
    updatedAt: "2026-10-10T14:22:45.000Z",
    createdAt: "2026-09-01T03:15:12.000Z"
  },
  {
    id: 2,
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    description:
      "A utility-first CSS framework packed with classes to build modern web user interfaces rapidly directly in HTML.",
    tags: ["CSS", "Frontend", "Design"],
    visitCount: 8,
    lastVisitedAt: "2026-10-28T02:17:36.000Z",
    updatedAt: "2026-09-15T09:43:18.000Z",
    createdAt: "2026-09-01T05:48:29.000Z"
  },
  {
    id: 3,
    title: "GitHub",
    url: "github.com",
    description:
      "A developer platform for hosting repositories, managing code versions, and collaborating on software projects.",
    tags: ["DevOps", "Code", "Tools"],
    visitCount: 142,
    lastVisitedAt: "2026-11-04T15:52:43.000Z",
    updatedAt: "2026-11-01T07:26:51.000Z",
    createdAt: "2026-09-01T11:32:07.000Z"
  },
  {
    id: 4,
    title: "Figma",
    url: "figma.com",
    description:
      "A collaborative browser-based UI/UX design tool used for creating mockups, design systems, and interactive prototypes.",
    tags: ["Design", "UI/UX", "Tools"],
    visitCount: 0,
    lastVisitedAt: null,
    updatedAt: "2026-08-22T12:19:34.000Z",
    createdAt: "2026-09-01T08:07:55.000Z"
  },
  {
    id: 5,
    title: "React",
    url: "react.dev",
    description:
      "Official documentation for the popular JavaScript library used to build component-driven user interfaces.",
    tags: ["Frontend", "JavaScript", "Learning"],
    visitCount: 57,
    lastVisitedAt: "2026-11-01T04:41:29.000Z",
    updatedAt: "2026-10-25T16:38:12.000Z",
    createdAt: "2026-09-01T06:24:38.000Z"
  },
  {
    id: 6,
    title: "Excalidraw",
    url: "excalidraw.com",
    description:
      "A virtual hand-drawn style whiteboard for drafting architecture diagrams, wireframes, and quick sketches collaboratively.",
    tags: ["Tools", "Diagram", "Design"],
    visitCount: 3,
    lastVisitedAt: "2026-09-18T13:56:08.000Z",
    updatedAt: "2026-09-10T02:47:31.000Z",
    createdAt: "2026-09-01T14:53:46.000Z"
  }
]