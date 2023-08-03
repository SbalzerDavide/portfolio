import { b as buildAssetsURL } from './renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, watch, openBlock, createElementBlock, createBlock, Transition, withCtx, normalizeClass, renderSlot, resolveDynamicComponent, createCommentVNode, createElementVNode } from 'vue';
import { u as useAppConfig, a as useMenu, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'klona';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const techList = [
      "JavaScript (ES6)",
      "TypeScript",
      "Vue.js",
      "PHP",
      "Laravel"
    ];
    const appConfig = useAppConfig();
    console.log(appConfig);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}><div class="container-text"><div class="decription">`);
      if (((_a = unref(appConfig)) == null ? void 0 : _a.language) == "en") {
        _push(`<p> Hello! My name is Davide and I enjoy creating things that live on the internet. My interest in web development started in 2020 when I try to create a website that allow me to take and process data from a survey about different visual art works. All obstacle I found using high level tool pushed me to study web development from the basic. I signed up for a six mounth full time online course, Boolean Careers, and from that moment I never stop to learning something new. </p>`);
      } else if (((_b = unref(appConfig)) == null ? void 0 : _b.language) == "it") {
        _push(`<p> Ciao! Mi chiamo Davide e mi piace creare cose su internet. Il mio interesse per lo sviluppo web \xE8 iniziato nel 2020 quando ho provato a creare un sito web che mi permettesse di raccogliere e processare i dati da un sondaggio su diverse opere d&#39;arte visiva. Tutti gli ostacoli che ho trovato usando strumenti di alto livello mi hanno spinto a studiare lo sviluppo web dalle basi. Mi sono iscritto a un corso online full time di sei mesi, Boolean Careers, e da quel momento non ho mai smesso di imparare qualcosa di nuovo. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(appConfig).language == "en") {
        _push(`<p> Currently I work for a software house where I develop the web app of a business management software. Next to this I work on personal project for study and try different technology. Some of this are only prototype but other were born from specific need and are used by others. </p>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<p> Attualmente lavoro per una software house dove sviluppo l&#39;applicazione web di un software di gestione aziendale. Oltre a questo, lavoro su progetti personali per studiare e provare diverse tecnologie. Alcuni di questi sono solo prototipi, ma altri sono nati da esigenze specifiche e vengono quotidianamente utilizzati. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(appConfig).language == "en") {
        _push(`<p> I am a very curious person and I love to go deep into the study of new things. </p>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<p> Sono una persona molto curiosa e amo approfondire lo studio di cose nuove. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tech">`);
      if (unref(appConfig).language == "en") {
        _push(`<p> Here are a few technologies I\u2019ve been working with recently: </p>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<p> Qui un elenco di alcune tecnologie con cui ho lavorato recentemente </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="tech-list"><!--[-->`);
      ssrRenderList(techList, (el, index) => {
        _push(`<li><i class="pi pi-caret-right"></i> ${ssrInterpolate(el)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="container-image"><div class="overlay"></div><div class="frame"></div><div class="image"></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const works = [
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
        "Collaborazione diretta con i clienti finali per sviluppare personalizzazioni su realt\xE0 specifiche."
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
        "This second type of projects allow me to study all the cycle life of a digital product, from preliminary study to it's implementation."
      ],
      it: [
        "Lavoro in vari progetti, dai pi\xF9 piccoli, magari solo per studiare un nuovo linguaggio o tecnologia, a 'veri prodotti' che nascono da un'esigenza specifica e che vengono utilizzati per semplificare il lavoro quotidiano.",
        "Questo secondo tipo di progetti mi permette di studiare l'intero ciclo di vita di un prodotto digitale, dalla fase di studio preliminare alla sua implementazione."
      ]
    }
  },
  {
    company: "Boolean Careers",
    role: "Junior Full Stack Web Developer Trainee",
    start: "September 2020",
    end: "February 2021",
    descriptions: {
      en: [
        "In full time six month I made many practical projects with technologies studied theoretically."
      ],
      it: [
        "In sei mesi full time ho realizzato molti progetti pratici con tecnologie studiate teoricamente."
      ]
    }
  }
];
const useWorks = () => works;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Work",
  __ssrInlineRender: true,
  setup(__props) {
    const works2 = useWorks();
    let active = ref(0);
    const activeLine = ref(null);
    const activeLineMobile = ref(null);
    let activeWork = ref(works2[active.value]);
    const appConfig = useAppConfig();
    watch(active, (newValue) => {
      var _a, _b, _c, _d;
      if (activeLine.value) {
        activeLine.value.style.top = `${active.value * 30}px`;
      }
      if (activeLineMobile.value) {
        if (((_a = works2[active.value]) == null ? void 0 : _a.company) === "EDM Spa") {
          activeLineMobile.value.style.left = "19px";
        } else if (((_b = works2[active.value]) == null ? void 0 : _b.company) === "Freelance") {
          activeLineMobile.value.style.left = "106px";
        } else if (((_c = works2[active.value]) == null ? void 0 : _c.company) === "Boolean Careers") {
          activeLineMobile.value.style.left = "210px";
        }
        activeLineMobile.value.style.width = `${((_d = works2[active.value]) == null ? void 0 : _d.company.length) * 5}px`;
      }
      activeWork.value = works2[newValue];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "work" }, _attrs))}><div class="list"><div class="active-line-container"><div class="active-line"></div></div><div class="active-line-container-mobile"><div class="active-line"></div></div><ul><!--[-->`);
      ssrRenderList(unref(works2), (work, index) => {
        _push(`<li>${ssrInterpolate(work.company)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="detail"><div class="work-title"><div class="role">${ssrInterpolate(unref(activeWork).role)} <a${ssrRenderAttr("href", unref(activeWork).companyLink)}> @ ${ssrInterpolate(unref(activeWork).company)}</a></div></div><div class="work-time">${ssrInterpolate(unref(activeWork).start)} - ${ssrInterpolate(unref(activeWork).end)}</div><div class="work-desc-container">`);
      if (unref(appConfig).language == "en") {
        _push(`<!--[-->`);
        ssrRenderList(unref(activeWork).descriptions.en, (desc, index) => {
          _push(`<div class="work-desc"><i class="pi pi-caret-right"></i><p>${ssrInterpolate(desc)}</p></div>`);
        });
        _push(`<!--]-->`);
      } else if (unref(appConfig).language == "it") {
        _push(`<!--[-->`);
        ssrRenderList(unref(activeWork).descriptions.it, (desc, i) => {
          _push(`<div class="work-desc"><i class="pi pi-caret-right"></i><p>${ssrInterpolate(desc)}</p></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Work.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const rotellaOstetrica = "" + buildAssetsURL("rotellaOstetrica.6f088d87.png");
const formForPrint = "" + buildAssetsURL("formForPrint.67b1ed4e.png");
const foodManagerStorage = "" + buildAssetsURL("foodManagerStorage.c54af4d0.png");
const foodManagerDelete = "" + buildAssetsURL("foodManagerDelete.b820a8c4.png");
const foodManagerGarbage = "" + buildAssetsURL("foodManagerGarbage.d00c25d7.png");
const foodManagerStorageFilter = "" + buildAssetsURL("foodManagerStorageFilter.598053cd.png");
const minefield = "" + buildAssetsURL("minefield.75083bed.png");
const projects = [
  {
    name: "Rotella ostetrica",
    description: {
      en: "Mobile web app that manage gestation age measered in weeks. Usefull for hospital staff that have to books visits in specific weeks.",
      it: "Web app mobile che gestisce l'epoca gestazionale misurata in settimane. Utile per il personale ospedaliero che deve prenotare visite per specifiche settimane."
    },
    link: [
      {
        link: "https://github.com/SbalzerDavide/rotella.io",
        type: "gitHub"
      },
      {
        link: "https://sbalzerdavide.github.io/rotella.io/",
        type: "project"
      }
    ],
    technology: [
      "vuejs"
    ],
    img: [
      {
        img: rotellaOstetrica,
        direction: "portrait"
      }
    ],
    year: "2021"
  },
  {
    name: "Form for Print",
    description: {
      en: "A web app, prepared for all stages of a pregnancy, that elaborate patient history and all ultrasound data for generate a print with charts and percentiles.",
      it: "Una web app, preparata per tutte le fasi della gravidanza, che elabora la storia clinica del paziente e tutti i dati dell'ecografia per generare una stampa con grafici e percentili."
    },
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
    img: [
      {
        img: formForPrint,
        direction: "landscape"
      }
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
    description: {
      en: "Mobile web app that allow to manage all the life cycle of food, since when it was put in the shopping list until it is eaten or thrown away. Various statistics can be consulted for understand the efficiency of its management over time",
      it: "Web app mobile che consente di gestire l'intero ciclo di vita del cibo, dalla sua aggiunta alla lista della spesa fino al momento in cui viene consumato o buttato via. \xC8 possibile consultare varie statistiche per comprendere la nostra efficienza della sua gestione nel tempo."
    },
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
      }
    ],
    year: "2022"
  },
  {
    name: "Mine Field",
    description: {
      en: "Classic game designed with '80 graphics",
      it: "Videogame classico sisegnato con una grafica anni '80"
    },
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
      "vuejs"
    ],
    img: [
      {
        img: minefield,
        direction: "landscape"
      }
      // {
      //   img: minefield1,
      //   direction: "landscape"
      // }
    ],
    year: "2021"
  }
];
const useProject = () => projects;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  setup(__props) {
    const projects2 = useProject();
    const appConfig = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(projects2), (project) => {
        _push(`<div class="project">`);
        if (project.img.length === 1) {
          _push(`<a class="${ssrRenderClass([project.img[0].direction, "project-image"])}"><div class="overlay"></div><img${ssrRenderAttr("src", project.img[0].img)}${ssrRenderAttr("alt", project.name)}></a>`);
        } else if (project.img.length > 1) {
          _push(`<a class="many-images"><!--[-->`);
          ssrRenderList(project.img, (image, index) => {
            _push(`<div class="${ssrRenderClass([`image-container-${index}`, "image-container"])}"><div class="overlay"></div><img${ssrRenderAttr("src", image.img)}${ssrRenderAttr("alt", project.name)}></div>`);
          });
          _push(`<!--]--></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="project-bottom"><div class="project-section"><h4>Personal Project</h4><h2>${ssrInterpolate(project.name)}</h2><div class="project-desc">`);
        if (unref(appConfig).language == "en") {
          _push(`<p>${ssrInterpolate(project.description.en)}</p>`);
        } else if (unref(appConfig).language == "it") {
          _push(`<p>${ssrInterpolate(project.description.it)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><ul class="project-technology"><!--[-->`);
        ssrRenderList(project.technology, (tech) => {
          _push(`<li>${ssrInterpolate(tech)}</li>`);
        });
        _push(`<!--]--></ul><ul class="project-link"><!--[-->`);
        ssrRenderList(project.link, (link) => {
          _push(`<li><a target="_blank"${ssrRenderAttr("href", link.link)}>`);
          if (link.type === "gitHub") {
            _push(`<i class="pi pi-github"></i>`);
          } else if (link.type === "project") {
            _push(`<i class="pi pi-external-link"></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Project.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Contacts",
  __ssrInlineRender: true,
  setup(__props) {
    const appConfig = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts" }, _attrs))} data-v-26d9a6c0>`);
      if (unref(appConfig).language === "en") {
        _push(`<h3 data-v-26d9a6c0>Get In Touch</h3>`);
      } else if (unref(appConfig).language === "it") {
        _push(`<h3 data-v-26d9a6c0>Mettiti in contatto</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(appConfig).language === "en") {
        _push(`<p data-v-26d9a6c0>My inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!</p>`);
      } else if (unref(appConfig).language === "it") {
        _push(`<p data-v-26d9a6c0>La mia casella di posta \xE8 sempre aperta. Se hai proposte, domande o semplicemente vuoi salutarmi, far\xF2 del mio meglio per risponderti!</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="animate" data-v-26d9a6c0><div class="background" data-v-26d9a6c0></div><a href="mailto:sbalzerdavide@hotmail.it" class="button" data-v-26d9a6c0> Say Hello </a></button><div class="social" data-v-26d9a6c0><a href="https://github.com/SbalzerDavide" target="_blank" data-v-26d9a6c0><i class="pi pi-github" data-v-26d9a6c0></i></a><a href="https://www.linkedin.com/in/davide-sbalzer-60b952205/" target="_blank" data-v-26d9a6c0><i class="pi pi-linkedin" data-v-26d9a6c0></i></a></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Contacts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-26d9a6c0"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Box",
  __ssrInlineRender: true,
  props: {
    menuKey: null,
    title: null,
    desc: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sectionAbout = _sfc_main$5;
      const _component_sectionWork = _sfc_main$4;
      const _component_sectionProject = _sfc_main$3;
      const _component_sectionContacts = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))}><div class="title">${ssrInterpolate(props.menuKey)}. ${ssrInterpolate(props.desc)}</div>`);
      if (props.menuKey == "01") {
        _push(`<section>`);
        _push(ssrRenderComponent(_component_sectionAbout, null, null, _parent));
        _push(`</section>`);
      } else if (props.menuKey == "02") {
        _push(`<section>`);
        _push(ssrRenderComponent(_component_sectionWork, null, null, _parent));
        _push(`</section>`);
      } else if (props.menuKey == "03") {
        _push(`<section>`);
        _push(ssrRenderComponent(_component_sectionProject, null, null, _parent));
        _push(`</section>`);
      } else if (props.menuKey == "04") {
        _push(`<section>`);
        _push(ssrRenderComponent(_component_sectionContacts, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Box.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var DomHandler = {
  innerWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth;
      if (margin) {
        let style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  },
  getOffset(el) {
    if (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index(element) {
    if (element) {
      let children = element.parentNode.childNodes;
      let num = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  },
  addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  },
  removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  },
  hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  },
  find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  getHeight(el) {
    if (el) {
      let height = el.offsetHeight;
      let style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      let elementOuterHeight = elementDimensions.height;
      let elementOuterWidth = elementDimensions.width;
      let targetOuterHeight = target.offsetHeight;
      let targetOuterWidth = target.offsetWidth;
      let targetOffset = target.getBoundingClientRect();
      let windowScrollTop = this.getWindowScrollTop();
      let windowScrollLeft = this.getWindowScrollLeft();
      let viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = "bottom";
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = "top";
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  relativePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      const targetHeight = target.offsetHeight;
      const targetOffset = target.getBoundingClientRect();
      const viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = "bottom";
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = "top";
      }
      if (elementDimensions.width > viewport.width) {
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        left = 0;
      }
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  },
  getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementHeight = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementWidth = element.offsetWidth;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions(element) {
    if (element) {
      let dimensions = {};
      element.style.visibility = "hidden";
      element.style.display = "block";
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return dimensions;
    }
    return 0;
  },
  fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      let last = +/* @__PURE__ */ new Date();
      let opacity = 0;
      let tick = function() {
        opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +/* @__PURE__ */ new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut(element, ms) {
    if (element) {
      let opacity = 1, interval = 50, duration = ms, gap = interval / duration;
      let fading = setInterval(() => {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error("Cannot append " + target + " to " + element);
  },
  isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  },
  scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  },
  getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  },
  isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist(element) {
    return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
  },
  isClient() {
    return false;
  },
  focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  },
  getFocusableElements(element, selector = "") {
    let focusableElements = this.find(
      element,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
    );
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector);
    const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
    const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  isClickable(element) {
    if (element) {
      const targetNode = element.nodeName;
      const parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || !!element.closest(".p-button, .p-checkbox, .p-radiobutton");
    }
    return false;
  },
  applyStyle(element, style) {
    if (typeof style === "string") {
      element.style.cssText = style;
    } else {
      for (let prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  exportCSV(csv, filename) {
    let blob = new Blob([csv], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    } else {
      let link = document.createElement("a");
      if (link.download !== void 0) {
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", filename + ".csv");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = "data:text/csv;charset=utf-8," + csv;
        window.open(encodeURI(csv));
      }
    }
  }
};
var ObjectUtils = {
  equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData(data, field) {
    if (data && Object.keys(data).length && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") === -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  },
  isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  },
  filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList(value, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  },
  insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  },
  getVNodeProp(vnode, prop) {
    let props = vnode.props;
    if (props) {
      let kebapProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;
      return vnode.type.props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
    }
    return null;
  },
  convertToFlatCase(str) {
    return this.isNotEmpty(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  },
  isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
  },
  isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
};
function handler() {
  let zIndexes = [];
  const generateZIndex = (key, autoZIndex, baseZIndex = 999) => {
    const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = (key, autoZIndex) => {
    return getLastZIndex(key, autoZIndex).value;
  };
  const getLastZIndex = (key, autoZIndex, baseZIndex = 0) => {
    return [...zIndexes].reverse().find((obj) => autoZIndex ? true : obj.key === key) || { key, value: baseZIndex };
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: (key) => getCurrentZIndex(key, true)
  };
}
var ZIndexUtils = handler();
var script$2 = {
  name: "BaseIcon",
  props: {
    label: {
      type: String,
      value: void 0
    },
    spin: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    pti() {
      const isLabelEmpty = ObjectUtils.isEmpty(this.label);
      return {
        class: [
          "p-icon",
          {
            "p-icon-spin": this.spin
          }
        ],
        role: !isLabelEmpty ? "img" : void 0,
        "aria-label": !isLabelEmpty ? this.label : void 0,
        "aria-hidden": isLabelEmpty
      };
    }
  }
};
function styleInject$1(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$1 = "\n.p-icon {\n    display: inline-block;\n}\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n@-webkit-keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n@keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n";
styleInject$1(css_248z$1);
var script$1 = {
  name: "ChevronUpIcon",
  extends: script$2
};
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2 = [
  _hoisted_1$1
];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}
script$1.render = render$1;
var script = {
  name: "ScrollTop",
  scrollListener: null,
  container: null,
  props: {
    target: {
      type: String,
      default: "window"
    },
    threshold: {
      type: Number,
      default: 400
    },
    icon: {
      type: String,
      default: void 0
    },
    behavior: {
      type: String,
      default: "smooth"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    if (this.target === "window")
      this.bindDocumentScrollListener();
    else if (this.target === "parent")
      this.bindParentScrollListener();
  },
  beforeUnmount() {
    if (this.target === "window")
      this.unbindDocumentScrollListener();
    else if (this.target === "parent")
      this.unbindParentScrollListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.overlay = null;
    }
  },
  methods: {
    onClick() {
      let scrollElement = this.target === "window" ? window : this.$el.parentElement;
      scrollElement.scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility(scrollY) {
      if (scrollY > this.threshold)
        this.visible = true;
      else
        this.visible = false;
    },
    bindParentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(this.$el.parentElement.scrollTop);
      };
      this.$el.parentElement.addEventListener("scroll", this.scrollListener);
    },
    bindDocumentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(DomHandler.getWindowScrollTop());
      };
      window.addEventListener("scroll", this.scrollListener);
    },
    unbindParentScrollListener() {
      if (this.scrollListener) {
        this.$el.parentElement.removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    unbindDocumentScrollListener() {
      if (this.scrollListener) {
        window.removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    onEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    containerRef(el) {
      this.container = el;
    }
  },
  computed: {
    containerClass() {
      return ["p-scrolltop p-link p-component", { "p-scrolltop-sticky": this.target !== "window" }];
    },
    scrollTopAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
    }
  },
  components: {
    ChevronUpIcon: script$1
  }
};
const _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "p-scrolltop",
    appear: "",
    onEnter: $options.onEnter,
    onAfterLeave: $options.onAfterLeave
  }, {
    default: withCtx(() => [
      $data.visible ? (openBlock(), createElementBlock("button", {
        key: 0,
        ref: $options.containerRef,
        class: normalizeClass($options.containerClass),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
        type: "button",
        "aria-label": $options.scrollTopAriaLabel
      }, [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          (openBlock(), createBlock(resolveDynamicComponent($props.icon ? "span" : "ChevronUpIcon"), {
            class: normalizeClass(["p-scrolltop-icon", $props.icon])
          }, null, 8, ["class"]))
        ])
      ], 10, _hoisted_1)) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["onEnter", "onAfterLeave"]);
}
function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = "\n.p-scrolltop {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-scrolltop-sticky {\n    position: sticky;\n}\n.p-scrolltop-sticky.p-link {\n    margin-left: auto;\n}\n.p-scrolltop-enter-from {\n    opacity: 0;\n}\n.p-scrolltop-enter-active {\n    transition: opacity 0.15s;\n}\n.p-scrolltop.p-scrolltop-leave-to {\n    opacity: 0;\n}\n.p-scrolltop-leave-active {\n    transition: opacity 0.15s;\n}\n";
styleInject(css_248z);
script.render = render;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = useMenu();
    const appConfig = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Box = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><header>`);
      if (unref(appConfig).language == "en") {
        _push(`<h4> Hi, my name is Davide Sbalzer. </h4>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<h4> Ciao, mi chiamo Davide Sbalzer. </h4>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(appConfig).language == "en") {
        _push(`<h1> I build things for the web <span class="flashing-underscore">_</span></h1>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<h1> Costruisco cose per il web <span class="flashing-underscore">_</span></h1>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(appConfig).language == "en") {
        _push(`<h3> I\u2019m a web developer specializing in building and designing digital experiences. </h3>`);
      } else if (unref(appConfig).language == "it") {
        _push(`<h3> Sono uno web developer specializzato nello sviluppo e nella progettazione esperienze digitali. </h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><!--[-->`);
      ssrRenderList(unref(menu), (menuEl, index) => {
        _push(ssrRenderComponent(_component_Box, {
          key: index,
          id: menuEl.title,
          menuKey: menuEl.menuKey,
          title: menuEl.title,
          desc: menuEl.desc
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(script), {
        threshold: 100,
        icon: "pi pi-arrow-up"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-112c739c.mjs.map
