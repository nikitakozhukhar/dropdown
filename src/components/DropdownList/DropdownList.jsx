import styles from "../DropdownList/dropdownlist.module.css";
import { useState } from "react";

export default function DropdownList({ choosen, setChoosen }) {
  const dropdownItems = [
    "Profile information",
    "Change password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  return (
    <>
      <div className={styles.dropdownList}>
        <ul className={styles.list}>
          {dropdownItems.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  choosen == item ? `${styles.choosen}` : `${styles.listItem}`
                }
                onClick={(e) => {
                  setChoosen(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
