import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    console.log(novoArray);
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
      cards,
    } = this.state;

    const valor = cards.map((card) => {
      let valorTrunfo = '';
      if (card.trunfo === true) valorTrunfo = 'Trunfo';
      const valor2 = (
        <div className="div-cards">
          <h4>
            { card.nome }
          </h4>
          <h4>
            Descrição:
            { card.descricao }
          </h4>
          <h4>
            Atributo1:
            { card.atributo1 }
          </h4>
          <h4>
            Atributo2:
            { card.atributo2 }
          </h4>
          <h4>
            Atributo3:
            { card.atributo3 }
          </h4>
          <h4>
            Raridade:
            { card.raridade }
          </h4>
          <h4>
            { valorTrunfo }
          </h4>
          <img src={ card.imagem } alt={ card.nome } />
          <button
            id={ card.nome }
            type="button"
            onClick={ this.apagaCarta }
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      );
      return valor2;
    });

    return (
      <div className="principal">
        <h1>Tryunfo</h1>
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
        <div className="todas-as-cartas">
          { valor }
        </div>
      </div>
    );
  }
}

export default App;
