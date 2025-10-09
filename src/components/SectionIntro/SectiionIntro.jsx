
const SectionIntro = () => {
  return (
    <>
      <section className="h-[89dvh] lg:h-[70dvh] w-dvw bg-[url('https://thesimpsonsapi.com/clouds-bg.jpg')] bg-fixed bg-center flex items-center">
        <article className="w-full h-auto">
          <div className="m-auto sm:h-[250px] w-dvw h-[200px]">
            <img
              src="https://thesimpsonsapi.com/hero.webp"
              alt="theSimpsonsApi"
              className='h-full m-auto'
            />
          </div>
          <p className="text-2xl font-mono text-center w-dvw">
            Bienvenido a nuestra Pagina Sobre los simpson, espero te guste nuestro contenido.
          </p>
        </article>
      </section>
    </>
  );
};
export default SectionIntro;
