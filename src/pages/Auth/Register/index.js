import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, Card } from 'react-bootstrap';
import api from '../../../services/api';

import Header from '../../../components/Common/Header';

import { StyledContainer as Container } from './styles';

import FadeAlert from '../../../components/Common/Utility/FadeAlert';

function Register({ history }) {
  const [errorMessage, setErrorMessage] = useState('');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  const registrar = (e) => {
    e.preventDefault();
    const data = {
      nome,
      senha,
      confirmacaoSenha,
      email,
    };

    api
      .post('/register', data)
      .then(() => {
        history.push('/login');
      })
      .catch((err) => {
        if (err.response) {
          const {
            response: { data: description },
          } = err;
          setErrorMessage(description.error_description || description);
        }
      });
  };

  const resetMessage = () => {
    setErrorMessage('');
  };

  return (
    <>
      <Header />
      <Container fluid="md">
        <Card>
          {errorMessage !== '' ? (
            <FadeAlert
              resetMessage={() => {
                resetMessage();
              }}
              variant="danger"
              message={errorMessage}
            />
          ) : (
            ''
          )}
          <Card.Body>
            <Row>
              <Col>
                <Form onSubmit={registrar}>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <h2>Registrar-se</h2>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nome"
                        onChange={({ target: { value } }) => setNome(value)}
                        value={nome}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={({ target: { value } }) => setEmail(value)}
                          value={email}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Senha"
                        onChange={({ target: { value } }) => setSenha(value)}
                        value={senha}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Label>Confirmar Senha</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Confirmar Senha"
                        onChange={({ target: { value } }) =>
                          setConfirmacaoSenha(value)
                        }
                        value={confirmacaoSenha}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="success" size="lg" block type="submit">
                    Cadastrar
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Register;
