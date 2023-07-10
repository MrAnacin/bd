import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: red;
`;

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
});

const RegisterPage = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      // Submissive here
      setSubmitting(false);
    }}
  >
    <Form>
      <Field type="email" name="email" />
      <StyledErrorMessage component="div" name="email" />

      <Field type="password" name="password_2" />
      <StyledErrorMessage component="div" name="password_2" />

      <Field type="password" name="password" />
      <StyledErrorMessage component="div" name="password" />

      <button type="submit">Зарегистрироваться</button>
    </Form>
  </Formik>
);

export default RegisterPage;