import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from "../../assets/images/logo.svg";
import { useForm } from 'react-hook-form';
import Message from '../../components/Message';
import api from '../../services/api';

const NewIncident = () => {
    const {register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const [message, setMessage] = useState({
        text: "",
        status: false
    });

    let ong = JSON.parse(localStorage.getItem("ong") || '{}');

    const handleNewIncident = async (data: any) => {
        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ong.id
                }
            });
            history.push('/profile');
        } catch (error) {
            setMessage({
                text: `Erro no cadastro caso, tente novamente`,
                status: true
            });
        }
    }

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

                <form onSubmit={handleSubmit(handleNewIncident)}>
                    <input ref={register({ required: true })} name="title" placeholder="Título do caso" />
                    {errors.title && errors.title.type === "required" && <Message className="message" children="Este campo é requirido" />}

                    <textarea ref={register({ required: true })} name="description" placeholder="Descrição" />
                    {errors.description && errors.description.type === "required" && <Message className="message" children="Este campo é requirido" />}

                    <input ref={register({ required: true })} name="value" placeholder="Valor em reais" />
                    {errors.value && errors.value.type === "required" && <Message className="message" children="Este campo é requirido" />}
                  
                    <button className="button" type="submit">Cadastrar</button>

                    {message.status && <Message className="status" children={message.text} />}
                </form>
            </div>
        </div>
    )
}

export default NewIncident;