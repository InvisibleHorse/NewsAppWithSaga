import React from 'react';
import s from '../Authorisation.module.css';
import pepe from '../../../assets/pepe.png';

export default function SuccessAlert() {
    return (
        <div className={`${s.fadeInOut} ${s.successMessage} alert alert-danger`} role="alert">
            Your request was sent.
            <img
                className={s.pepeImage}
                src={pepe}
                alt="pepe"
            />
        </div>
    );
}
