export interface ProjectData {
  id: number;
  title: string;
  // image: string | StaticImport;
  // image: StaticImageData;
  skills: string[];
  desc: string[];
  siteURL: string;
  likes: number;
}

export const ProjectDataTest: ProjectData[] = [
  {
    id: 0,
    title: "matplaza",
    skills: ["HTML", "CSS", "JS", "GSAP"],
    desc: [
      "GSAP 애니메이션을 활용해보기 위한 과제로 매트프라자를 선택하여 클론코딩한 프로젝트 입니다.",
      "매트프라자 사이트의 부드럽고 다양한 애니메이션을 구사해 보고싶어서 선택하게 되었습니다.",
      "프로젝트를 진행하며 애니메이션 동작을 디테일하게 볼 수 있는 관찰력과",
      "GSAP 라이브러리를 활용한 애니메이션 활용 능력이 향상되었습니다.",
    ],
    siteURL: "https://jeon-yuna.github.io/matplaza/",
    likes: 100,
  },
  {
    id: 1,
    title: "todolist",
    skills: ["React", "TS"],
    desc: [
      "React를 활용한 첫 제작물로 todolist사이트를 제작하였습니다.",
      "닉네임을 입력하고 리스트를 작성하면 리스트를 체크 혹은 삭제로 관리할 수 있으며며",
      "새로고침 시에도 내용이 유지되도록 제작하였습니다. 그리고 로컬 스토리지와",
      "OpenWeatherMap API 활용하여 현재 날씨와 시간도 나타내도록 하였습니다.",
    ],
    siteURL: "https://jeon-yuna.github.io/Todolist/",
    likes: 100,
  },
  {
    id: 2,
    title: "nonymosaa",
    skills: ["TS", "NestJS", "firebase"],
    desc: [
      "Next.js를 활용한 nonymosaa 쇼핑몰 클론코딩 프로젝트 입니다.",
      " 백엔드 개발자가 데이터를 설계해 주었고 저는 프론트파트를 맡아 제작한 팀프로젝트 입니다.",
      "firebase의 데이터를 받아와서 쇼핑몰을 구축하고 카테고리 분류 페이지와 각 상세페이지,",
      "Wish리스트 기능 추가까지 맡아 제작하였습니다.",
    ],
    siteURL: "https://nonymosaa-git-master-jeon-yunas-projects.vercel.app/main",
    likes: 100,
  },
  {
    id: 2,
    title: "TDcompany",
    skills: ["PHP", "CSS", "GSAP"],
    desc: [
      "전 회사의 홈페이지 리뉴얼을 맡아서 진행한 프로젝트 입니다.",
      "react를 사용하기 전 php언어를 사용한 프로젝트이며 기획자의 ",
      "요구에 맞추어 다양한 애니메이션과 컨택 폼을 제작 하였습니다.",
    ],
    siteURL: "http://tdcompany.co.kr",
    likes: 100,
  },
  {
    id: 2,
    title: "TDcompany",
    skills: ["PHP", "CSS", "GSAP"],
    desc: [
      "전 회사의 홈페이지 리뉴얼을 맡아서 진행한 프로젝트 입니다.",
      "react를 사용하기 전 php언어를 사용한 프로젝트이며 기획자의 ",
      "요구에 맞추어 다양한 애니메이션과 컨택 폼을 제작 하였습니다.",
    ],
    siteURL: "http://tdcompany.co.kr",
    likes: 100,
  },
  {
    id: 2,
    title: "binaryzerone",
    skills: ["PHP", "GSAP", "webGL"],
    desc: [
      "전 회사의 개발팀 홈페이지를 기획부터 디자인과 개발까지 ",
      "모두 맡아서 진행한 프로젝트 입니다. 처음으로 기획을 맡은 사이트로 ",
      "평소 관심이 있던 webGL도 사용해보고 애니메이션 트렌드를 참고해가며",
      "저에게는 도전적인 경험이 된 프로젝트 입니다.",
    ],
    siteURL: "http://binaryzerone.com",
    likes: 100,
  },
];
