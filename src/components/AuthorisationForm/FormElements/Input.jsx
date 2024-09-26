import React from 'react';
import PropTypes from 'prop-types';
import s from '../Authorisation.module.css';

export default function Input(props) {
    return (
        <label htmlFor={props.name}>{props.label}
            <input
                value={props.value}
                onChange={props.change}
                className={`${s.input} ${props.className}`} id={props.name} type={props.type}
                placeholder={props.placeholder}
                onBlur={props.blur}
            />
        </label>
    );
}
Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    change: PropTypes.func,
    blur: PropTypes.func,
    type: PropTypes.string.isRequired,
};
