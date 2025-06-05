"use client";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useEffect, useState } from "react";
import ImageBox from "./ImageBox";
import UseSkills from "./UseSkills";
import Description from "./Description";
import Buttons from "./Buttons";
import { ProjectData } from "@/types/projects";

const Article = ({ title, skills, desc, siteURL, likes, id }: ProjectData) => {
  const { displayText, startScramble } = useScrambleText(title);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    startScramble();
  }, [startScramble]);

  return (
    <article>
      <h2 className="font-bold text-4xl pt-6 mb-6">
        {hasMounted ? displayText : title}
      </h2>
      <ImageBox siteURL={siteURL} title={title} />
      <UseSkills skills={skills} />
      <div className="desc">
        <Description desc={desc} />
      </div>
      <Buttons siteURL={siteURL} likes={likes} id={id} />
    </article>
  );
};
export default Article;
