import React, { useEffect, useState } from "react";
export default function PubaoInfo() {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  useEffect(() => {
    setInterval(() => {
      const birthday = new Date(2020, 6, 20, 0, 0, 0);
      const today = new Date();
      const gap = today.getTime() - birthday.getTime();
      const age = birthday.getTime() + gap;
      setDay(Math.ceil(gap / (1000 * 60 * 60 * 24))); // 일
      setHour(Math.ceil((gap / (1000 * 60 * 60)) % 24)); // 시간
      setMin(Math.ceil((gap / (1000 * 60)) % 60)); // 분
      setSec(Math.ceil((gap / 1000) % 60)); // 초
    }, 1000);
  }, []);
  return (
    <>
      <div className="born-day">
        태어났을때 몸무게: 197g, 태어난지: {day}일 {hour}시{min}분{sec}초
      </div>
    </>
  );
}
