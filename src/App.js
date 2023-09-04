import './App.css';
import Boton from './componentes/Boton';
import amLogo from './img/amLogo.webp';

function App() {

  const oneMoreLap = () => {
    console.log('Probando mejoras!!');
  }

  const resetCar = () => {
    console.log('Car is broken');
  }

  return (
    <div className="App">
      <div className='logo-AM'>
        <img className='img-logo' src={amLogo} alt='Logo de Aston Martin'/>
      </div>
      <dev className='contenedor-principal'>
        <Boton text={'Probar mejoras'}
          isButtonClic={true}
          taller={oneMoreLap}/>
          <Boton text={'Desmontar coche'}
          isButtonClic={false}
          taller={resetCar}/>
      </dev>
    </div>
  );
}

export default App;
