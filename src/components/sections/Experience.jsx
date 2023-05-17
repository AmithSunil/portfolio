import React from "react";
import "./experience.css";
import tictactoe from "../images/tictactoe.png";

const Experience = () => {
  return (
    <div className="experience-main-body">
      <div className="head">
        <h2>
          <span className="highlight">02.</span>Experience
        </h2>
        <hr />
      </div>
      <div className="proj-one proj">
        <img src={tictactoe} alt="img-here" />
        <div>
          <h3>Tic-Tac-Toe</h3>
          <p className="proj-text">
            "Tic Tac Toe" is a video game developed using the powerful
            <span className="highlight-text"> Godot Game Engine</span>, the game
            is implemented in GD Script. animations crafted using
            Blender.Available in the{" "}
            <span className="highlight-text">Google Play Store</span>.
          </p>
          <div className="items-used">
            <div>Godot</div>
            <div>GDScript</div>
            <div>Blender</div>
            <div>Google AdMob</div>
          </div>
        </div>
      </div>
      <hr className="hr-exp" />
      <div className="proj-two proj">
        <div>
          <h3>Quizdom</h3>
          <p className="proj-text ">
            The program is a <span className="highlight-text">ReactJs</span> web
            application that utilizes the{" "}
            <span className="highlight-text">OpenAI API</span>. OpenAI API to
            generate five questions and four answer options based on a topic
            provided by the user. This creates an interactive
            question-and-answer format that can be used for educational, quiz,
            or trivia-based activities.
          </p>
          <div className="items-used">
            <div>ReactJs</div>
            <div>OpenAI</div> 
          </div>
        </div>
        <img src={tictactoe} alt="img-here" />
      </div>
    </div>
  );
};

export default Experience;
