import React from "react";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import logo from "../../../assets/img/logoNCC1.jpg";
import url from "../../../assets/img/urlicon.png";
import htmlicon from "../../../assets/img/htmlicon.png";
import css from "../../../assets/img/cssicon.png";
const cx = classNames.bind(styles);
export default function Content() {
  return (
    <div className={cx("wrapper")}>
      <img
        // src="../../../assets/img/logoNCC1.jpg"
        src={logo}
        className={cx("img")}
        alt=""
      />
      <div className={cx("groupContent")}>
        <div className={cx("group1")}>
          <h2>Lorem ipsum dolor sit asmet?</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </span>
        </div>
        <div className={cx("group2")}>
          <div className={cx("group2-item")}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <span>
              <img src={css} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </span>
          </div>
          <div className={cx("group2-item")}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <span>
              <img src={htmlicon} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </span>
          </div>
          <div className={cx("group2-item")}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <span>
              <img src={url} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
