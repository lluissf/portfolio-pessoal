import Projeto1 from "../assets/images/Projeto1.png";
import Projeto2 from "../assets/images/Projeto2.png";
import Projeto3 from "../assets/images/Projeto3.png";
export const Section = () => {
  return (
    <div>
      <section className="container" id="about">
        <h2 className="header">SOBRE MIM</h2>
        <div className="features">
          <div className="card">
            <span>
              <i className="ri-book-line"></i>
            </span>
            <h4>Acadêmico.</h4>
            <p>
              Cursando Bacharelado em Sistemas de Informação no Insituto Federal
              Catarinense.
            </p>
          </div>

          <div className="card">
            <span>
              <i className="ri-meta-line"></i>
            </span>
            <h4>Objetivo.</h4>
            <p>Gostaria de me tornar um desenvolvedor full-stack.</p>
          </div>
        </div>
      </section>

      <section className="container" id="projects">
        <h2 className="header">MEUS PROJETOS</h2>
        <p className="sub-header">
          Todos os meus projetos estão abaixo! <br/>
           Fique a vontade para explorar.
        </p>
        <div className="pricing">
          <div className="card">
            <div className="content text-center">
              <h4>Buscador de CEP</h4>
              <a href="https://buscador-cep-ten-chi.vercel.app/">
                <img src={Projeto1} alt="" />
              </a>
            </div>

            <button className="btn">
              <a href="https://github.com/lluissf/buscador-cep">
                Acessar
              </a>
            </button>
          </div>
          <div className="card">
            <div className="content text-center">
              <h4>Lista de Tarefa</h4>
              <a href="https://lista-tarefa-nu.vercel.app/">
                <img src={Projeto2} alt="" />
              </a>
            </div>
            <button className="btn">
              <a href="https://github.com/lluissf/lista-tarefa" >
                Acessar
              </a>
            </button>
            
          </div>
          <div className="card">
            <div className="content text-center">
              <h4>Portfólio Pessoal</h4>
              <a href="https://lluissf.github.io/portfolio-pessoal/">
                <img src={Projeto3} alt="" />
              </a>
            </div>
            <button className="btn">
              <a href="https://github.com/lluissf/portfolio-pessoal" >
                Acessar
              </a>
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};
