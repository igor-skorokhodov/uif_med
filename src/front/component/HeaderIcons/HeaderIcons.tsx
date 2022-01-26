import styles from "./HeaderIcons.module.css";
import searchIcon from "./../../assets/images/icons/icons8-search.svg";
import letterIcon from "./../../assets/images/icons/icons8-letter-i-52.png";
import cloudIcon from "./../../assets/images/icons/house.svg";
import { Link } from "react-router-dom";
import React from "react";

export class HeaderIcons extends React.Component {
  render() {
    return (
        <div className={styles.icons}>
          <Link to="/">
            <img src={cloudIcon} className={styles.letter} alt="" />
          </Link>
          <Link to="/">
            <img
              src={searchIcon}
              className={styles.search}
              alt="Human atlas book"
            />
          </Link>
          <Link to="/about">
            <img src={letterIcon} className={styles.letter} alt="About us" />
          </Link>
        </div>
    );
  }
}
