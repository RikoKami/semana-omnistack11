import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from "../../assets/images/logo.svg";

const NewIncident = () => {
    return(
        <div className="container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                  
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;