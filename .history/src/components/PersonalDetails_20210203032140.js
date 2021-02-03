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
  TreeSelect,
  Switch,
} from "antd";

const PersonalDetails = () => {
  const [componentSize, setComponentSize] = useState("default");

  const [residentialStatus, setResidentialStatus] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
    const [dateMovedIn, setDateMovedIn] = useState("");
    const [martitalStatus, setMaritalStatus] = useState("");
  const [education, setEducation] = useState("");

  //
  

  //

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date._d);
    // console.log(dateString);
    setDateMovedIn(date._d);
  };

  const handleResidentialStatus = (value) => {
    setResidentialAddress(value);
  };

  const handleResidentialAddress = (value) => {
    setResidentialAddress(value);
  };

  const handleMaritalStatus = (value) => {
    setMaritalStatus(value);
  };

  const handleEducation = (value) => {
    setEducation(value);
  };

  

  

  console.log(residentialStatus);
  console.log(residentialAddress);
  console.log(dateMovedIn);
  console.log(martitalStatus);
  console.log(education);
  

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
        
        <Form.Item label="Residential Status">
          <Select onChange={handleResidentialStatus}>
            <Select.Option value="owner" name="owner">
              Owner
            </Select.Option>
            <Select.Option value="renting" name="renting">
              Female
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select onChange={handleEmploymentChange}>
            <Select.Option value="Employed" name="Employed">
              Employed
            </Select.Option>
            <Select.Option value="Self-Employed" name="Self-Employed">
              Self-Employed
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Monthly Income">
          <InputNumber
            type="number"
            value={income}
            name="income"
            placeholder="300000"
            onChange={handleIncomeChange}
          />
        </Form.Item>
        <Form.Item label="Bvn">
          <InputNumber
            type="number"
            value={bvn}
            name="bvn"
            placeholder="2456789898"
            onChange={handleBvnChange}
          />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <InputNumber
            type="number"
            value={phone}
            name="phone"
            placeholder="08103030067"
            onChange={handlePhoneChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default PersonalDetails;
