import { ProjectData } from "@/types/projects";
import { VisitorsData } from "@/types/visitors";
import axios from "axios";

export const API_URL = "http://52.78.154.17:3002";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 방명록 목록 가져오기
export const getVisitors = async (): Promise<VisitorsData[]> => {
  try {
    const { data } = await api.get<VisitorsData[]>("/visitors");
    return data;
  } catch (error) {
    console.error("getVisitors 에러:", error);
    return []; // 실패 시 빈 배열 반환 (앱이 안터지게)
  }
};

// 방명록 작성하기
export const createVisitors = async (
  visitor: Pick<VisitorsData, "nickname" | "content">
) => {
  const response = await axios.post(`${API_URL}/visitors`, visitor);

  console.log("방명록 등록 결과:", response.data);

  if (response.status === 201) {
    const id = response.data.id;
    console.log("받아온 ID:", id);

    const stored = JSON.parse(localStorage.getItem("myVisitorIds") || "[]");
    localStorage.setItem("myVisitorIds", JSON.stringify([...stored, id]));
  }

  return response;
};

// 프로젝트 목록 가져오기
export const getProjects = async (): Promise<ProjectData[]> => {
  try {
    const { data } = await api.get<ProjectData[]>("/projects");
    console.log(data);
    return data;
  } catch (error) {
    console.error("getProjects 에러:", error);
    return []; // 실패 시 빈 배열 반환 (앱이 안터지게)
  }
};

// 프로젝트 like 업데이트
export const updateProjectLikes = async (id: number): Promise<ProjectData> => {
  try {
    const response = await api.patch<ProjectData>(`/projects/${id}/like`);
    console.log(`프로젝트 ID ${id} 좋아요 업데이트 성공:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`프로젝트 ID ${id} 좋아요 업데이트 실패:`, error);
    throw error;
  }
};

//방문자 보내기
export const postTodayVisitor = async () => {
  try {
    await axios.post(`${API_URL}/today-visitors/today`);
  } catch (e) {
    console.error("오늘 방문자 기록 실패", e);
  }
};

//방문자 가져오기
export const getTodayVisitorCount = async (): Promise<number> => {
  const response = await axios.get(`${API_URL}/today-visitors/count`);
  console.log(response.data);
  return response.data;
};
