import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

import { useState } from 'react';

import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(e) {
    const inputValue = e.target.value;

    setName(inputValue);

    if (!inputValue) {
      setError({ fieldName: 'name', message: 'Nome é obrigatório.' });

    } else {
      removeError({ fieldName: 'name' });

    };

  };

  function handleEmailChange(e) {
    const inputValue = e.target.value;

    setEmail(inputValue);

    if (inputValue && !isEmailValid(inputValue)) {
      setError({ fieldName: 'email', message: 'E-mail inválido.' });

    } else {
      removeError({ fieldName: 'email' });

    };

  };

  function handlePhoneChange(e) {
    const inputValue = e.target.value;

    setPhone(formatPhone({ phoneNumber: inputValue }));

  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name, email, phone, category

    });

  };

  return (
    <>
      <Form onSubmit={ handleSubmit } noValidate>
        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'name'}) }>
          <Input
            placeholder='Nome *'
            value={ name }
            onChange={ handleNameChange }
            error={ getErrorMessageByFieldName({ fieldName: 'name'}) } />

        </FormGroup>

        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'email'}) }>
          <Input
            type='email'
            value={ email }
            placeholder='E-mail'
            onChange={ handleEmailChange }
            error={ getErrorMessageByFieldName({ fieldName: 'email'}) } />

        </FormGroup>

        <FormGroup>
          <Input
            placeholder='Telefone'
            value={ phone }
            onChange={ handlePhoneChange }
            maxLength='15' />

        </FormGroup>

        <FormGroup>
          <Select
            onChange={ e => setCategory(e.target.value) }
            value={ category } >
            <option value=''>Categoria</option>
            <option value='linkedin'>LinkedIn</option>
            <option value='instagram'>Instagram</option>
            <option value='facebook'>Facebook</option>

          </Select>

        </FormGroup>

        <ButtonContainer>
          <Button
            type='submit'
            disabled={ !isFormValid } >
              { buttonLabel }

          </Button>

        </ButtonContainer>

      </Form>
    </>
  );

};

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired

};
