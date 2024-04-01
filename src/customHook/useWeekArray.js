import { useState, useEffect } from 'react';

const useWeekArray = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const calculateWeekArray = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate);

    let weekArray = Array.from({ length: 7 }, (_, index) => {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + index);

      const formattedDay = {
        timestamp: day.getTime(),
        day: daysOfWeek[day.getDay()],
        date: day.getDate().toString(),
      };

      return formattedDay;
    });

    return weekArray.slice(0, 7);
  };

  const [weekArray, setWeekArray] = useState(calculateWeekArray);

  useEffect(() => {
    setWeekArray(calculateWeekArray());
  }, []); // Run on mount

  return weekArray;
};

export default useWeekArray;
