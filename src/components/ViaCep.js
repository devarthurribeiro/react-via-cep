import React from 'react';
import PropTypes from "prop-types";

class ViaCep extends React.Component {
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
      this.props.onSuccess(data);
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

ViaCep.PropTypes = {
  cep: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  onSuccess: PropTypes.func,
}

export default ViaCep;
