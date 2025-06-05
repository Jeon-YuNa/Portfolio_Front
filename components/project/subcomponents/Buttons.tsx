"use client";
import { FaHeart } from "react-icons/fa";
import BtnComponent from "./BtnComponent";
import { useState } from "react";
import { ProjectData } from "@/types/projects";
import { updateProjectLikes } from "@/utils/api";

const Buttons = ({
  siteURL,
  likes,
  id,
}: Pick<ProjectData, "siteURL" | "likes" | "id">) => {
  const [Like, setLike] = useState<number>(likes);
  const handleLikeClick = async () => {
    setLike((prev) => prev + 1);
    try {
      const updatedProject = await updateProjectLikes(id);
      setLike(updatedProject.likes);
      console.log("좋아요 요청 및 업데이트 성공!");
    } catch (error) {
      console.error(`프로젝트 ID ${id} 좋아요 업데이트 실패:`, error);
    }
  };
  return (
    <div className="btns flex justify-center gap-4">
      <a href={siteURL} target="_blank">
        <BtnComponent text="go to site" />
      </a>
      <BtnComponent
        text={`${Like}`}
        icon={<FaHeart />}
        onClick={handleLikeClick}
      />
    </div>
  );
};
export default Buttons;
