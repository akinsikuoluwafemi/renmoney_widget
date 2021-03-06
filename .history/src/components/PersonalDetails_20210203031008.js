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
  const [p, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  //
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    stateOfOrigin: "",
    lga: "",
  });

  //

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date._d);
    // console.log(dateString);
    setDob(date._d);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleEmploymentChange = (value) => {
    setEmploymentStatus(value);
  };

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  const handleBvnChange = (value) => {
    setBvn(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  console.log(state.firstName);
  console.log(state.middleName);
  console.log(state.lastName);
  console.log(state.email);
  console.log(state.stateOfOrigin);
  console.log(state.lga);
  console.log(income);
  console.log(gender);
  console.log(employmentStatus);
  console.log(dob);
  console.log(bvn);
  console.log(phone);

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
          <Input
            type="text"
            value={state.firstName}
            name="firstName"
            placeholder="john"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Middle Name">
          <Input
            type="text"
            value={state.middleName}
            name="middleName"
            placeholder="mike"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
            type="text"
            value={state.lastName}
            name="lastName"
            placeholder="doe"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            value={state.email}
            name="email"
            placeholder="john@yahoo.com"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="State">
          <Input
            type="text"
            value={state.stateOfOrigin}
            name="stateOfOrigin"
            placeholder="lagos"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Lga">
          <Input
            type="text"
            value={state.lga}
            name="lga"
            placeholder="yaba"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Select onChange={handleGenderChange}>
            <Select.Option value="male" name="male">
              Male
            </Select.Option>
            <Select.Option value="female" name="female">
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
