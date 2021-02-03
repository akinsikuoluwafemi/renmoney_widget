import React from 'react';
import Eligibility from './EligibilityCheck';
import PersonalDetails from './PersonalDetails';
import EmploymentDetails from './EmploymentDetails';

import { Steps, Button, message, Form } from "antd";

const { Step } = Steps;

const steps = [
  {
    step: 1,
    title: "Eligibility Check",
    content: <Eligibility/>,
  },
  {
    step
    title: "Personal Details",
    content: <PersonalDetails/>,
  },
  {
    title: "Employment Details",
    content: <EmploymentDetails/>,
  },
];

const Stepper = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);

  };

  const handleSubmitData = (e) => {
    // e.preventDefault();

    message.success("Processing Complete");
  }

  return (
    <Form submit={handleSubmitData}>
      <Steps direction="vertical" current={current} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={handleSubmitData}
            htmlType="submit"
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Form>
  );
};

export default Stepper;