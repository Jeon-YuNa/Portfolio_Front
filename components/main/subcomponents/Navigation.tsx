import TextBox from "./TextBox";

const Navigation = () => {
  return (
    <div
      className="link flex flex-col justify-end"
      data-aos="fade"
      data-aos-delay="600"
    >
      <a href="tel:010-5318-3450">
        <TextBox text="tell" />
      </a>
      <a href="mailto:hellodbsk@naver.com">
        <TextBox text="email" />
      </a>
      <a target="_blank" href="https://github.com/Jeon-YuNa">
        <TextBox text="github" />
      </a>
      <a target="_blank" href="https://open.kakao.com/o/stGM4sCg">
        <TextBox text="kakaotalk" />
      </a>
    </div>
  );
};
export default Navigation;
