import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import styles from "./ScheduleForm.module.css";
import { NavBarContext } from "../contexts/NavBarContext";
import api from "../../services/api";

const ScheduleForm = () => {
  const { paciente, dentista, consulta, setConsulta } = useContext(AuthContext);
  const [agenda, setAgenda] = useState({
    paciente,
    dentista,
    dataConsulta: "12-04-2022",
  });

  const { userData } = useContext(AuthContext);
  // console.log(agenda);

  // const [ dataConsulta, setConsulta ] = useState([]);

  //Estados para pegar as matriculas
  const [dentist, setDentist] = useState([]);
  const [pacient, setPacient] = useState([]);
  const [birthdate, setBirthdate] = useState("");

  // Estados para preencher com a informações das matriculas

  const [dentistData, setDentistData] = useState([]);
  const [pacientData, setPacientData] = useState([]);

  // async function setDentist(e) {
  //   console.log(e);
  // }

  async function getDentistaByID(matricula) {
    // Testando busca de dentista por matricula, para filtrar na post da consulta
    try {
      const response = await api.get(`dentista?matricula=${matricula}`);
      setDentistData(response.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  async function getPacienteById(matricula) {
    // Testando busca de dentista por matricula, para filtrar na post da consulta
    try {
      const response = await api.get(`paciente?matricula=${matricula}`);
      setPacientData(response.data.body);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  async function postConsulta() {
    try {
      await api.post("/consulta", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
        paciente: {
          nome: pacientData.nome,
          sobrenome: pacientData.sobrenome,
          matricula: pacientData.matricula,
          usuario: {
            username: pacientData.usuario.username,
          },
          endereco: {
            id: pacientData.id,
            logradouro: pacientData.logradouro,
            numero: pacientData.numero,
            complemento: pacientData.complemento,
            bairro: pacientData.bairro,
            municipio: pacientData.municipio,
            estado: pacientData.estado,
            cep: pacientData.cep,
            pais: pacientData.pais,
          },
          dataDeCadastro: pacientData.dataDeCadastro,
        },
        dentista: {
          nome: dentistData.nome,
          sobrenome: dentistData.sobrenome,
          matricula: dentistData.matricula,
          usuario: {
            username: dentistData.usuario.username,
          },
          dataHoraAgendamento: birthdate,
        }
      });
    } catch (error) {
      alert("Erro " + error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getDentistaByID(dentist); // Salvando o objeto DENTISTA selecionado em dentistData
    getPacienteById(pacient); // Salvando o objeto PATIENTE selecionado em dentistData

    postConsulta();

    console.log(dentistData);
    console.log(pacientData);
    console.log(userData.token);

    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  const { contextIsLight } = useContext(NavBarContext);

  return (
    <>
      <div
        className={`text-center container ${
          contextIsLight ? styles.card : styles.cardDark
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label
                htmlFor="dentist"
                className={
                  contextIsLight ? styles.formLabel : styles.formLabelDark
                }
              >
                Dentista
              </label>
              <select
                // value={dentist.matricula}
                onChange={(e) => {
                  setDentist(e.target.value);
                }}
                className="form-select"
                name="dentist"
                id="dentist"
              >
                {dentista.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {dentista.nome} {dentista.sobrenome}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label
                htmlFor="patient"
                className={
                  contextIsLight ? styles.formLabel : styles.formLabelDark
                }
              >
                Patiente
              </label>
              <select
                // value={pacient.matricula}
                onChange={(event) => setPacient(event.target.value)}
                className="form-select"
                name="patient"
                id="patient"
              >
                {paciente?.map((paciente) => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {paciente.nome} {paciente.sobrenome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label
                htmlFor="appointmentDate"
                className={
                  contextIsLight ? styles.formLabel : styles.formLabelDark
                }
              >
                Data
              </label>
              <input
                value={birthdate}
                onChange={(event) => setBirthdate(event.target.value)}
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={
                contextIsLight
                  ? `btn btn-light ${styles.button}`
                  : `btn btn-dark ${styles.button}`
              }
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
