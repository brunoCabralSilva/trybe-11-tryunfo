import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage } = this.props;
    const { cardRare, cardTrunfo } = this.props;
    let valor = '';
    if (cardTrunfo === true)valor = <h4 data-testid="trunfo-card">Super Trunfo</h4>;
    else {
      valor = <h4>Não é um Super Trunfo</h4>;
    }
    return (
      <div>
        <h4 data-testid="name-card">
          Nome:
          {cardName}
        </h4>
        <img
          data-testid="image-card"
          src={ cardImage }
          width="50%"
          alt="Nome da carta"
        />
        <h4 data-testid="description-card">
          Descrição:
          {cardDescription}
        </h4>
        <h4 data-testid="attr1-card">
          Attr01:
          {cardAttr1}
        </h4>
        <h4 data-testid="attr2-card">
          Attr02:
          {cardAttr2}
        </h4>
        <h4 data-testid="attr3-card">
          Attr03:
          {cardAttr3}
        </h4>
        <h4 data-testid="rare-card">
          Raridade:
          {cardRare}
        </h4>
        {valor}
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
