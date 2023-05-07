import { useEffect, useState } from "react";
import styles from "./Switcher.module.css";

export type Time = "MAÑANA" | "TARDE";

interface SwitcherProps {
  handleSwitch: (selected: Time) => void;
  selected: Time;
}

export const Switcher = ({ handleSwitch, selected }: SwitcherProps) => {
  const getBorderColor = (clickedTime: Time) => {
    if (clickedTime === selected) {
      return "solid 1px white";
    }
    return "";
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.timeContainer}
        style={{ borderBottom: getBorderColor("MAÑANA") }}
        onClick={() => handleSwitch("MAÑANA")}
      >
        <span>Mañana</span>
      </div>

      <div
        className={styles.timeContainer}
        style={{ borderBottom: getBorderColor("TARDE") }}
        onClick={() => handleSwitch("TARDE")}
      >
        <span>Tarde</span>
      </div>
    </div>
  );
};
