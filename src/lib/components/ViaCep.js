import React, { Component } from 'react';

class ViaCep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false,
      error: false,
    };
    this.getCep = this.getCep.bind(this);
  }
  componentDidMount() {
    if (this.props.lazy) {
      return;
    }
    this.getCep();
  }
  getCep() {
    this.setState({loading: true});
    fetch(`https://viacep.com.br/ws/${this.props.cep}/json/`)
    .then(response => response.json() )
    .then( data => {
      this.setState({ data: data, loading: false });
    })
    .catch(err => {
      this.setState({ error: true, loading: false });
    })
  }
  render() {
    return (
      this.props.children({
        loading: this.state.loading,
        data: this.state.data,
        error: this.state.error,
        fetch: this.getCep,
      }) || null
    )
  }
}

export default ViaCep;
