import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ScheduleFormModal from "../../Components/ScheduleFormModal";
import api from "../../services/api";
import styles from "./DetailCard.module.css";

const DetailCard = () => {
  const { matricula } = useParams();
  const [dentista, setDentista] = useState([]);

  const usuario = [];

  async function getDentistaById() {
    try {
      const response = await api.get(`/dentista?matricula=${matricula}`);
      setDentista(response.data);

      usuario.push(dentista.usuario);
    } catch (error) {
      alert("Error" + error);
    }
  }

  useEffect(() => {
    getDentistaById();

    //Nesse useEffect, você vai fazer um fetch na api passando o
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
  }, []);

  let name = "";

 for (const key in dentista) { // Pegando o username, dentro do objeto dentista.
  name = dentista[key].username;
 }  
  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {dentista.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {name}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
