import React, { useState } from 'react';
import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import heroesImg from "../../assets/images/heroes.png";
import logo from "../../assets/images/logo.svg";
import './styles.scss';
import Message from '../../components/Message';

const Logon = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [message, setMessage] = useState({
        text: "",
        status: false
    });

    const handleLogon = async (data: any) => {
        try {
            const response = await api.post('sessions', data);

            const dataONG = {
                id: data.id,
                name: response.data.name,
            }
            localStorage.setItem('ong', JSON.stringify(dataONG));

            setMessage({
                text: "",
                status: false
            });
            history.push('/profile');
        } catch (error) {
            setMessage({
                text: `Falha no login, tente novamente.`,
                status: true
            });
            
        }
    }

    return (
        <main className="container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form onSubmit={handleSubmit(handleLogon)}>
                    <h1>Faça seu logon</h1>

                    <input ref={register({ required: true })} name="id" placeholder="Sua ID" />
                    {errors.id && errors.id.type === "required" && <Message className="message" children="Este campo é requirido" />}

                    <button type="submit" className="button">Entrar</button>

                    {message.status && <Message className="status" children={message.text} />}

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </main>
    )
}

export default Logon;