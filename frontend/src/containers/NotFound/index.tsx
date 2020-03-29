import React from 'react';

import notfound from '../../assets/images/notfound.svg';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
    const isLogged = JSON.parse(localStorage.getItem('ong')!);

    return (
        <div className="container">
            <section className="notfound">
                <h1>Ops, página não encontrada</h1>
                {isLogged ? <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="E02041" />Voltar a home</Link> : <Link to="/" className="back-link"><FiArrowLeft size={16} color="E02041" />Voltar a home</Link>}
                <img src={notfound} alt="Não encontrado"/>
            </section>
        </div>
    )
}

export default NotFound;