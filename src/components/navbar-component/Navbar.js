import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const univSchools = {
        "University": ["Schools"],
        "CUHKSZ": ["SDS", "SME", "SSE", "LHS", "MED", "MUS", "HSS"],
        "SUSTech": ["School A", "School B", "School C"]
    }
    
    const [university, setUniversity] = useState("University");
    const [school, setSchool] = useState("School");
    
    function changeUniv(univ) {
        setUniversity(univ);
    }

    function changeSchool(school) {
        setSchool(school);
    }
    
    return (
        <div class="navbar">
            <a class="navbar-logo" href="">REVIEW GURU</a>
            <div class="dropdown">
                <button class="dropbtn">{university}
                    <i class="bi bi-caret-down-fill dropdown-icon"></i>
                </button>
                <div class="dropdown-content">
                    <a class="" onClick={() => changeUniv("CUHKSZ")}>
                        CUHKSZ
                    </a>
                    <a class="" onClick={() => changeUniv("SUSTech")}>SUSTech</a>
                </div>
            </div>
            {university != "University" &&
                <div class="dropdown">
                    <button class="dropbtn">{school}
                        <i class="bi bi-caret-down-fill dropdown-icon"></i>
                    </button>
                    <div class="dropdown-content">
                    {univSchools[university].map((school_name) => {
                        return (
                            <a class="" href="#" onClick={() => changeSchool(school_name)}>{school_name}</a>
                        )
                    })}
                    </div>
                </div>

                }
        </div>
    );
}

export default Navbar;