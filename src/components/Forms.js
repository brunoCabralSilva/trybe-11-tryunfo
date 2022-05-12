import React from 'react';
import '../App.css';

class Forms extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="div-form">
          {/* <label for="name">Insira um nome para a carta: </label> */}
          <input type="text" id="name" data-testid="name-input" />
        </div>
        <div className="div-form">
          {/* <label for="description">Insira uma descrição:</label> */}
          <p><textarea id="description" data-testid="description-input" /></p>
        </div>
        <div className="div-form">
          {/* <label for="firstStatus">Attr01:</label> */}
          <input id="firsttatus" type="number" data-testid="attr1-input" />
        </div>
        <div className="div-form">
          {/* <label for="secondStatus">Attr02:</label> */}
          <input id="secondStatus" type="number" data-testid="attr2-input" />
        </div>
        <div className="div-form">
          {/* <label for="thirdStatus">Attr03:</label> */}
          <input id="thirdStatus" type="number" data-testid="attr3-input" />
        </div>
        <div className="div-form">
          {/* <label for="linkImage">Imagem:</label> */}
          <input id="linkImage" type="text" data-testid="image-input" />
        </div>
        <div className="div-form">
          {/* <label for="rare-rank">Raridade:</label> */}
          <select id="rare-rank" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <div className="div-form">
          <input id="super-trunfo" type="checkbox" data-testid="trunfo-input" />
          {/* <label for="super-trunfo">Super-Trunfo</label> */}
        </div>
        <div className="div-form">
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </div>
    );
  }
}

export default Forms;
