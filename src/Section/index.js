import React from "react";
import "./style.css";

const Section = ({className,title,extraHeaderContent,taskContent}) => (
    <section className="section">
    <div className= {className}>
      <h2 className="section__header">{title}</h2>
      {extraHeaderContent}
    </div>
    {taskContent}
  </section>
);

export default Section;
