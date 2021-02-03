import React from 'react';


import { Steps, Button, message, Form } from "antd";

const { Step } = Steps;



const Stepper = ({steps}) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent((prevValue) => prevV + 1);
  };

  const prev = () => {
    setCurrent(current - 1);

  };

  const handleSubmitData = (e) => {
    // e.preventDefault();

    message.success("Processing Complete");
  }

  return (
    <Form onSubmit={handleSubmitData}>
      <Steps direction="vertical" current={current} size="small">
        {steps.map((item) => (
          <Step key={item.id} title={item.title} />
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