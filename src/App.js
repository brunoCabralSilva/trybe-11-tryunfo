import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Lista from './components/Lista';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    cards: [],
    filtro: 'todas',
    filtroNome: '',
    filtroCheck: false,
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  habilitaBotao = () => {
    const {
      cardName,
      cardDescription: cardDescrip,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
    } = this.state;

    if (cardName !== '' && cardDescrip !== '' && cardImage !== '' && cardRare !== '') {
      const attr1 = parseInt(cardAttr1, 10);
      const attr2 = parseInt(cardAttr2, 10);
      const attr3 = parseInt(cardAttr3, 10);
      const max = 90;
      const min = 0;
      const vAtt1 = ((attr1 <= max) && (attr1 >= min));
      const vAtt2 = ((attr2 <= max) && (attr2 >= min));
      const vAtt3 = ((attr3 <= max) && (attr3 >= min));
      if (vAtt1 && vAtt2 && vAtt3) {
        const valor = 210;
        if ((attr1 + attr2 + attr3) <= valor) {
          return false;
        }
        return true;
      }
      return true;
    }
    return true;
  };

  filtraPorRaridade = (event) => {
    this.setState({ filtro: event.target.value });
  }

  alteraFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  }

  alteraFiltroCheck = () => {
    const { filtroCheck } = this.state;
    if (filtroCheck === false) {
      this.setState({ filtroCheck: true });
    } else {
      this.setState({ filtroCheck: false });
    }
  }

  apagaCarta = (event) => {
    const { cards } = this.state;
    const cartaEscolhida = cards.find((carta) => carta.nome === event.target.id);
    if (cartaEscolhida.trunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    const novoArray = [];
    cards.forEach((carta) => {
      if (carta !== cartaEscolhida) {
        novoArray.push(carta);
      }
    });
    this.setState({ cards: novoArray });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription: cardDescrip,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
    } = this.state;

    const newCard = {
      nome: cardName,
      descricao: cardDescrip,
      atributo1: cardAttr1,
      atributo2: cardAttr2,
      atributo3: cardAttr3,
      raridade: cardRare,
      imagem: cardImage,
      trunfo: cardTrunfo,
    };

    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((anterior) => ({
      cards: [...anterior.cards, newCard],
    }));

    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        cardTrunfo: false,
      },
    );
  }

  opcaoArray = () => {
    const { filtro, cards, filtroNome: fNm, filtroCheck } = this.state;
    let lista = cards;
    if (filtroCheck === false) {
      if (fNm === '' && filtro === 'todas') {
        lista = cards;
      } else if (fNm === '' && filtro !== 'todas') {
        lista = cards.filter((carta) => carta.raridade === filtro);
      } else if (fNm !== '' && filtro === 'todas') {
        lista = cards.filter((carta) => carta.nome.includes(fNm));
      } else if (fNm !== '' && filtro !== 'todas') {
        lista = cards.filter((c) => c.raridade === filtro && c.nome.includes(fNm));
      }
    } else {
      lista = cards.filter((card) => card.trunfo === true);
    }
    return lista;
  }

  render() {
    const {
      cardName,
      cardDescription: cardDescrip,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      hasTrunfo,
      filtro,
      filtroCheck,
    } = this.state;
    const lista = this.opcaoArray();
    return (
      <div className="principal">
        <h1>Tryunfo</h1>
        <div className="cadastra-chaves">
          <div className="form-card">
            <div className="form-conteiner-Component">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescrip }
                cardImage={ cardImage }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardRare={ cardRare }
                onSaveButtonClick={ this.onSaveButtonClick }
                isSaveButtonDisabled={ this.habilitaBotao() }
                onInputChange={ this.onInputChange }
                hasTrunfo={ hasTrunfo }
                cardTrunfo={ cardTrunfo }
              />
            </div>
            <div className="card-conteiner-Component">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescrip }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </div>
          </div>
        </div>
        <div className="div-exibicao">
          <input
            type="text"
            placeholder="Nome"
            data-testid="name-filter"
            onChange={ this.alteraFiltroNome }
            disabled={ filtroCheck }
          />
          <select
            onChange={ this.filtraPorRaridade }
            value={ filtro }
            disabled={ filtroCheck }
            data-testid="rare-filter"
            className="filtro-cartas"
          >
            <option value="todas" selected>todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <div className="app-checkbox">
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              checked={ filtroCheck }
              onChange={ this.alteraFiltroCheck }
            />
            <span> Super Trunfo </span>
          </div>
        </div>
        <div className="todas-as-cartas">
          <Lista
            listaEscolhida={ lista }
            filtro={ filtro }
            apagaCarta={ this.apagaCarta }
          />
        </div>
      </div>
    );
  }
}

export default App;
