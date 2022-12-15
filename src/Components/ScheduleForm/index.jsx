import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import styles from "./ScheduleForm.module.css";
import { NavBarContext } from "../contexts/NavBarContext";
import api from "../../services/api";
import { ToastContainer, toast, Zoom } from "react-toastify";

const ScheduleForm = () => {
  const { paciente, dentista, userData } = useContext(AuthContext);
  
  // Estados para preencher com a informações das matriculas
  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function postConsulta(data) {
    const postData = JSON.stringify({
      paciente: {
        matricula: data.patient,
      },
      dentista: {
        matricula: data.dentist,
      },
      dataHoraAgendamento: data.appointmentDate,
    });
    
    const headers = {
      headers: {
        'Authorization': `Bearer ${userData.token}`,
        'Content-Type': 'application/json',
        'Accept': '*/*',
      }
    }

    try {
      const res = await api.post("/consulta", postData, headers);

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      setPostResult(fortmatResponse(result));

      toast("Consulta marcada com sucesso", {
        type: "success",
        autoClose: 2000,
        transition: Zoom,
      });

    } catch (error) {
      toast.error("Erro " + error.response?.data || error, {
        autoClose: 2000,
        transition: Zoom,
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    postConsulta(data);
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
              <select className="form-select" name="dentist" id="dentist">
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
              <select className="form-select" name="patient" id="patient">
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
        <ToastContainer />
      </div>
    </>
  );
};

export default ScheduleForm;
