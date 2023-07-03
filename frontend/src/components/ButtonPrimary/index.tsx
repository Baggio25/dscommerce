
import "./styles.css";

type ButtomPrimaryProps = { 
  text: string;
}

export function ButtomPrimary({ text }: ButtomPrimaryProps) {
  return (
    <>
      <div className="dsc-btn dsc-btn-blue">
        {text}
      </div>
    </>
  );
}
