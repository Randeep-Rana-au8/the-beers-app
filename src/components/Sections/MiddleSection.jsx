import React from "react";
import "./MiddleSection.css";

const MiddleSection = () => {
  return (
    <section className="section mid-section">
      <div className="ellipse">
        <h1 className="ellipse-title">Why Beer is good?</h1>
        <p className="ellipse-para">
          Healthy amount of beer can add years to your life, given that it
          positively impacts cholesterol levels, lowers your risk of diabetes
          and strengthens your heart.
        </p>
      </div>
      <div className="data-container">
        <div className="box data1">
          <h6>
            Studies suggest moderate beer drinking* may make you less likely
            than those who don't drink to suffer from hearts attacks, strokes or
            heart disease. In fact, studies evaluating the relative benefits of
            wine versus beer versus spirits suggest that moderate consumption of
            any alcoholic beverage is associated with lower rates of
            cardiovascular disease. New England Journal of Medicine
          </h6>
        </div>
        <div className="box data2">
          <h6>
            Researchers found that two glasses of beer a day can reduce
            work-related stress or anxiety. However, routinely turning to
            alcohol to help cope with stress may do more harm than good. While
            alcohol may help with stress reduction in the moment, in the long
            run it can contribute to feelings of depression and anxiety, making
            stress harder to deal with. American Journal of Psychiatry
          </h6>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
