import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

import Map from "../../components/Map/Map";

const Home = () => {
  return (
    <div>
      <nav>
        <div className={styles.welcome}>
          <Link className={styles.btn} to={"/"}>
            {" "}
            ¡Apoyemos a nuestra gente!{" "}
          </Link>
        </div>

        <div className={styles.signup}>
          <a
            className={styles.btn}
            rel="noopener"
            target="_blank"
            href="https://forms.gle/Qj1m4XVAL37winH99"
          >
            Registrar olla común
          </a>
        </div>
      </nav>
      <Map />
    </div>
  );
};
export default Home;
