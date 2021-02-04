import React, { useState } from "react";
import axios from 'axios';
import {connect } from 'react-redux';



import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Space,
  Typography,
  message
} from "antd";

const EmploymentDetails = ({
  prevStep,
  onChangeEmploymentDate,
  handleEmployerSector,
  handleEmployerName,
  handleWorkEmail,
  handleOfficeAddress,
  values
        }) => {
  const [componentSize, setComponentSize] = useState("default");

  const { Title } = Typography

  const api = `https://jsonplaceholder.typicode.com/todos/1`;


   const onFormLayoutChange = ({ size }) => {
     setComponentSize(size);
   };




  const HandleSubmit = () => {
      
      console.log(values);
      message.success("Processing Complete, fetching todo");
      getTodo();
    
  }

  const getTodo = async () => {
    let response = await axios.get(api).then(res => {
        console.log(res.data)
    },(error) => {
      console.log(error)
    })
    return response
  }

  const prev = () => {

    prevStep();
  };

  return (
    <>
      <Title type="secondary" level={4}>Employment Details</Title>

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
          label="Employer Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            type="text"
            name="employerName"
            defaultValue={values.employerName}
            placeholder="Stripe"
            onChange={handleEmployerName}
          />
        </Form.Item>
        <Form.Item label="Employer Sector">
          <Select
            defaultValue={values.employerSector}
            onChange={handleEmployerSector}
          >
            <Select.Option value="finance" name="finance">
              Finance
            </Select.Option>
            <Select.Option value="banking" name="banking">
              Banking
            </Select.Option>
            <Select.Option value="charity" name="charity">
              Charity
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Office Address">
          <Input
            type="text"
            name="officeAddress"
            defaultValue={values.officeAddress}
            placeholder="7 liverpool avenue"
            onChange={handleOfficeAddress}
          />
        </Form.Item>

        <Form.Item label="Work Email">
          <Input
            type="email"
            defaultValue={values.workEmail}
            name="workEmail"
            placeholder="tom@renmoney.com"
            onChange={handleWorkEmail}
          />
        </Form.Item>

        <Form.Item label="Employment Start Date">
          <DatePicker
            defaultValue={values.employmentStartDate}
            onChange={onChangeEmploymentDate}
          />
        </Form.Item>
      </Form>
      <div className="steps-action">
        <Space>
          <Button
            style={{ background: "green", color: "#fff" }}
            onClick={HandleSubmit}
          >
            Submit
          </Button>
          <Button onClick={prev}>Prev</Button>
        </Space>
      </div>
    </>
  );
};



export default connect() (EmploymentDetails);
