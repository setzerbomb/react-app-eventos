import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyledContainer as Container } from './styles';

import { Card, Button } from 'react-bootstrap';

import * as EventActions from '../../../store/modules/eventos/actions';

import Header from '../../../components/Common/HeaderAuth';

import AxiosGET from '../../../Functions/AxiosGET';
import AxiosPUT from '../../../Functions/AxiosPUT';
import AxiosDELETE from '../../../Functions/AxiosDELETE';

function Main({ eventos, deleteEventRequest, loadEventsRequest }) {
  const [updating, setUpdating] = useState('');

  useEffect(() => {
    loadEventsRequest();
  }, []);

  async function remover(id, nome) {
    deleteEventRequest(id, nome);
  }

  return (
    <>
      <Header />
      <Container fluid="md">
        {eventos.map((evento) => (
          <Card key={evento.id}>
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
                <></>
              ) : (
                <>
                  <Card.Title>Nome: {evento.nome}</Card.Title>
                  <Card.Text>Data: {evento.data}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setUpdating(evento.id);
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
