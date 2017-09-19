import React from 'react';
import ViaCep from '../lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cep: '' }
  }
  handleChangeCep = (evt) => {
    this.setState({ cep: evt.target.value })
  }
  render() {
    return (
      <div className="App">
        <ViaCep cep={this.state.cep} lazy>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
            if (error) {
              return <p>error</p>
            }
            if (data) {
              return <div>
                <p>
                  CEP: {data.cep} <br/>
                  CIDADE: {data.localidade} <br/>
                  UF: {data.uf} <br/>
                </p>
              </div>
            }
            return <div>
              <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
              <button onClick={fetch}>Pesquisar</button>
            </div>
          }}
        </ViaCep>
      </div>
    );
  }
}

export default App;
