import React from 'react'
import Timer from './Timer'
import logo from './images/vaniLogo.jpeg'
import './intro.css'
const Intro = () => {
    return (
        <section class="container">
            <section class="grid">
                <div class="inside-grid">
                    <img
                        style={{ width: '80px', height: '80px' }}
                        src={logo}
                        alt=""
                    />
                    <h2>Vani Meetings</h2>
                </div>
                <div class="inside-grid" id="right-container">
                    <h2 className="right-grid-text">The meeting starts in</h2>
                    <Timer duration={36000000} />
                </div>
            </section>

            <a href="https://vanimeetings.com/contact-us.html">
                www.vanimeetings.com
            </a>
        </section>
    )
}

export default Intro
