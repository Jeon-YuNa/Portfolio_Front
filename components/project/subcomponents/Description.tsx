import { ProjectData } from "@/types/projects";

const Description = ({ desc }: Pick<ProjectData, "desc">) => {
  return desc.map((v, i) => {
    return (
      <p key={i} data-aos="fade-up-text" data-aos-delay={`${4 + i}00`}>
        {v}
      </p>
    );
  });
};

export default Description;
