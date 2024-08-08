import { Container, Header, ListContainer, Card, InputSearchContainer, ErrorContainer, EmptyListContainer, SearchNotFoundContainer } from './styles';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magniffierQuestion from '../../assets/images/magniffierQuestion.svg';

import { Link } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ContactsService from '../../services/ContactsService';
import Toast from '../../utils/toast';


export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isloading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDelected, setContactBeingDelected] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactList = await ContactsService.listContacts(orderBy);

      setHasError(false);

      setContacts(contactList);

    } catch {
      setHasError(true);

    } finally {
      setIsLoading(false);

    };

  }, [orderBy])

  const filteredContacts = useMemo(
    () => contacts.filter(
      contact => contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ),

    [contacts, searchTerm]

  );

  useEffect(() => {
    loadContacts();

  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevstate) => prevstate === 'asc' ? 'desc' : 'asc');

  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);

  }

  function handleTryAgain() {
    loadContacts();

  };

  function handleDeleteContact(contact) {
    setIsDeleteModalVisible(true);
    setContactBeingDelected(contact);

  };

  function handleCancelDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactBeingDelected(null);

  };

  async function handleConfirmDeleteContact() {
    try {
      const id = contactBeingDelected.id;

      setIsLoadingDelete(true);

      await ContactsService.deleteContact(id);

      handleCancelDeleteModal();

      setContacts(contacts.filter(contact => contact.id !== id));

      Toast({ text: 'Contato removido com sucesso!', type: 'success' });

    } catch {
      Toast({ text: 'Ocorreu um erro ao tentar remover o contato!', type: 'danger' });

    } finally {
      setIsLoadingDelete(false);

    };

  };


  return (
    <Container>
      <Loader isloading={ isloading }/>

      <Modal
        visible={ isDeleteModalVisible }
        title={`Tem certeza que deseja remover o contato "${ contactBeingDelected?.name }"?`}
        confirmLabel='Deletar'
        danger
        onConfirm={ handleConfirmDeleteContact }
        onCancel={ handleCancelDeleteModal }
        isLoading={ isLoadingDelete } >
          <p>Esta ação não poderá ser desfeita!</p>

      </Modal>

      <InputSearchContainer>
        <input value={ searchTerm } type='text' placeholder='Pesquise pelo nome' onChange={ handleChangeSearchTerm }/>

      </InputSearchContainer>

      <Header justifycontent={ (hasError) ? 'flex-end' : (contacts.length > 0) ? 'space-between' : 'center' } >
        {
          (!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}

          </strong>

        )}

        <Link to='/new'>Novo contato</Link>

      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt='sad' />

          <div className='details'>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button
              type='button'
              onClick={ handleTryAgain }
            >
              Tentar novamente

            </Button>

          </div>

        </ErrorContainer>

      )}

      {!hasError &&
        <ListContainer orderby={ orderBy } >
          {(contacts.length <= 0 && !isloading) &&
            <EmptyListContainer>
              <img src={ emptyBox } alt='Empty box'/>

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
              </p>

            </EmptyListContainer>

          }

          {(contacts.length > 0 && filteredContacts.length < 1 && searchTerm) &&
            <SearchNotFoundContainer>
              <img src={ magniffierQuestion } alt='Magniffier question'/>

              <span>Nenhum resultado foi encontrado para <strong>”{ searchTerm }”</strong>.</span>

            </SearchNotFoundContainer>

          }

          {filteredContacts.length > 0 &&
            <header>
              <button type='button' onClick={ handleToggleOrderBy }>
                <span>Nome</span>
                <img src={arrow} alt='Sort arrow' />

              </button>

            </header>

          }

          {filteredContacts.map(contact => (
            <Card key={ contact.id }>
              <div className='info'>
                <div className='contact-name'>
                  <strong>{ contact.name }</strong>

                  { contact.category.name && <small>{ contact.category.name }</small> }

                </div>

                <span>{ contact.email }</span>
                <span>{ contact.phone }</span>

              </div>

              <div className='actions'>
                <Link to={`/edit/${contact.id}`}>
                  <img src={ edit } alt='Edit'/>

                </Link>

                <button type='button' onClick={ () => handleDeleteContact(contact) }>
                  <img src={ trash } alt='Delete'/>

                </button>

              </div>

            </Card>

          ))}

        </ListContainer>

      }

    </Container>

  );

};
