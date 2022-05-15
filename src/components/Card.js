import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  retornaSuperTrunfo = () => {
    const { cardTrunfo } = this.props;
    if (cardTrunfo === true) {
      return (<span data-testid="trunfo-card">Super Trunfo  / </span>);
    }
    return ('Nível de raridade: ');
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
        <div className="div-Card destaque">
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
            <span data-testid="description-card">
              { cardDescription }
            </span>
          </strong>
        </div>
        <div className="attr">
          <div className="div-Card destaque">
            <h4 data-testid="attr1-card">
              <strong>
                Atk:
                {` ${cardAttr1}` }
              </strong>
            </h4>
          </div>
          <div className="div-Card destaque">
            <h4 data-testid="attr2-card">
              <strong>
                Def:
                {` ${cardAttr2}` }
              </strong>
            </h4>
          </div>
          <div className="div-Card destaque">
            <h4 data-testid="attr3-card">
              <strong>
                HP:
                {` ${cardAttr3}` }
              </strong>
            </h4>
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
