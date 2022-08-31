import "../styles/components/project.sass";

const Project = () => {
  return (
    <section className="project">
      <h3>1 - Ifuture</h3>
      <p>
        Aplicação web com foco exclusivo na versão mobile, Tecnologias
        utilizadas React Js, Styled Components, Design Systems (Chakra UI) e
        Axios, Inspirado no Ifood com um designer diferenciado
      </p>

      <h3>2 - LabeNinjas</h3>
      <p>
        Esta aplicação consiste em uma plataforma de Marketplace baseada no site
        GetNinjas. No LabeNinjas, os prestadores podem oferecer seus serviços
        livremente, enquanto as pessoas com demandas específicas podem encontrar
        perfis bem alinhados ao que precisam.
      </p>

      <h3>3 - pokedex</h3>
      <p>
        Projeto em React inspirado na Pokédex do anime Pokémon. Nele você pode
        criar sua própria pokédex com os seus pokémons preferidos.
      </p>

      <a href="https://github.com/gideony" className="btn">
        Ver mais
      </a>
    </section>
  );
};

export default Project;
