
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

const FormSizeDemo = ({nextStep, handleInputChange, onChangeDate, handleGenderChange, handleEmploymentChange, handleIncomeChange,handleBvnChange, handlePhoneChange,values}) => {
    const [componentSize, setComponentSize] = useState("default");
  
  // 

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const continueNext = e => {
    e.preventDefault()
    nextStep()
  }

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
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input
            type="text"
            name="firstName"
            placeholder="john"
            defaultValue={values.firstName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Middle Name">
          <Input
            type="text"
            name="middleName"
            placeholder="mike"
            defaultValue={values.middleName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
            type="text"
            name="lastName"
            placeholder="doe"
            defaultValue={values.lastName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            name="email"
            placeholder="john@yahoo.com"
            defaultValue={values.email}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="State">
          <Input
            type="text"
            name="stateOfOrigin"
            defaultValue={values.stateOfOrigin}
            placeholder="lagos"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Lga">
          <Input
            type="text"
            name="lga"
            placeholder="yaba"
            defaultValue={values.lga}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Select defaultValue={values.gender} onChange={handleGenderChange}>
            <Select.Option value="male" name="male">
              Male
            </Select.Option>
            <Select.Option value="female" name="female">
              Female
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select  onChange={handleEmploymentChange}>
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

        <Form.Item label="Date Of Birth">
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

export default FormSizeDemo;