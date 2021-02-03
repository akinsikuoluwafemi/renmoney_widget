
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

    const onChangeDate = (date, dateString) => {
    //   console.log(date._d, dateString);
      console.log(dateString);
        
    }

    const handleCha

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
          <Input type="text" value={lga} name="lga" />
        </Form.Item>
        <Form.Item label="Gender">
          <Select>
            <Select.Option value="male" name="male">Male</Select.Option>
            <Select.Option value="female" name="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select onChange={handleChange}>
            <Select.Option value="Employed" name="Employed">Employed</Select.Option>
            <Select.Option value="Self-Employed" name="Self-Employed">Self-Employed</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Monthly Income">
          <InputNumber type="number" value={income} name="income" />
        </Form.Item>
        <Form.Item label="Bvn">
          <InputNumber type="number" value={bvn} name="bvn" />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <InputNumber type="number" value={phone} name="phone" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo;