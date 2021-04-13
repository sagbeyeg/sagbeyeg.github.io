import React, { Component } from "react";

class Projects extends Component{
  projects = [
    {
      name: "Traverse",
      image:"traverse-landing.png",
      description: "Social media and all inclusive travel booking application that takes away all the stress of planning a trip.",
      tech: "React, Redux, Ruby on Rails & React Planet"
    },
    {
      name: "Exhale",
      image: "Mindfulness app designed to help users find more happiness, joy and meaning in their lives through mindful living practices.",
      description:"inverse-logo.png",
      tech: "React & Ruby on Rails"
    },
    {
      name: "Twumbler",
      image:"inverse-logo.png",
      description: "Private journaling application that gives users the opportunity for emotional catharsis and regulation.",
      tech: "Vanilla Javascript & Ruby on Rails"
    },
    {
      name: "B@ckLg",
      image:"inverse-logo.png",
      description: "Video game cataloging application that helps gamers perform an advanced search and track their video games.",
      tech: "Ruby on Rails"
    }
  ]
  render() {
  return (
    <div>
      <h1 className="left-align">My Projects</h1>
      <hr className="hr"></hr>
      <div className="center">
        <strong>Insert Projects Here</strong>
      </div>
    </div>
  );}
}

export default Projects;
