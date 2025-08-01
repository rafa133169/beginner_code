# Beginner Code

Plataforma educativa para aprender programación desde cero, con enfoque en SQL, Python, C#, GitHub, JavaScript, C++, HTML/CSS y Lógica de Programación.

---

## 🚀 Características principales
- **Pantalla de bienvenida animada**
- **Flujo guiado para orientación o acceso directo a los temas**
- **Selección de temas con navegación dinámica**
- **Vista de contenido por tema, con recursos y documentos PDF**
- **Visor de PDF integrado**
- **Diseño responsivo y visual atractivo**

---

## 📁 Estructura del proyecto

```
beginner-code/
├── public/
│   ├── assets/           # Imágenes y logos
│   └── pdfs/             # Archivos PDF de recursos
├── src/
│   ├── pages/
│   │   ├── BeginnerCodeWelcome.tsx
│   │   ├── ProgrammingPathView.tsx
│   │   ├── HomeView.tsx
│   │   ├── ContentView.tsx
│   │   └── DocumentView.tsx
│   └── App.tsx           # Configuración de rutas
│   └── ...
├── package.json
└── README.md
```

---

## 🛠️ Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/rafa133169/beginner_code.git
   cd beginner-code
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Ejecuta la app en desarrollo:**
   ```bash
   ionic serve
   ```
4. **Abre en tu navegador:**
   - [http://localhost:8100](http://localhost:8100) (o el puerto que indique Vite)

---

## 📚 Flujo de navegación

1. **Bienvenida:**
   - Se muestra `BeginnerCodeWelcome` unos segundos.
2. **Orientación:**
   - Se navega a `ProgrammingPathView`.
   - Si el usuario omite, va a `HomeView`.
3. **Selección de tema:**
   - En `HomeView`, elige un tema y navega a `/content/:tema`.
4. **Vista de contenido:**
   - `ContentView` muestra información y recursos del tema.
   - Al hacer clic en un documento, navega a `/document/:doc`.
5. **Visor de PDF:**
   - `DocumentView` muestra el PDF seleccionado.

---

## 📄 Agregar o actualizar PDFs

1. Coloca tus archivos PDF en la carpeta:
   ```
   public/pdfs/
   ```
2. Asegúrate de que el nombre del archivo coincida exactamente con el que se usa en los recursos de cada tema en `ContentView.tsx`.
3. Para el tema C++, todos los recursos apuntan a `Dominando-C-Una-Guia-Completa.pdf`.

---

## 🧩 Dependencias principales
- [React](https://react.dev/)
- [Ionic React](https://ionicframework.com/docs/react)
- [react-router-dom](https://reactrouter.com/)
- [react-pdf](https://github.com/wojtekmaj/react-pdf)
- [pdfjs-dist](https://github.com/mozilla/pdfjs-dist)
- [TailwindCSS](https://tailwindcss.com/) (para estilos utilitarios)

---

## 📝 Personalización
- Puedes agregar más temas y recursos editando el objeto `contentData` en `ContentView.tsx`.
- Para cambiar la bienvenida, edita `BeginnerCodeWelcome.tsx`.
- Para cambiar el flujo de navegación, ajusta las rutas en `App.tsx`.

---

## 👨‍💻 Autor
- Canche Monje Jose Rafael
- Suarez Vargas Mauricio

---

## 📢 Notas
- Si tienes problemas con la visualización de PDFs, asegúrate de que el worker de PDF.js esté correctamente configurado y los archivos estén en la ruta correcta.
- El proyecto está optimizado para Vite + React + Ionic.

---

¡Disfruta aprendiendo y enseñando programación con Beginner Code!