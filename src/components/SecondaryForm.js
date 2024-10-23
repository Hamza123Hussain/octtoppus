import React, { Component } from "react";
import './css/SecondaryForm.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import LinkButton from './LinkButton';


class SecondaryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fullName: '',
          email: '',
          phoneNumber: '',
          time: '',
          services: [],
          message: '',
          response: null,
          loading: false,
        };
      }
    
      handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'services') {
          // Handle checkboxes for services
          this.setState(prevState => ({
            services: checked
              ? [...prevState.services, value] // Add to array
              : prevState.services.filter(service => service !== value) // Remove from array
          }));
        } else {
          this.setState({ [name]: value });
        }
      }
    
      handlePhoneChange = (value) => {
        this.setState({ phoneNumber: value });
      }
    
      handleSubmit = (e) => {
       
        const backendurl = process.env.REACT_APP_BACKEND_URL;
        const FormAPI = backendurl + 'api_mainform.php';
        e.preventDefault();
        // Send form data to backend
        this.setState({ loading: true });
    
        const queryString = new URLSearchParams({
            fullName: this.state.fullName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            time: this.state.time,
            service: this.state.services,
            message: this.state.message
          }).toString();
    
          fetch(FormAPI + '?' + queryString)
          .then(response => response.json())
          .then(data => {
            this.setState({ response: data,  loading: false });
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
    
        
      }
    render() {
        const { response, loading } = this.state;
        return (
                <div className="secondform-container">
                    <h2 className="heading">
                        Contact us Form
                    </h2>
                    <form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="fullName" required />
                                <div className="underline"></div>
                                <label htmlFor="">First Name</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="email" required />
                                <div className="underline"></div>
                                <label htmlFor="">Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                            <PhoneInput
                
                international
                defaultCountry="US"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneChange}
              />
                                <div className="underline"></div>
                                <label htmlFor="">Email Address</label>
                            </div>
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Website Name</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea rows="8" cols="80" required></textarea>
                                <br />
                                <div className="underline-text-area"></div>
                                <label htmlFor="">Write your message</label>
                                
                            </div>

                        </div>
                        <div className='form-button'>
                            <LinkButton ButtonText= "Submit" onclick={this.handleSubmit}/>
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
        );
    }
}

export default SecondaryForm;
