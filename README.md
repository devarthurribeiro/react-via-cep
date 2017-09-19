# react-via-cep
simple integration for https://viacep.com.br

## Install
Install with npm:
```
npm i --save react-via-cep
```
Install with yarn:
```
yarn add react-via-cep
```
## Documentation

Component API.

| Name | Type    | default | Description                                                    |
|------|---------|---------|----------------------------------------------------------------|
| cep  | String  |         | Cep format 00000-000 or 00000000                               |
| lazy | Boolean | false   | wait for the fetch functions to be triggered to load the data. |

Simple example.

```jsx
import ViaCep from 'react-via-cep';

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
```
## License
MIT &copy; [Arthur Ribeiro](https://github.com/devarthurribeiro)
