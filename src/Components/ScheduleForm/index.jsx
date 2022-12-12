import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import styles from "./ScheduleForm.module.css";
import { NavBarContext } from "../contexts/NavBarContext";

const ScheduleForm = () => {

  const { paciente, dentista, consulta, setConsulta } = useContext(AuthContext);
  const [ agenda, setAgenda ] = useState({
    paciente,
    dentista, 
    dataConsulta: "12-04-2022"});
  // console.log(agenda);

  // const [ dataConsulta, setConsulta ] = useState([]);

  async function setDentist(e) {
    console.log(e);
  }




  // useEffect(() => {
  //   getPaciente();
  // }, []);

  // useEffect(() => {
  //   getDentista();
  // }, []);
  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(agenda);

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
        className={`text-center container ${contextIsLight ? styles.card : styles.cardDark}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className={contextIsLight ? styles.formLabel : styles.formLabelDark}>
                Dentista
              </label>
              <select 
                // value = {agenda.dentista}
                onChange={(e)=>{setDentist(e.target.value)}}
                className="form-select" name="dentist" id="dentist">
                {
                  dentista.map(
                    (dentista) => (
                    
                      <option key={dentista.matricula} value={dentista.matricula}>
                        {dentista.nome} {dentista.sobrenome}
                      </option>

                    )
                  )
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className={contextIsLight ? styles.formLabel : styles.formLabelDark}>
                Patiente
              </label>
              <select 
                // value = {agenda.paciente}
                onChange={((event)=>setAgenda(...agenda, {paciente:event.target.value}))}
                className="form-select" name="patient" id="patient">
                {
                  paciente?.map((paciente) => (  
                      <option key={paciente.matricula} value={paciente.matricula}>
                        {paciente.nome} {paciente.sobrenome}
                      </option>
                    ) 
                  ) 
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className={contextIsLight ? styles.formLabel : styles.formLabelDark}>
                Data
              </label>
              <input
                // value={agenda.dataConsulta}
                onChange={((event)=>setAgenda(...agenda, {dataConsulta:event.target.value}))}
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={ contextIsLight ? `btn btn-light ${styles.button}` : `btn btn-dark ${styles.button}`}
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
