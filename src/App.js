import './App.css';
import Typography from '@mui/material/Typography';
import Formulario from './Components/Fomulario/Formulario';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Typography variant="h4" gutterBottom margin="2rem">
        Registro de sede
      </Typography>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
