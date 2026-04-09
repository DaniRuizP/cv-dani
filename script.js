const translations = {
    ca: {
        nav_home: "Inici",
        nav_skills: "Competències",
        nav_spec: "Especialització",
        nav_plan: "Pla de Formació",
        nav_contact: "Contacte",
        home_title: "Sóc [Nom], estudiant d'ASIX",
        home_desc: "Aquest espai recull el meu camí professional i els projectes realitzats en l'àmbit de la informàtica i xarxes.",
        home_btn_cv: "Veure CV",
        skills_title: "Currículum per Competències",
        skills_tech_title: "Tècniques",
        skills_soft_title: "Transversals",
        tech_list: ["Gestió de xarxes", "Configuració de routers i switchos", "Administració de Linux/Windows", "Seguretat Informàtica"],
        soft_list: ["Treball en equip", "Adaptabilitat al canvi", "Resolució de problemes", "Comunicació assertiva"],
        spec_title: "Àmbit d'Especialització",
        spec_desc: "Estic interessat a desenvolupar-me professionalment en la gestió de xarxes informàtiques, especialment en entorns corporatius i ciberseguretat.",
        plan_title: "Pla de Formació Professional",
        plan_step1_t: "Finalització del Cicle Formatiu (2024-2025)",
        plan_step1_d: "Consolidar els coneixements de xarxes i sistemes operatius.",
        plan_step2_t: "Especialització en Seguretat (2025-2026)",
        plan_step2_d: "Realitzar un curs d'especialització en ciberseguretat o un Màster de FP.",
        contact_title: "Contacte",
        contact_desc: "Pots contactar-me a través dels següents canals:"
    },
    es: {
        nav_home: "Inicio",
        nav_skills: "Competencias",
        nav_spec: "Especialización",
        nav_plan: "Plan de Formación",
        nav_contact: "Contacto",
        home_title: "Soy [Nombre], estudiante de ASIX",
        home_desc: "Este espacio recoge mi trayectoria profesional y los proyectos realizados en el ámbito de la informática y redes.",
        home_btn_cv: "Ver CV",
        skills_title: "Currículum por Competencias",
        skills_tech_title: "Técnicas",
        skills_soft_title: "Transversales",
        tech_list: ["Gestión de redes", "Configuración de routers y switches", "Administración Linux/Windows", "Seguridad Informática"],
        soft_list: ["Trabajo en equipo", "Adaptabilidad al cambio", "Resolución de problemas", "Comunicación asertiva"],
        spec_title: "Ámbito de Especialización",
        spec_desc: "Estoy interesado en desarrollarme profesionalmente en la gestión de redes informáticas, especialmente en entornos corporativos y ciberseguridad.",
        plan_title: "Plan de Formación Profesional",
        plan_step1_t: "Finalización del Ciclo Formativo (2024-2025)",
        plan_step1_d: "Consolidar los conocimientos de redes y sistemas operativos.",
        plan_step2_t: "Especialización en Seguridad (2025-2026)",
        plan_step2_d: "Realizar un curso de especialización en ciberseguridad o un Máster de FP.",
        contact_title: "Contacto",
        contact_desc: "Puedes contactarme a través de los siguientes canales:"
    },
    en: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_spec: "Specialization",
        nav_plan: "Career Plan",
        nav_contact: "Contact",
        home_title: "I'm [Name], ASIX student",
        home_desc: "This space showcases my professional journey and projects in the field of IT and networking.",
        home_btn_cv: "View CV",
        skills_title: "Competency-based CV",
        skills_tech_title: "Technical",
        skills_soft_title: "Soft Skills",
        tech_list: ["Network Management", "Router & Switch Configuration", "Linux/Windows Admin", "Cybersecurity"],
        soft_list: ["Teamwork", "Adaptability", "Problem Solving", "Effective Communication"],
        spec_title: "Specialization Area",
        spec_desc: "I am interested in developing my career in IT network management, specifically in corporate environments and cybersecurity.",
        plan_title: "Professional Training Plan",
        plan_step1_t: "Completion of Degree (2024-2025)",
        plan_step1_d: "Consolidate knowledge of networks and operating systems.",
        plan_step2_t: "Security Specialization (2025-2026)",
        plan_step2_d: "Complete a cybersecurity specialization course or a Vocational Master's.",
        contact_title: "Contact",
        contact_desc: "You can reach me through the following channels:"
    }
};

function changeLang(lang) {
    // Cambiar textos simples
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Cambiar listas de competencias
    const techList = document.getElementById('list-tech');
    const softList = document.getElementById('list-soft');
    
    techList.innerHTML = translations[lang].tech_list.map(item => `<li>${item}</li>`).join('');
    softList.innerHTML = translations[lang].soft_list.map(item => `<li>${item}</li>`).join('');

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Guardar preferencia
    localStorage.setItem('preferredLang', lang);
}

// Cargar idioma inicial
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ca';
    changeLang(savedLang);
});
