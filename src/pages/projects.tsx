import React, { useState } from "react";
import HoverCard from "../Elements/projectCards.js";

export default function Projects() {

    return (<div>
        <div className="content">
            <h2>Projects</h2>
            <p>Please explore my projects below!</p>
            <div style={{ display: "flex", paddingRight: "2vw", paddingLeft: "2vw", paddingTop: "2vh", paddingBottom: "2vh", justifyContent: "space-evenly", }}>
                <HoverCard
                    imageUrl="src/assets/design annotation.jpg"
                    title="Accesible Redesign"
                    description="Analyzing and remaking multi-select from popular websites."
                    navigate="/demo"
                />
                <HoverCard
                    imageUrl="src/assets/Ari_Persona.png"
                    title="Personas & Storyboarding"
                    description="Inspecting a public interface then illustrating user needs and experiences based on empirical observations through personas and storyboarding"
                    navigate="/demo2"
                />
            </div>
            <div style={{ display: "flex", paddingRight: "2vw", paddingLeft: "2vw", paddingTop: "2vh", paddingBottom: "2vh", justifyContent: "space-evenly" }}>
                <HoverCard
                    imageUrl="src/assets/Redesign_Computer.png"
                    title="Responsive Redesign"
                    description="Identifing flaws in an existing interface, create mockups for various screen sizes, and building a responsive website based on those prototypes."
                    navigate="/demo3"
                />
            </div>
        </div>
    </div >);
}