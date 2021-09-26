import React from 'react'
import { HashLink } from 'react-router-hash-link';
import "../styling/Footer.css";

function Footer() {
    return (
        <div>
<div className="footerBtn">
<HashLink to="/#top">
<button type="button" className="btn"> Back To Top </button>
</HashLink>
</div>

        <div className="footer"></div>
        </div>
    )
}

export default Footer

