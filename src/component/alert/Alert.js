import React from 'react';
import './Alert.scss';

const Alert = ({ message }) => {
	return <h1 className='alert'>{message}</h1>;
};

export default Alert;
