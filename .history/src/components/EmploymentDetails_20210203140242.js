import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
} from "antd";

const EmploymentDetails = ({
  nextStep,
  prevStep,
  onChangeEmploymentDate,
  handleEmployerSector,
  handleEmployerName,
  handleWorkEmail,
  handleOfficeAddress,
  values
,}) => {
  const [componentSize, setComponentSize] = useState("default");

  const next = (e) => {
    console.log(values);
    console.log(step);
    nextStep();
  };

  const prev = (e) => {
    console.log(values);
    console.log(step);

    prevStep();
  };

  return (
    <>
      <Form
        // labelCol={{
        //   span: 0,
        // }}
        // wrapperCol={{
        //   span: 0,
        // }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          label="Employer Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            type="text"
            value={employerName}
            name="employerName"
            placeholder="Stripe"
            onChange={handleEmployerName}
          />
        </Form.Item>
        <Form.Item label="Employer Sector">
          <Select onChange={handleEmployerSector}>
            <Select.Option value="finance" name="finance">
              Finance
            </Select.Option>
            <Select.Option value="banking" name="banking">
              Banking
            </Select.Option>
            <Select.Option value="charity" name="charity">
              Charity
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Office Address">
          <Input
            type="text"
            value={officeAddress}
            name="officeAddress"
            placeholder="7 liverpool avenue"
            onChange={handleOfficeAddress}
          />
        </Form.Item>

        <Form.Item label="Work Email">
          <Input
            type="email"
            value={workEmail}
            name="workEmail"
            placeholder="tom@renmoney.com"
            onChange={handleWorkEmail}
          />
        </Form.Item>

        <Form.Item label="Employment Start Date">
          <DatePicker onChange={onChangeEmploymentDate} />
        </Form.Item>
      </Form>
    </>
  );
};

export default EmploymentDetails;
