import React from "react";
import Hero from "../components/Header/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      
    <div class="course_highlights">
        <div class="container">
            <div class="course_card">
                <h4>Code/Math/Music</h4>
                <p>Learn Coding, Math and Music LIVE with expert teachers. Build a strong foundation with rich story-based visual content and a 100% personalized course design.</p>
                <button>Learn More</button>

            </div>
            <div class="course_card">
                <h4>Reading</h4>
                <p>Start your reading journey with 40,000+ ebooks, Read-To-Me books, audios, videos and more. Cultivate a life-long habit!</p>
                <button>Learn More</button>

            </div>
            <div class="course_card">
                <h4>Coding</h4>
                <p>Approved by educators. Loved by kids. Tynker teaches younger kids how to code with a fun story-based learning approach and live instruction to ensure success.</p>
                <button>Learn More</button>

            </div>
        </div>
    </div>

      {/* mid section start */}
      <div className="mid_section">
        <div className="container">
          <div className="mid_text">
            <h1>Not Yet Satisfied with our Trend?</h1>
          </div>
          <div className="button">
            <button>Join Now</button>
          </div>
        </div>
      </div>
      {/* mid section  end */}
      <div class="popular_course">
            <div class="head">
                <h2>Popular Course</h2>
            </div>
            <div class="container">
                <div class="course_card">
                    <img src="./images/programming-languages-shutterstock-1680857539.webp" />
                    <h5>Coding</h5>
                    <p>Approved by educators. Loved by kids. Tynker teaches younger kids how to code with a fun story-based learning approach and live instruction to ensure success.</p>
                      
                    </div>
                
                <div class="course_card">
                    <img src="./images/1680118995_62112_url.jpeg" />
                    <h5>Coding/Maths/Music</h5>
                    <p>Learn Coding, Math and Music LIVE with expert teachers. Build a strong foundation with rich story-based visual content and a 100% personalized course design.</p>
                    
                </div>
                <div class="course_card">
                    <img src="./images/childreading_051123_adobestock_newyorkcity.webp"  />
                    <h5>Reading</h5>
                    <p>Lor. Start your reading journey with 40,000+ ebooks, Read-To-Me books, audios, videos and more. Cultivate a life-long habit!</p>
                  
                </div>
            </div>
        </div>

    </>
  );
};

export default Home;
