import React from "react";
import person from "./person.module.css";
import Button from "../button/Button";

function Person() {
  return (
    <section className={person.container}>
      <div>
        <img src="/assets/blackman.jpg" alt="" />
        <h4>ASABENEH YETAYEH</h4>
        <p>Senior Developer, Finland</p>
        <h6>Skills</h6>
        <div className={person.button_container}>
          <Button text="HTML" />
          <Button text="CSS" />
          <Button text="SASS" />
          <Button text="JS" />
          <Button text="React" />
          <Button text="Redux" />
          <Button text="Node" />
          <Button text="MongoDB" />
          <Button text="Python" />
          <Button text="Flask" />
          <Button text="Django" />
          <Button text="Numpy" />
          <Button text="Pandas" />
          <Button text="Data Analysis" />
          <Button text="MYSQL" />
          <Button text="GraphQL" />
          <Button text="D3.js" />
          <Button text="Gatsby" />
          <Button text="Docker" />
          <Button text="Heroku" />
          <Button text="Git" />
        </div>
        <p>Joined on Aug 30, 2020</p>
      </div>
    </section>
  );
}

export default Person;
