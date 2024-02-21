import React, { useState } from "react";

const Popup = ({ details, onClose, selectedWeek }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Schedule for Day {selectedWeek}</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p><strong>{index + 1}:</strong> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
      
        "Introduction to Robotics, Types and Components of Robots.",
        "Robotic Vision.",
        "AI and Machine Learning in Robotics.",
        "Human-Robot Interaction.",
        "Emerging Trends in Robotics.",
        "Challenges and Future Prospects."
      ],

      "1:1":[
        "Introduction to Ethical Hacking.",
        "Basics of Networking and Security.",
        "Cryptography Fundamentals.",
        "Legal and Ethical Aspects of Ethical hacking.",
        "Building a Career in Ethical Hacking."
      ],
      "1:2":[
        "Introduction to the Internet of Things (IoT).",
        "Smart Home Automation using IoT.",
        "IoT and Healthcare Monitoring.",
        "IoT and Wearable Health Devices.",
        "IoT in Smart Cities.",
        "IoT and Emerging Technologies",
        "IoT and Entrepreneurship Opportunities.",
      ],
      "1:3":[
        "Introduction to AI",
        "Image acquisition",
        "Image enhancement",
        "Image restoration",
        "Image compression",
        "Morphological processing",
        "Representation & description",
        "Object detection and recognition",
      ],
      "1:4":[
        "Basics - Analog Read Serial, Blink, Fading an LED, Read Analog Voltage.",
        "Analog - Analog In, Out Serial, analog Input, Calibrate Sensor Input, Fading, ",
        "Digital - Blink without Delay, wire and Program a Button, Debounce on a Pushbutton",
        "Control Structures, Strings, Sensor. Peripheral Interfacings."
      ],
      
    
  });
  

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  // const dates = generateDates(selectedWeek);
  const dates = [1,2,3,4,5]

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            Week {week}
          </th>
        ))}
      </tr>
    </thead>
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            {/* <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th> */}
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              <td style={{ border: "1px solid black", padding: "8px" }}><strong>Day {date}</strong></td>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][date.getDay()]}</td> */}
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s", }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} selectedWeek={selectedWeek} />}
    </div>
  );
};

export default Schedule;