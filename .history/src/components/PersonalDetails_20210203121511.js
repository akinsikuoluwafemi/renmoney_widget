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

const PersonalDetails = ({nextStep, prevStep, onChangeDateMovedIn, handleResidentialStatus, handleResidentialAddress, handleMaritalStatus, handleEducation, values}) => {
  const [componentSize, setComponentSize] = useState("default");

  
  //
  const next = () => {
      nextStep()
  }

  const prev = () => {
      
  }
  //

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
              
        <Form.Item label="Residential Address">
          <Input type="text" value={residentialAddress} name="residential-address" placeholder="7 tomori avenue mbambadiwe" onChange={handleResidentialAddress}  />
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
          <DatePicker onChange={onChangeDateMovedIn} />
        </Form.Item>
      </Form>
    </>
  );
};

export default PersonalDetails;