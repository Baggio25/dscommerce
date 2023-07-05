import { Link } from "react-router-dom";
import "./styles.css";

type ButtonInverseProps = {
  text: string;
  url: string;
  onClick?: () => void;
};

export function ButtomInverse({ text, url, onClick }: ButtonInverseProps) {
  return (
    <>
      <Link to={url} onClick={onClick}>
        <div className="dsc-btn dsc-btn-white">{text}</div>
      </Link>
    </>
  );
}
