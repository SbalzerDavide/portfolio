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
        "Preliminary study to collect current and future needs through collaborations with product distributors.",
        "Directly collaborate with final costumers for develop customizations on specific realities."
      ],
      it: [
        "Progettazione, manutenzione e aggiornamento di un'applicazione web che rende il software gestionale disponibile su ogni dispositivo.",
        "Studio preliminare per raccogliere esigenze attuali e future attraverso collaborazioni con i distributori del prodotto.",
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
      "Lavoro in vari progetti, dai più piccoli, magari solo per studiare un nuovo linguaggio o tecnologia, a 'veri prodotti' che nascono da un'esigenza specifica e che vengono utilizzati per semplificare il lavoro quotidiano.",
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
        "In sei mesi full time ho realizzato molti progetti pratici con tecnologie studiate teoricamente."
      ]
    } 
  }
]

export const useWorks = ()=> works;