import React, { useState } from "react";
import "./Card.css"

function Card(props) {
    return(
        <div className="card">
            <div className="card-header">
                <div>SDS</div>
            </div>
            <div className="card-desc">
                <div className="heading text-heading">{props.name}</div>
                {props.courses.map((course) => {
                    return(
                        <div className="courses text-courses">{course}</div>
                    )
                })}
                <hr></hr>
                <div className="description text-description"><i class="bi bi-star"></i> Recommended by {props.recommendations} students</div>
            </div>
        </div>
    )
}

export default Card;