import React, { useState } from "react";
import './css/LinkButton.css';
import { useNavigate } from "react-router-dom";

const LinkButton = ({ ButtonText, ButtonLink, id }) => {
    const [hovering, setHovering] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleMouseDown = () => {
        setClicked(true);

        if (id) {
            const element = document.getElementById(id);
            if (element) {
                const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: topOffset - 400,
                    behavior: 'smooth'
                });
            }
        } else if (ButtonLink) {
            setTimeout(() => {
                navigate(ButtonLink);
            }, 200);
        }
    };

    const handleMouseUp = () => {
        setClicked(false);
    };

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    return (
        <button
            className={`Link-button ${hovering ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {ButtonText}
        </button>
    );
};

export default LinkButton;
