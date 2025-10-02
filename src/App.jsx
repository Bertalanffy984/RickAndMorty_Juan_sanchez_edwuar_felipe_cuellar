import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionTitulo,{SectionTituloPersonajes} from "./components/SectionTitulo/SectionTitulo"
import CardSectionPersonaje from "./components/CardSectionPersonaje/CardSectionPersonaje";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-900 h-auto">
        <section className="sm:mx-12">
          <Header></Header>
          <SectionTitulo></SectionTitulo>
          <main>
            {/* secccion para los personajes */}
            <section className="flex flex-wrap justify-center gap-4.5">
              <SectionTituloPersonajes title="Characters"></SectionTituloPersonajes>
              <CardSectionPersonaje></CardSectionPersonaje>
            </section>
            {/* seccion para los reinos */}
            <section className="flex flex-wrap justify-center gap-4.5">
              <SectionTituloPersonajes title="KingDoms"></SectionTituloPersonajes>
            </section>
            {/* seccion para los episodios */}
            <section className="flex flex-wrap">
              <SectionTituloPersonajes title="Episodes"></SectionTituloPersonajes>
            </section>
          </main>
          <Footer></Footer>
        </section>
      </div>
    </>
  );
}
export default App;
