import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
    Space,
  Typography
} from "antd";

const PersonalDetails = ({nextStep, prevStep, step ,onChangeDateMovedIn, handleResidentialStatus, handleResidentialAddress, handleMaritalStatus, handleEducation, values}) => {
  const [componentSize, setComponentSize] = useState("default");

    const { Title } = Typography;
  
  //
  const next = () => {
      nextStep()
  }

  const prev = () => {
      
      prevStep();
  }
  //

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  

  

  

  return (
    <>
      <Title type="secondary" level={4}>Personal Details</Title>

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
          <Select
            defaultValue={values.residentialStatus}
            onChange={handleResidentialStatus}
          >
            <Select.Option value="owner" name="owner">
              Owner
            </Select.Option>
            <Select.Option value="renting" name="renting">
              Renting
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Residential Address">
          <Input
            type="text"
            name="residentialAddress"
            defaultValue={values.residentialAddress}
            placeholder="7 tomori avenue mbambadiwe"
            onChange={handleResidentialAddress}
          />
        </Form.Item>

        <Form.Item label="Marital Status">
          <Select
            defaultValue={values.maritalStatus}
            onChange={handleMaritalStatus}
          >
            <Select.Option value="single" name="single">
              Single
            </Select.Option>
            <Select.Option value="married" name="married">
              Married
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Level of Education">
          <Select defaultValue={values.education} onChange={handleEducation}>
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
          <DatePicker
            onChange={onChangeDateMovedIn}
          />
        </Form.Item>
      </Form>
      <div className="steps-action">
        <Space>
          <Button type="primary" onClick={next}>
            Next
          </Button>
          <Button onClick={prev}>Prev</Button>
        </Space>
      </div>
    </>
  );
};

export default PersonalDetails;
