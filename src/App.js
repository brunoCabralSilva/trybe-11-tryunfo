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

  onSaveButtonClick = () => {
    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
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
    } = this.state;

    console.log(hasTrunfo);

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
    );
  }
}

export default App;
