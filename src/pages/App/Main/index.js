import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyledContainer as Container } from './styles';

import { Card, Button, Form, Col } from 'react-bootstrap';
import moment from 'moment';

import * as EventActions from '../../../store/modules/eventos/actions';

import Header from '../../../components/Common/HeaderAuth';

function Main({
  eventos,
  deleteEventRequest,
  loadEventsRequest,
  updateEventRequest,
}) {
  const [updating, setUpdating] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  function formatDate(data) {
    const YMD = data.split('/');
    setData(`${YMD[2]}-${YMD[1]}-${YMD[0]}`);
  }

  useEffect(() => {
    loadEventsRequest();
  }, [loadEventsRequest]);

  async function remover(id, nome) {
    deleteEventRequest(id, nome);
  }

  async function atualizar(id, event) {
    updateEventRequest(id, event);
  }

  function resetUpdate() {
    setNome('');
    setData('');
    setUpdating(false);
  }

  return (
    <>
      <Header />
      <Container fluid="md">
        {eventos.map((evento, key) => (
          <Card key={key}>
            <Card.Header className="d-flex flex-wrap">
              <h5 className="p-1 mr-auto">Evento: {evento.id}</h5>
              <Button
                variant="dark"
                onClick={() => {
                  remover(evento.id, evento.nome);
                }}
              >
                Remover
              </Button>
            </Card.Header>
            <Card.Body>
              {updating === evento.id ? (
                <>
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
                    <Form.Row>
                      <Button
                        variant="success"
                        onClick={() => {
                          updateEventRequest(evento.id, {
                            data: data,
                            nome: nome,
                          });
                          resetUpdate();
                        }}
                      >
                        Confirmar Atualização
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          resetUpdate();
                        }}
                      >
                        Cancelar
                      </Button>
                    </Form.Row>
                  </Form>
                </>
              ) : (
                <>
                  <Card.Title>Nome: {evento.nome}</Card.Title>
                  <Card.Text>Data: {evento.data}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setUpdating(evento.id);
                      setNome(evento.nome);
                      formatDate(evento.data);
                    }}
                  >
                    Atualizar
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  eventos: state.eventos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(EventActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
