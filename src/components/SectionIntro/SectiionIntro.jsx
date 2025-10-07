import Typography from '@mui/material/Typography';

const SectionIntro = () => {
  return (
    <>
      <section className="h-[89dvh] lg:h-[70dvh] w-dvw bg-[url('https://thesimpsonsapi.com/clouds-bg.jpg')] bg-fixed bg-center flex items-center">
        <article className="w-full h-auto">
          <div className="m-auto sm:h-[250px] w-full h-[200px]">
            <img
              src="https://thesimpsonsapi.com/hero.webp"
              alt="theSimpsonsApi"
              className='h-full m-auto'
            />
          </div>
          <Typography variant="subtitle1" align='center' sx={{fontSize: '1.4rem'}}>
            Bienvenido a nuestra Pagina Sobre los simpson, espero te guste nuestro contenido.
          </Typography>
        </article>
      </section>
    </>
  );
};
export default SectionIntro;
//https://thesimpsonsapi.com/clouds-bg.jpg
