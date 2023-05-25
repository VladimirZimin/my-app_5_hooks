import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/useref"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      useRef
    </NavLink>

    <NavLink
      to="/useReducer"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      useReducer
    </NavLink>

    <NavLink
      to="/notes"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      useMemo
    </NavLink>

    <NavLink
      to="/signup"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Колорпикер
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Счётчик
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Часы
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Покемоны
    </NavLink>

    <NavLink
      to="/news"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Новости
    </NavLink>

    <NavLink
      to="/material"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Material
    </NavLink>

    <NavLink
      to="/modal1"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Modal v1
    </NavLink>

    <NavLink
      to="/modal2"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Modal v2
    </NavLink>
  </nav>
);

export default memo(Navigation);
