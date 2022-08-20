import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-neutral text-neutral-content'>
            <div className="footer p-10  ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer items-center p-4 ">
                <div className="items-center">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col text-2xl gap-4 md:place-self-center md:justify-self-end">
                    <Link to={'#'}><i className="fa-brands fa-youtube"></i></Link>
                    <Link to={'#'}><i className="fa-brands fa-instagram"></i></Link>
                    <Link to={'#'}><i className="fa-brands fa-facebook"></i></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;