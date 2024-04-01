import moment from "moment";

export const slotTimingArray = () => {
    const generateTimeSlots = () => {
      const timeSlots = [];
      const startTime = moment("12:00 AM", "h:mm A");
  
      for (let i = 0; i < 24; i++) {
        const start = startTime.clone().add(i, "hours"); // Adjust the increment to hours
        const end = start.clone().add(1, "hour"); // Set the end time to 1 hour from the start
  
        const timeSlot = {
          startTime: start.format("h:00 A"), // Use 'h:00 A' format for '00' minutes
          endTime: end.format("h:00 A"), // Use 'h:00 A' format for '00' minutes
        };
  
        timeSlots.push(timeSlot);
      }
  
      return timeSlots;
    };
  
    const timeSlotsArray = generateTimeSlots();
    return timeSlotsArray;
  };