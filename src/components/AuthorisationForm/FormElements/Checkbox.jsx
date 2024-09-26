import { useField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import s from '../Authorisation.module.css';

export default function Checkbox({ ...props }) {
    const [field, meta] = useField(props);
    return (
        <div>
            <div className={s.checkbox}>
                <input
                    className={meta.touched && meta.error ? `${s.inputError} ${s.input}` : `${s.input}`}
                    {...field} {...props}
                />
                <span>I accept a terms of service</span>
            </div>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
}
Checkbox.propTypes = {
    props: PropTypes.instanceOf(Object),

};
