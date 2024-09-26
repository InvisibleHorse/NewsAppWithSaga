import React from 'react';
import PropTypes from 'prop-types';
import s from '../Authorisation.module.css';

export default function SubmitButton({ disabled }) {
    return (
        <button disabled={disabled} className={s.button} type="submit">Submit</button>
    );
}
SubmitButton.propTypes = {
    disabled: PropTypes.bool,
};
