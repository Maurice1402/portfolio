document.addEventListener('DOMContentLoaded', () => {

    // --- SPRACH- UND INHALTS-MANAGEMENT ---
    const content = {
        de: {
            // ANPASSEN: DEUTSCHE TEXTE
            page_title: "Maurice Guss | KI & Kommunikation",
            nav_intro: "Intro",
            nav_about: "Über Mich",
            nav_services: "Leistungen",
            nav_contact: "Kontakt",
            intro_name: "Maurice Guss",
            intro_tagline: "KI-Kompetenz. Zertifiziert. Verständlich. Praxisnah.",
            intro_subtagline: "Webinare | Fachartikel | Expertise",
            intro_cta: "Jetzt Kontakt aufnehmen",
            about_headline: "Ich helfe Menschen, KI zu verstehen.",
            about_p1: "In meinen Webinaren und Texten vermittle ich grundlegende KI-Kompetenz – <strong>klar, praxisnah und verlässlich</strong>. Ob Einzelperson, Redaktion oder Unternehmen: Mein Ziel ist, Technologie mit Kommunikation zu verbinden, damit KI zugänglich und sinnvoll wird.",
            about_p2: "Als hauptberuflicher KI-Dozent liegt mein Fokus darauf, fundiert, kompakt und menschlich zu erklären, was Künstliche Intelligenz heute bedeutet und wie wir sie gewinnbringend einsetzen können.",
            services_headline: "Meine Angebote",
            service1_title: "KI-Webinare",
            service1_desc: "Interaktive Online-Formate für Einsteiger und Teams, inklusive praktischer Anwendungen und verständlicher Erklärungen.",
            service1_cta: "Zu den Webinaren",
            service2_title: "Texte & Inhalte",
            service2_desc: "Fachartikel, Beiträge und Whitepaper – verständlich aufbereitet und ansprechend für Redaktionen und Unternehmen.",
            service2_cta: "Blog (in Kürze)",
            service3_title: "Zertifizierte Kompetenz",
            service3_desc: "Meine Qualifikationen in KI und Didaktik, kombiniert mit Praxiserfahrung, garantieren fundierte Wissensvermittlung.",
            service3_cta: "Mehr auf LinkedIn",
            contact_headline: "Kontakt & Kooperation",
            contact_p1: "Für Redaktionen und Unternehmen: Ich unterstütze Sie gerne mit Fachbeiträgen oder Webinar-Formaten rund um KI.",
            contact_p2: "Ich freue mich auf Ihre Nachricht und eine mögliche Zusammenarbeit.",
            contact_cta: "Jetzt Kontakt aufnehmen",
            footer_blog1: "🔗 Demnächst hier: mein KI-Blog – kompakt & verständlich.",
            footer_blog2: "Wenn du informiert werden möchtest, folge mir auf <a href='https://www.linkedin.com/in/maurice-guss-ab894b2b3/' target='_blank'>LinkedIn</a>.",
            footer_copy: "© 2024 Maurice Guss | <a href='impressum.html'>Impressum</a>",
        },
        en: {
            // ANPASSEN: ENGLISCHE TEXTE
            page_title: "Maurice Guss | AI & Communication",
            nav_intro: "Intro",
            nav_about: "About Me",
            nav_services: "Services",
            nav_contact: "Contact",
            intro_name: "Maurice Guss",
            intro_tagline: "AI Competence. Certified. Clear. Practical.",
            intro_subtagline: "Webinars | Articles | Expertise",
            intro_cta: "Get in Touch Now",
            about_headline: "I help people understand AI.",
            about_p1: "In my webinars and articles, I teach fundamental AI literacy—<strong>clear, practical, and reliable</strong>. Whether for individuals, editorial teams, or companies, my goal is to connect technology with communication to make AI accessible and meaningful.",
            about_p2: "As a full-time AI lecturer, my focus is on explaining what Artificial Intelligence means today and how we can use it productively—in a well-founded, concise, and human-centric way.",
            services_headline: "What I Offer",
            service1_title: "AI Webinars",
            service1_desc: "Interactive online formats for beginners and teams, including practical applications and clear explanations.",
            service1_cta: "View Webinars",
            service2_title: "Content & Articles",
            service2_desc: "Expert articles, blog posts, and whitepapers—written to be understandable and engaging for editors and businesses.",
            service2_cta: "Blog (Coming Soon)",
            service3_title: "Certified Competence",
            service3_desc: "My qualifications in AI and didactics, combined with practical experience, guarantee well-founded knowledge transfer.",
            service3_cta: "More on LinkedIn",
            contact_headline: "Contact & Cooperation",
            contact_p1: "For editorial teams and companies: I'm available to provide expert articles or webinar formats focused on AI.",
            contact_p2: "I look forward to your message and a potential collaboration.",
            contact_cta: "Get in Touch Now",
            footer_blog1: "🔗 Coming soon: my AI blog—concise & easy to understand.",
            footer_blog2: "To stay informed, follow me on <a href='https://www.linkedin.com/in/maurice-guss-ab894b2b3/' target='_blank'>LinkedIn</a>.",
            footer_copy: "© 2024 Maurice Guss | <a href='impressum.html'>Legal Notice</a>",
        }
    };

    const langToggles = document.querySelectorAll('.lang-toggle');
    const themeToggles = document.querySelectorAll('.theme-toggle');
    let currentLang = localStorage.getItem('lang') || 'de';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        langToggles.forEach(toggle => toggle.textContent = lang.toUpperCase());
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (content[lang][key]) el.innerHTML = content[lang][key];
        });
        document.title = content[lang].page_title;
        // E-Mail-Link im Kontaktbereich sprachabhängig setzen
        var emailLink = document.querySelector('.email-link');
        if(emailLink) {
            emailLink.textContent = lang === 'de' ? 'Jetzt Kontakt aufnehmen' : 'Get in Touch Now';
        }
    }

    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.body.classList.toggle('dark-mode', theme === 'dark');
    }

    langToggles.forEach(toggle => toggle.addEventListener('click', () => setLanguage(currentLang === 'de' ? 'en' : 'de')));
    themeToggles.forEach(toggle => toggle.addEventListener('click', () => setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark')));

    // --- INITIALISIERUNG BEIM LADEN DER SEITE ---
    // Sprache setzen
    setLanguage(currentLang);
    
    // Theme setzen (mit Berücksichtigung der System-Einstellung)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }

    // --- BESTEHENDE LOGIK (SCROLL-EFFEKTE) ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navObserver = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
         });
    }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));

    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu .nav-links a');
    burgerMenu.addEventListener('click', () => document.body.classList.toggle('mobile-nav-open'));
    mobileNavLinks.forEach(link => link.addEventListener('click', () => document.body.classList.remove('mobile-nav-open')));

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('visible', window.scrollY > 300));
}); 