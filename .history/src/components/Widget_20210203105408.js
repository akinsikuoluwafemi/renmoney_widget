import React, {useState} from 'react';
import './Widget.css';
import RenmoneyLogo from '../img/renmoney-logo.svg';
import Stepper from './Stepper';
import { Button } from 'antd';
import Eligibility from "./EligibilityCheck";
import PersonalDetails from "./PersonalDetails";
import EmploymentDetails from "./EmploymentDetails";


export default function Widget() {
  const [openModal, setOpenModal] = useState(true);
  const [onboardingStart, setOnBoardingStart] = useState(true);

  // step inputs start
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    stateOfOrigin: "",
    lga: "",
  });

  const [income, setIncome] = useState("");
  const [bvn, setBvn] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  const [residentialStatus, setResidentialStatus] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [dateMovedIn, setDateMovedIn] = useState("");
  const [martitalStatus, setMaritalStatus] = useState("");
  const [education, setEducation] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [employerSector, setEmployerSector] = useState("");
  const [employmentStartDate, setEmploymentStartDate] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  // step inputs end

  // Proceed to nex step
  const nextStep = () => {
    const { step } = state;
    setState(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    const { step } = state;
    setState(step - 1);
  };

    const handleInputChange = (e) => {
      const value = e.target.value;
      setState({ ...state, [e.target.name]: value });
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

  const steps = [
    {
      id: 1,
      title: "Eligibility Check",
      content: <Eligibility />,
    },
    {
      id: 2,
      title: "Personal Details",
      content: <PersonalDetails />,
    },
    {
      id: 3,
      title: "Employment Details",
      content: <EmploymentDetails />,
    },
  ];

  const { step } = state;
  const { firstName, lastName, middleName, email, stateOfOrigin, lga } = state;
  const values = {firstName, lastName, middleName, email, stateOfOrigin, lga, income, bvn, dob,phone,gender,employmentStatus, residentialStatus, residentialAddress, dateMovedIn, martitalStatus, education, employerName, employerSector, employmentStartDate, officeAddress,workEmail }
  
  return (
    <>
      <button
        style={{ background: "#F15822", border: "none", color: "#fff" }}
        type="button"
        class="btn text-white"
        onClick={() => setOpenModal(true)}
      >
        Pay with Renmoney
      </button>

      <div className={openModal ? `show-widget` : `hide-widget`}>
        <div className="show-widget-content">
          <div>
            <img className="mb-2" src={RenmoneyLogo} alt="renmoney logo" />
            <h5>Welcome to the payment section</h5>
          </div>

          {onboardingStart ? (

            {
              switch(step){
                case 1:
                return 
              }


            }

            
            // <Stepper steps={steps} />





          ) : (
            <span className="onboarding-button">
              <Button
                style={{ background: "#F15822", border: "#F15822" }}
                type="primary"
                block
                onClick={() => setOnBoardingStart(true)}
              >
                Continue to onboarding
              </Button>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
