import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const temasCol1 = [
  { id: 'bd-sql', titulo: 'BD SQL' },
  { id: 'python', titulo: 'Python' },
  { id: 'csharp', titulo: 'C#' },
  { id: 'github', titulo: 'GitHub' },
];
const temasCol2 = [
  { id: 'java-script', titulo: 'Java Script' },
  { id: 'c++', titulo: 'C++' },
  { id: 'html-y-css', titulo: 'HTML y CSS' },
  { id: 'logica-de-programacion', titulo: 'Lógica de Programación' },
];

export default function HomeView() {
    const history = useHistory();
    const handleItemClick = (id: string) => {
        // Normaliza el nombre del tema a un slug
        history.push(`/content/${id}`);
    };
    return (
        <IonPage>
        <div className="min-h-screen w-full bg-[#c6eafe] flex flex-col items-center font-sans px-4 overflow-auto">
            {/* Logo y título */}
            <div className="flex flex-col items-center mt-4 mb-2 w-full">
                <div className="flex flex-row items-center justify-center gap-2 mb-1 w-full">
                    <img src="/assets/beginner_code.png" alt="Logo" className="w-14 h-14" style={{ background: 'none' }} />
                    <h1 className="text-base font-bold text-black leading-tight text-center whitespace-normal" style={{ fontFamily: 'Jersey 25, sans-serif' }}>Bienvenido, ¿qué vamos a ver hoy?</h1>
                </div>
                {/* linea negra */}
                <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>
                {/* texto de seleccion de tema */}
                <p className="text-xl md:text-2xl text-black text-center" style={{ fontFamily: 'Itim, cursive' }}>Selecciona un tema para acceder al contenido</p>
            </div>

            {/* Cuadro de temas - versión HomePage */}
            <div className="w-[90%] max-w-xs bg-[#a8d8f8] rounded-lg border border-[#7ec3e6] flex flex-row justify-between mt-2 mb-4 py-2 px-2 shadow-md">
                <div className="flex flex-col w-1/2 divide-y divide-[#7ec3e6]">
                    {temasCol1.map((tema) => (
                        <div
                            key={tema.id}
                            className="py-8 text-center text-lg text-black font-bold select-none cursor-pointer hover:bg-[#9bd2f5] active:bg-[#8ec7ed] transition-colors duration-150"
                            onClick={() => handleItemClick(tema.id)}
                        >
                            {tema.titulo}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col w-1/2 divide-y divide-[#7ec3e6]">
                    {temasCol2.map((tema) => (
                        <div
                            key={tema.id}
                            className={`py-8 text-center text-black font-bold select-none cursor-pointer hover:bg-[#9bd2f5] active:bg-[#8ec7ed] transition-colors duration-150 text-lg ${tema.id === 'logica-de-programacion' ? 'text-base' : ''}`}
                            onClick={() => handleItemClick(tema.id)}
                        >
                            {tema.titulo}
                        </div>
                    ))}
                </div>
            </div>


            {/* Separador */}
            <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>


            {/* Comienza a programar hoy */}
            <div className="w-[90%] max-w-xs flex flex-col items-center mt-2 mb-2">
                <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>

                <h2 className="text-[15px] font-bold text-black mb-1 text-center">Comienza a programar hoy</h2>
                <div className="bg-[#a8d8f8] rounded-lg px-3 py-2 text-xs text-black text-center mb-2">
                <p className="text-xl md:text-2xl text-black text-center" style={{ fontFamily: 'Itim, cursive' }}>
                Beginner Code es una plataforma educativa gratuita, diseñada para que aprendas desde cero sin presiones, sin registro, y a tu ritmo
                </p>
                </div>
                <button className="max-w-xs w-full mx-auto bg-transparent border-none shadow-none p-0 mb-4 hover:opacity-90 transition-all" style={{ outline: 'none' }}>
                  <img src="/assets/button_orientacion.png" alt="Necesito orientación para comenzar" className="w-full h-auto block" />
                </button>
            </div>

            {/* Explora los temas */}
            <div className="w-[90%] max-w-xs flex flex-row items-center justify-center mb-2 gap-3">
                <img src="/assets/logo_bebiendo_cafe.png" alt="Logo bebiendo café" className="w-20 h-20 object-contain" />
                <p className="text-xl md:text-2xl text-black text-center" style={{ fontFamily: 'Itim, cursive' }}>Explora los temas que más te llaman la atención. ¡Tú eliges tu ritmo!</p>
            </div>

            {/* Separador linea negra */}
            <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6">
            <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>
            </div>


            {/* La mente detrás del proyecto */}
            <div className="w-full max-w-md bg-[#a8d8f8] rounded-xl px-4 py-3 flex flex-col items-start border border-[#b3e0fa]">
                <h2 className="text-lg md:text-xl font-bold text-black mb-2 text-left" style={{ fontFamily: 'Jersey 25, sans-serif' }}>La mente detrás del proyecto</h2>
                <div className="flex flex-row items-start w-full mb-2">
                    <div className="w-28 h-36 bg-[#18355c] rounded-full mr-4 flex-shrink-0 overflow-hidden flex items-center justify-center">
                        <img src="/assets/rvillegas.jpg" alt="R. Villegas" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-[15px] text-black text-left font-normal leading-tight" style={{ fontFamily: 'Itim, cursive' }}>
                        <p className="text-xl md:text-2xl text-black text-left" style={{ fontFamily: 'Itim, cursive' }}>Con vocación y compromiso, el profesor <b>R. Villegas</b> ha recopilado recursos útiles para acompañar a quienes se inician en la programación y necesitan una guía clara para comenzar.</p>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button
                      className="relative flex items-center justify-center px-0 py-0 border-none bg-transparent shadow-none rounded-full overflow-hidden"
                      style={{ width: '200px', height: '36px' }}
                    >
                      <img src="/assets/conoce_mas.png" alt="Conoce más aquí" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none rounded-full" />
                      <span className="relative z-10 text-white text-base font-semibold" style={{ fontFamily: 'Itim, cursive', textShadow: '1px 1px 2px #18355c' }}>
                        Conoce más aquí...
                      </span>
                    </button>
                </div>
            </div>

            {/* Separador */}
            <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>

            {/* Redes sociales */}
            <div className="w-full max-w-md bg-[#a8d8f8] rounded-xl px-4 py-3 flex flex-col items-center border border-[#b3e0fa] mt-2 mb-4">
                <div className="text-xl md:text-2xl text-black text-left mb-1" style={{ fontFamily: 'Itim, cursive' }}>Sigue nuestras redes sociales</div>
                <div className="w-full max-w-xs md:max-w-md h-0.5 bg-black mb-6"></div>

                <div className="flex flex-row justify-center items-center gap-2 w-full">
                    <div className="flex flex-col items-center">
                        <img src="/assets/bcoder_icon.png" alt="B_Coder" className="w-6 h-6 mb-1" />
                        <span className="text-[10px] text-black">B_Coder</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/instagram_icon.png" alt="BCoder" className="w-6 h-6 mb-1" />
                        <span className="text-[10px] text-black">BCoder</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/web_icon.png" alt="bcodingmx.com" className="w-6 h-6 mb-1" />
                        <span className="text-[10px] text-black">bcodingmx.com</span>
                    </div>
                </div>
            </div>
        </div>
        </IonPage>
    );
} 