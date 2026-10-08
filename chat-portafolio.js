// ==========================================================
//  💬 Lo que dice el chat del PORTAFOLIO (respuestas preparadas + IA)
//
//  Para agregar una respuesta, copia un bloque { ... }, cambia:
//    id          un nombre corto sin espacios
//    chip        el texto del botoncito (opcional)
//    claves      palabras que activan la respuesta (en minúsculas)
//    respuesta   lo que contesta. [texto](enlace) crea un enlace
//    sugerencias botones que salen después (ids de otras respuestas)
//  Cada bloque termina con coma.
// ==========================================================
OmarexChat.iniciar({
    titulo: "🤖 Asistente de Omar",
    lado: "izquierda", // a la derecha ya está el botón "Volver arriba"
    etiquetaBoton: "Abrir chat con el asistente de Omar",
    aviso: "🤖 Asistente automático con IA, no una persona. Puede equivocarse. No escribas datos personales: lo que no esté en mis respuestas preparadas se envía a Google para generar la respuesta.",

    // Respuestas con IA cuando la pregunta no está en la lista de abajo
    ia: { url: "https://omarex-puntajes-server.onrender.com/chat", sitio: "portafolio" },

    tema: { fondo: "#0a0a14", texto: "#e0e0ff", burbuja: "#1a1a2e", acento: "#ff3131", sobreAcento: "#0d0d1a", linea: "#3a3a5e", enlace: "#ff6b6b" },
    temaClaro: { fondo: "#ffffff", texto: "#1a1a2e", burbuja: "#f1f1f6", acento: "#c81e1e", sobreAcento: "#ffffff", linea: "#dddddd" },

    saludo: "¡Hola! 👋 Soy el asistente automático (con IA) de Omar. Puedo contarte sobre sus servicios, proyectos y cómo contactarlo. ¿Qué quieres saber?",
    noEntendi: "No estoy seguro de haber entendido 😅. Soy un asistente con respuestas preparadas, así que puedo fallar. Prueba con uno de los botones o escríbele directo a Omar: [omarchavez.web@gmail.com](mailto:omarchavez.web@gmail.com) o por el [formulario de contacto](#contacto).",

    inicio: ["servicios", "proyectos", "precio", "contacto"],

    intenciones: [
        {
            id: "saludo",
            claves: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "saludos"],
            respuesta: "¡Hola! 😊 ¿En qué te puedo ayudar? Elige un botón o escribe tu pregunta."
        },
        {
            id: "servicios",
            chip: "💻 Servicios",
            claves: ["servicio", "ofrece", "ofreces", "haces", "hace omar", "trabajo", "trabajar", "freelance", "pagina web", "sitio web", "web", "disponible", "disponibilidad", "contratar", "cotizar", "cotizacion", "proyecto para mi", "necesito una pagina"],
            respuesta: "Omar está disponible para proyectos freelance de páginas web 💻\nLas programa con HTML, CSS y JavaScript, cuidando el diseño y la experiencia de quien las usa, y actualmente aprende React, Next.js y TypeScript.\nSi tienes un proyecto en mente, cuéntaselo en el [formulario de contacto](#contacto).",
            sugerencias: ["proyectos", "precio", "contacto", "habilidades"]
        },
        {
            id: "proyectos",
            chip: "📂 Proyectos",
            claves: ["proyecto", "proyectos", "portafolio", "trabajos", "ejemplos", "que has hecho", "muestras", "juegos que hizo", "omarex games"],
            respuesta: "Algunos de sus proyectos 📂\n• [OMAREX Games](https://chavezdelmazo9509-rgb.github.io/omarex-games-/): página con 5 minijuegos y Top 10 compartido.\n• [Mi Mini Generador](https://chavezdelmazo9509-rgb.github.io/omarex-games-/practica/): su primer programa hecho 100% por él.\n• Herramientas para creadores: un planificador de TikToks y un generador de títulos.\n• [Servidor de puntajes](https://github.com/chavezdelmazo9509-rgb/omarex-puntajes-server): Node.js y base de datos.\nLos ves todos en la sección [Proyectos](#proyectos). Algunos se desarrollaron con ayuda de IA y así se indica en cada uno.",
            sugerencias: ["habilidades", "servicios", "contacto"]
        },
        {
            id: "habilidades",
            chip: "🛠️ Habilidades",
            claves: ["habilidad", "habilidades", "tecnologia", "tecnologias", "sabe", "sabes", "lenguaje", "lenguajes", "html", "css", "javascript", "react", "next", "typescript", "node", "stack"],
            respuesta: "Habilidades de Omar 🛠️\n• HTML, CSS y JavaScript\n• Git y GitHub, GitHub Pages\n• APIs, localStorage y bases de datos\n• Node.js y Express (nivel básico)\n• Aprendiendo React, Next.js y TypeScript\n• Desarrollo con ayuda de IA\nMira la lista completa en [Habilidades](#habilidades).",
            sugerencias: ["proyectos", "experiencia", "cv"]
        },
        {
            id: "experiencia",
            chip: "🧑‍💼 Experiencia",
            claves: ["experiencia", "clientes", "empresa", "empresas", "practicas", "ha trabajado", "trabajado", "trabajaste", "donde trabaja", "donde trabajo"],
            respuesta: "Omar ha trabajado en prácticas y en proyectos para clientes reales (un sitio inmobiliario y el sitio de una marca de alimento para perros), y esos trabajos siguen en curso 🧑‍💼\nLos detalles están en su [CV](CV_Omar_Chavez.pdf).",
            sugerencias: ["cv", "habilidades", "contacto"]
        },
        {
            id: "estudios",
            claves: ["estudio", "estudios", "estudia", "carrera", "universidad", "educacion", "formacion", "ingenieria", "diseno web", "curso"],
            respuesta: "Omar estudió Ingeniería de Sistemas (1 ciclo) y actualmente estudia diseño web 🎓, además de aprender por su cuenta practicando en proyectos reales.",
            sugerencias: ["habilidades", "experiencia", "cv"]
        },
        {
            id: "cv",
            chip: "📄 CV",
            claves: ["cv", "curriculum", "curriculo", "hoja de vida", "descargar"],
            respuesta: "Puedes descargar el CV de Omar aquí 📄: [Descargar CV](CV_Omar_Chavez.pdf)",
            sugerencias: ["experiencia", "contacto", "proyectos"]
        },
        {
            id: "precio",
            chip: "💰 Precios",
            claves: ["precio", "precios", "cuanto cuesta", "cuanto cobra", "cuanto cobras", "cobras", "cobra", "costo", "costos", "tarifa", "tarifas", "presupuesto", "plazo", "plazos", "cuanto demora", "cuanto tarda", "tiempo de entrega", "pagar", "soles", "dolares"],
            respuesta: "El precio y el tiempo dependen de lo que necesites: tipo de página, cantidad de secciones, funciones y fechas 💬\nYo no puedo darte cifras porque no quiero inventarlas 🙂. Omar prefiere conocer tu proyecto y luego enviarte una propuesta.\nCuéntale qué necesitas por el [formulario de contacto](#contacto) o escribe a [omarchavez.web@gmail.com](mailto:omarchavez.web@gmail.com).",
            sugerencias: ["servicios", "contacto", "proyectos"]
        },
        {
            id: "contacto",
            chip: "✉️ Contacto",
            claves: ["contacto", "contactar", "contactarlo", "correo", "email", "mail", "escribir", "escribirle", "hablar", "mensaje", "comunicarme", "whatsapp", "telefono", "numero", "llamar"],
            respuesta: "Puedes contactar a Omar así ✉️\n• Correo: [omarchavez.web@gmail.com](mailto:omarchavez.web@gmail.com)\n• [Formulario de contacto](#contacto) en esta página\n• TikTok: [@omarex690](https://www.tiktok.com/@omarex690)\n• YouTube: [@omarex_official](https://www.youtube.com/@omarex_official)\nNo tengo un número de WhatsApp para darte; usa el correo o el formulario.",
            sugerencias: ["servicios", "precio", "cv"]
        },
        {
            id: "redes",
            claves: ["tiktok", "youtube", "redes", "redes sociales", "canal", "videos", "contenido", "gaming", "gamer", "instagram", "clips"],
            respuesta: "Omar crea contenido de videojuegos 🎮\n• TikTok: [@omarex690](https://www.tiktok.com/@omarex690)\n• YouTube: [@omarex_official](https://www.youtube.com/@omarex_official)\nAbajo, en [Clips](#clips), ves sus últimos videos.",
            sugerencias: ["proyectos", "contacto"]
        },
        {
            id: "juegos",
            claves: ["juegos", "jugar", "minijuegos", "snake", "memoria", "adivina"],
            respuesta: "Omar programó una página con 5 minijuegos que puedes jugar gratis 🎮: [OMAREX Games](https://chavezdelmazo9509-rgb.github.io/omarex-games-/#jugar)",
            sugerencias: ["proyectos", "contacto"]
        },
        {
            id: "ia",
            claves: ["eres una persona", "eres humano", "eres un robot", "eres una ia", "eres ia", "inteligencia artificial", "chatgpt", "bot", "robot", "quien eres", "quien eres tu", "que eres"],
            respuesta: "Soy un asistente automático 🤖, no una persona. Respondo con textos preparados por Omar y, si tu pregunta no está en ellos, uso una IA (un modelo de Google) que puede equivocarse. Si necesitas algo seguro, escríbele directo: [omarchavez.web@gmail.com](mailto:omarchavez.web@gmail.com)",
            sugerencias: ["servicios", "contacto"]
        },
        {
            id: "gracias",
            claves: ["gracias", "genial", "perfecto", "excelente", "chao", "adios", "hasta luego", "ok gracias"],
            respuesta: "¡Con gusto! 😊 Si quieres hablar con Omar, usa el [formulario de contacto](#contacto). ¡Que tengas un buen día!"
        }
    ]
});
