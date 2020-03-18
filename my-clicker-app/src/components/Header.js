import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_keyboard.scss';


const Header = (props) => (
    <div className="display-result" >{props.title}</div>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.number
};

export default Header;