import React, { useState } from "react";
import HoverCard from "../Elements/projectCards.js";

export default function Projects() {

    return (<div>
        <div className="content">
            <h2>Projects</h2>
            <p>Please explore my projects below!</p>
            <div style={{ display: "flex", paddingRight: "5vw", paddingLeft: "5vw" }}>
                <HoverCard
                    imageUrl="src/assets/design annotation.jpg"
                    title="Accesible Redesign"
                    description="Analyzing and remaking multi-select from popular websites."
                    navigate="knewlin-CS1300/demo"
                />
                <HoverCard
                    imageUrl="src/assets/vendor.png"
                    title="Personas & Storyboarding"
                    description="Inspecting a public interface then illustrating user needs and experiences based on empirical observations through personas and storyboarding"
                    navigate="demo2"
                />
            </div>
        </div>
    </div >);
}