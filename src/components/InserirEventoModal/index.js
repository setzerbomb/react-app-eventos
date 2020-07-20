import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as EventActions from '../../store/modules/eventos/actions';

function InserirEventoModal({ addEventRequest, onHide, show }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  function resetState() {
    setData('');
    setNome('');
  }

  const handleSubmit = async function (e) {
    e.preventDefault();

    const dados = {
      nome,
      data,
    };

    addEventRequest(dados);
    onHide();
  };

  return (
    <Modal
      onHide={onHide}
      onShow={() => {
        resetState();
      }}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar Evento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formDatTerm">
              <Form.Label>Nome do Evento</Form.Label>
              <Form.Control
                onChange={({ target: { value } }) => {
                  setNome(value);
                }}
                type="text"
                value={nome}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDatTerm">
              <Form.Label>Data do Evento</Form.Label>
              <Form.Control
                onChange={({ target: { value } }) => {
                  setData(value);
                }}
                type="date"
                value={data}
                required
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          size="lg"
          onClick={(event) => handleSubmit(event)}
          variant="success"
        >
          Salvar
        </Button>
        <Button size="lg" onClick={onHide} variant="secondary">
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(EventActions, dispatch);

export default connect(null, mapDispatchToProps)(InserirEventoModal);
