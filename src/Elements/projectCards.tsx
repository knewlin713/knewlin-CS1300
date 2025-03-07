import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

type HoverCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    navigate: string;
};

export default function HoverCard({ imageUrl, title, description, navigate }: HoverCardProps) {
    const [hovered, setHovered] = useState(false);
    const route = useNavigate();

    const handleClick = () => {
        route(navigate);
    };
    return (
        <div
            className={`hover-card ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            <img src={imageUrl} alt="Background" className="card-image" />
            <div className="overlay">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}
