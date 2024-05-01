import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>home help rater</title>
        <meta property="og:title" content="home help rater" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-logo">
              <img
                alt="image"
                src="/assets/logo-200h.png"
                className="home-image"
              />
              <Link to="/" className="home-navlink brandName">
                <span className="home-text">Homehelp-</span>
                <span> Rater</span>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-links">
                <span className="home-text02 navbarLink">How it works</span>
                <Link to="/search" className="home-navlink1">
                  Search
                </Link>
                <span className="home-text03 navbarLink">About Us</span>
                <Link
                  to="/login"
                  className="home-navlink2 button-secondary button"
                >
                  Log in
                </Link>
                <Link
                  to="/sign-up"
                  className="home-navlink3 button button-primary"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <div className="home-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="home-image1"
                    />
                    <span className="brandName">
                      <span className="home-text05">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-text07 navbarLink">About</span>
                  <span className="home-text08 navbarLink">Features</span>
                  <span className="home-text09 navbarLink">Pricing</span>
                  <span className="home-text10 navbarLink">Team</span>
                  <span className="home-text11 navbarLink">Blog</span>
                </nav>
                <div className="home-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle beforeHeading">
              find the help you Deserve
            </span>
            <h1 className="home-title">
              <span>Find Domestic Help you Can</span>
              <br className="home-text13"></br>
              <span className="home-text14">
                Count On
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <span className="home-description">
              <span className="home-text15">
                Rating and Reviews at Your Fingertips
              </span>
              <br className="home-text16"></br>
            </span>
            <div className="home-container01">
              <Link
                to="/sign-up"
                className="home-navlink4 button button-gradient"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="home-navlink5 button button-transparent"
              >
                Log in
              </Link>
            </div>
          </div>
          <div className="home-image2">
            <img
              alt="image"
              src="/assets/pexels-davdkuko-20208728-600w.jpg"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image3"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1577116730797-5d99b71d3946?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHxuaWdlcmlhfGVufDB8fHx8MTcxNDU3NzM2M3ww&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text17 beforeHeading">how it works</span>
            <h1 className="home-text18">
              <span>Search, </span>
              <span className="home-text20">Rate, </span>
              <span>Be Safe.</span>
            </h1>
            <span className="home-text22">
              <span className="home-text23">
                Are you looking for reliable domestic help? Or perhaps you want
                to share your experiences with others? You&apos;ve come to the
                right place!
              </span>
              <br className="home-text24"></br>
              <br className="home-text25"></br>
              <span className="home-text26">
                At **HomeHelp - Raters**, we believe in the power of shared
                experiences. Our platform allows you to rate and review domestic
                help services, helping others make informed decisions.
              </span>
              <br></br>
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/assets/unsplash-image-1200w.jpeg"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <span className="home-text28 beforeHeading">get started</span>
            <h1 className="home-text29">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text30">1</span>
              </div>
              <div className="home-container03">
                <span className="home-title1">Sign Up / Log In</span>
                <span className="home-text31">
                  Start by creating a free account or log in if you already have
                  one. This will give you full access to our platform&apos;s
                  features.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text32">2</span>
              </div>
              <div className="home-container04">
                <span className="home-title2">Step 2: Search for a help</span>
                <span className="home-text33">
                  Use our user-friendly search bar to find the domestic help
                  service you&apos;re interested in. You can search by service
                  type, location, or name.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text34">3</span>
              </div>
              <div className="home-container05">
                <span className="home-title3">Read or Write Reviews</span>
                <span className="home-text35">
                  Browse through the reviews left by other users to get a sense
                  of the service quality. If you&apos;ve used the service, share
                  your experience by writing a review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text36 beforeHeading">faq</span>
              <h1 className="home-text37">
                <span className="home-text38">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text40">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text41">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text42">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text43">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text44">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text45">How do you verify?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text46">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text47">Where are you based?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text48">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/assets/pexels-shotbywrz-734724649-18431682-1200w.jpg"
              className="home-image6"
            />
          </div>
          <div className="home-banner">
            <span className="home-text49 beforeHeading">get started</span>
            <h1 className="home-text50">Lets be Safe together</h1>
            <span className="home-text51">get started today</span>
            <div className="home-btns">
              <button className="home-button3 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container06">
            <div className="footer-column">
              <span className="home-text52">Product</span>
              <span className="home-text53">How it works</span>
              <span className="home-text54">Features</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text56">Company</span>
              <span className="home-text57">About us</span>
              <span className="home-text58">Culture</span>
              <span className="home-text59">Code of conduct</span>
              <span className="home-text60">Careers</span>
              <span className="home-text61">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text63">Follow</span>
              <span className="home-text64">Instagram</span>
              <span className="home-text65">Twitter</span>
              <span className="home-text66">Facebook</span>
              <span className="home-text67">Tik Tok</span>
              <span className="home-text68">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
