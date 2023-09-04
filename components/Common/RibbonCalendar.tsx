import { useState } from 'react';

type BookedDateRange = {
    start: Date;
    end: Date;
    color?: string;
    text?: string
  };
  

const HorizontalRibbonCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [bookedDates, setBookedDates] = useState<Array<Array<BookedDateRange>>>([
      [{start: new Date('2023-09-05'), end: new Date('2023-10-07'), text: 'Sample1'}], 
      [{start: new Date('2023-06-09'), end: new Date('2024-01-07'), text: 'Sample2'}], 
      [{start: new Date('2023-08-09'), end: new Date('2023-8-11'), text: 'Sample3'}]
    ]);

  const generateDates = (startDate) => {
    const dates = [];
    const monthCount = {};

    for (let i = 0; i < 30; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(newDate.getDate() + i);
      dates.push(newDate);

      const month = newDate.getMonth();
      if (monthCount[month]) {
        monthCount[month]++;
      } else {
        monthCount[month] = 1;
      }
    }

    const mostOccurringMonth = Object.keys(monthCount).reduce((a, b) => monthCount[a] > monthCount[b] ? a : b);
    return { dates, mostOccurringMonth: parseInt(mostOccurringMonth) };
  };

  const getBookedGroups = (dates) => {
    const groups = Array.from({ length: bookedDates.length }, () => []);
  
    dates.forEach((date, index) => {
      bookedDates.forEach((rowBookings, rowIndex) => {
        const booking = isBooked(date, rowIndex);
        if (booking) {
          if (groups[rowIndex].length && groups[rowIndex][groups[rowIndex].length - 1].booking === booking) {
            groups[rowIndex][groups[rowIndex].length - 1].endIndex = index;
          } else {
            groups[rowIndex].push({ startIndex: index, endIndex: index, booking });
          }
        }
      });
    });
    console.log('Generated Groups:', groups);
    return groups;
  };
  
  
  

  const { dates, mostOccurringMonth } = generateDates(currentDate);
  const firstDate = dates[0];

  


  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 10);
    setCurrentDate(newDate);
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 10);
    setCurrentDate(newDate);
  };

  const today = new Date();

  const isBooked = (date, rowIndex) => {
    const bookedRange = bookedDates[rowIndex] && bookedDates[rowIndex].find(range => date >= range.start && date <= range.end);
    if (bookedRange) {
      bookedRange.color = bookedRange.color || `#${Math.floor(Math.random()*16777215).toString(16)}`;
      return bookedRange;
    }
    return null;
  };
  
  
  
  
  

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 mr-4">Previous</button>
        <div>{`${new Date(currentDate.getFullYear(), mostOccurringMonth).toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`}</div>
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 ml-4">Next</button>
      </div>
      <div className="dates flex border-t border-b w-full relative">
  {dates.map((date, index) => (
    <div 
      key={index} 
      className={`date-box flex-grow flex flex-col items-center border-r ${index === 0 ? '' : 'border-l'} ${date < today ? 'bg-gray-300' : ''}`}
      style={{minWidth: '50px'}}
    >
      <div className="border-b w-full text-center">{date.getDate()}</div>
      {[0, 1, 2].map(rowIndex => (
        <div key={rowIndex} className={`row border-b w-full h-12`}></div>
      ))}
    </div>
  ))}
  {getBookedGroups(dates).map((rowGroups, rowIndex) => rowGroups.map(group => {
                    console.log('First Date:', firstDate);
                    console.log('Group Start Index:', group.startIndex);
                    console.log('Group End Index:', group.endIndex);
                    console.log('Booking Start Date:', group.booking.start);

                    return (
                        <div
                            key={rowIndex}
                            className={`absolute top-0 left-0 row border-b w-full h-12`}
                            style={{
                                left: `calc(${group.startIndex} * (100% / 30) + ((new Date(group.booking.start) - firstDate) / (1000 * 60 * 60 * 24) * (100% / 30)) + 1px)`,
                                width: `calc(((${group.endIndex - group.startIndex + 1}) * (100% / 30)) - 2px)`,
                                top: `calc(${rowIndex} * (36px + 1px) + 37px)`,
                                backgroundColor: group.booking.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {group.booking.text}
                        </div>
                    );
                }))}
</div>

    </div>
  );
};

export default HorizontalRibbonCalendar;
