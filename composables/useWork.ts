interface Work {
  company: string,
  companyLink?: string,
  role: 'Full Stack Developer' | 'Frontend Developer',
  start: string,
  end: string,
  descriptions: string[]
}

const works: Work[] = [
  {
    company: "EDM Spa",
    role: "Full Stack Developer",
    companyLink: "https://edm.it/",
    start: "March 2021",
    end: "Present",
    descriptions: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
    ]
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    start: "January 2023",
    end: "April 2023",
    descriptions: [
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more"
    ]
  },
  {
    company: "pappa",
    role: "Full Stack Developer",
    start: "",
    end: "",
    descriptions: []
  }
]

export const useWorks = ()=> works;