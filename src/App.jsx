import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionIntro from "./components/SectionIntro/SectiionIntro";
import PersonajesPage from "./pages/Personajes/PersonajesPage";
import EpisodiosPage from "./pages/Episodios/EpisodiosPage";
import SonidoEntrada from './components/SonidoEntrada/SonidoEntrada'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <SonidoEntrada/>
      <Router>
        <section>
          <Header />
          <SectionIntro />
        </section>
        <main className="border-t-2 border-gray-400 mt-10 w-dvw">
          <section className="mx-4 mt-10 sm:mx-10 flex flex-wrap justify-center gap-5 bg-gray-100 shadow-2xl">
            <Routes>
              <Route path="/personajes" element={<PersonajesPage />} />
              <Route path="/episodios" element={<EpisodiosPage/>} />
              {/* ruta episodios */}
              {/* ruta localidades */}
            </Routes>
          </section>
        </main>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
