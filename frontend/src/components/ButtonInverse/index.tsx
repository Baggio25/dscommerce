import { Link } from "react-router-dom";
import "./styles.css";

type ButtonInverseProps = {
  text: string;
  url: string;
  onClick?: () => void;
  isDanger?: boolean;
};

export function ButtomInverse({
  text,
  url,
  onClick,
  isDanger = false
}: ButtonInverseProps) {
  return (
    <>
      <Link to={url} onClick={onClick}>
        <div
          className={`dsc-btn ${isDanger ? "dsc-btn-danger" : "dsc-btn-white"}`}
        >
          {text}
        </div>
      </Link>
    </>
  );
}
