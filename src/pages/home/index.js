import { Container, Header, ListContainer, Card, InputSearchContainer } from './styles';
import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
// import Modal from '../../components/Modal';


export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isloading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () => contacts.filter(
      contact => contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ),

    [contacts, searchTerm]

  );

  useEffect(() => {
    setIsLoading(true);

    async function loadContacts () {
      try {
        const response = await fetch (`http://localhost:3001/contacts?orden=${orderBy}`);

        const json = await response.json();

        setContacts(json);

      } catch (error) {
        console.log({ error: error });

      } finally {
        setIsLoading(false);

      }



    }

    loadContacts();

  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevstate) => prevstate === 'asc' ? 'desc' : 'asc');

  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);

  }

  return (
    <Container>
      <Loader isloading={ isloading }/>

      {/* <Modal title={'Teste modal'} body={'Texto de texte para o corpo do modal'} textButton='Deletar' danger/> */}

      <InputSearchContainer>
        <input value={ searchTerm } type='text' placeholder='Pesquise pelo nome' onChange={ handleChangeSearchTerm }/>

      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}

        </strong>

        <Link to='/new'>Novo contato</Link>

      </Header>

      <ListContainer orderby={orderBy}>
        {filteredContacts.length > 0 &&
          <header>
            <button type='button' onClick={ handleToggleOrderBy }>
              <span>Nome</span>
              <img src={arrow} alt='sort arrow' />

            </button>

          </header>
        }

        { filteredContacts.map(contact => (
          <Card key={contact.id}>
            <div className='info'>
              <div className='contact-name'>
                <strong>{contact.name}</strong>

                {contact.category && <small>{contact.category}</small>}

              </div>

              <span>{contact.email}</span>
              <span>{contact.phone}</span>

            </div>

            <div className='actions'>
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt='Edit'/>
              </Link>

              <button type='button'>
                <img src={trash} alt='Delete'/>

              </button>

            </div>

          </Card>

        ))}

      </ListContainer>

    </Container>

  );

}
