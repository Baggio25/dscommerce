import { Link } from "react-router-dom";
import "./styles.css";

type ButtonInverseProps = {
  text: string;
  url: string;
};

export function ButtomInverse({ text, url }: ButtonInverseProps) {
  return (
    <>
      <Link to={url}>
        <div className="dsc-btn dsc-btn-white">{text}</div>
      </Link>
    </>
  );
}
