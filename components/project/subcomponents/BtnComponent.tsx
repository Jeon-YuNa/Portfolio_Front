type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
const BtnComponent = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <span
      onClick={onClick}
      className="flex items-center justify-center w-36 h-12 gap-1"
    >
      {text}
      {icon}
    </span>
  );
};
export default BtnComponent;
