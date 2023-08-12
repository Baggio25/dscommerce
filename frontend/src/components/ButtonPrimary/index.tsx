
import "./styles.css";

type ButtomPrimaryProps = { 
  text: string;
  onClick: () => void;
}

export function ButtomPrimary({ text, onClick }: ButtomPrimaryProps) {
  return (
    <>
      <div className="dsc-btn dsc-btn-blue" onClick={onClick} >
        {text}
      </div>
    </>
  );
}
