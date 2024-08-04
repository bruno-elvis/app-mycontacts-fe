import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

import CategoriesService from '../../services/CategoriesService';

import useErrors from '../../hooks/useErrors';


const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoading, setCategoriesIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputNameRef = useRef(null);

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useImperativeHandle(ref, () => ({
    setFieldsValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(contact.phone ?? '');
      setCategoryId(contact.category.id ?? '');

    },

    resetFields() {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');

    },

    setInputNameFocus

  }), []);

  useEffect(() => {
    (
      async function loadCategories() {
        try {
          setCategoriesIsLoading(true);

          const listCategories = await CategoriesService.listCategories();

          setCategories(listCategories);

        } catch {} finally { setCategoriesIsLoading(false) };

      }

    )();

  }, []);

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

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ name, email, phone, categoryId });

    setIsSubmitting(false);

    setInputNameFocus();

  };

  function setInputNameFocus() {
    inputNameRef.current.focus();

  }


  return (
    <>
      <Form onSubmit={ handleSubmit } noValidate>
        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'name'}) } >
          <Input
            ref={ inputNameRef }
            placeholder='Nome *'
            value={ name }
            onChange={ handleNameChange }
            error={ getErrorMessageByFieldName({ fieldName: 'name'}) }
            disabled={ isSubmitting } />

        </FormGroup>

        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'email'}) } >
          <Input
            type='email'
            value={ email }
            placeholder='E-mail'
            onChange={ handleEmailChange }
            error={ getErrorMessageByFieldName({ fieldName: 'email'}) }
            disabled={ isSubmitting } />

        </FormGroup>

        <FormGroup>
          <Input
            placeholder='Telefone'
            value={ phone }
            onChange={ handlePhoneChange }
            maxLength='15'
            disabled={ isSubmitting } />

        </FormGroup>

        <FormGroup isloading={ categoriesIsLoading } >
          <Select
            onChange={ e => setCategoryId(e.target.value) }
            value={ categoryId }
            disabled={ categoriesIsLoading || isSubmitting } >

            <option value=''>Sem Categoria</option>

            { categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }

          </Select>

        </FormGroup>

        <ButtonContainer>
          <Button
            type='submit'
            disabled={ !isFormValid }
            isLoading={ isSubmitting } >
            { buttonLabel }

          </Button>

        </ButtonContainer>

      </Form>
    </>
  );

}, []);

ContactForm.displayName = 'ContactForm';

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired

};

export default ContactForm;
