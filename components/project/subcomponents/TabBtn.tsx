type TabBtnProps = {
  text: string;
  event: () => void;
};
const TabBtn = ({ text, event }: TabBtnProps) => {
  return (
    <span className="px-6 py-2 text-xs w-fit font-medium" onClick={event}>
      {text}
    </span>
  );
};
export default TabBtn;
