import "./button.css";
const Button = ({ Val, handleClick }) => {
  return (
    <button value={Val} className="button" onClick={handleClick}>
      {Val}
    </button>
  );
};
export default Button;
