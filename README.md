# react-via-cep
simple integration for https://viacep.com.br

## Documentation

```jsx
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
