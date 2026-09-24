export type Role = {
  title: string;
  org: string;
  dates: string;
  points: string[];
};

export const work: Role[] = [
  {
    title: "Supplemental Instruction Leader",
    org: "San Diego State University",
    dates: "Aug 2024 — Aug 2025",
    points: [
      "Ran weekly calculus sessions, writing the lesson plans, practice activities and study guides myself.",
      "Sat in on lectures alongside students so sessions targeted whatever the class was actually stuck on.",
      "Tracked attendance and progress and adjusted the plan as the semester went.",
    ],
  },
];

export const volunteering: Role[] = [
  {
    title: "Crisis Counselor",
    org: "Crisis Text Line",
    dates: "Dec 2025 — Aug 2026",
    points: [
      "Support people in crisis over text in real time, using active listening and de-escalation.",
      "Work with texters to build collaborative plans that keep them safe.",
      "Completed 30+ hours of training in crisis intervention and trauma-informed care.",
    ],
  },
  {
    title: "Tutor and Mentor",
    org: "Kupanda Kids",
    dates: "Sept 2025 — present",
    points: [
      "Mentor refugee and immigrant youth weekly with homework, literacy and math.",
      "Help students adjust to the U.S. school system and build confidence in it.",
    ],
  },
  {
    title: "Student Volunteer",
    org: "Basic Needs Center, SDSU",
    dates: "Aug 2025 — May 2026",
    points: [
      "Help students find food resources, housing referrals and campus services.",
      "Organize and distribute supplies so the space stays welcoming to anyone who walks in.",
    ],
  },
  {
    title: "Active Member",
    org: "Alpha Phi Omega",
    dates: "Aug 2025 — present",
    points: [
      "Serve on chapter projects across campus and the wider San Diego community.",
      "Work with members on philanthropy events and fundraisers throughout the semester.",
    ],
  },
];