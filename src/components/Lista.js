import React from 'react';
import PropTypes from 'prop-types';

class Lista extends React.Component {
  render() {
    const { listaEscolhida, apagaCarta } = this.props;
    let valor = 0;
    if (listaEscolhida === 0) {
      valor = 'Não há nenhuma carta criada';
    } else {
      valor = listaEscolhida.map((card) => {
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
