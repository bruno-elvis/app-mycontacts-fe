import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

import CategoriesService from '../../services/CategoriesService';

import { useEffect, useState } from 'react';

import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoading, setCategoriesIsLoading] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const isFormValid = (name && errors.length === 0);

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

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name, email, phone, category: categoryId

    });

  };

  return (
    <>
      <Form onSubmit={ handleSubmit } noValidate>
        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'name'}) } >
          <Input
            placeholder='Nome *'
            value={ name }
            onChange={ handleNameChange }
            error={ getErrorMessageByFieldName({ fieldName: 'name'}) } />

        </FormGroup>

        <FormGroup error={ getErrorMessageByFieldName({ fieldName: 'email'}) } >
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

        <FormGroup isloading={ categoriesIsLoading } >
          <Select
            onChange={ e => setCategoryId(e.target.value) }
            value={ categoryId }
            disabled={ categoriesIsLoading } >
            <option value=''>Sem Categoria</option>

            { categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }

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
