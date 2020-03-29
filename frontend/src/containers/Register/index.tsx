import React, { useState } from 'react';
import api from '../../services/api';
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import logo from "../../assets/images/logo.svg";
import Message from '../../components/Message';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const [message, setMessage] = useState({
        text: "",
        status: false
    });
    const history = useHistory();

    let listEmailsData = "larissa@a.c";
    const validateEmail = async(value: string) => {
        await sleep(1000);

        if(value !== listEmailsData) return true;
        return false;
    }
    const handleRegister = async (data: any) =>{
        try {
            const response = await api.post('ongs', data);
            setMessage({
                text: `Seu id de acesso é: ${response.data.id}`,
                status: true
            });
            setTimeout(() => {
                history.push('/');
            }, 2000);
        } catch (error) {
            setMessage({
                text: `Erro no cadastro, tente novamente`,
                status: true
            });
        }
    }
    
    return (
        <div className="container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <input ref={register({ required: true })} name="name" placeholder="Nome da ONG" />
                    {errors.name && errors.name.type === "required" && <Message className="message" children="Este campo é requirido" />}

                    <input ref={register({ required: true, validate: validateEmail })} name="email" type="email" placeholder="Email" />
                    {errors.email && errors.email.type === "required" && <Message className="message" children="Este campo é requirido" />}

                    <input ref={register({ required: true, minLength: 11, max: 11 })} name="whatsapp" placeholder="WhatsApp" />
                    {errors.whatsapp && errors.whatsapp.type === "required" && <Message className="message" children="Este campo é requirido" />}
                    {errors.whatsapp && errors.whatsapp.type === "minLength" && <Message className="message" children="Este campo é requirido no mínimo 11 dígitos" />}
                    
                    <div className="inputGroup">
                        <input ref={register({ required: true })} name="city" placeholder="Cidade" />
                        {errors.city && errors.city.type === "required" && <Message className="message" children="Este campo é requirido" />}
    
                        <input ref={register({ required: true, minLength: 2, max: 2 })} name="uf" placeholder="UF" />
                        {errors.uf && errors.uf.type === "required" && <Message className="message" children="Este campo é requirido" />}
                        {errors.uf && errors.uf.type === "minLength" && <Message className="message" children="Este campo é requirido no mínimo 2 dígitos" />}
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>

                    {message.status && <Message className="status" children={message.text} />}     
                </form>
            </div>
        </div>
    );
}

export default Register;