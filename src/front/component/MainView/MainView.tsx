import { Component } from "react";
import avatar from "./../../assets/images/home/avatar.svg";
import styles from "../HeaderIcons/HeaderIcons.module.css";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";

export class MainView extends Component {
  render() {
    return (
      <div className={styles.header_container}>
      <div className={styles.header_subcontainer}>
        <img className={styles.header_avatar} src={avatar} alt="avatar" />
        <div className={styles.header_text_container}>
          <h1 className={styles.header_main_text}>Атлас человека</h1>
          <p className={styles.header_text}>
            Выберите интересующую систему, чтобы узнать много интересного о
            ней.
          </p>
        </div>
      </div>
      {<HeaderIcons />}
      </div>
    )
  }
}