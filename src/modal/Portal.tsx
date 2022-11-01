import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children }) => {
  const el = document.getElementById("portal");

  return ReactDOM.createPortal(children, el!);
};

export default Portal;
