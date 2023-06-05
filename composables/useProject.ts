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

import imgRotella from "~/assets/images/rotellaOstetrica.png";
import imgFormForPrint from "~/assets/images/formForPrint.png";
import imgFoodManager from "~/assets/images/foodManagerStorage.png";
import imgMineField from "~/assets/images/minefield.png";

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
        img: imgRotella,
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
        link: "https://sbalzerdavide.github.io/formForPrint/",
        type: "project"
      }
    ],
    technology: [
      "vuejs"
    ],
    img:[
      {
        img: imgFormForPrint,
        direction: "landscape" 
      }
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
        img: imgFoodManager,
        direction: "portrait"
      }
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
        img: imgMineField,
        direction: "landscape"
      }
    ],
    year: "2021"
  },
]

export const useProject = ()=> projects;

export { Project }