type SkillTextBoxProps = {
  text: string;
  icon?: React.ReactNode;
};
const SkillTextBox = ({ text, icon }: SkillTextBoxProps) => {
  return (
    <span className="px-3 flex items-center gap-2">
      {icon}
      {text}
    </span>
  );
};
export default SkillTextBox;
