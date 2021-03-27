import React from 'react';

function AboutMe() {
  return (
    <div className="card about-me">
      <h2 class="card-title">About Me</h2>
      <div class="row">
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
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;