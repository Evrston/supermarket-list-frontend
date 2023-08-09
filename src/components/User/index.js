import "./index.css";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const User = () => {
  return (
    <div className="profile">
      <img
        className="profile-img"
        src="/images/profile.png"
        alt="Profile-Image"
      />
      <h3 className="userame">{localStorage.getItem(SAVE_USERNAME_PATH)}</h3>
    </div>
  );
};
