import React from "react";
import './css/TeamCompanies.css';
import { backendUrl, team_companies, companies_carousel_default } from "../Datasets/data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamCompanies = () =>{

    return(
        <div className="team-comapanies-container">
            <h2>Brands our team has served</h2>
             <Slider {...companies_carousel_default}>
            {team_companies.map((data, index) =>(
                <div key={index} className='c-logo-container'><img className='companies-logo-image' key={index} src={backendUrl + 'images/companies-logo/' + data.imagelink} alt={data.imageALT} /></div>))}
            </Slider>
        </div>
    );
}

export default TeamCompanies;