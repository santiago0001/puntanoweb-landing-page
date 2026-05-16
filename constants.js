const SITE_CONFIG = {
  brand: {
    name: "Puntano Web",
    summary: "Diseñamos páginas web modernas y efectivas para ayudar a tu negocio a crecer.",
    copyright: "© 2026 Puntano Web. Todos los derechos reservados.",
  },
  contact: {
    whatsappNumber: "5492664880123",
    whatsappMessage: "Hola Puntano Web, quiero consultar por una página web para mi negocio.",
    email: "hola@puntanoweb.com",
    phone: "+54 9 266 488-0123",
    address: "San Luis, Argentina",
  },
  links: {
    home: "#inicio",
    portfolio: "#trabajos",
    instagram: "https://www.instagram.com/puntanoweb",
    facebook: "https://www.facebook.com/puntanoweb",
    linkedin: "https://www.linkedin.com/company/puntanoweb",
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerServices: [
    "Sitios web",
    "SEO y posicionamiento",
    "Rediseño web",
    "Mantenimiento",
  ],
  services: [
    {
      title: "Sitios web a medida",
      text: "Diseñamos páginas únicas, modernas y adaptadas a tus objetivos.",
      icon: "layout",
    },
    {
      title: "Sitios optimizados para Google y IA",
      text: "Aplicamos buenas prácticas para que te encuentren tus clientes y la IA.",
      icon: "databaseSearch",
    },
    {
      title: "Fáciles de gestionar",
      text: "Te damos una web autoadministrable para que puedas actualizar contenidos sin depender de nadie.",
      icon: "edit",
    },
    {
      title: "Seguras y rápidas",
      text: "Cuidamos la seguridad, la velocidad y el rendimiento de tu sitio.",
      icon: "shield",
    },
  ],
  benefits: [
    {
      title: "Genera confianza",
      text: "Los clientes confían más en negocios que tienen sitio web.",
      icon: "userCheck",
    },
    {
      title: "Te encuentran en Google",
      text: "Estás presente cuando buscan lo que ofrecés.",
      icon: "search",
    },
    {
      title: "Tu negocio trabaja 24/7",
      text: "Tu web está disponible siempre, incluso cuando no estás.",
      icon: "bars",
    },
    {
      title: "La IA puede entender qué hacés",
      text: "La IA accede a la información de tu web para recomendar tu negocio.",
      icon: "brainBlue",
    },
    {
      title: "Convertís visitas en consultas",
      text: "Una buena web guía y motiva a tus visitantes a contactarte.",
      icon: "message",
    },
  ],
  projects: [
    {
      name: "CD Construcciones",
      category: "Construcción",
      image: "projectConstruction",
      url: "#",
    },
    {
      name: "GRF Consultora",
      category: "Consultoría",
      image: "projectConsulting",
      url: "#",
    },
    {
      name: "Automotores Benavidez",
      category: "Automotriz",
      image: "projectAuto",
      url: "#",
    },
    {
      name: "Siscom Naval",
      category: "Industria Naval",
      image: "projectNaval",
      url: "#",
    },
  ],
  process: [
    {
      step: "1",
      title: "Hablamos de tu proyecto",
      icon: "chat",
    },
    {
      step: "2",
      title: "Te enviamos una propuesta clara",
      icon: "document",
    },
    {
      step: "3",
      title: "Diseñamos y desarrollamos tu web",
      icon: "pencil",
    },
    {
      step: "4",
      title: "Publicamos y te acompañamos",
      icon: "rocket",
    },
  ],
  avatars: ["SM", "LC", "AR", "MV"],
  socials: [
    { label: "Facebook", hrefKey: "facebook", icon: "facebook" },
    { label: "Instagram", hrefKey: "instagram", icon: "instagram" },
    { label: "LinkedIn", hrefKey: "linkedin", icon: "linkedin" },
    { label: "WhatsApp", hrefKey: "whatsapp", icon: "whatsapp" },
  ],
};

const SVG_NS = "http://www.w3.org/2000/svg";

const IMAGES = {
  logo:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 170'%3E%3Crect width='220' height='170' rx='18' fill='%23E8DEC0'/%3E%3Cpath d='M31 92 83 28l24 35 19-24 63 78-24-10-22-30-19 23-18-29-27 39-20-9-18 15Z' fill='%23111111'/%3E%3Cpath d='M44 88 84 39l14 21-21 31 23-11 17 29 25-28 23 31' fill='none' stroke='%230077B6' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='110' y='126' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' font-weight='800' fill='%23111111'%3EPUNTANO%3C/text%3E%3Ctext x='110' y='151' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='900' fill='%23111111'%3EWEB%3C/text%3E%3C/svg%3E",
  heroMockup:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 560'%3E%3Crect width='760' height='560' fill='none'/%3E%3Cellipse cx='430' cy='290' rx='280' ry='250' fill='%23E8DEC0' opacity='.55'/%3E%3Crect x='260' y='92' width='390' height='258' rx='18' fill='%23111111' transform='rotate(-6 455 221)'/%3E%3Crect x='282' y='112' width='346' height='205' rx='8' fill='%23FAF6EA' transform='rotate(-6 455 214)'/%3E%3Crect x='300' y='127' width='315' height='42' rx='6' fill='%23ffffff' transform='rotate(-6 457 148)'/%3E%3Crect x='322' y='191' width='170' height='18' rx='4' fill='%23111111' transform='rotate(-6 407 200)'/%3E%3Crect x='322' y='220' width='210' height='18' rx='4' fill='%230077B6' transform='rotate(-6 427 229)'/%3E%3Crect x='322' y='257' width='82' height='28' rx='5' fill='%23006BB6' transform='rotate(-6 363 271)'/%3E%3Crect x='230' y='352' width='400' height='56' rx='8' fill='%23111111' transform='rotate(-6 430 380)'/%3E%3Crect x='246' y='386' width='430' height='24' rx='8' fill='%23222222' transform='rotate(-6 461 398)'/%3E%3Crect x='145' y='250' width='108' height='215' rx='20' fill='%23111111' transform='rotate(-8 199 358)'/%3E%3Crect x='157' y='270' width='84' height='171' rx='10' fill='%23FAF6EA' transform='rotate(-8 199 356)'/%3E%3Crect x='169' y='291' width='58' height='12' rx='3' fill='%23111111' transform='rotate(-8 198 297)'/%3E%3Crect x='169' y='314' width='64' height='10' rx='3' fill='%230077B6' transform='rotate(-8 201 319)'/%3E%3Crect x='170' y='346' width='48' height='20' rx='5' fill='%23006BB6' transform='rotate(-8 194 356)'/%3E%3Ccircle cx='665' cy='145' r='4' fill='%23E8DEC0'/%3E%3Ccircle cx='690' cy='145' r='4' fill='%23E8DEC0'/%3E%3Ccircle cx='715' cy='145' r='4' fill='%23E8DEC0'/%3E%3Ccircle cx='665' cy='170' r='4' fill='%23E8DEC0'/%3E%3Ccircle cx='690' cy='170' r='4' fill='%23E8DEC0'/%3E%3Ccircle cx='715' cy='170' r='4' fill='%23E8DEC0'/%3E%3C/svg%3E",
  mountain:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 210'%3E%3Cpath d='M30 188 166 34l60 70 38-44 136 128H30Z' fill='%23F4EBD2'/%3E%3Cpath d='M166 34 212 188H30L105 103l24 18 11-48Z' fill='%23FAF6EA'/%3E%3Cpath d='M226 104 264 60l136 128H212Z' fill='%23FAF6EA'/%3E%3Cpath d='M52 176 166 34l60 70 38-44 116 110' fill='none' stroke='%230077B6' stroke-width='12' stroke-linejoin='round'/%3E%3Cpath d='M92 144 132 120l31 15 40-35 26 30 30-20 34 28' fill='none' stroke='%23111111' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  projectConstruction:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 330'%3E%3Crect width='640' height='330' fill='%23F4EBD2'/%3E%3Crect width='640' height='330' fill='%23111111' opacity='.62'/%3E%3Cpath d='M0 230 150 126l92 52 125-96 273 148v100H0Z' fill='%23E8DEC0' opacity='.34'/%3E%3Ctext x='44' y='96' font-family='Arial' font-size='31' font-weight='800' fill='white'%3ECD Construcciones%3C/text%3E%3Crect x='44' y='125' width='145' height='14' rx='7' fill='%230077B6'/%3E%3C/svg%3E",
  projectConsulting:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 330'%3E%3Crect width='640' height='330' fill='%23004C7F'/%3E%3Ccircle cx='520' cy='70' r='180' fill='%230077B6' opacity='.28'/%3E%3Crect x='52' y='78' width='280' height='32' rx='7' fill='white' opacity='.9'/%3E%3Crect x='52' y='140' width='420' height='16' rx='8' fill='%23F4EBD2' opacity='.88'/%3E%3Crect x='52' y='176' width='230' height='16' rx='8' fill='%23F4EBD2' opacity='.64'/%3E%3Ctext x='52' y='260' font-family='Arial' font-size='30' font-weight='800' fill='white'%3EGRF Consultora%3C/text%3E%3C/svg%3E",
  projectAuto:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 330'%3E%3Crect width='640' height='330' fill='%23111111'/%3E%3Cpath d='M70 222h380l46-66h74l32 66h-50a46 46 0 0 1-92 0H220a46 46 0 0 1-92 0H70Z' fill='%23FAF6EA'/%3E%3Cpath d='M252 156h210l-34-52H306Z' fill='%230077B6'/%3E%3Ccircle cx='174' cy='224' r='28' fill='%234A4A4A'/%3E%3Ccircle cx='506' cy='224' r='28' fill='%234A4A4A'/%3E%3Ctext x='52' y='78' font-family='Arial' font-size='30' font-weight='800' fill='white'%3EAutomotores Benavidez%3C/text%3E%3C/svg%3E",
  projectNaval:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 330'%3E%3Crect width='640' height='330' fill='%23004C7F'/%3E%3Cpath d='M0 220c74-28 135-30 213-8s127 31 208 3 139-23 219 7v108H0Z' fill='%230077B6' opacity='.7'/%3E%3Cpath d='M108 178h360l-48 64H152Z' fill='%23FAF6EA'/%3E%3Cpath d='M250 82v96h116l-28-72Z' fill='%23E8DEC0'/%3E%3Ctext x='44' y='76' font-family='Arial' font-size='31' font-weight='800' fill='white'%3ESiscom Naval%3C/text%3E%3C/svg%3E",
};

const ICONS = {
  whatsapp: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 2a9.6 9.6 0 0 0-8.2 14.6L3 22l5.6-1.5A9.7 9.7 0 1 0 12 2Zm0 2a7.7 7.7 0 0 1 0 15.4 7.4 7.4 0 0 1-3.2-.7l-.4-.2-3 .8.8-2.9-.2-.4A7.7 7.7 0 0 1 12 4Zm-3.1 4.1c-.2 0-.5.1-.7.4-.3.4-.9 1.1-.9 2.6s1.1 3 1.2 3.2c.2.2 2.1 3.3 5.1 4.5 2.5 1 3 .8 3.5.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4l-.6-.3-1.8-.9c-.3-.1-.5-.2-.7.2l-.8 1c-.2.2-.4.3-.7.1-.4-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.4 0-.5.1-.7l.5-.6c.1-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-.9-2c-.3-.5-.5-.5-.7-.6h-.8Z'/></svg>",
  check: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m9.2 16.6-4-4 1.4-1.4 2.6 2.6 8.2-8.2L18.8 7 9.2 16.6Z'/></svg>",
  phone: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4v12h8V6H8Zm3 13h2v1h-2v-1Z'/></svg>",
  search: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M10.5 4a6.5 6.5 0 0 1 5.1 10.5l4 4-1.4 1.4-4-4A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z'/></svg>",
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.1a15 15 0 0 0-1.1-5.2A8 8 0 0 1 18.9 11ZM12 4.1c.7 1 1.6 3.3 1.8 6.9h-3.6c.2-3.6 1.1-5.9 1.8-6.9ZM4.1 13h3.1a15 15 0 0 0 1.1 5.2A8 8 0 0 1 4.1 13Zm3.1-2H4.1a8 8 0 0 1 4.2-5.2A15 15 0 0 0 7.2 11Zm4.8 8.9c-.7-1-1.6-3.3-1.8-6.9h3.6c-.2 3.6-1.1 5.9-1.8 6.9Zm2.7-1.7a15 15 0 0 0 1.1-5.2h3.1a8 8 0 0 1-4.2 5.2Z'/></svg>",
  brain: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 3a4 4 0 0 0-4 4v.3A4 4 0 0 0 3 14a4 4 0 0 0 4 4h1V3H9Zm7 0h-1v15h1a4 4 0 0 0 4-4 4 4 0 0 0-2-6.7V7a4 4 0 0 0-2-3.5V3Zm-6 0h3v18h-3V3Z'/></svg>",
  layout: "<svg viewBox='0 0 24 24'><path d='M4 5h16v14H4V5Zm2 4h12V7H6v2Zm0 8h5v-6H6v6Zm7 0h5v-6h-5v6Z'/></svg>",
  databaseSearch: "<svg viewBox='0 0 24 24'><path d='M11 3c4 0 7 1.3 7 3v4.2a6.5 6.5 0 0 0-2-.9V8c-1.3.7-3.1 1-5 1S7.3 8.7 6 8v3c0 .6 1.9 2 5 2h.2a6.4 6.4 0 0 0-.2 2c-4 0-7-1.3-7-3V6c0-1.7 3-3 7-3Zm0 2C7.9 5 6 5.8 6 6s1.9 1 5 1 5-.8 5-1-1.9-1-5-1Zm6.5 7a4.5 4.5 0 0 1 3.5 7.3l2 2-1.4 1.4-2-2A4.5 4.5 0 1 1 17.5 12Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 15.1c1.3.8 3.2 1.2 5.3 1.3.2.8.5 1.5.9 2.1C6.6 18.4 4 17.2 4 15.6v-.5Z'/></svg>",
  edit: "<svg viewBox='0 0 24 24'><path d='M4 17.8 15.2 6.6l2.2 2.2L6.2 20H4v-2.2ZM18.1 8.1l-2.2-2.2 1.4-1.4c.4-.4 1-.4 1.4 0l.8.8c.4.4.4 1 0 1.4l-1.4 1.4Z'/></svg>",
  shield: "<svg viewBox='0 0 24 24'><path d='M12 2 20 5v6c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5l8-3Zm0 2.2L6 6.5V11c0 3.8 2.4 7.1 6 8.7 3.6-1.6 6-4.9 6-8.7V6.5l-6-2.3Zm3.7 5.5 1.4 1.4-5.7 5.7-3.1-3.1 1.4-1.4 1.7 1.7 4.3-4.3Z'/></svg>",
  userCheck: "<svg viewBox='0 0 24 24'><path d='M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0 2c3.3 0 6 1.8 6 4v2H3v-2c0-2.2 2.7-4 6-4Zm8.7 5.3-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5Z'/></svg>",
  bars: "<svg viewBox='0 0 24 24'><path d='M5 11h3v8H5v-8Zm5-4h3v12h-3V7Zm5-3h3v15h-3V4Z'/></svg>",
  brainBlue: "<svg viewBox='0 0 24 24'><path d='M9 3a4 4 0 0 0-4 4v.3A4 4 0 0 0 3 14a4 4 0 0 0 4 4h1V3H9Zm7 0h-1v15h1a4 4 0 0 0 4-4 4 4 0 0 0-2-6.7V7a4 4 0 0 0-2-3.5V3Zm-6 0h3v18h-3V3Z'/></svg>",
  message: "<svg viewBox='0 0 24 24'><path d='M4 5h16v11H8l-4 4V5Zm2 2v8.2L7.2 14H18V7H6Z'/></svg>",
  arrow: "<svg viewBox='0 0 24 24'><path d='m13 5 7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z'/></svg>",
  chat: "<svg viewBox='0 0 24 24'><path d='M4 5h16v11H8l-4 4V5Zm2 2v8.2L7.2 14H18V7H6Z'/></svg>",
  document: "<svg viewBox='0 0 24 24'><path d='M6 2h9l5 5v15H6V2Zm8 2H8v16h10V8h-4V4Zm-3 8h5v2h-5v-2Zm0 4h5v2h-5v-2Z'/></svg>",
  pencil: "<svg viewBox='0 0 24 24'><path d='M4 17.8 15.2 6.6l2.2 2.2L6.2 20H4v-2.2ZM18.1 8.1l-2.2-2.2 1.4-1.4c.4-.4 1-.4 1.4 0l.8.8c.4.4.4 1 0 1.4l-1.4 1.4Z'/></svg>",
  rocket: "<svg viewBox='0 0 24 24'><path d='M13 3c3.8.4 6.6 3.2 7 7l-5.4 5.4-4-4L13 3ZM5 14l2-2 5 5-2 2H5v-5Zm3 2.2L6.2 18H9l.2-.2L8 16.2ZM6 9l3-3h2.2l-.8 2H9.8L7.4 10.4 6 9Zm9 9 2.4-2.4V15l2-.8V16l-3 3-1.4-1ZM15 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'/></svg>",
  facebook: "<svg viewBox='0 0 24 24'><path d='M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4h-4V9c0-.6.4-1 1-1Z'/></svg>",
  instagram: "<svg viewBox='0 0 24 24'><path d='M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'/></svg>",
  linkedin: "<svg viewBox='0 0 24 24'><path d='M5 8h4v13H5V8Zm2-5a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 7 3Zm4 5h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V21h-4v-6.5c0-1.6 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V21H11V8Z'/></svg>",
};
