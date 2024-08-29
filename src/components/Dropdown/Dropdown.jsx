import styles from "../Dropdown/dropdown.module.css";
import DropdownList from "../DropdownList/DropdownList";
import { useState } from "react";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const [choosen, setChoosen] = useState(null);

  const handleDropdownListView = (e) => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className={styles.dropdownContainer}>
        <button
          className={styles.dropdownButton}
          onClick={handleDropdownListView}
        >
          ACCOUNT SETTINGS
        </button>

        {dropdown && <DropdownList choosen={choosen} setChoosen={setChoosen} />}
      </div>
    </>
  );
}
