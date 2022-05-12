import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage } = this.props;
    const { cardRare, cardTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div className="form">
        <p>Insira um nome para a carta: </p>
        <input
          type="text"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
        />
        <p>Insira uma descrição:</p>
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <p>Attr01:</p>
        <input
          id="firstat"
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr1-input"
        />
        <p>Attr02:</p>
        <input
          id="secStat"
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr2-input"
        />
        <p>Attr03</p>
        <input
          id="thiStat"
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr3-input"
        />
        <p>Imagem:</p>
        <input
          id="linkImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <p>Raridade:</p>
        <select
          id="rare-rank"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <input
          id="super-trunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        <span>Super-Trunfo</span>
        <br />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Forms.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Forms;
