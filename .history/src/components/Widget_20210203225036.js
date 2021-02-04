import React, {useState} from 'react';
import './Widget.css';
import RenmoneyLogo from '../img/renmoney-logo.svg';
import { Button } from 'antd';
import Eligibility from "./EligibilityCheck";
import PersonalDetails from "./PersonalDetails";
import EmploymentDetails from "./EmploymentDetails";
import { connect } from 'react-redux';
import { onBoardingAction, showModalAction } from '../actions/onBoardingAction'




function Widget({ onBoardingAction, onBoarding, showModalAction }) {
  const [openModal, setOpenModal] = useState(false);

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
    setState({ ...state, step: step + 1 });
  };

  // Go back to prev step
  const prevStep = () => {
    const { step } = state;
    setState({ ...state, step: step - 1 });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onChangeDate = (date, dateString) => {
    // console.log(dateString);
    setDob(dateString);
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

  const onChangeDateMovedIn = (date, dateString) => {
    // console.log(dateString);
    setDateMovedIn(dateString);
  };

  const handleResidentialStatus = (value) => {
    setResidentialStatus(value);
  };

  const handleResidentialAddress = (e) => {
    setResidentialAddress(e.target.value);
  };

  const handleMaritalStatus = (value) => {
    setMaritalStatus(value);
  };

  const handleEducation = (value) => {
    setEducation(value);
  };

  const onChangeEmploymentDate = (date, dateString) => {
    //  console.log(date._d);
    // console.log(dateString);
    setEmploymentStartDate(dateString);
  };

  const handleEmployerSector = (value) => {
    setEmployerSector(value);
  };

  const handleEmployerName = (e) => {
    setEmployerName(e.target.value);
  };

  const handleWorkEmail = (e) => {
    setWorkEmail(e.target.value);
  };

  const handleOfficeAddress = (e) => {
    setOfficeAddress(e.target.value);
  };

  const {
    step,
    firstName,
    lastName,
    middleName,
    email,
    stateOfOrigin,
    lga,
  } = state;
  const values = {
    firstName,
    lastName,
    middleName,
    email,
    stateOfOrigin,
    lga,
    income,
    bvn,
    dob,
    phone,
    gender,
    employmentStatus,
    residentialStatus,
    residentialAddress,
    dateMovedIn,
    martitalStatus,
    education,
    employerName,
    employerSector,
    employmentStartDate,
    officeAddress,
    workEmail,
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Eligibility
            handleInputChange={handleInputChange}
            onChangeDate={onChangeDate}
            handleGenderChange={handleGenderChange}
            handleEmploymentChange={handleEmploymentChange}
            handleIncomeChange={handleIncomeChange}
            handleBvnChange={handleBvnChange}
            handlePhoneChange={handlePhoneChange}
            values={values}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            onChangeDateMovedIn={onChangeDateMovedIn}
            handleResidentialStatus={handleResidentialStatus}
            handleResidentialAddress={handleResidentialAddress}
            handleMaritalStatus={handleMaritalStatus}
            handleEducation={handleEducation}
            values={values}
          />
        );

      case 3:
        return (
          <EmploymentDetails
            prevStep={prevStep}
            onChangeEmploymentDate={onChangeEmploymentDate}
            handleEmployerSector={handleEmployerSector}
            handleEmployerName={handleEmployerName}
            handleWorkEmail={handleWorkEmail}
            handleOfficeAddress={handleOfficeAddress}
            values={values}
          />
        );

      default:
        console.log("This is a multistep widget");
    }
  };

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
            <img className="my-2" src={RenmoneyLogo} alt="renmoney logo" />
            <h5 className="mb-4">Welcome to our payment section.</h5>
          </div>

          {onBoarding ? (
            // <Stepper steps={steps} />
            renderForm()
          ) : (
            <span className="onboarding-button">
              <Button
                style={{ background: "#F15822", border: "#F15822" }}
                type="primary"
                block
                onClick={() => onBoardingAction()}
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    onBoarding: state.onBoarding.startedOnBoarding,
    
  };
}


export default connect(mapStateToProps, { onBoardingAction, showModalAction })(Widget);