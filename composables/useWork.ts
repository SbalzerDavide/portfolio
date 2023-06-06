interface Work {
  company: string,
  companyLink?: string,
  role: string,
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
      "Design, maintenance and updating of a web application that makes management software available on every device.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Directly collaborate with final costumers for develop customizations on specific realities"
    ]
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    start: "January 2021",
    end: "April 2023",
    descriptions: [
      "I work in various projects, from the smallest, maybe only for study a new language or technology, to 'real product' witch are born from a specific use and witch are used to help everyday work.",
      "This second type of projects allow me to study all the cycle life of a digital product, from preliminary study to it's implementation.",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more"
    ]
  },
  {
    company: "Boolean Careers",
    role: "Junior Full Stack Web Developer Trainee",
    start: "September 2020",
    end: "February 2021",
    descriptions: [
      "In full time six month I made many practical projects with technologies studied theoretically."
    ]
  }
]

export const useWorks = ()=> works;