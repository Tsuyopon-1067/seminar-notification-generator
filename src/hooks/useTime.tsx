import { useState } from 'react';

type useTimeType = {
  hour: number;
  minute: number;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
};

export const useTime = (initialHour: number, initialMinute: number): useTimeType => {
  const [hour, setHour] = useState<number>(initialHour);
  const [minute, setMinute] = useState<number>(initialMinute);
  return {
    hour,
    minute,
    onHourChange: setHour,
    onMinuteChange: setMinute,
  };
};
