import React from "react";


const FormElement = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Nome"
      value={nome}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <br/> <br/>

    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <br/> <br/>

    <input
      type="number"
      placeholder="Contato"
      value={contato}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <br/> <br/>

    <input type="submit" />
    
    <input type="submit" value="cancel" onClick={() => setName("")} />
  </form>
);

export default FormElement;