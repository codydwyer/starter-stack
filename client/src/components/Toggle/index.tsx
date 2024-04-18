import { useState } from "react";
import { clsx } from "clsx";
import "./style.scss";

export type TToggle = "on" | "off";

export interface IToggleProps {
  id: string;
  defaultState: string;
  onToggle: React.Dispatch<React.SetStateAction<string>> | undefined;
  onValue: string;
  offValue: string;
  label?: string;
  className?: string;
}

const Toggle = ({
  id,
  onValue,
  offValue,
  defaultState,
  onToggle,
  className,
}: IToggleProps) => {
  const [toggled, setToggled] = useState(
    defaultState === onValue ? "on" : "off"
  );
  const isOn = defaultState === onValue;

  const clickHandler = () => {
    const newState = isOn ? "off" : "on";
    const newValue = isOn ? offValue : onValue;
    setToggled(newState);
    onToggle && onToggle(newValue);
  };

  const classes = clsx("toggle", `toggled-${toggled}`, className);
  const btnClasses = clsx("toggle-btn", isOn ? "on" : "off");

  return (
    <span className={classes}>
      <button onClick={clickHandler} id={id} className={btnClasses}>
        <div className="toggle-node"></div>
      </button>
    </span>
  );
};

export default Toggle;
