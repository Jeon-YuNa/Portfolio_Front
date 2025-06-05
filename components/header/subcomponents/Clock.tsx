import moment from "moment";
import { useEffect, useState } from "react";

const Clock = () => {
  const momentAMPM = moment().format("a");
  const [time, setTime] = useState(moment().format("hh:mm:ss"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <span className="ampm font-black text-3xl mr-4">{momentAMPM}</span>
      <span className="time font-black text-6xl inline-block w-[18vw]">
        {time}
      </span>
    </div>
  ); // 텍스트만 리턴하는 컴포넌트
};

export default Clock;
