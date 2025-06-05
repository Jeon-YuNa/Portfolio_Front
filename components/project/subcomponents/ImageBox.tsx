import Image from "next/image";
import { ProjectImages } from "../data/image";
import { ProjectData } from "@/types/projects";
const ImageBox = ({
  siteURL,
  title,
}: Pick<ProjectData, "siteURL" | "title">) => {
  return (
    <div
      className="imgBox h-[30vh] mx-auto mb-3 overflow-hidden"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <a href={siteURL} target="_blank">
        <Image src={ProjectImages[`${title}`]} alt="" className="img"></Image>
      </a>
    </div>
  );
};

export default ImageBox;
