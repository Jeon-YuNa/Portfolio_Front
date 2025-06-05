"use client";
import { useState } from "react";
import { firstNames, lastNames } from "../data/nicknameData";

const getRandomElement = (arr: string[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generateRandomNickname = () => {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  return `${firstName} ${lastName}`;
};

const Input = () => {
  const [nickname, setNickname] = useState("");

  const handleGenerateNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomName = generateRandomNickname();
    setNickname(randomName);
  };

  return (
    <div className="input px-10 py-15 w-[25vw]">
      <form className="max-w-2xl mx-auto">
        <div className="mb-6 flex gap-3">
          <input
            type="text"
            id="nickname"
            name="nickname"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="p-1"
            placeholder="버튼을 클릭해보세요."
          />
          <button
            className="w-[50%] py-2 px-4"
            onClick={handleGenerateNickname}
          >
            닉네임 생성기
          </button>
        </div>

        <div className="mb-6">
          <textarea
            id="content"
            name="content"
            required
            rows={5}
            className="p-1"
            placeholder="방명록 내용을 입력해주세요"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4">
          등록
        </button>
      </form>
    </div>
  );
};

export default Input;
