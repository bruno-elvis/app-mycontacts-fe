import { Container, Header, ListContainer, Card, InputSearchContainer } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome'/>

      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <a href='/'>Novo contato</a>

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
            <a>
              <img src={edit} alt='Edit'/>
            </a>

            <button type='button'>
              <img src={trash} alt='Delete'/>

            </button>

          </div>

        </Card>

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
            <a>
              <img src={edit} alt='Edit'/>
            </a>

            <button type='button'>
              <img src={trash} alt='Delete'/>

            </button>

          </div>

        </Card>

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
            <a>
              <img src={edit} alt='Edit'/>
            </a>

            <button type='button'>
              <img src={trash} alt='Delete'/>

            </button>

          </div>

        </Card>

      </ListContainer>

    </Container>

  );

}
