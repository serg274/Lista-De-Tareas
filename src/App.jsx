import './App.css';
import logosmo from './imagenes/logo1Web.webp';
import ListaDeTareas from './componentes/ListaDeTareas';


function AppTareas() {
  return (
    <div className='App-tareas'>
      <div className='logo-contenedor'>
        <img className='logo' src={logosmo} alt='logo S.M.O' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default AppTareas;
