import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import s from '../Authorisation.module.css';

export default function Select({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
                {label}
                <select
                    className={meta.touched && meta.error ? `${s.inputError} ${s.input}` : `${s.input}`}
                    {...field} {...props}
                />
            </label>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
}
Select.propTypes = {
    label: PropTypes.string.isRequired,
    props: PropTypes.instanceOf(Object),

};
