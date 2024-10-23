import React, { useState } from 'react';
import './css/FormBold.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { APIURL } from '../Datasets/data';
import ReCAPTCHA from 'react-google-recaptcha';

const FormBold = ({background='dark'}) => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [errorType, setErrorType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCompany('');
    setCompanyType('');
    setServices([]);
    setMessage('');
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'services') {
      // Handle checkboxes for services
      setServices((prevState) =>
        checked
          ? [...prevState, value] // Add to array
          : prevState.filter((service) => service !== value) // Remove from array
      );
    } else {
      switch (name) {
        case 'fullName':
          setFullName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'company':
          setCompany(value);
          break;
        case 'message':
          setMessage(value);
          break;
        default:
          break;
      }
    }
  };
  const handleSelectChange = (option) => {
    setCompanyType(option);
    setIsOpen(prevState => !prevState);
  };

  const handleSelectOpen = () =>{
    setIsOpen(prevState => !prevState);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    const newErrorTypes = [];

        if(step === 1){
            if (fullName === '') {
                newErrorTypes.push('fullName');
            }
            if (email === '') {
                newErrorTypes.push('email');
            }
            if (phoneNumber === '') {
                newErrorTypes.push('phoneNumber');
            }
        }
        else{
            if (company === '') {
                newErrorTypes.push('company');
            }
            if (companyType === '') {
                newErrorTypes.push('companyType');
            }
        }

        if (newErrorTypes.length === 0) {
            setStep((prevStep) => prevStep + 1);
            setErrorType([]);
        } else {
            setErrorType(newErrorTypes);
        }
    
  };

  const handleBackStep = (event) => {
    event.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
        alert('Please complete the CAPTCHA');
        return;
      }
    const FormAPI = APIURL + 'api_mainform.php';
    setLoading(true);

    const queryString = new URLSearchParams({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        company: company,
        companyType: companyType,
        service: services,
        message: message
    }).toString();


    fetch(FormAPI + '?' + queryString)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
        resetForm();
      })
      .catch((error) => {
        setResponse(error);
        console.error('Error sending email:', error);
        setLoading(false);
      });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper" style={{border: background==='light' ? '1px solid grey': ''}}>
        <form>
            <div style={{marginBottom: '10px'}}>
                <h2 style={{textAlign: 'center', margin: 0,}}>
                    Get a Quote
                </h2>
                <p style={{textAlign: 'center', margin: 0, fontSize: '14px'}}>
                    Fill out the Form so we can Assist you effectively.
                </p>

            </div>
          <div className="formbold-steps">
            <ul className='step-md'>
              <li className={`formbold-form-step-1 ${step === 1 ? 'active' : ''}`}>
                <span>1</span>
                Personal Information
              </li>
              <li className={`formbold-form-step-2 ${step === 2 ? 'active' : ''}`}>
                <span>2</span>
                Company Information
              </li>
              <li className={`formbold-form-step-3 ${step === 3 ? 'active' : ''}`}>
                <span>3</span>
                Details
              </li>
            </ul>
            <ul className='step-sm'>
              <li className={`formbold-form-step-1 ${step === 1 ? 'active' : ''}`}>
                <span>1</span>
              </li>
              <li>
                <div className='thin-line-bt'></div>
              </li>
              <li className={`formbold-form-step-2 ${step === 2 ? 'active' : ''}`}>
                <span>2</span>
              </li>
              <li>
                <div className='thin-line-bt'></div>
              </li>
              <li className={`formbold-form-step-3 ${step === 3 ? 'active' : ''}`}>
                <span>3</span>
              </li>
            </ul>
          </div>
          {step === 1 && (
            <div className="formbold-form-step-1">
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="fullname" className="formbold-form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={handleChange}
                    placeholder="Andrio"
                    id="fullname"
                    className={`formbold-form-input ${errorType.includes('fullName') ? 'input-error' : ''}`}
                  />
                  {errorType.includes('fullName') ?
                  <p style={{color: 'red', margin: 0, fontSize: '10px', textTransform: 'capitalize'}}>this field is required</p>
                  : ''
                  }
                </div>
                <div>
                  <label htmlFor="email" className="formbold-form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    id="email"
                    className={`formbold-form-input ${errorType.includes('email') ? 'input-error' : ''}`}
                  />
                  {errorType.includes('email') ?
                  <p style={{color: 'red', margin: 0, fontSize: '10px', textTransform: 'capitalize'}}>this field is required</p>
                  : ''
                  }
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="phoneNumber" className="formbold-form-label">
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className={errorType.includes('phoneNumber') ? 'input-error' : ''}
                    />
                    {errorType.includes('phoneNumber') ?
                  <p style={{color: 'red', margin: 0, fontSize: '10px', textTransform: 'capitalize'}}>this field is required</p>
                  : ''
                  }
                </div>
              </div>
            </div>
          )}

          {step === 2 && (

            <div className="formbold-form-step-2">
              <div className="formbold-input-flex">
              <div>
                <label htmlFor="company" className="formbold-form-label">
                  Company Name
                </label>
                <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={handleChange}
                    placeholder="octtoppus"
                    id="company"
                    className={`formbold-form-input ${errorType.includes('company') ? 'input-error' : ''}`}
                  />
                {errorType.includes('company') ?
                  <p style={{color: 'red', margin: 0, fontSize: '10px', textTransform: 'capitalize'}}>this field is required</p>
                  : ''
                  }
              </div>
              <div>
                <label htmlFor="companyType" className="formbold-form-label">
                  Company Type
                </label>
                <div className="selection-div" >
                    <div className={`selected-option ${errorType.includes('companyType') ? 'input-error' : ''}`} onClick={handleSelectOpen}>
                        {companyType || 'Select an option'}
                        <span className={`arrow ${isOpen ? 'open' : ''}`}>⮟</span>
                    </div>
                    <div className={`dropdown-options ${isOpen ? 'show' : ''}`}>
                    <div className="option" onClick={() => handleSelectChange('Start Up Company')}>Start Up Company</div>
                    <div className="option" onClick={() => handleSelectChange('Small Scale Company')}>Small Scale Company</div>
                    <div className="option" onClick={() => handleSelectChange('Medium Scale Company')}>Medium Scale Company</div>
                    <div className="option" onClick={() => handleSelectChange('Large Scale Company')}>Large Scale Company</div>
                    {/* Add more options as needed */}
                    </div>
                </div>
                {errorType.includes('companyType') ?
                  <p style={{color: 'red', margin: 0, fontSize: '10px', textTransform: 'capitalize'}}>this field is required</p>
                  : ''
                  } 
              </div>
                </div>
                <div>
  <label htmlFor="services" className="formbold-form-label">Require Service</label>
  <div className='check-grid form-checkbox'>
    <div className='checkbox-box'>
      <label>
        <input 
          className="input-services" 
          type="checkbox" 
          name="services" 
          value="Website Development" 
          onChange={handleChange} 
          checked={services.includes("Website Development")} 
        /> 
        Website Development
      </label>
    </div>
    <div className='checkbox-box'>
      <label>
        <input 
          className="input-services" 
          type="checkbox" 
          name="services" 
          value="Software Development" 
          onChange={handleChange} 
          checked={services.includes("Software Development")} 
        /> 
        Software Development
        </label>
      </div>
    <div className='checkbox-box'>
      <label>
        <input 
          className="input-services" 
          type="checkbox" 
          name="services" 
          value="E-commerce Solutions" 
          onChange={handleChange} 
          checked={services.includes("E-commerce Solutions")} 
        /> 
        E-commerce Solutions
      </label>
    </div>
    <div className='checkbox-box'> 
      <label>
        <input 
          className="input-services" 
          type="checkbox" 
          name="services" 
          value="Digital Marketing" 
          onChange={handleChange} 
          checked={services.includes("Digital Marketing")} 
        /> 
        Digital Marketing
      </label>
    </div>
    <div className='checkbox-box'>
      <label>
        <input 
          className="input-services" 
          type="checkbox" 
          name="services" 
          value="Data Insights & Analytics" 
          onChange={handleChange} 
          checked={services.includes("Data Insights & Analytics")} 
        /> 
        Data Insights & Analytics
      </label>
    </div>
  </div>
</div>   
            </div>
          )}

          {step === 3 && (
            <div className="formbold-form-step-3">
            <div>
                <label htmlFor="message" className="formbold-form-label">
                  Please Provide More details
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  id="message"
                  placeholder="Type your message"
                  className="formbold-form-input"
                ></textarea>
              </div>
              <div style={{margin: '20px 0px'}}>
                <ReCAPTCHA
                    sitekey="6LdNsPApAAAAALa7BOLo-USz4vMLUfhbVaNNG2tG"
                    onChange={handleCaptchaChange}
                />
                </div>

            </div>
            
          )}

          <div className="formbold-form-btn-wrapper">
            {step > 1 && (
              <button className="formbold-back-btn" onClick={handleBackStep}>
                Back
              </button>
            )}

            {step < 3 && (
              <button className="formbold-btn" onClick={handleNextStep}>
                Next Step
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1675_1807)">
                    <path
                      d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_1807">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}

            {step === 3 && (
              <button type='submit' className="formbold-btn" onClick={handleSubmit}>
                Submit
                <span class={`btn-ring ${loading ? 'show' : ''}`}></span>
              </button>
            )}
          </div>
          {
            response ? 
            response.success ?
            <p style={{ color: 'rgba(90, 187, 133, 1)', fontSize: '14px'}}>Your Form has been submitted.</p>
            :
            <p style={{ color: 'red', fontSize: '14px'}}>Error Occurred: {response.message}</p>
            :
            ''
          }
        </form>
      </div>
    </div>
  );
};

export default FormBold;