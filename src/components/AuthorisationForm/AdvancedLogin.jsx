import React from 'react';
import { Form, Formik } from 'formik';
import s from './Authorisation.module.css';
import AdvancedInput from './FormElements/AdvancedInput';
import { advancedSchema } from '../schemas/schema';
import Select from './FormElements/Select';
import Option from './FormElements/Option';
import Checkbox from './FormElements/Checkbox';
import SuccessAlert from './FormElements/SuccessAlert';

const onSubmit = async (values, actions) => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 4500));
    actions.resetForm();
};
export default function AdvancedLogin() {
    return (
        <Formik
            initialValues={{ username: '', jobType: '', acceptedTos: false }}
            validationSchema={advancedSchema} onSubmit={onSubmit}
        >
            {/* eslint-disable-next-line no-unused-vars */}
            {({ isSubmitting }) => (
                <Form className={s.form}>
                    {isSubmitting && <SuccessAlert />}
                    <AdvancedInput
                        label="Username" name="username" type="text"
                        placeholder="Enter your username"
                    />
                    <Select
                        label="Job Type" name="jobType"
                        placeholder="Please, select your job type"
                    >
                        <Option value="" text="Please select a job type" />
                        <Option value="Designer" text="Designer" />
                        <Option value="Developer" text="Developer" />
                        <Option value="Manager" text="Manager" />
                        <Option value="Other" text="Other" />
                    </Select>
                    <Checkbox type="checkbox" name="acceptedTos" />

                    <button disabled={isSubmitting} className={s.button} type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    );
}
