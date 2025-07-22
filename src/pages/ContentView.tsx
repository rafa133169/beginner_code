import React from 'react';
import { IonPage } from '@ionic/react';
import { useParams } from 'react-router-dom';
type Params = { tema: string };

const contentData = {
  'bd-sql': {
    title: 'BASE DE DATOS SQL',
    description: 'Aprende los conceptos fundamentales de bases de datos relacionales y domina el lenguaje SQL paso a paso',
    temas: [
      '1.- Fundamentos de bases de datos',
      '2.- Operaciones básicas en SQL',
      '3.- Manipulación de estructuras',
      '4.- Consultas avanzadas',
      '5.- Extras para principiantes curiosos',
    ],
    recursos: [
      'Documento1.pdf',
      'Documento2.pdf',
      'Documento3.pdf',
      'Documento4.pdf',
    ],
  },
  'python': {
    title: 'PYTHON',
    description: 'Aprende Python desde cero con ejemplos prácticos y ejercicios interactivos.',
    temas: [
      '1.- Introducción a Python',
      '2.- Tipos de datos y variables',
      '3.- Estructuras de control',
      '4.- Funciones y módulos',
      '5.- Proyectos prácticos',
    ],
    recursos: [
      'Python1.pdf',
      'Python2.pdf',
      'Python3.pdf',
    ],
  },
  'csharp': {
    title: 'C#',
    description: 'Domina la programación en C# desde lo básico hasta conceptos avanzados.',
    temas: [
      '1.- Introducción a C#',
      '2.- Sintaxis y variables',
      '3.- Programación orientada a objetos',
      '4.- Colecciones y LINQ',
      '5.- Proyectos prácticos',
    ],
    recursos: [
      'CSharp1.pdf',
      'CSharp2.pdf',
    ],
  },
  'github': {
    title: 'GITHUB',
    description: 'Aprende a usar Git y GitHub para el control de versiones y colaboración.',
    temas: [
      '1.- Introducción a Git',
      '2.- Repositorios y ramas',
      '3.- Colaboración y pull requests',
      '4.- Buenas prácticas',
    ],
    recursos: [
      'GitHub1.pdf',
      'GitHub2.pdf',
    ],
  },
  'java-script': {
    title: 'JAVA SCRIPT',
    description: 'Aprende JavaScript desde lo más básico hasta desarrollo web interactivo.',
    temas: [
      '1.- Introducción a JavaScript',
      '2.- Variables y tipos de datos',
      '3.- Funciones y eventos',
      '4.- Manipulación del DOM',
      '5.- Proyectos web',
    ],
    recursos: [
      'JavaScript1.pdf',
      'JavaScript2.pdf',
    ],
  },
  'c++': {
    title: 'C++',
    description: 'Aprende C++ desde los fundamentos hasta programación avanzada.',
    temas: [
      '1.- Introducción a C++',
      '2.- Sintaxis y variables',
      '3.- Programación orientada a objetos',
      '4.- Algoritmos y estructuras de datos',
      '5.- Proyectos prácticos',
    ],
    recursos: [
      'C++1.pdf',
      'C++2.pdf',
    ],
  },
  'html-y-css': {
    title: 'HTML y CSS',
    description: 'Aprende a crear páginas web con HTML y CSS desde cero.',
    temas: [
      '1.- Estructura básica de HTML',
      '2.- Estilos con CSS',
      '3.- Layouts y responsive',
      '4.- Formularios y validaciones',
      '5.- Proyectos web',
    ],
    recursos: [
      'HTMLCSS1.pdf',
      'HTMLCSS2.pdf',
    ],
  },
  'logica-de-programacion': {
    title: 'LÓGICA DE PROGRAMACIÓN',
    description: 'Desarrolla tu pensamiento lógico para resolver problemas de programación.',
    temas: [
      '1.- Algoritmos y diagramas de flujo',
      '2.- Estructuras de control',
      '3.- Prácticas de lógica',
      '4.- Retos y ejercicios',
    ],
    recursos: [
      'Logica1.pdf',
      'Logica2.pdf',
    ],
  },
};

export default function ContentView() {
  const { tema } = useParams<Params>();
  const data = contentData[tema as keyof typeof contentData] || contentData['bd-sql'];

  return (
    <IonPage>
      <div className="min-h-screen w-full bg-[#c6eafe] flex flex-col items-center font-sans px-4 py-2 overflow-auto">
        {/* Logo y título */}
        <div className="flex flex-col items-center mt-2 mb-2 w-full">
          <div className="flex flex-row items-center justify-center gap-2 mb-1 w-full">
            <img src="/assets/beginner_code.png" alt="Logo" className="w-10 h-10" style={{ background: 'none' }} />
            <h1 className="text-base font-bold text-black leading-tight text-center whitespace-normal" style={{ fontFamily: 'Jersey 25, sans-serif' }}>{data.title}</h1>
          </div>
          <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-4"></div>
        </div>

        {/* Descripción */}
        <div className="w-full max-w-xs md:max-w-md bg-[#a8d8f8] rounded-lg px-3 py-2 mb-4">
          <p className="text-base md:text-lg text-black text-center" style={{ fontFamily: 'Itim, cursive' }}>
            {data.description}
          </p>
        </div>

        {/* Botón de inicio */}
        <div className="flex flex-row items-center justify-center mb-4 gap-2">
          <img src="/assets/logo_bebiendo_cafe.png" alt="Logo bebiendo café" className="w-10 h-10 object-contain" />
          <button className="bg-[#2a6ebc] text-white text-base font-semibold rounded-full px-4 py-2 shadow hover:bg-[#1d4e8a] transition-all flex items-center" style={{ fontFamily: 'Itim, cursive' }}>
            ¿Comenzamos desde el principio?
          </button>
        </div>

        {/* Temas disponibles */}
        <h2 className="text-lg font-bold text-black text-center mb-2" style={{ fontFamily: 'Jersey 25, sans-serif' }}>Temas disponibles</h2>
        <div className="w-full max-w-xs md:max-w-md flex flex-col gap-2 mb-4">
        <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-4"></div>

          {data.temas.map((t: string, idx: number) => (
            <div
              key={t}
              className="bg-[#8ed2fa] text-black text-base font-semibold rounded-md px-3 py-2 text-center shadow-sm"
              style={{ fontFamily: 'Itim, cursive' }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Recursos disponibles */}
        <h2 className="text-lg font-bold text-black text-center mb-1" style={{ fontFamily: 'Jersey 25, sans-serif' }}>Recursos disponibles</h2>
        <p className="text-base md:text-lg text-black text-center mb-2" style={{ fontFamily: 'Itim, cursive' }}>
          Accede a cualquiera de nuestros recursos educativos digitales
        </p>
        <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-4">
        <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-4"></div>

        </div>

        <div className="w-full max-w-xs md:max-w-md flex flex-col gap-2 mb-4">
          {data.recursos.map((doc: string, idx: number) => (
            <a
              key={doc}
              href={tema === 'c++' ? '/document/Dominando-C-Una-Guia-Completa.pdf' : `/document/${encodeURIComponent(doc)}`}
              className="bg-[#2a6ebc] text-white text-base font-semibold rounded-md px-3 py-2 text-center shadow hover:bg-[#1d4e8a] transition-all"
              style={{ fontFamily: 'Itim, cursive' }}
            >
              {doc}
            </a>
          ))}
        </div>
      </div>
    </IonPage>
  );
} 