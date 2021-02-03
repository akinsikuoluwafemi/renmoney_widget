
import React, { useState, use } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Typography
} from "antd";


const FormSizeDemo = ({nextStep, handleInputChange, step, onChangeDate, handleGenderChange, handleEmploymentChange, handleIncomeChange,handleBvnChange, handlePhoneChange,values}) => {
    const [componentSize, setComponentSize] = useState("default");
  
  const { Title } = Typography;


  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  

  const next = e => {
    console.log(values)
    console.log(step)
    console.log('next step is calling')
    nextStep()
  }

  return (
    <>
      <Title type="secondary" level={4}>Eligibility Check</Title>

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
            onChange={handleInputChange}
            defaultValue={values.firstName}
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
          <Select
            defaultValue={values.employmentStatus}
            onChange={handleEmploymentChange}
          >
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
            name="income"
            defaultValue={values.income}
            placeholder="300000"
            onChange={handleIncomeChange}
          />
        </Form.Item>
        <Form.Item label="Bvn">
          <InputNumber
            type="number"
            name="bvn"
            defaultValue={values.bvn}
            placeholder="2456789898"
            onChange={handleBvnChange}
          />
        </Form.Item>

        <Form.Item label="Date Of Birth">
          <DatePicker defaultValue={values.dob} onChange={onChangeDate} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <InputNumber
            type="number"
            name="phone"
            defaultValue={values.phone}
            placeholder="08103030067"
            onChange={handlePhoneChange}
          />
        </Form.Item>
      </Form>

      <div className="steps-action">
        <Button type="primary" onClick={next}>
          Next
        </Button>
      </div>
    </>
  );
};

export default FormSizeDemo;