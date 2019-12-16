import React from 'react';

export default function Form() {
  return (
    <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
    </div>
    <div className="card-body">
      <div className="col-lg-12 mb-4">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Client ID</label>
          <input type="text" className="form-control" id="client-id"></input>
          <small id="legenda" className="form-text text-muted">Nome de identificação cadastrado na AWS.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Host AWS</label>
          <input type="text" className="form-control" id="host-aws"></input>
          <small id="legenda" className="form-text text-muted">Endpoint gerado pela AWS após o cadastro.</small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Private Key AWS</label>
          <textarea className="form-control" id="private-key-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Chave privada gerada pela AWS.</small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Certificate AWS</label>
          <textarea className="form-control" id="certificate-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Certificado gerado pela AWS.</small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Root Certificate AWS</label>
          <textarea className="form-control" id="root-certificate-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Certificado para permitir acesso a AWS.</small>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      </div>
    </div>
  </div>

  );
};