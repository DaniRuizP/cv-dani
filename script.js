const translations = {
    ca: {
        nav_home: "Inici", nav_skills: "Competències", nav_spec: "Especialització", nav_plan: "Pla", nav_contact: "Contacte",
        home_title: "Hola, sóc Dani",
        home_desc: "Sóc estudiant de 2n d'ASIX, apassionat per la seguretat informàtica i la gestió de xarxes. Aquest espai recull el meu camí professional.",
        skills_title: "Competències",
        skills_tech_title: "Tècniques",
        skills_soft_title: "Transversals",
        tech_list: ["Gestió i configuració de xarxes", "Bases de dades", "Seguretat activa"],
        soft_list: ["Ordenat i Organitzat", "Aprenentatge ràpid", "Resolució de problemes", ""],
        spec_title: "Àmbit d'Especialització",
        spec_desc: "Estic interessat a desenvolupar-me professionalment en el tema de la ciberseguretat.",
        plan_title: "Pla Professional",
        plan_step1_t: "Finalització ASIX",
        plan_step1_d: "Cursar un curs d'especialització de ciberseguretat a Montilivi, Girona.",
        plan_step2_t: "Certificacions",
        plan_step2_d: "Obtenir el B2 anglès.",
        contact_title: "Contacte",
        contact_desc: "Podeu contactar-me a través del meu correu electrònic o número de telèfon."
    },
    es: {
        nav_home: "Inicio", nav_skills: "Competencias", nav_spec: "Especialización", nav_plan: "Plan", nav_contact: "Contacto",
        home_title: "Hola, soy Dani",
        home_desc: "Soy estudiante de 2º de ASIX, apasionado por la seguridad informática y la gestión de redes. Este espacio recoge mi trayectoria profesional.",
        skills_title: "Competencias",
        skills_tech_title: "Técnicas",
        skills_soft_title: "Transversales",
        tech_list: ["Gestión de redes", "Configuración de routers", "Seguridad activa"],
        soft_list: ["Trabajo en equipo", "Adaptabilidad", "Resolución de problemas"],
        spec_title: "Ámbito de Especialización",
        spec_desc: "Estoy interesado en desarrollarme profesionalmente en la gestión de redes informáticas, especialmente en entornos corporativos.",
        plan_title: "Plan Profesional",
        plan_step1_t: "Finalización ASIX",
        plan_step1_d: "Completar el ciclo con especialidad en redes.",
        plan_step2_t: "Certificaciones",
        plan_step2_d: "Obtener el CCNA de Cisco en los próximos 12 meses.",
        contact_title: "Contacto",
        contact_desc: "Podéis contactarme a través de mi correo electrónico o redes profesionales."
    },
    en: {
        nav_home: "Home", nav_skills: "Skills", nav_spec: "Specialization", nav_plan: "Plan", nav_contact: "Contact",
        home_title: "Hi, I'm Dani",
        home_desc: "I am an ASIX student, passionate about cybersecurity and network management. This space reflects my professional path.",
        skills_title: "Competencies",
        skills_tech_title: "Technical",
        skills_soft_title: "Transversal",
        tech_list: ["Network Management", "Router Configuration", "Active Security"],
        soft_list: ["Teamwork", "Adaptability", "Problem Solving"],
        spec_title: "Specialization Area",
        spec_desc: "I am interested in developing professionally in computer network management, especially in corporate environments.",
        plan_title: "Professional Plan",
        plan_step1_t: "Finish ASIX",
        plan_step1_d: "Complete the degree specializing in networking.",
        plan_step2_t: "Certifications",
        plan_step2_d: "Obtain the Cisco CCNA certification within the next 12 months.",
        contact_title: "Contact",
        contact_desc: "You can reach me via email or through my professional social networks."
    }
};

function changeLang(lang) {
    // Texto simple
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });

    // Listas
    const techList = document.getElementById('list-tech');
    const softList = document.getElementById('list-soft');
    techList.innerHTML = translations[lang].tech_list.map(i => `<li>${i}</li>`).join('');
    softList.innerHTML = translations[lang].soft_list.map(i => `<li>${i}</li>`).join('');

    // Estilo botones
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    document.documentElement.lang = lang;
}

// Inicializar
window.onload = () => changeLang('ca');
