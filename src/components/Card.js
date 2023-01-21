import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  retornaSuperTrunfo = () => {
    const { cardTrunfo, cardDescription } = this.props;
    if (cardTrunfo === true) {
      return (<span data-testid="trunfo-card">Super Trunfo  / </span>);
    }
    if (cardDescription !== '') {
      return ('Nível de raridade: ');
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.props;

    return (
      <div className="div-pai-div-Card">
        <div className="div-Card card-name">
          <h4 data-testid="name-card">
            <strong>
              { cardName }
            </strong>
          </h4>
        </div>
        <div className="div-Card-image">
          <img
            data-testid="image-card"
            className="img-card"
            src={ cardImage }
            alt="Nome da carta"
          />
        </div>
        <div className="div-Card descrip">
          <strong>
            { this.retornaSuperTrunfo() }
            <span data-testid="rare-card">
              { cardRare }
              {' - '}
            </span>
          </strong>
          <span data-testid="description-card" className="break-all">
            { cardDescription }
          </span>
        </div>
        <div className="attr">
          <div className="div-Card cadaAttr" data-testid="attr1-card">
            <div className="attr-title"><strong>Ataque</strong></div>
            <div className="attr-descrip">{ cardAttr1 }</div>
          </div>
          <div className="div-Card cadaAttr" data-testid="attr2-card">
            <div className="attr-title"><strong>Defesa</strong></div>
            <div className="attr-descrip">{ cardAttr2 }</div>
          </div>
          <div className="div-Card cadaAttr" data-testid="attr3-card">
            <div className="attr-title"><strong>Vitalidade:</strong></div>
            <div className="attr-descrip">{ cardAttr3 }</div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
