import React from "react";

const Header = ({ image }) => (
    <div className="header">
        <img src={image} alt="Blog header" className="header-image" />
        <h1>Чей-то личный блог</h1>
    </div>
);

export default Header;