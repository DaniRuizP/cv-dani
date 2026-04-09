const translations = {
    ca: {
        "name": "El Teu Nom",
        "profile-title": "Perfil Professional",
        "nav-self": "Autoconeixement",
        "nav-obj": "Objectiu",
        "nav-market": "Anàlisi Mercat",
        "nav-skills": "Competències",
        "nav-plan": "Pla d'Acció",
        "header-title": "Informe Personal d'Orientació Professional (IPOP)",
        "header-subtitle": "Un full de ruta per al meu desenvolupament laboral.",
        "sec1-title": "1. Autoconeixement",
        "strengths-title": "Punts Forts",
        "s1": "Capacitat d'aprenentatge ràpid.",
        "s2": "Resolució de problemes.",
        "s3": "Treball en equip.",
        "interests-title": "Interessos",
        "interests-desc": "M'apassiona la tecnologia i el disseny.",
        "sec2-title": "2. Objectiu Professional",
        "obj-desc": "El meu objectiu és incorporar-me com a Desenvolupador Junior.",
        "sec3-title": "3. Anàlisi del Mercat",
        "market-desc": "He identificat que al sector TIC hi ha una alta demanda.",
        "sec4-title": "4. Competències",
        "skill-comm": "Comunicació",
        "skill-eng": "Anglès Tècnic",
        "sec5-title": "5. Pla d'Acció",
        "th-action": "Acció",
        "th-deadline": "Termini",
        "th-success": "Indicador d'èxit",
        "row1-a": "Actualitzar LinkedIn",
        "row1-b": "1 setmana",
        "row1-c": "Perfil completat"
    },
    es: {
        "name": "Tu Nombre",
        "profile-title": "Perfil Profesional",
        "nav-self": "Autoconocimiento",
        "nav-obj": "Objetivo",
        "nav-market": "Análisis Mercado",
        "nav-skills": "Competencias",
        "nav-plan": "Plan de Acción",
        "header-title": "Informe Personal de Orientación Profesional (IPOP)",
        "header-subtitle": "Una hoja de ruta para mi desarrollo laboral.",
        "sec1-title": "1. Autoconocimiento",
        "strengths-title": "Puntos Fuertes",
        "s1": "Capacidad de aprendizaje rápido.",
        "s2": "Resolución de problemas.",
        "s3": "Trabajo en equipo.",
        "interests-title": "Intereses",
        "interests-desc": "Me apasiona la tecnología y el diseño.",
        "sec2-title": "2. Objetivo Profesional",
        "obj-desc": "Mi objetivo es incorporarme como Desarrollador Junior.",
        "sec3-title": "3. Análisis del Mercado",
        "market-desc": "He identificado que en el sector TIC hay una alta demanda.",
        "sec4-title": "4. Competencias",
        "skill-comm": "Comunicación",
        "skill-eng": "Inglés Técnico",
        "sec5-title": "5. Plan de Acción",
        "th-action": "Acción",
        "th-deadline": "Plazo",
        "th-success": "Indicador de éxito",
        "row1-a": "Actualizar LinkedIn",
        "row1-b": "1 semana",
        "row1-c": "Perfil completado"
    },
    en: {
        "name": "Your Name",
        "profile-title": "Professional Profile",
        "nav-self": "Self-awareness",
        "nav-obj": "Objective",
        "nav-market": "Market Analysis",
        "nav-skills": "Skills",
        "nav-plan": "Action Plan",
        "header-title": "Personal Professional Orientation Report (IPOP)",
        "header-subtitle": "A roadmap for my career development.",
        "sec1-title": "1. Self-awareness",
        "strengths-title": "Strengths",
        "s1": "Fast learning ability.",
        "s2": "Problem solving.",
        "s3": "Teamwork.",
        "interests-title": "Interests",
        "interests-desc": "I am passionate about technology and design.",
        "sec2-title": "2. Professional Objective",
        "obj-desc": "My goal is to join as a Junior Developer.",
        "sec3-title": "3. Market Analysis",
        "market-desc": "I have identified high demand in the IT sector.",
        "sec4-title": "4. Skills",
        "skill-comm": "Communication",
        "skill-eng": "Technical English",
        "sec5-title": "5. Action Plan",
        "th-action": "Action",
        "th-deadline": "Deadline",
        "th-success": "Success Indicator",
        "row1-a": "Update LinkedIn",
        "row1-b": "1 week",
        "row1-c": "Profile completed"
    }
};

const languageSelect = document.getElementById('language-select');

// Función para cambiar el idioma
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    // Guardar preferencia
    localStorage.setItem('preferredLang', lang);
}

// Evento de cambio de selector
languageSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Cargar idioma preferido o por defecto (ca)
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ca';
    languageSelect.value = savedLang;
    setLanguage(savedLang);
});

// --- Mantener el resto de animaciones anteriores ---
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
