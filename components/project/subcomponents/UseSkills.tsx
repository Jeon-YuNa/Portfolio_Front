import { ProjectData } from "@/types/projects";
import { skillIcons } from "../data/icons";
import SkillTextBox from "./SkillTextBox";

const UseSkills = ({ skills }: Pick<ProjectData, "skills">) => {
  return (
    <div
      className="useSkills flex justify-center gap-3 mb-10"
      data-aos="fade"
      data-aos-delay="200"
    >
      {skills.map((v, i) => {
        return <SkillTextBox key={i} text={v} icon={skillIcons[v] || ""} />;
      })}
    </div>
  );
};

export default UseSkills;
