import React from 'react';
import Forms from './components/Forms';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardRare } = this.state;
    const { cardAttr3, cardImage, cardTrunfo } = this.state;
    const { hasTrunfo, isSaveButtonDisabled: isvBtn } = this.state;
    console.log(hasTrunfo);

    // if (cardName === '' || cardDescription === '') {
    //   if(cardImage === '' || cardRare === '') {
    //     this.setState({ isSaveButtonDisabled: true });
    //   } else {
    //     this.setState({ isSaveButtonDisabled: false });
    //   }
    // }

    return (
      <div className="principal">
        <h1>Tryunfo</h1>
        <div className="form-card">
          <div className="form-conteiner-Component">
            <Forms isSaveButtonDisabled={ isvBtn } onInputChange={ this.onInputChange } />
          </div>
          <div className="card-conteiner-Component">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
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
