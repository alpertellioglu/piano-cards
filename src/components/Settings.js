import { React, useState, useEffect } from "react";
import "./Settings.css";
import settingsIcon from "../assets/icons/settings-icon.png";
import muteIcon from "../assets/icons/mute.svg";
import volumeIcon from "../assets/icons/volume.svg";
import Bounce from "react-reveal/Bounce";
import settingsSound from "../assets/sounds/settings.mp3";

const Settings = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    if (!props.isMute) {
      let settingsVoice = new Audio(settingsSound);
      settingsVoice.play();
    }
    setIsOpen(!isOpen);
  }

  const nonChosenOption = {
    backgroundColor: "transparent",
    color: "white",
  };

  const chosenOption = {
    backgroundColor: "white",
    color: "orange",
    transition: "all 0.3s ease-out",
  };

  return (
    <>
      <div className="settings-button">
        <img
          src={settingsIcon}
          alt="settings-icon"
          onClick={toggleMenu}
          style={{ width: isOpen && "100px" }}
        />
      </div>

      <Bounce right cascade when={isOpen}>
        <div className="settings-menu">
          <div className="mute-button">
            <img
              src={props.isMute ? muteIcon : volumeIcon}
              alt="mute-icon"
              onClick={() => {
                props.muteClicked();
              }}
            />
          </div>

          <button
            className="option"
            style={props.isTreble ? chosenOption : nonChosenOption}
            onClick={() => {
              props.trebleClicked();
            }}
          >
            Treble
          </button>

          <button
            className="option"
            style={props.isBass ? chosenOption : nonChosenOption}
            onClick={() => {
              props.bassClicked();
            }}
          >
            Bass
          </button>
          {/* <div className="toggle-answers"></div> */}
        </div>
      </Bounce>
    </>
  );
};

export default Settings;
