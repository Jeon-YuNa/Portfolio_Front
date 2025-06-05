"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/project.css";
import { useEffect, useState } from "react";
import TabBtn from "./subcomponents/TabBtn";
import Article from "./subcomponents/Article";
import { ProjectData } from "@/types/projects"; // 타입 경로도 확인!
import { getProjects } from "@/utils/api"; // API 호출 함수 경로도 확인!

const Project = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      // disable: 'mobile', // 모바일에서는 AOS 비활성화
    });
  }, []);

  const [projects, setProjects] = useState<ProjectData[] | null>(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
        if (fetchedProjects.length > 0) {
          setActiveTab(1);
        }
      } catch (err) {
        console.error("프로젝트 데이터 가져오기 실패:", err);
        setProjects([]);
      }
    };

    fetchProjectsData();
  }, []);
  if (projects === null) {
    return null;
  }

  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  const activeProject = sortedProjects.find((v) => v.id === activeTab);
  return (
    <section id="project" className="flex">
      <aside className="flex flex-col gap-4 pt-10 w-[25%]">
        {sortedProjects.length > 0 &&
          sortedProjects.map((v) => (
            <TabBtn
              key={v.id}
              text={v.title}
              event={() => setActiveTab(v.id)}
            />
          ))}
        {projects.length === 0 && (
          <p>프로젝트 정보를 불러오는 중이거나 정보가 없습니다.</p>
        )}
      </aside>

      <div className="flex-1">
        {activeProject ? (
          <Article key={activeProject.id} {...activeProject} />
        ) : (
          projects.length > 0 && <p>프로젝트를 선택해주세요.</p>
        )}
      </div>
    </section>
  );
};

export default Project;
