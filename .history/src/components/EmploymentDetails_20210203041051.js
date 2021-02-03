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

const EmploymentDetails = () => {
  const [componentSize, setComponentSize] = useState("default");

  const [employerName, setEmployerName] = useState("");
  const [employerSector, setEmployerSector] = useState("");
  const [employmentStartDate, setEmploymentStartDate] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  //

  //

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date._d);
    // console.log(dateString);
    setEmploymentStartDate(date._d);
  };

  const handleEmployerSector = (value) => {
    setEmployerSector(value);
  };

  const handleEmployerName = (e) => {
    setEmployerName(e.target.value);
  };

  const handleWorkEmail = (e) => {
    setWorkEmail(e.target.value);
  };

  const handleOfficeAddress = (e) => {
    setOfficeAddress(e.target.value);
  };

  console.log(employerName);
  console.log(employerSector);
  console.log(officeAddress);
  console.log(employmentStartDate);
  console.log(workEmail);

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
        <Form.Item label="Employer Name">
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

        <Form.Item label="Date Moved In">
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
      </Form>
    </>
  );
};

export default EmploymentDetails;
