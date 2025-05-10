import { IonApp, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import PieChart from '../components/SmartTV/ChartComponents/PieChart';
import BarChart from '../components/SmartTV/ChartComponents/BarChart';
import LineChart from '../components/SmartTV/ChartComponents/LineChart';

const SmartTvDashboard = () => {
  // Datos ficticios para los gráficos
  const pieData = {
    labels: ['Medicina A', 'Medicina B', 'Medicina C'],
    datasets: [{
      data: [35, 40, 25],
      backgroundColor: ['#FF52EE', '#36A2EB', '#FFCE56']
    }]
  };

  const barData = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    datasets: [{
      label: 'Tomas registradas',
      data: [12, 19, 8, 15, 12, 10, 7],
      backgroundColor: '#FF52EE'
    }]
  };

  const lineData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Uso mensual',
      data: [65, 59, 80, 81, 56, 72],
      borderColor: '#FF52EE',
      fill: false
    }]
  };

  return (
    <IonApp>
      <IonContent className="bg-gray-100">
        {/* Header del Dashboard */}
        <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <h1 className="text-4xl font-bold">Panel de Control Médico</h1>
          <p className="text-xl mt-2">Resumen de seguimiento de medicación</p>
        </div>

        {/* Contenido principal */}
        <IonGrid className="p-6 max-w-7xl mx-auto">
          <IonRow>
            {/* Tarjetas de resumen */}
            <IonCol size="12" sizeMd="4">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Tomas Hoy</IonCardTitle>
                </IonCardHeader>
                <div className="p-6 text-center">
                  <span className="text-5xl font-bold text-pink-500">8</span>
                  <p className="text-xl mt-2 text-gray-600">de 12 programadas</p>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Próxima Toma</IonCardTitle>
                </IonCardHeader>
                <div className="p-6 text-center">
                  <span className="text-5xl font-bold text-pink-500">21:00</span>
                  <p className="text-xl mt-2 text-gray-600">Medicina B - 1 comprimido</p>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Cumplimiento</IonCardTitle>
                </IonCardHeader>
                <div className="p-6 text-center">
                  <span className="text-5xl font-bold text-pink-500">92%</span>
                  <p className="text-xl mt-2 text-gray-600">esta semana</p>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Gráficos */}
          <IonRow className="mt-8">
            <IonCol size="12" sizeLg="4">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Distribución de Medicinas</IonCardTitle>
                </IonCardHeader>
                <div className="p-4 h-64">
                  <PieChart data={pieData} />
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="8">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Registro Semanal</IonCardTitle>
                </IonCardHeader>
                <div className="p-4 h-64">
                  <BarChart data={barData} />
                </div>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="mt-8">
            <IonCol size="12">
              <IonCard className="h-full bg-white rounded-xl shadow-lg">
                <IonCardHeader>
                  <IonCardTitle className="text-2xl font-bold text-gray-800">Tendencia Mensual</IonCardTitle>
                </IonCardHeader>
                <div className="p-4 h-80">
                  <LineChart data={lineData} />
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default SmartTvDashboard;