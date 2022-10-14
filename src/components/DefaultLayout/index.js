import React from "react";
import Footer from "./Footer";
import Slidebar from "./Slidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Navbar from "./Navbar";
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <Slidebar />
      <div className={cx("content")}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
