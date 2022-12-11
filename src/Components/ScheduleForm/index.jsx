import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {

  const { paciente } = useContext(AuthContext);
  const { dentista } = useContext(AuthContext);
  // const { getPaciente } = useContext(AuthContext);
  // const { getDentista } = useContext(AuthContext);

  // useEffect(() => {
  //   getPaciente();
  // }, []);

  // useEffect(() => {
  //   getDentista();
  // }, []);


  const handleSubmit = (event) => {

    event.preventDefault();

    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
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
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {/* {
                  paciente.map(
                    (p) => ( */}
                    
                      <option key={'p.matricula'} value={'p.matricula'}>
                        {'p.nome'} {'p.sobrenome'}
                      </option>

                {/* //     )
                //   )
                // } */}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
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
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
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
