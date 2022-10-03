import React from "react";
import "./style.scss";

import { SnoopElement, SnoopForm, SnoopPage } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";

export const SnoofForm = () => {
  return (
    <div className="modal-sec">
      <SnoopForm domain="app.snoopforms.com" protocol="https" formId="y90xHYKh">
        <SnoopPage name="basicInfo">
          <SnoopElement
            type="text"
            name="name"
            classNames={{ element: "default-css-none color-white" }}
            label="Your name"
            required
          />
          <SnoopElement
            type="textarea"
            classNames={{ element: "default-css-none color-white" }}
            name="about"
            label="About you"
            help="e.g. your hobbies etc."
            required
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="advancedInfo">
          <SnoopElement
            type="checkbox"
            name="programming-lanuguages"
            label="What programming languages do you love?"
            options={["C++", "Javascript", "Scala", "Assembler"]}
            classNames={{ element: "color-white" }}
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="contact">
          <SnoopElement
            type="number"
            name="phone-number"
            label="Enter your phone number"
            classNames={{ element: "color-white" }}
          />
          <SnoopElement
            name="submit"
            type="submit"
            label="Submit"
            classNames={{ element: "color-white" }}
          />
        </SnoopPage>
        <SnoopPage name="thankyou" thankyou>
          <p style={{ color: "white", textAlign: "center" }}>
            Thanks a lot for your time and insights 🙏
          </p>
        </SnoopPage>
      </SnoopForm>
    </div>
  );
};
