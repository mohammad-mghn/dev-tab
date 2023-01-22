"use client";

import React, { useEffect } from "react";

function Time() {
  function clock() {
    const timeElement: HTMLElement | null = document.getElementById("clock");

    const which12HourElement: HTMLElement | null = document.getElementById("12-hour");

    //  First check if element exist to prevent some index rendering errors
    if (which12HourElement && timeElement) {
      const currentTime: Date = new Date();

      let hours: number = currentTime.getHours();
      let mins: string = currentTime.getMinutes().toString();

      // check that if minutes are greater than 10. if not we'll 0 ti left side like 8 => 08
      if (+mins < 10) {
        mins = "0" + mins;
      }

      var AMOrPM = "P.M";

      if (hours > 12) {
        AMOrPM = "P.M";
        hours -= 12;
      } else {
        AMOrPM = "A.M";
      }

      which12HourElement.innerText = AMOrPM;

      let clockText = `${hours}:${mins}`;

      timeElement.innerText = clockText;

      setTimeout(clock, 1000);
    }
  }

  useEffect(() => {
    clock();
  }, []);

  return (
    <div className="text-gradient w-fit font-semibold">
      <span id="clock" className="text-[3.5rem] leading-[3.75rem]">
        00:00
      </span>
      &nbsp;
      <span id="12-hour" className="text-[1rem]">
        P.M
      </span>
    </div>
  );
}

export default Time;
