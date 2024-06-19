import { Container, Header, ListContainer, Card, InputSearchContainer } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Link } from 'react-router-dom';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';


export default function Home() {
  return (
    <Container>
      {/* <Loader /> */}

      {/* <Modal title={'Teste modal'} body={'Texto de texte para o corpo do modal'} textButton='Deletar' danger/> */}

      <InputSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome'/>

      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to='/new'>Novo contato</Link>

      </Header>

      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt='sort arrow' />

          </button>

        </header>

        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Bruno Silva</strong>

              <small>instagram</small>

            </div>

            <span>brunosilva@gmail.com</span>
            <span>(28) 99952-2013</span>

          </div>

          <div className='actions'>
            <Link to='/edit/123'>
              <img src={edit} alt='Edit'/>
            </Link>

            <button type='button'>
              <img src={trash} alt='Delete'/>

            </button>

          </div>

        </Card>

      </ListContainer>

    </Container>

  );

}
