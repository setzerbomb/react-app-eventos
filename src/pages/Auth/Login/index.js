import React, { useState } from 'react';
import AxiosPOST from '../../../Functions/AxiosPOST';
import FadeAlert from '../../../components/Common/Utility/FadeAlert';

import { Card, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

import Header from '../../../components/Common/Header';

import { StyledContainer as Container } from './styles';

import { Link } from 'react-router-dom';

function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logar = async (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();

    bodyFormData.set('username', username);
    bodyFormData.set('grant_type', 'password');
    bodyFormData.set('password', password);

    await AxiosPOST(
      '/oauth/token',
      bodyFormData,
      'Basic ckJDV0dMWkR2bTp5alNFTkxTU243c21iT1VNT3FBVFJVMlBMRDFZV2RBNw=='
    )
      .then((response) => {
        const {
          data: { access_token: token },
        } = response;
        localStorage.clear();
        localStorage.setItem('user', token);
        history.push('/home');
      })
      .catch((err) => {
        if (err.response) {
          const {
            response: {
              data: { error_description: description },
            },
          } = err;
          setErrorMessage(description.replace(/&aacute;/g, 'á'));
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
                <Form onSubmit={logar}>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <h2>Autenticação</h2>
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
                          type="username"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={({ target: { value } }) =>
                            setUsername(value)
                          }
                          value={username}
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
                        onChange={({ target: { value } }) => setPassword(value)}
                        value={password}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button type="submit" variant="primary" size="lg" block>
                    Entrar
                  </Button>
                </Form>
                <Row>
                  <Col>
                    <p style={{ marginTop: '5px' }}>
                      <Link to="/register" className="text-center">
                        Registrar-se
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Login;
