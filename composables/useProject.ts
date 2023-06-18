interface ProjLink {
  link: string, 
  type: string
}

interface projImage {
  img: any,
  direction: "portrait" | "landscape"
}

interface Project {
  name: string, 
  description: string, 
  link?: ProjLink[], 
  technology: string[],
  img: projImage[],
  year?: string,
}

import rotellaOstetrica from "~/assets/images/rotellaOstetrica.png";

import formForPrint from "~/assets/images/formForPrint.png";
import formForPrint1 from "~/assets/images/formForPrint1.png";
import formForPrint2 from "~/assets/images/formForPrint2.png";

import foodManagerStorage from "~/assets/images/foodManagerStorage.png";
import foodManagerDelete from "~/assets/images/foodManagerDelete.png";
import foodManagerGarbage from "~/assets/images/foodManagerGarbage.png";
import foodManagerStorageFilter from "~/assets/images/foodManagerStorageFilter.png";

import minefield from "~/assets/images/minefield.png";
import minefield1 from "~/assets/images/minefield1.png";

const projects: Project[] = [
  {
    name: "Rotella ostetrica",
    description: "Mobile web app that manage gestation age measered in weeks. Usefull for hospital staff that have to books visits in specific weeks.",
    link: [
      {
        link: "https://github.com/SbalzerDavide/rotella.io",
        type: "gitHub",
      },
      {
        link: "https://sbalzerdavide.github.io/rotella.io/",
        type: "project",
      },
    ],
    technology: [
      "vuejs"
    ],
    img:[
      {
        img: rotellaOstetrica,
        direction: "portrait" 
      }
    ],
    year: "2021" 
  },
  {
    name: "Form for Print",
    description: "A web app, prepared for all stages of a pregnancy, that elaborate patient history and all ultrasound data for generate a print with charts and percentiles.",
    link: [
      {
        link: "https://github.com/SbalzerDavide/formForPrint",
        type: "gitHub"
      },
      {
        link: "https://formforprint-trial.netlify.app/",
        type: "project"
      }
    ],
    technology: [
      "vuejs"
    ],
    img:[
      {
        img: formForPrint,
        direction: "landscape" 
      },
      // {
      //   img: formForPrint1,
      //   direction: "landscape" 
      // },
      // {
      //   img: formForPrint2,
      //   direction: "landscape" 
      // },      
    ],
    year: "2023"
  },
  {
    name: "food manager",
    description: "Mobile web app that allow to manage all the life cycle of food, since when it was put in the shopping list until it is eaten or thrown away. Various statistics can be consulted for understand the efficiency of its management over time",
    link: [
      {
        link: "https://github.com/SbalzerDavide/supabaseProject",
        type: "gitHub"
      },
      {
        link: "https://sbalzerdavide.github.io/supabaseDist/",
        type: "project"
      }
    ],
    technology: [
      "vuejs",
      "Supabase"
    ],
    img: [
      {
        img: foodManagerStorage,
        direction: "portrait"
      },
      {
        img: foodManagerStorageFilter,
        direction: "portrait"
      },
      {
        img: foodManagerDelete,
        direction: "portrait"
      },
      {
        img: foodManagerGarbage,
        direction: "portrait"
      },
    ],
    year: "2022"
  },
  {
    name: "Mine Field",
    description: "Classic game designed with '80 graphics",
    link: [
      {
        link: "https://github.com/SbalzerDavide/vue-campominato.io",
        type: "gitHub"
      },
      {
        link: "https://sbalzerdavide.github.io/vue-campominato.io/",
        type: "project"
      }
    ],
    technology: [
      "vuejs",
    ],
    img: [
      {
        img: minefield,
        direction: "landscape"
      },
      // {
      //   img: minefield1,
      //   direction: "landscape"
      // }
    ],
    year: "2021"
  },
]

export const useProject = ()=> projects;

export { Project }