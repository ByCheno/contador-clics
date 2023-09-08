import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import amLogo from './img/amLogo.webp';
import { useState } from 'react';

function App() {

  const [laps, setLaps] = useState(0);

  const oneMoreLap = () => {
    setLaps(laps + 1);  
  }

  const resetCar = () => {
    setLaps(0);
  }

  const oneMoreLapAA = () => {
    setLaps(laps + 1);  
  }

  const resetCarasd = () => {
    setLaps(0);
  }

  return (
    <div className="App">
        <div className='logo-AM'>
          <img className='img-logo' src={amLogo} alt='Logo de Aston Martin'/>
          <h1 className='encabezado'>VUELTAS DE PRUEBA PARA FERNANDO ALONSO</h1>
        </div>
        <dev className='contenedor-principal'>
            <Contador numClics= {laps} />
            <Boton text={'Probar monoplaza'}
            isButtonClic={true}
            taller={oneMoreLap}/>
            <Boton text={'Volver al garaje'}
            isButtonClic={false}
            taller={resetCar}/>
        </dev>
    </div>
  );
}

export default App;
