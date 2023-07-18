interface Languages {
  en: string[],
  it: string[]
}

interface Work {
  company: string,
  companyLink?: string,
  role: string,
  start: string,
  end: string,
  descriptions: Languages
}

const works: Work[] = [
  {
    company: "EDM Spa",
    role: "Full Stack Developer",
    companyLink: "https://edm.it/",
    start: "March 2021",
    end: "Present",
    descriptions: {
      en: [
        "Design, maintenance and updating of a web application that makes management software available on every device.",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Directly collaborate with final costumers for develop customizations on specific realities"
      ],
      it: [
        "Progettazione, manutenzione e aggiornamento di un'applicazione web che rende il software di gestione disponibile su ogni dispositivo.",
        "Collaborazione con designer, project manager e altri ingegneri per trasformare i concetti creativi in realtà produttive per clienti e stakeholder.",
        "Collaborazione diretta con i clienti finali per sviluppare personalizzazioni su realtà specifiche."
      ]
    } 
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    start: "January 2021",
    end: "April 2023",
    descriptions: {
      en: [
       "I work in various projects, from the smallest, maybe only for study a new language or technology, to 'real product' witch are born from a specific use and witch are used to help everyday work.",
       "This second type of projects allow me to study all the cycle life of a digital product, from preliminary study to it's implementation.",
     ], 
     it: [
      "Lavoro in vari progetti, dai più piccoli, magari solo per studiare una nuova lingua o tecnologia, ai 'veri prodotti' che nascono da un uso specifico e che vengono utilizzati per aiutare il lavoro quotidiano.",
      "Questo secondo tipo di progetti mi permette di studiare l'intero ciclo di vita di un prodotto digitale, dalla fase di studio preliminare alla sua implementazione."
     ] 
    }
  },
  {
    company: "Boolean Careers",
    role: "Junior Full Stack Web Developer Trainee",
    start: "September 2020",
    end: "February 2021",
    descriptions:{
      en: [
        "In full time six month I made many practical projects with technologies studied theoretically."
      ], 
      it: [
        "In sei mesi a tempo pieno ho realizzato molti progetti pratici con tecnologie studiate teoricamente."
      ]
    } 
  }
]

export const useWorks = ()=> works;