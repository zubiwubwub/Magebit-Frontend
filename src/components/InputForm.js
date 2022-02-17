import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import '../styles/Checkbox.css';
import '../styles/InputForm.css';
import success from '../assets/ic_success.svg';

const Input = styled.input`
  position: relative;
  outline: none;
  width: 663px;
  height: 70px;
  padding: 0 0 0 40px;
  background: #ffffff;
  border: 1px solid #e3e3e4;
  box-sizing: border-box;

  border: ${(props) => props.border};
  border-left: none;

  &:hover {
    box-shadow: 0px 30px 40px rgba(19, 24, 33, 0.06);
  }
  @media (max-width: 375px) {
    height: 60px;
    width: 295px;
    padding-left: 15px;
    padding-top: 3px;
  }
`;

const Form = styled.form`
  display: flex;

  width: 659px;
  height: 70px;
  border-left: ${(props) => props.border || '4px solid #4066a5'};
  z-index: 9999;

  &:hover {
    border-left: 4px solid #4066a5;
  }

  @media (max-width: 375px) {
    height: 60px;
    width: 290px;
  }
`;

function InputForm(props) {
  const [style, setStyle] = useState({ display: 'block' });
  const [visibility, setVisibility] = useState({ display: 'none' });

  //Description change on success

  // Validation
  Yup.addMethod(Yup.string, 'isValidTld', function (errorMessage) {
    return this.test(`test-valid-tld`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        (value && value.slice(-3) !== '.co') ||
        createError({ path, message: errorMessage })
      );
    });
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please provide a valid e-mail address')
      .required('Email address is required')
      .isValidTld('We are not accepting subscriptions from Colombia emails'),
    acceptTOS: Yup.bool().oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
  });

  const handleSubmit = ({ email, acceptTOS }) => {
    let emailData = {
      email: email,
    };
    setStyle({
      display: 'none',
    });
    setVisibility({ display: 'block' });
    Axios.post('http://localhost:3000/create', {
      address: email,
    }).then(() => {
      console.log('success');
    });
  };

  return (
    <div>
      <div className='success-container' style={visibility}>
        <img src={success} className='trophy' alt='succes trophy' />
        <div className='success-description-container'>
          <h1 className='success-description-heading'>
            Thanks for subscribing!
          </h1>
          <p className='success-description-subheading'>
            You have successfully subscribed to our email listing. Check your
            email for the discount code.
          </p>
        </div>
      </div>
      <div className='description-container' style={style}>
        <h1 className='description-heading'>Subscribe to newsletter</h1>
        <p className='description-subheading'>
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </p>
      </div>

      <div className='form-container' style={style}>
        <Formik
          validateOnChange={false}
          initialValues={{
            email: '',
            acceptTOS: false,
          }}
          onSubmit={(values, errors) => {
            handleSubmit(values, errors);
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            handleChange,
          }) => {
            return (
              <Form
                noValidate
                onSubmit={handleSubmit}
                border={errors.email && '4px solid #B80808'}
              >
                <Input
                  border={errors.email && '1px solid #B80808'}
                  value={values.email}
                  type='email'
                  onChange={handleChange('email')}
                  placeholder='Type your email address here…'
                  onSubmit={handleSubmit}
                />
                <div className='err email'>{touched.email && errors.email}</div>

                <button type='submit' className='btn'>
                  <i className='fa-solid fa-arrow-right-long'></i>
                </button>
                <label className='checkbox' htmlFor='checkbox'>
                  <input
                    type='checkbox'
                    className='checkbox__input'
                    id='checkmark'
                    checked={values.acceptTOS}
                    onChange={handleChange('acceptTOS')}
                    onBlur={handleBlur}
                  />
                  <div className='checkbox__box'></div>
                  <p>
                    I agree to{' '}
                    <a href='#'>
                      <u>terms of service</u>
                    </a>
                  </p>
                </label>
                <div className='err tos'>
                  {touched.acceptTOS && errors.acceptTOS}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default InputForm;
