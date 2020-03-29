import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import logo from "../../assets/images/logo.svg";
import empty from "../../assets/images/empty.svg";
import './styles.scss';

interface Incidents {
    id: string;
    title: string | null;
    description: string | null;
    value: string | null;
}

const Profile = () => {
    let ong = JSON.parse(localStorage.getItem("ong") || '{}');
    const [incidents, setIncidents] = useState<Incidents[]>([]);
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ong.id
            }
        }).then(response => setIncidents(response.data))
    }, [ong.id]);

    const handleDeleteIncident = async (id: string) => {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ong.id
                }
            });
            setIncidents(incidents.filter(i => i.id !== id))
        } catch (error) {
            alert(error)
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem vinda, {ong.name}</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="e02041" />
                </button>
            </header>

            {incidents.length > 0 ? (
                <>
                
                <h1>Casos Cadastrados</h1>

                <ul>
                    {incidents.map((i: any) => (
                        <li key={i.id}>
                            <strong>Caso:</strong>
                            <p>{i.title}</p>

                            <strong>Descrição:</strong>
                            <p>{i.description}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: "currency", currency: 'BRL'}).format(i.value)}</p>

                            <button type="button" onClick={() => handleDeleteIncident(i.id)}>
                                <FiTrash2 size={20} color="a8a8b3" />
                            </button>
                        </li>
                    ))}
                </ul>
                </>
            ):(
                <div className="empty">
                    <h1>Nenhum caso cadastrado 😊</h1>
                    <img src={empty} alt="Nenhum caso cadastrado" />
                </div>
            )}
        </div>
    )
}

export default Profile;