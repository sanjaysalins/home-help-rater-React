import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - home help rater</title>
        <meta property="og:title" content="login - home help rater" />
      </Helmet>
      <div className="login-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="login-navbar-interactive">
            <div className="login-logo">
              <img
                alt="image"
                src="/assets/logo-200h.png"
                className="login-image"
              />
              <Link to="/" className="login-navlink brandName">
                <span className="login-text">Homehelp-</span>
                <span> Rater</span>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="login-desktop-menu">
              <div className="login-links">
                <span className="login-text02 navbarLink">How it works</span>
                <Link to="/search" className="login-navlink1">
                  Search
                </Link>
                <span className="login-text03 navbarLink">About Us</span>
                <button className="button-secondary button">Log in</button>
                <Link
                  to="/sign-up"
                  className="login-navlink2 button button-primary"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="login-burger-menu">
              <svg viewBox="0 0 1024 1024" className="login-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="login-mobile-menu">
              <div className="login-nav">
                <div className="login-top">
                  <div className="login-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="login-image1"
                    />
                    <span className="brandName">
                      <span className="login-text05">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="login-close-menu">
                    <svg viewBox="0 0 1024 1024" className="login-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="login-links1">
                  <span className="login-text07 navbarLink">About</span>
                  <span className="login-text08 navbarLink">Features</span>
                  <span className="login-text09 navbarLink">Pricing</span>
                  <span className="login-text10 navbarLink">Team</span>
                  <span className="login-text11 navbarLink">Blog</span>
                </nav>
                <div className="login-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="login-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="login-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="login-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="section-container">
        <div className="login-max-width1 max-width">
          <div className="login-image2"></div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1621868304409-553ec7854ad7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcxfHxuaWdlcmlhfGVufDB8fHx8MTcxNDU3NzcyNHww&amp;ixlib=rb-4.0.3&amp;w=1200"
            className="login-hero-image"
          />
          <div className="login-content">
            <div className="login-login2">
              <div className="login-content1">
                <div className="login-section-title">
                  <span className="login-text12 HeadingDesktopH2">
                    <span>Log in</span>
                  </span>
                  <span className="login-text14 TextMediumNormal">
                    <span>Please enter your email and password to log in.</span>
                  </span>
                </div>
                <div className="login-content2">
                  <div className="login-container1">
                    <div className="login-form">
                      <div className="login-type-default">
                        <span className="login-text16">
                          <span>Password</span>
                        </span>
                      </div>
                      <div className="login-type-default1">
                        <span className="login-text18">
                          <span>Password</span>
                        </span>
                      </div>
                      <div className="login-style-primary-small-false-darkmode-false-iconposition-noi">
                        <span className="login-text20">
                          <span>Log in</span>
                        </span>
                      </div>
                      <div className="login-separator">
                        <img
                          alt="LineI718"
                          src="/external/linei718-294.svg"
                          className="login-line"
                        />
                      </div>
                      <div className="login-style-secondary-small-false-darkmode-false-iconposition-l">
                        <img
                          alt="IconGoogleI718"
                          src="/external/icongooglei718-0z3t.svg"
                          className="login-icon-google"
                        />
                        <span className="login-text22">
                          <span>Log in with Google</span>
                        </span>
                      </div>
                      <div className="login-style-secondary-small-false-darkmode-false-iconposition-l1">
                        <img
                          alt="IconFacebookI718"
                          src="/external/iconfacebooki718-ybbf.svg"
                          className="login-icon-facebook"
                        />
                        <span className="login-text24">
                          <span>Log in with Facebook</span>
                        </span>
                      </div>
                      <div className="login-style-secondary-small-false-darkmode-false-iconposition-l2">
                        <img
                          alt="IconAppleI718"
                          src="/external/iconapplei718-o1.svg"
                          className="login-icon-apple"
                        />
                        <span className="login-text26">
                          <span>Log in with Apple</span>
                        </span>
                      </div>
                    </div>
                    <span className="login-text28 TextRegularLink">
                      <span>Forgot your password?</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="login-footer">
        <div className="login-links-container">
          <div className="login-container2">
            <div className="footer-column">
              <span className="login-text30">Product</span>
              <span className="login-text31">How it works</span>
              <span className="login-text32">Features</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="login-text34">Company</span>
              <span className="login-text35">About us</span>
              <span className="login-text36">Culture</span>
              <span className="login-text37">Code of conduct</span>
              <span className="login-text38">Careers</span>
              <span className="login-text39">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="login-text41">Follow</span>
              <span className="login-text42">Instagram</span>
              <span className="login-text43">Twitter</span>
              <span className="login-text44">Facebook</span>
              <span className="login-text45">Tik Tok</span>
              <span className="login-text46">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
