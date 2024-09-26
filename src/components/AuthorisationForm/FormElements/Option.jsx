import React from 'react';
import PropTypes from 'prop-types';
import s from '../Authorisation.module.css';

export default function Option({ value, text }) {
    return (
        <option
            value={value}
            className={s.selectOption}
        >
            {text}
        </option>
    );
}
Option.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string,
};
