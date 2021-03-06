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
              Renting
            </Select.Option>
          </Select>
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
      
              

        <Form.Item label="Date Moved In">
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
        
      </Form>
    </>
  );
};

export default PersonalDetails;
