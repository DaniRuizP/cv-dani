const translations = {
    ca: {
        "nav-1": "Inici", "nav-2": "Competències", "nav-3": "Especialització", "nav-4": "Pla Formació", "nav-5": "Contacte",
        "name": "El Teu Nom", "student-title": "Estudiant ASIX",
        "sec1-h1": "Benvinguts al meu IPOP",
        "sec1-p1": "Soc [Nom], estudiant del cicle ASIX, apassionat per la seguretat informàtica i la gestió de xarxes. Aquest espai recull el meu camí professional i els projectes realitzats.",
        "sec2-h2": "Currículum per competències",
        "sec2-h3a": "Competències Tècniques",
        "s-t1": "Gestió de xarxes i configuració de routers.",
        "s-t2": "Administració de sistemes Linux/Windows.",
        "s-t3": "Seguretat informàtica i fortificació.",
        "sec2-h3b": "Competències Transversals",
        "s-tr1": "Treball en equip i col·laboració.",
        "s-tr2": "Adaptabilitat al canvi.",
        "s-tr3": "Resolució de problemes sota pressió.",
        "sec3-h2": "Àmbit d'especialització",
        "sec3-p1": "Estic interessat a desenvolupar-me professionalment en la gestió de xarxes informàtiques, especialment en entorns corporatius.",
        "sec4-h2": "Pla de formació o projecte professional",
        "plan-1-t": "Curt termini (1 any)", "plan-1-d": "Finalitzar el cicle superior i obtenir la certificació Cisco CCNA.",
        "plan-2-t": "Mig termini (2 anys)", "plan-2-d": "Completar un màster en seguretat informàtica.",
        "sec5-h2": "Contacte", "sec5-p1": "Podeu contactar-me a través dels següents canals:"
    },
    es: {
        "nav-1": "Inicio", "nav-2": "Competencias", "nav-3": "Especialización", "nav-4": "Plan Formación", "nav-5": "Contacto",
        "name": "Tu Nombre", "student-title": "Estudiante ASIX",
        "sec1-h1": "Bienvenidos a mi IPOP",
        "sec1-p1": "Soy [Nombre], estudiante del ciclo ASIX, apasionado por la seguridad informática y la gestión de redes. Este espacio recoge mi camino profesional y proyectos.",
        "sec2-h2": "Currículum por competencias",
        "sec2-h3a": "Competencias Técnicas",
        "s-t1": "Gestión de redes y configuración de routers.",
        "s-t2": "Administración de sistemas Linux/Windows.",
        "s-t3": "Seguridad informática y fortificación.",
        "sec2-h3b": "Competencias Transversales",
        "s-tr1": "Trabajo en equipo y colaboración.",
        "s-tr2": "Adaptabilidad al cambio.",
        "s-tr3": "Resolución de problemas bajo presión.",
        "sec3-h2": "Ámbito de especialización",
        "sec3-p1": "Estoy interesado en desarrollarme profesionalmente en la gestión de redes informáticas, especialmente en entornos corporativos.",
        "sec4-h2": "Plan de formación o proyecto profesional",
        "plan-1-t": "Corto plazo (1 año)", "plan-1-d": "Finalizar el ciclo superior y obtener la certificación Cisco CCNA.",
        "plan-2-t": "Medio plazo (2 años)", "plan-2-d": "Completar un máster en seguridad informática.",
        "sec5-h2": "Contacto", "sec5-p1": "Podéis contactarme a través de los siguientes canales:"
    },
    en: {
        "nav-1": "Home", "nav-2": "Competencies", "nav-3": "Specialization", "nav-4": "Training Plan", "nav-5": "Contact",
        "name": "Your Name", "student-title": "ASIX Student",
        "sec1-h1": "Welcome to my IPOP",
        "sec1-p1": "I am [Name], an ASIX student, passionate about IT security and network management. This space showcases my professional path and projects.",
        "sec2-h2": "Competency-based CV",
        "sec2-h3a": "Technical Skills",
        "s-t1": "Network management and router configuration.",
        "s-t2": "Linux/Windows systems administration.",
        "s-t3": "IT security and hardening.",
        "sec2-h3b": "Transversal Skills",
        "s-tr1": "Teamwork and collaboration.",
        "s-tr2": "Adaptability to change.",
        "s-tr3": "Problem solving under pressure.",
        "sec3-h2": "Area of Specialization",
        "sec3-p1": "I am interested in developing professionally in computer network management, especially in corporate environments.",
        "sec4-h2": "Training plan or professional project",
        "plan-1-t": "Short term (1 year)", "plan-1-d": "Finish the degree and obtain the Cisco CCNA certification.",
        "plan-2-t": "Medium term (2 years)", "plan-2-d": "Complete a master's degree in IT security.",
        "sec5-h2": "Contact", "sec5-p1": "You can contact me through the following channels:"
    }
};

const select = document.getElementById('language-select');

function updateLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[lang][key] || el.innerText;
    });
    localStorage.setItem('lang', lang);
}

select.addEventListener('change', (e) => updateLang(e.target.value));

window.onload = () => {
    const saved = localStorage.getItem('lang') || 'ca';
    select.value = saved;
    updateLang(saved);
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
