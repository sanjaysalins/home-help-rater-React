import React from 'react'

import PropTypes from 'prop-types'

import './profiles.css'

const Profiles = (props) => {
  return (
    <div className={`profiles-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="profiles-image"
      />
      <div className="profiles-container">
        <div className="profiles-container1">
          <span className="profiles-text">{props.label}</span>
          <span className="profiles-text1">{props.when}</span>
        </div>
        <h1 className="profiles-text2">{props.title}</h1>
        <span className="profiles-text3">{props.description}</span>
        <div className="profiles-container2">
          <div className="profiles-profile"></div>
          <span className="profiles-text4">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

Profiles.defaultProps = {
  rootClassName: '',
  label: 'ENTERPRISE',
  author: 'Jane Doe',
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  when: '3 days ago',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum dolor sit amet',
  profileAlt: 'profile',
  imageAlt: 'image',
}

Profiles.propTypes = {
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
  profileSrc: PropTypes.string,
  when: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  profileAlt: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Profiles
