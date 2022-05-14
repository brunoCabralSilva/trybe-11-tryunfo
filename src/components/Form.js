import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  retornaTrunfo = () => {
    const {
      cardTrunfo,
      hasTrunfo,
      onInputChange,
    } = this.props;

    if (hasTrunfo === true) {
      return (<h4>Você já tem um Super Trunfo em seu baralho</h4>);
    }
    return (
      <div>
        <h3>Super Trunfo</h3>
        <input
          name="cardTrunfo"
          id="super-trunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
      </div>
    );
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form">
        <label htmlFor="name">
          <div>
            <h3>Insira um nome para a carta: </h3>
            <input
              id="name"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </div>
        </label>
        <label htmlFor="description">
          <div>
            <h3>Insira uma descrição: </h3>
            <textarea
              id="description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </div>
        </label>
        <div className="attr">
          <label htmlFor="firstStatus">
            <div>
              <h3>Attr01 </h3>
              <input
                className="firstStatus"
                name="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
                type="number"
                data-testid="attr1-input"
              />
            </div>
          </label>
          <label htmlFor="secondStatus">
            <div>
              <h3>Attr02 </h3>
              <input
                name="cardAttr2"
                className="secondStatus"
                value={ cardAttr2 }
                onChange={ onInputChange }
                type="number"
                data-testid="attr2-input"
              />
            </div>
          </label>
          <label htmlFor="thirdStatus">
            <div>
              <h3>Attr03 </h3>
              <input
                className="thirdStatus"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
                type="number"
                data-testid="attr3-input"
              />
            </div>
          </label>
        </div>
        <label htmlFor="linkImage">
          <div>
            <h3>Imagem:</h3>
            <input
              className="linkImage"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </div>
        </label>
        <div>
          <h3>Raridade: </h3>
          <select
            name="cardRare"
            id="rare-rank"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <label htmlFor="super-trunfo">
          <div>
            { this.retornaTrunfo() }
          </div>
        </label>
        <div>
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
