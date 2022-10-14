import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { router } from "../../../Pages/Routers";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
const cx = classNames.bind(styles);
export default function Navbar() {
  const [offset, setOffset] = useState(false);
  const offSet = useRef();
  const handleShow = () => {
    setOffset(!offset);
    if (offset) {
      offSet.current.style.display = "flex";
    } else {
      offSet.current.style.display = "none";
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")} onClick={handleShow}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          ></path>
        </svg>
      </div>
      <div ref={offSet} className={cx("wrapper-offset")}>
        {router.map((item, index) => {
          return (
            <div key={index} className={cx("link")}>
              <NavLink to={item.path} end>
                <span>{item.name}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
