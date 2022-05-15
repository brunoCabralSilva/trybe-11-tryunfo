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
              <strong>{ card.nome }</strong>
            </h4>
            <img src={ card.imagem } alt={ card.nome } className="img-card" />
            <h6 className="info-Name descrip">
              <strong>
                { valorTrunfo }
              </strong>
              {' / '}
              { card.raridade }
              {' - '}
              { card.descricao }
            </h6>
            <h6 className="info-Name descrip">
              <strong>
                Atk
                {' - '}
                { card.atributo1 }
                {' / '}
                Def
                {' - '}
                { card.atributo2 }
                {' / '}
                HP
                {' - '}
                { card.atributo3 }
              </strong>
            </h6>
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
