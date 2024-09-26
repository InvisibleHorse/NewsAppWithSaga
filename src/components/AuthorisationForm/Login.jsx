import React from 'react';
import { useFormik } from 'formik';
import s from './Authorisation.module.css';
import Input from './FormElements/Input';
import SubmitButton from './FormElements/SubmitButton';
import { basicSchema } from '../schemas/schema';
import SuccessAlert from './FormElements/SuccessAlert';

const onSubmit = async (values, actions) => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 4500));
    actions.resetForm();
};
export default function Login() {
    const {
        values,
        isSubmitting, touched,
        errors, handleBlur,
        handleChange,
        handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
            {isSubmitting && <SuccessAlert />}
            <Input
                label="Email" value={values.email} change={handleChange}
                blur={handleBlur} type="email" placeholder="Enter your email"
                name="email" className={errors.email && touched.email && `${s.inputError}`}
            />
            {errors.email && touched.email && <p className={s.error}>{errors.email}</p>}
            <Input
                label="Age" value={values.age} change={handleChange}
                blur={handleBlur} type="number" placeholder="Enter your age"
                name="age" className={errors.age && touched.age && `${s.inputError}`}
            />
            {errors.age && touched.age && <p className={s.error}>{errors.age}</p>}
            <Input
                label="Password" value={values.password} change={handleChange}
                blur={handleBlur} type="password" placeholder="Enter your password"
                name="password" className={errors.password && touched.password && `${s.inputError}`}
            />
            {errors.password && touched.password && <p className={s.error}>{errors.password}</p>}
            <Input
                label="Confirm Password" value={values.confirmPassword} change={handleChange}
                blur={handleBlur} type="password" placeholder="Repeat your password"
                name="confirmPassword"
                className={errors.confirmPassword && touched.confirmPassword && `${s.inputError}`}
            />
            {errors.confirmPassword && touched.confirmPassword && <p className={s.error}>{errors.confirmPassword}</p>}
            <SubmitButton disabled={isSubmitting} />
        </form>
    );
}
