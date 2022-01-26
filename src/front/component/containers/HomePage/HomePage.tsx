import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css"; 
import loader from "../../../assets/images/other/oval.svg"; 
import React from "react";
import { humanSystems } from "../../../assets/shared/projectData";
import { MainView } from "../../MainView/MainView";


export class HomePage extends React.Component {

  switchBodyColor() {
    if (window.location.pathname === "/")
      document.body.className = "background_body_home";
  }

  render() {
    this.switchBodyColor();
    return (
      <>
        {<MainView />}
        <div className="logo__home">
        {humanSystems.length > 0 ? (
          <>
            <section className={styles.cards}>
              <div className={styles.items}>
                {humanSystems.slice(0, 7).map((system) => {
                  return (
                    <NavLink to={system.path} key={system.id}>
                      <div className={styles.item}>
                        <div className={`${system.class} ${styles.thumbnail}`}>
                          <img src={system.imgSrc} alt={system.imgAlt} />
                          <div className={styles.content}>
                            <h2>{system.name}</h2>
                            <button className={styles.button}></button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </section>
          </>
        ) : (
          <img src={loader} className={styles.loader} alt="Loader" />
        )}
        </div>
      </>
    );
  }
}
