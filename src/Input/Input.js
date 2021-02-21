import React from 'react';
import './Input.scss';

const Input = ({className, placeholder, onChange, defaultValue }) => (
    <div className={`Input ${className}`}>
        {placeholder && <label>{placeholder}</label>}
        <input onChange={onChange} defaultValue={defaultValue} autoComplete='off'/>
    </div>
);

export default Input;