import React from 'react';

function AboutMe() {
  return (
    <>
      <h1 className="center">About Me</h1>
      <div className="card mb-3 about-me">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Hi! I'm Sisan, a Software Engineer based in the New York City area and a Flatiron School graduate👩🏾‍🎓. Prior to that, I worked for 2 years in Information Technology as an IT Support Specialist and while at Wellesley College I organized various event around diversity and inclusion.</p>
              <p>
              Moving forward, I want to take my passion for community, my technical skills, and my ability to work well under pressure to provide solutions for pur community and make technology more inclusive.</p>
              {/* <p className="card-text"><small className="text-muted">
                <ul>
                  <li>are unaffected by this style</li>
                  <li>will still show a bullet</li>
                  <li>and have appropriate left margin</li>
                </ul>
              </small></p> */}
            </div>
          </div>
          <div className="col-md-4">
            <img src="sisan.jpg" className="img-fluid rounded" alt="Sisan"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;