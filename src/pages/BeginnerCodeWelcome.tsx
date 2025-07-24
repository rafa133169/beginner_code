import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonPage } from '@ionic/react';
import { Book, GraduationCap } from 'lucide-react';

const BeginnerCodeWelcome: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/orientacion');
    }, 3500); // 3.5 segundos
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent>
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-400 to-blue-600 flex flex-col items-center justify-center px-4 py-8">
          
          {/* Logo y título principal */}
          <div className="flex flex-col items-center mb-12 animate-fade-in">
            <img src="/assets/logo_beginner_code.png" alt="Logo Beginner Code" className="w-48 md:w-64 lg:w-72 mb-2" />
          </div>

          {/* Imagen de subtítulo con llaves */}
          <div className="flex justify-center items-center w-full my-8">
            <img src="/assets/subtitulo_con_llaves.png" alt="Subtítulo con llaves" className="w-80 md:w-[28rem] lg:w-[32rem] h-auto" />
          </div>

          {/* Elementos decorativos flotantes */}
          <div className="absolute top-20 left-8 opacity-30">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm rotate-12">
              <span className="text-white font-mono text-sm">HTML</span>
            </div>
          </div>
          
          <div className="absolute top-32 right-8 opacity-30">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm -rotate-12">
              <span className="text-white font-mono text-sm">CSS</span>
            </div>
          </div>
          
          <div className="absolute bottom-32 left-12 opacity-30">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm rotate-6">
              <span className="text-white font-mono text-sm">JS</span>
            </div>
          </div>
          
          <div className="absolute bottom-40 right-16 opacity-30">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm -rotate-6">
              <span className="text-white font-mono text-sm">React</span>
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default BeginnerCodeWelcome;