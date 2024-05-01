import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>sign-up - home help rater</title>
        <meta property="og:title" content="sign-up - home help rater" />
      </Helmet>
      <div className="sign-up-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="sign-up-navbar-interactive">
            <div className="sign-up-logo">
              <img
                alt="image"
                src="/assets/logo-200h.png"
                className="sign-up-image"
              />
              <Link to="/" className="sign-up-navlink brandName">
                <span className="sign-up-text">Homehelp-</span>
                <span> Rater</span>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="sign-up-desktop-menu">
              <div className="sign-up-links">
                <span className="sign-up-text02 navbarLink">How it works</span>
                <Link to="/search" className="sign-up-navlink1">
                  Search
                </Link>
                <span className="sign-up-text03 navbarLink">About Us</span>
                <Link
                  to="/login"
                  className="sign-up-navlink2 button-secondary button"
                >
                  Log in
                </Link>
                <Link
                  to="/sign-up"
                  className="sign-up-navlink3 button button-primary"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="sign-up-burger-menu">
              <svg viewBox="0 0 1024 1024" className="sign-up-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="sign-up-mobile-menu">
              <div className="sign-up-nav">
                <div className="sign-up-top">
                  <div className="sign-up-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="sign-up-image1"
                    />
                    <span className="brandName">
                      <span className="sign-up-text05">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="sign-up-close-menu">
                    <svg viewBox="0 0 1024 1024" className="sign-up-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="sign-up-links1">
                  <span className="sign-up-text07 navbarLink">About</span>
                  <span className="sign-up-text08 navbarLink">Features</span>
                  <span className="sign-up-text09 navbarLink">Pricing</span>
                  <span className="sign-up-text10 navbarLink">Team</span>
                  <span className="sign-up-text11 navbarLink">Blog</span>
                </nav>
                <div className="sign-up-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="sign-up-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-up-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="sign-up-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="sign-up-hero">
        <form className="sign-up-form">
          <div className="sign-up-container01">
            <div className="sign-up-container02">
              <strong className="sign-up-text12">First Name</strong>
            </div>
            <div className="sign-up-container03">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput input"
              />
            </div>
          </div>
          <div className="sign-up-container04">
            <div className="sign-up-container05">
              <strong className="sign-up-text13">Second Name</strong>
            </div>
            <div className="sign-up-container06">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput1 input"
              />
            </div>
          </div>
          <div className="sign-up-container07">
            <div className="sign-up-container08">
              <strong className="sign-up-text14">Address 1</strong>
            </div>
            <div className="sign-up-container09">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput2 input"
              />
            </div>
          </div>
          <div className="sign-up-container10">
            <div className="sign-up-container11">
              <strong className="sign-up-text15">Address 2</strong>
            </div>
            <div className="sign-up-container12">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput3 input"
              />
            </div>
          </div>
          <div className="sign-up-container13">
            <div className="sign-up-container14">
              <strong className="sign-up-text16">Zip code</strong>
            </div>
            <div className="sign-up-container15">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput4 input"
              />
            </div>
          </div>
          <div className="sign-up-container16">
            <div className="sign-up-container17">
              <strong className="sign-up-text17">upload Image</strong>
            </div>
            <div className="sign-up-container18">
              <input
                type="text"
                placeholder="placeholder"
                className="sign-up-textinput5 input"
              />
            </div>
          </div>
        </form>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="sign-up-image2"
        />
      </div>
      <footer className="sign-up-footer">
        <div className="sign-up-links-container">
          <div className="sign-up-container19">
            <div className="footer-column">
              <span className="sign-up-text18">Product</span>
              <span className="sign-up-text19">How it works</span>
              <span className="sign-up-text20">Features</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="sign-up-text22">Company</span>
              <span className="sign-up-text23">About us</span>
              <span className="sign-up-text24">Culture</span>
              <span className="sign-up-text25">Code of conduct</span>
              <span className="sign-up-text26">Careers</span>
              <span className="sign-up-text27">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="sign-up-text29">Follow</span>
              <span className="sign-up-text30">Instagram</span>
              <span className="sign-up-text31">Twitter</span>
              <span className="sign-up-text32">Facebook</span>
              <span className="sign-up-text33">Tik Tok</span>
              <span className="sign-up-text34">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SignUp
