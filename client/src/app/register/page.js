'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
 import Logo from '@/components/logo/Logo';
import Image from 'next/image';

const SignupSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .length(8, "must be eight character")
    .required('Required'),
    Email: Yup.string().email('Invalid Email').required('Required'),

  Address: Yup.string()
    .required('Required'),
    ContactNumber: Yup.string()
    .required('Required'),


});
const Register = () => {
  const formik = useFormik({
    initialValues: {
      FullName: '',
      Email: '',
      Address: '',
      ContactNumber:'',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
      <form onSubmit={formik.handleSubmit}>
      <div  className='float-right p-5 '>
      <Image src="/SignUp.png" width={400} height={400}  alt='SignUp-Logo' priority/>
    </div>

  
    {/* form */}
    <div className='m-5 justify-start'> <Logo/></div>
    <h1 className='text-center text-2xl font-bold'>Complete Your Profile</h1>
         <div className='flex justify-center items-center mt-4 '>
        
       <div className='flex flex-col justify-center  border-solid border-2  px-4 py-4 shadow-lg gap-1'>
        <label htmlFor="FullName">FullName* </label>
        <Input
          isClearable
          name='FullName'
          type="Input Fullname"
          variant="bordered"
          placeholder="Enter your Fullname"
          defaultValue="John Doe... "
          onClear={() => {
            formik.setFieldValue("FullName", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.FullName}
        />
        {formik.errors.FirstName ? <div className='text-red-700'>{formik.errors.FirstName}</div> : null}

        <label htmlFor="Email">Email*</label>
        <Input
          isClearable
          name='Email'
          type="text"
          variant="bordered"
          placeholder="Enter your Email "
          defaultValue="abc@gmail.com "
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.Email}
          onClear={() => {
            formik.setFieldValue("Email", '')
          }}  />
        {/* {formik.errors.Email} */}
        {formik.errors.Email ? <div className='text-red-700'>{formik.errors.Email}</div> : null}

        <label htmlFor="Address">Address*</label>
        <Input
          isClearable
          type="Address"
          name="text"
          variant="bordered"
          placeholder="Enter your Current Address"
          defaultValue="Butwal"
          onClear={() => {
            formik.setFieldValue("Address", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.Address}
        />
        {/* {formik.errors.Address} */}
        {formik.errors.Address ? <div className='text-red-700'>{formik.errors.Address}</div> : null}

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
        <div className='m-2 p-2 flex justify-center items-center'>
          <Button color="secondary" type='submit' variant='ghost' size='lg'>Submit</Button> </div>
          </div>
          </div>
      </form>
  );
};

export default Register