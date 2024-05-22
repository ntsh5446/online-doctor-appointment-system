'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import Logo from '@/components/logo/Logo';

const SignupSchema = Yup.object().shape({


    ContactNumber: Yup.string()
        .required('Required'),
    Password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .length(8, "must be eight character")
        .required('Required'),


});
const Login = () => {
    const formik = useFormik({
        initialValues: {
            ContactNumber: '',
            Password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
       

            
            <div className=' '> <Logo /></div>
            <label htmlFor="ContactNumber">ContactNumber*</label>
            <Input
                isClearable
                type="text"
                name="ContactNumber"
                variant="bordered"
                placeholder="Enter your ContactNumber"
                defaultValue=" +97798...."
                onClear={() => {
                    formik.setFieldValue("ContactNumber", '')
                }}
                className="max-w-xs"
                onChange={formik.handleChange}
                value={formik.values.ContactNumber}
            />
            {/* {formik.errors.Address} */}
            {formik.errors.ContactNumber ? <div className='text-red-700'>{formik.errors.ContactNumber}</div> : null}
            <label htmlFor="Password">Password* </label>
            <Input
                isClearable
                name='Password'
                type="Input Password"
                variant="bordered"
                placeholder="Enter your Password"
                defaultValue=" "
                onClear={() => {
                    formik.setFieldValue("Password", '')
                }}
                className="max-w-xs"
                onChange={formik.handleChange}
                value={formik.values.Password}
            />
            {formik.errors.Password ? <div className='text-red-700'>{formik.errors.Password}</div> : null}



            <div className='p-2 m-2'>
                <Button color="primary" type='submit'>Login</Button> </div>

        </form>
    );
};

export default Login