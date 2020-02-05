import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ViaCepHook(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.lazy) return;
    getCep();
  }, [props.lazy]);

  function getCep() {
    setLoading(true);
    fetch(`https://viacep.com.br/ws/${props.cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setError(false);
        props.onSuccess(data);
      })
      .catch(err => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }

  return (
    props.children({
      loading,
      data,
      error,
      fetch: getCep
    }) || null
  );
}

ViaCepHook.propTypes = {
  cep: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  onSuccess: PropTypes.func
};

export default ViaCepHook;
