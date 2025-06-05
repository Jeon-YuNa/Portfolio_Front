"use client";
import { useEffect, useState } from "react";
import "../../css/visitors.css";
import TextBox from "../main/subcomponents/TextBox";
import { VisitorsData } from "@/types/visitors";
import { getVisitors, API_URL } from "@/utils/api";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const Visitors = () => {
  const [visitors, setVisitors] = useState<VisitorsData[]>([]);
  const [myVisitorIds, setMyVisitorIds] = useState<string[]>([]);

  useEffect(() => {
    // 방명록 가져오기
    getVisitors().then((visitors) => setVisitors(visitors));

    // localStorage에 저장된 내 방명록 id 불러오기
    const stored = JSON.parse(localStorage.getItem("myVisitorIds") || "[]");
    setMyVisitorIds(stored);
  }, []);

  // 삭제 함수
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/visitors/${id}`);

      // 서버 삭제 성공하면 localStorage에서도 삭제
      const updated = myVisitorIds.filter((storedId) => storedId !== id);
      localStorage.setItem("myVisitorIds", JSON.stringify(updated));
      setMyVisitorIds(updated);

      // 화면에서 삭제
      setVisitors((prev) => prev.filter((v) => String(v.id) !== id));
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  return (
    <section id="visitor" className="p-5">
      <a className="writeBtn" href="/visitors/write">
        <TextBox text="write" />
      </a>

      {/* 방명록 리스트 */}
      <div className="listWrap mt-10 gap-6 pr-6">
        {visitors.length === 0 ? (
          <div className="text-gray-500">아직 작성된 방명록이 없습니다.</div>
        ) : (
          visitors.map((v) => (
            <div key={v.id} className="mb-5 p-3 border rounded relative flex">
              <div>
                <div className="nickname font-bold mb-2">{v.nickname}</div>
                <div className="content">{v.content}</div>
              </div>

              {/* 내가 쓴 글이면 삭제 버튼 표시 */}
              {myVisitorIds.includes(String(v.id)) && (
                <button
                  onClick={() => {
                    console.log("삭제 요청 ID:", v.id);
                    handleDelete(String(v.id));
                  }}
                  className="absolute top-2 right-2 px-4 py-2 text-sm"
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Visitors;
