import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import LinkButton from './LinkButton';
import { APIURL } from '../Datasets/data';

const MainForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (option) => {
    setCompanyType(option);
    setIsOpen(false);
  };

  const handleSelectOpen = () =>{
    setIsOpen(prevState => !prevState);

  }

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

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      })
      .catch((error) => {
        console.error('Error sending email:', error.toString);
        setLoading(false);
      });
  };

  return (
    <div className='MainForm'>
  <div className='form-content'>
    <div className="heading-section">
      <h3 className='form-sub-heading'>Get a Quote</h3>
      <p>Fill out the form and we will reach out to you ASAP.</p>
    </div>
    <form onSubmit={handleSubmit}>
      <div className='form-group col-1'>
        <label className='main-label required'>Full Name</label><br />
        <input placeholder='John Doe' className='form-input' type="text" name="fullName" value={fullName} onChange={handleChange}  required/>
      </div>
      <div className='form-group col-1'>
        <label className='main-label required'>Email Address</label><br />
        <input className='form-input' placeholder='johndoe@gmail.com'  type="email" name="email" value={email} onChange={handleChange} required />
      </div>
      <div  className='form-group col-1'>
        <label className='main-label'>Phone Number</label><br />
        <PhoneInput
          international
          defaultCountry="US"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>
      <div  className='form-group col-1'>
        <label className='main-label required'>Company Name</label><br />
        <input placeholder='Octtoppus' className='form-input' type="text" name='company' value={company} onChange={handleChange} required/>
      </div>
      <div  className='form-group col-1'>
        <label className='main-label required'>Your Company Type</label><br />
        <div className="custom-dropdown">
          <div className="selected-option" onClick={handleSelectOpen}>
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
      </div>
      <div className='form-group form-checkbox col-1'>
        <label className='main-label required'>Services</label> <br />
        <div className='check-grid form-checkbox'>
          <div className='checkbox-box'>
            <label><input  className="input-services" type="checkbox" name="services" value="Website Development" onChange={handleChange} /> Website Development</label>
          </div>
          <div className='checkbox-box'>
            <label><input className="input-services" type="checkbox" name="services" value="Software Development" onChange={handleChange} /> Software Development</label>
          </div>
          <div className='checkbox-box'>
            <label><input className="input-services" type="checkbox" name="services" value="E-commerce Solutions" onChange={handleChange} /> E-commerce Solutions</label>
          </div>
          <div className='checkbox-box'> 
            <label><input  className="input-services" type="checkbox" name="services" value="Digital Marketing" onChange={handleChange} /> Digital Marketing</label>
          </div>
          <div className='checkbox-box'>
            <label><input className="input-services" type="checkbox" name="services" value="Data Insights & Analytics" onChange={handleChange} /> Data Insights & Analytics</label>
          </div>
        </div>
      </div>
      <div  className='form-group col-2'>
        <label className='main-label'>Please Provide More Details</label><br />
        <textarea rows={8} className='form-input-text-area'  name="message" value={message} onChange={handleChange} />
      </div>
      <div className='form-button form-group col-2'>
        <LinkButton ButtonText= "Submit" onclick={handleSubmit}/>
      </div>
    </form>
    <div className='flex-center'>
      <div className={`info-msg ${response ? response.success ? 'success' : 'failed' : ''}`}>
        {response ? response.message : 'Email is waiting'}
      </div>
    </div>
    <div className='loader-container'>
      <div className={`load ${loading ? 'loading-active' : ''}`}></div>
    </div>
  </div>
</div>

  );
};

export default MainForm;
