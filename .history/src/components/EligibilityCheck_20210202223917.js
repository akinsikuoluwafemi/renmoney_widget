
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
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Middle Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="State">
          <Input />
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
            <Select.Option value="demo">Sel</Select.Option>
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