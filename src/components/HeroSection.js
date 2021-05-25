import React from 'react';
import '../App.css'
import { FaPlayCircle } from 'react-icons/fa';
import './Navbar.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <div>
                    <button className='btns'>
                        GET STARTED
                    </button>
                    <button className='btns2'>
                        WATCH TRAILER <FaPlayCircle className='faplay' />
                    </button>
                </div>
             </div>
            </div>
        </div>
      );
    }
    
    export default HeroSection;