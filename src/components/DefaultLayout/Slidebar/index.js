import React from "react";
import styles from "./Slidebar.module.scss";
import classNames from "classnames/bind";
import { router } from "../../../Pages/Routers";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Slidebar() {
  return (
    <div className={cx("wrapper")}>
      {router.map((item, index) => {
        return (
          <div className={cx("link")}>
            <NavLink to={item.path} end>
              <span>{item.name}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
