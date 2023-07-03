
import "./styles.css";  

type ButtonInverseProps = { 
  text: string;
}

export function ButtomInverse( { text } : ButtonInverseProps) {
  return (
    <>
      <div className="dsc-btn dsc-btn-white">
        {text}
      </div>
    </>
  );
}
 