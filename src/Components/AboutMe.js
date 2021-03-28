import React from 'react';

function AboutMe() {
  return (
    <>
      <h2>About Me</h2>
      <div class="row about-me">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p class="card-text">Hi! I'm Sisan, a Software Engineer based in the New York City area and a Flatiron School graduate👩🏾‍🎓. Prior to that, I worked for 2 years in Information Technology as an IT Support Specialist and while at Wellesley College I organized various event around diversity and inclusion. Moving forward, I want to take my passion for community, my technical skills, and my ability to work well under pressure to provide solutions for pur community and make technology more inclusive.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <img src="sisan.jpg" class="img-fluid rounded" alt="A picture of Sisan"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;