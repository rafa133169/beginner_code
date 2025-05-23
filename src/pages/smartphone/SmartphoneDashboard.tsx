import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonApp } from '@ionic/react';
import { PieChartMobile, BarChartMobile, LineChartMobile } from '../../components/Smartphone/Charts';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';


const MobileDashboard = () => {
  // Datos ficticios
  const medicationData = useMemo(() => ({
    daily: [
      { time: '08:00', medicine: 'Medicina A', taken: true },
      { time: '12:00', medicine: 'Medicina B', taken: false },
      { time: '16:00', medicine: 'Medicina C', taken: false },
      { time: '20:00', medicine: 'Medicina A', taken: false }
    ],
    stats: {
      weeklyCompletion: 85,
      nextDose: '16:00',
      mostUsed: 'Medicina A'
    },
    charts: {
      pie: {
        labels: ['Medicina A', 'Medicina B', 'Medicina C'],
        data: [45, 30, 25],
        colors: ['#FF52EE', '#36A2EB', '#FFCE56']
      },
      bar: {
        labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
        data: [4, 3, 2, 4, 3, 1, 2]
      },
      line: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        data: [80, 90, 85, 95]
      }
    }
  }), []);

  const history = useHistory();

  return (
    <IonApp>
    <IonPage>
      <IonContent className="ion-padding bg-gray-50">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mi Seguimiento</h1>
          <p className="text-gray-600">Hoy, {new Date().toLocaleDateString()}</p>

          <button
              className="ml-4 px-4 py-2 rounded-lg bg-pink-400 text-white font-semibold shadow"
              onClick={() => history.push('/mobile/settings')}
            >
              Configuración
            </button>
        </div>

        {/* Tarjetas de estado */}
        <IonGrid className="px-0">
          <IonRow>
            <IonCol size="12" sizeSm="6" sizeMd="4">
              <IonCard className="h-full rounded-xl shadow-sm">
                <IonCardHeader>
                  <IonCardTitle className="text-sm font-semibold">Cumplimiento</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-purple-600">
                      {medicationData.stats.weeklyCompletion}%
                    </span>
                    <div className="w-16 h-16">
                      <PieChartMobile 
                        data={[medicationData.stats.weeklyCompletion, 100-medicationData.stats.weeklyCompletion]} 
                        colors={['#FF52EE', '#E5E7EB']} 
                      />
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeSm="6" sizeMd="4">
              <IonCard className="h-full rounded-xl shadow-sm">
                <IonCardHeader>
                  <IonCardTitle className="text-sm font-semibold">Próxima toma</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-pink-500">
                      {medicationData.stats.nextDose}
                    </span>
                    <span className="text-gray-600 mt-1">
                      {medicationData.stats.mostUsed}
                    </span>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4" className="ion-hide-sm-down">
              <IonCard className="h-full rounded-xl shadow-sm">
                <IonCardHeader>
                  <IonCardTitle className="text-sm font-semibold">Tomas hoy</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-500">
                      {medicationData.daily.filter(d => d.taken).length}/{medicationData.daily.length}
                    </span>
                    <div className="text-right">
                      {medicationData.daily.map((item, index) => (
                        <div key={index} className={`text-xs ${item.taken ? 'text-green-500' : 'text-gray-400'}`}>
                          {item.time} - {item.medicine}
                        </div>
                      ))}
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Lista de tomas para móvil */}
        <div className="ion-hide-sm-up mt-4">
          <IonCard className="rounded-xl shadow-sm">
            <IonCardHeader>
              <IonCardTitle className="text-sm font-semibold">Tomas programadas</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="space-y-3">
                {medicationData.daily.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <div>
                      <span className={`font-medium ${item.taken ? 'text-green-600' : 'text-gray-800'}`}>
                        {item.time}
                      </span>
                      <span className="block text-xs text-gray-500">{item.medicine}</span>
                    </div>
                    <button 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.taken 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-pink-100 text-pink-800'
                      }`}
                    >
                      {item.taken ? 'Registrado' : 'Pendiente'}
                    </button>
                  </div>
                ))}
              </div>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Gráficos */}
        <div className="mt-6 space-y-6">
          <IonCard className="rounded-xl shadow-sm">
            <IonCardHeader>
              <IonCardTitle className="text-sm font-semibold">Distribución de medicinas</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="h-48">
                <PieChartMobile 
                  data={medicationData.charts.pie.data} 
                  labels={medicationData.charts.pie.labels} 
                  colors={medicationData.charts.pie.colors} 
                />
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="rounded-xl shadow-sm">
            <IonCardHeader>
              <IonCardTitle className="text-sm font-semibold">Tomas semanales</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="h-48">
                <BarChartMobile 
                  data={medicationData.charts.bar.data} 
                  labels={medicationData.charts.bar.labels} 
                  color="#FF52EE" 
                />
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="rounded-xl shadow-sm">
            <IonCardHeader>
              <IonCardTitle className="text-sm font-semibold">Progreso mensual</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="h-48">
                <LineChartMobile 
                  data={medicationData.charts.line.data} 
                  labels={medicationData.charts.line.labels} 
                  color="#FF52EE" 
                />
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
    </IonApp>
  );
};

export default MobileDashboard;