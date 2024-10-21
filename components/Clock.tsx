import React, { useEffect, useState } from 'react';
import { nowToHHMM } from '~/utils/date-time';
import { Txt } from './Txt';

const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Txt style={{ fontSize: 17 }}>{nowToHHMM()}</Txt>
    </>
  );
};

export default Clock;
