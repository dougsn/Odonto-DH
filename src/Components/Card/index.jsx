import styles from "./Card.module.css";
import { useContext } from "react";
import { NavBarContext } from "../contexts/NavBarContext";

const Card = ({ nome, sobrenome, usuario }) => {

  const { contextIsLight } = useContext(NavBarContext);

  return (
    <>
      <div className={`card ${contextIsLight ? styles.card : styles.cardDark}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <h5 className={`card-title ${contextIsLight ? styles.title : styles.titleDark}`}>
            {" "}
            {nome} {sobrenome}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Card;
