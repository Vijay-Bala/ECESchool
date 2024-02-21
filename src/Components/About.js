import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (
    <div className="about-section-container" style={{ marginTop: '8vh' }}>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <NewSlider />
      <div className="right-dept">
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        



        <p className="primary-text">- ECE offers B.E. and M.E. programs (1994).</p>
        <p className="primary-text">- Three gold medallists, 80+ rank holders.</p>
        <p className="primary-text">- Eleven Ph.D. faculty drive research.</p>
        <p className="primary-text">- Ten staff pursuing doctoral programs.</p>
        <p className="primary-text">- Hosts national-level conferences, symposiums, workshops.</p>
        <p className="primary-text">- Committed to advancing ECE knowledge.</p>
        <p className="primary-text">- Excels in academic achievements, research. </p>
        <div className="about-buttons-container">
          <a href="https://stjosephs.ac.in/departmentsite/ECE-%20Website/index.html"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;