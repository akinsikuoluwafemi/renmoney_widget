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
            <Select.Option value="finance" name="owner">
              Finance
            </Select.Option>
            <Select.Option value="renting" name="renting">
              Banking
            </Select.Option>
            <Select.Option value="renting" name="renting">
              Charity
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Residential Address">
          <Input
            type="text"
            value={residentialAddress}
            name="residential-address"
            placeholder="7 tomori avenue mbambadiwe"
            onChange={handleResidentialAddress}
          />
        </Form.Item>

        <Form.Item label="Marital Status">
          <Select onChange={handleMaritalStatus}>
            <Select.Option value="single" name="single">
              Single
            </Select.Option>
            <Select.Option value="married" name="married">
              Married
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Level of Education">
          <Select onChange={handleEducation}>
            <Select.Option value="primary" name="primary">
              Primary
            </Select.Option>
            <Select.Option value="secondary" name="secondary">
              Secondary
            </Select.Option>
            <Select.Option value="graduate" name="graduate">
              Graduate
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date Moved In">
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
      </Form>
    </>
  );
};

export default EmploymentDetails;
