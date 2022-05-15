import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Lista extends React.Component {
  render() {
    const { listaEscolhida, apagaCarta } = this.props;
    let valor = 0;
    if (listaEscolhida === 0) {
      valor = 'Não há nenhuma carta criada';
    } else {
      valor = listaEscolhida.map((card) => {
        const valor2 = (
          <div className="div-cards">
            <Card
              cardTrunfo={ card.trunfo }
              cardName={ card.nome }
              cardDescription={ card.descricao }
              cardAttr1={ card.atributo1 }
              cardAttr2={ card.atributo2 }
              cardAttr3={ card.atributo3 }
              cardImage={ card.imagem }
              cardRare={ card.raridade }
            />
            <button
              className="btn-delete"
              id={ card.nome }
              type="button"
              onClick={ apagaCarta }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </div>
        );
        return valor2;
      });
    }
    return valor;
  }
}

Lista.propTypes = {
  listaEscolhida: PropTypes.string.isRequired,
  apagaCarta: PropTypes.func.isRequired,
};

export default Lista;
