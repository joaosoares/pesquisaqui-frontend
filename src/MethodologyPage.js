import React from 'react'
import { Link, Match } from 'react-router'
import MethodologyQuestions from './MethodologyQuestions'

const Metodologia = () => (
  <div>
    <p className="lead">A metodologia é a ciência compreendida por meio da sistematização dos processos a serem desenvolvidos no decorrer do estudo e/ou pesquisa acadêmica para gerar conhecimento.</p>
    <p>Deste modo, a metodologia vai descrever quais são os métodos e instrumentos empregados para realização da pesquisa científica. O importante para metodologia é validar os passos percorridos afim de alcançar objetivos apresentados na pesquisa, mostrando o raciocínio utilizado pelos pesquisadores interpelar o objeto de estudo.</p>

    <p>Escolher a metodologia para a própria pesquisa acadêmica é um dos maiores desafios para os pesquisadores. Para começar, aconselhamos este material livre:</p>
    <ul>
      <li>
        <a target="_blank" href="https://projetos.inf.ufsc.br/arquivos/Metodologia_de_pesquisa_e_elaboracao_de_teses_e_dissertacoes_4ed.pdf">
          Metodologia da Pesquisa e Elaboração de Dissertação (Fonte: UFSC)
      </a>
      </li>
    </ul>

    <p>Cada área tem as suas especificas metodologias, assim que é o segundo passo para conhecer mais sobre o assunto é ir nas bibliotecas do departamento de pertença e buscar os principais livros sobre metodologia de pesquisa.</p>

  </div>
)

const MetodologiaBuscar = () => (
  <div>
    <p className="lead">Nos fale abaixo o tipo de metodologia e a área e indicaremos pesquisadores que podem ajudar.</p>
    <div className="row">
      <form className="col-xs-12 col-sm-6">
        <div className="form-group">
          <label>Área de pesquisa</label>
          <input className="form-control" value="Direito" />
        </div>
        <div className="form-group">
          <label>Tipo de metodologia</label>
          <input className="form-control" value="Teoria dos jogos" />
        </div>
      </form>

      <div className="col-xs-12 col-sm-6">
        <p><strong>1 resultado encontrado:</strong></p>
        <div className="card">
          <div className="card-block">
            <h5>Fernando Henrique Cardoso</h5>
            <div className="card-text">
              <span className="tag tag-default">Direito</span>
            </div>
            <div className="card-text">
              <span className="tag tag-success">Teoria dos jogos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const MethodologyPage = (props) => (
  <div className="row pt-1">
    {/* MENU DA UNIVERSIDADE */}
    <div className="col-md-3">
      <ul className="nav nav-stacked nav-pills">
        <li className="nav-item">
          <Link className="nav-link" activeOnlyWhenExact activeClassName="active" to="/metodologia">Faça os nosso quizzes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/metodologia/info">Metodologia</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/metodologia/buscar">Quem poderia te ajudar?</Link>
        </li>

      </ul>
    </div>

    <div className="col-md-9">
      <Match exactly pattern="/metodologia" component={MethodologyQuestions} />
      <Match pattern="/metodologia/buscar" component={MetodologiaBuscar} />
      <Match pattern="/metodologia/info" component={Metodologia} />
    </div>

  </div>
)

export default MethodologyPage