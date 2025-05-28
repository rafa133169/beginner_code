import { IonApp, IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

import '../../main.css'

const amigas = [
  {
    nombre: "Valeria García",
    estado: "Por tomar",
    imagen: "/../public/woman1.png"
  },
  {
    nombre: "Yesenia Torres",
    estado: "Por tomar",
    imagen: "/../public/woman2.png"
  },
  {
    nombre: "Viridiana Álvarez",
    estado: "Por tomar",
    imagen: "/../public/woman3.png"
  },
  {
    nombre: "Luna Aguilar",
    estado: "Por tomar",
    imagen: "/../public/woman4.png"
  },
];

const getCurrentDate = () => {
  const now = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return `${dayName} ${day} de ${month} del ${year}`;
};


const data = {
  labels: ['04/05', '05/05', '06/05', '07/05', '08/05'],
  datasets: [
    {
      label: 'Hora de toma',
      data: [21, 22, 21.5, 21, 22],
      borderColor: 'rgba(223, 122, 146, 1)', // #DF7A92
      backgroundColor: 'rgba(255, 208, 230, 0.3)', // #FFD0E6
      tension: 0.4,
      fill: true,
      pointBackgroundColor: 'rgba(243, 111, 157, 1)', // #F36F9D
      pointRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      min: 20,
      max: 23,
      ticks: {
        stepSize: 1,
        callback: (value: number) => `${value}:00`,
      },
      grid: { color: 'rgba(223, 122, 146, 0.1)' },
    },
    x: {
      grid: { display: false },
    },
  },
};

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonApp className='bg-[#DF7A92]'>
      <IonPage>
        <IonContent className="min-h-screen pb-24" style={{ background: '#FFDEED' }}>
          {/* Header */}
          <div className="flex items-center px-4 pt-8" >
            <img src="/../public/woman.png" alt="Laura" className="w-12 h-12 rounded-full -mr-3 z-40" />
            <h2 className="text-xl font-bold bg-[#DF7A92] text-white px-4 py-1 rounded-lg">Hola, Laura</h2>
          </div>

          {/* Estado de protección */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mt-4 flex items-center justify-between border-4 border-[#DF7A92]">
            <div>
              <div className="font-bold text-lg text-gray-800">Estado de protección</div>
              <div className="w-40 h-3 rounded-full mt-2 mb-1" style={{ background: 'var(--color-gradient-2)' }}>
                <div className="h-3 bg-green-500 rounded-full" style={{ width: "80%" }} />
              </div>
              <div className="text-xs text-green-600 font-medium">Estás protegida</div>
              <div className="text-xs text-gray-500 mt-1">{getCurrentDate()}</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-600 mb-1">Píldora actual</span>
              <div className="rounded-lg px-3 py-2 text-center" style={{ background: 'var(--color-gradient-2)' }}>
                <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>20</span>
                <span className="text-xs text-gray-700"> de 28</span>
              </div>
            </div>
          </div>

          {/* Mascota */}
          <div className="flex justify-center">
            <img src="/../public/assets/images/feliz.png" alt="Mascota" className="w-58 h-58" />
          </div>

          {/* Botón calendario */}
          <div className="flex justify-center mb-2">
            <IonButton
              expand="block"
              style={{
                '--background': 'var(--color-primary)',
                '--border-radius': '16px',
                fontWeight: 'bold',
                fontSize: '18px',
                width: '70%',
                marginBottom: '16px',
                textTransform: 'none',
              }}
              onClick={() => history.push('/calendar')}
            >
              Visualizar Calendario
            </IonButton>
          </div>

          {/* Toma de hoy */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/../public/reloj.png" alt="Alarma" className="w-12 h-12 mr-3" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">Toma de hoy</div>
                  <div className="text-xs text-gray-500">{getCurrentDate()}</div>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs font-mono px-2 py-1 rounded-lg" style={{ background: 'var(--color-gradient-2)', color: 'var(--color-primary)' }}>
                      08 : 30
                    </span>
                    <span className="ml-2 text-sm text-gray-700">PM</span>
                  </div>
                </div>
              </div>
              <IonButton
                size="small"
                style={{
                  '--background': 'var(--color-button)',
                  '--color': 'var(--color-secundary)',
                  '--border-radius': '10px',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  textTransform: 'none',
                  padding: '6px 12px',
                }}
              >
                Registrar toma
              </IonButton>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-left">Próxima toma en 02:00 hrs</div>
          </div>




          {/* Estado del ciclo */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
            <div className="flex items-start justify-between gap-4">
              {/* Información del ciclo */}
              <div className="flex-1">
                <div className="text-sm text-gray-800 font-semibold">
                  Estado del ciclo:&nbsp;<span className="font-bold text-gray-900"><br></br>En toma</span>
                </div>
                <div className="text-xs text-gray-700 mt-1">Inicio: 30 de abril</div>
                <div className="text-xs text-gray-700">Fin: 28 de mayo</div>
              </div>

              {/* Card pequeño a la derecha */}
              <div className="rounded-lg px-2 py-2 text-center w-32 leading-tight" style={{ background: 'var(--color-gradient-1)' }}>
                <span className="text-xs text-gray-700 leading-none block">Ciclo de duracion:</span>
                <div className="text-xs font-bold mb-1 leading-none" style={{ color: 'var(--color-primary)' }}>28 días</div>
                <IonButton
                  size="small"
                  fill="outline"
                  style={{
                    '--border-color': 'var(--color-primary)',
                    '--color': 'var(--color-secundary)',
                    '--border-radius': '12px',
                    '--background': 'var(--color-button)',
                    '--text-color': 'var(--color-primary)',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    height: '26px',
                    padding: '0 8px',
                    textTransform: 'none',
                  }}
                >
                  Ajustes de la toma
                </IonButton>
              </div>
            </div>
          </div>


          {/* Ciclo menstrual */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
            <div className="flex items-start justify-between gap-4">
              {/* Información del ciclo */}
              <div className="flex-1">
                <div className="text-sm text-gray-800 font-semibold">
                  Ciclo menstrual:&nbsp;<span className="font-bold text-gray-900"><br />Fase de Lútea</span>
                </div>
                <div className="text-xs text-gray-700 mt-1">Último periodo: 17 de mayo</div>
                <div className="text-xs text-gray-700">Próximo periodo: 14 de junio</div>
              </div>

              {/* Card pequeño a la derecha */}
              <div className="rounded-lg px-2 py-2 text-center w-32 leading-tight" style={{ background: 'var(--color-gradient-1)' }}>
                <span className="text-xs text-gray-700 leading-none block">Próximo periodo en:</span>
                <div className="text-xs font-bold mb-1 leading-none" style={{ color: 'var(--color-primary)' }}>24 días</div>
                <IonButton
                  size="small"
                  fill="outline"
                  style={{
                    '--border-color': 'var(--color-primary)',
                    '--color': 'var(--color-secundary)',
                    '--border-radius': '12px',
                    '--background': 'var(--color-button)',
                    '--text-color': 'var(--color-primary)',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    height: '26px',
                    padding: '0 8px',
                    textTransform: 'none',
                  }}
                >
                  Ajustes del periodo
                </IonButton>
              </div>
            </div>
          </div>

          {/* Registro de tomas recientes */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
            <div className="font-bold text-lg text-gray-800 mb-2">Historial de tomas recientes</div>
            <Line data={data} options={options} />
          </div>

          {/* Amigas */}
          <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-lg text-gray-800">Amigas</div>
              <button className="text-[#DF7A92] text-sm font-semibold">Ver más...</button>
            </div>
            {amigas.map((amiga, idx) => (
              <div key={idx} className="flex items-center justify-between border-b last:border-b-0 py-2" style={{ borderColor: 'var(--color-gradient-2)' }}>
                <div className="flex items-center">
                  <img src={amiga.imagen} alt={amiga.nombre} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-800">{amiga.nombre}</div>
                    <div className="text-xs text-gray-500">{amiga.estado}</div>
                  </div>
                </div>
                <IonButton
                  size="small"
                  style={{
                    '--background': 'var(--color-button)',
                    '--color': 'var(--color-secundary)',
                    '--border-radius': '12px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  Recordar
                </IonButton>
              </div>
            ))}
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;