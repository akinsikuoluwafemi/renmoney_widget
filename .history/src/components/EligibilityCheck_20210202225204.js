
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

const FormSizeDemo = () => {
    const [componentSize, setComponentSize] = useState("default");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState("");
    const [stateOfOrigin, setStateOfOrigin] = useState(''); 
    const [lga, setLga] = useState("");
    const [income, setIncome] = useState('');
    const [bvn, setBvn] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
        <Form.Item label="First Name">
          <Input type="text" value={firstName} name="firstName" />
        </Form.Item>
        <Form.Item label="Middle Name">
          <Input type="text" value={middleName} name="middleName" />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input type="text" value={lastName} name="lastName" />
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" value={email} name="email" />
        </Form.Item>
        <Form.Item label="State">
          <Input type="text" value={stateOfOrigin} name="stateOfOrigin" />
        </Form.Item>
        <Form.Item label="Lga">
          <Input />
        </Form.Item>
        <Form.Item label="Gender">
          <Select>
            <Select.Option value="demo">Male</Select.Option>
            <Select.Option value="demo">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select>
            <Select.Option value="demo">Employed</Select.Option>
            <Select.Option value="demo">Self-Employed</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Monthly Income">
          <InputNumber type="number" />
        </Form.Item>
        <Form.Item label="Bvn">
          <InputNumber type="number" />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Phone Number">
          <InputNumber />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo;