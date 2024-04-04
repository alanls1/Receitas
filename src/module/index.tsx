import React from "react";

export const getTime = (minute: number): { time: number; timeUnit: string } => {
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 60);

  const time = day || hour || minute;
  const unitIndex = [day, hour, minute].lastIndexOf(time);
  const timeUnit = ["days", "hours", "minutes"][unitIndex];

  return { time, timeUnit };
};
