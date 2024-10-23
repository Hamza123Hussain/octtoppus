import React, { useState } from "react";
import './css/SmallCards.css';
import { useNavigate } from "react-router-dom";

const SmallCards = ({ icon, name, link, id }) => {
    const [cardHovered, setCardHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setCardHovered(true);
    }

    const handleMouseLeave = () => {
        setCardHovered(false);
    }

    const handleClick = () => {
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: topOffset - 100,
                    behavior: 'smooth'
                });
            }
        } else {
            setTimeout(() => {
                navigate(link);
            }, 200);
        }
    }

    return (
        <div className={`Small-Card-Container ${cardHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className={`Small-Card-Content ${cardHovered ? 'hovered' : ''}`}>
                <div className={`Card-icon ${cardHovered ? 'hovered' : ''}`}>
                    <i className={icon}></i>
                </div>
                <p className="Card-name">{name}</p>
            </div>
            <div className={`hidden-chevron ${cardHovered ? 'active' : ''}`}>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    );
}

export default SmallCards;
