import React, { useState } from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppRowContainer from '@crema/core/AppRowContainer';
import { Button, Card, Col, Form, Row, Container, FloatingLabel } from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import Drop from 'pages/components/Dropdowns/Drop';
import clsx from 'clsx';
import styles from '../index.module.scss';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import { ReactComponent as Logo } from '../../../assets/user/login.svg';

const Signin = () => {
  const { messages } = useIntl();
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Finish');
    setValidated(true);
  };

  return (
    <div className={clsx(styles.userPages, 'd-flex flex-column')}>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Signin' />
        <div
          className={clsx(
            styles.userContainer,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          key='a'>
          <Card
            className={clsx(
              styles.userCard,
              styles.userCardLg,
              'w-100 overflow-hidden text-center',
            )}>
            <AppRowContainer>
              <Col xs={12} md={4}>
                <div
                  className={clsx(
                    styles.userStyledImg,
                    'h-auto w-100 d-inline-block',
                  )}>
                  <Logo />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div
                  className={clsx(
                    styles.userCardHeader,
                    'd-flex align-items-center justify-content-center',
                  )}>
                  <h3>
                    <IntlMessages id='Register Form' />
                  </h3>
                </div>

                <Form
                  className={clsx(styles.userForm, 'mb-0')}
                  name='basic'
                  noValidate
                  validated={validated}
                  onSubmit={onSubmit}>
                  <AppScrollbar className={styles.scroll}>
                    <Container>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Name" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingSurname"
                            label="Surname"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Surname" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingBirthday"
                            label="Birthday"
                            className="mb-3"
                          >
                            <Form.Control type="date" placeholder="Birthday" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingPlaceOfBirth"
                            label="Place Of Birth"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Place of birth" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingNumberOfChilds"
                            label="Number of children"
                            className="mb-3"
                          >
                            <Form.Control type="number" min={0} placeholder="Number of children" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Sex"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Masculin</NavDropdown.Item>
                                    <NavDropdown.Item href="">Féminin</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="higher school diplomation"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">BEPC</NavDropdown.Item>
                                    <NavDropdown.Item href="">Probatoire</NavDropdown.Item>
                                    <NavDropdown.Item href="">Baccalauréat</NavDropdown.Item>
                                    <NavDropdown.Item href="">BTS</NavDropdown.Item>
                                    <NavDropdown.Item href="">Licence</NavDropdown.Item>
                                    <NavDropdown.Item href="">Master</NavDropdown.Item>
                                    <NavDropdown.Item href="">Doctorat</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12} md={6}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="higher work diplomation"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">1</NavDropdown.Item>
                                    <NavDropdown.Item href="">2</NavDropdown.Item>
                                    <NavDropdown.Item href="">3</NavDropdown.Item>
                                    <NavDropdown.Item href="">etc...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <h4>Situation civile</h4>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3">
                              <Form.Check
                                reverse
                                label="Fonctionnaire"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                              />
                              <Form.Check
                                reverse
                                label="Contractuel"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-2`}
                              />
                              <Form.Check
                                reverse
                                label="Aucun"
                                type={type}
                                id={`reverse-${type}-3`}
                              />
                            </div>
                          ))}
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingMatricule"
                            label="Matricule"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Matricule" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingSalary"
                            label="Salary Scale"
                            className="mb-3"
                          >
                            <Form.Control type="number" min={0} placeholder="Salary Scale" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingIndice"
                            label="Indice Salarial"
                            className="mb-3"
                          >
                            <Form.Control type="number" placeholder="Indice Salarial" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingDecret"
                            label="Numéro de décret"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro de décret" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingDernier"
                            label="Numéro de dernier décret de mutation"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro de dernier décret de mutation" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingDecret"
                            label="Numéro de décret"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Numéro de décret" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12} md={6}>
                          <FloatingLabel
                            controlId="floatingDateService"
                            label="première prise de service"
                            className="mb-3"
                          >
                            <Form.Control type="Date" placeholder="Date de première prise de service" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingEtab"
                            label="Nom de l'établissement"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Nom de l'établissement" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingMat"
                            label="Matière enseignée"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Matière enseignée" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingExp"
                            label="Nombre d'année d'expérience professionnelles"
                            className="mb-3"
                          >
                            <Form.Control type="number" min={0} placeholder="Nombre d'année d'expérience professionnelles" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingDir"
                            label="Nom du dirigeant de l'établissement"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Nom du dirigeant de l'établissement" />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} md={8}>
                          <FloatingLabel
                            controlId="floatingSalar"
                            label="Salaire mensuel(tel sur le bulletin)"
                            className="mb-3"
                          >
                            <Form.Control type="number" min={0} placeholder="Salaire mensuel(tel sur le bulletin)" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Région"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Region 1</NavDropdown.Item>
                                    <NavDropdown.Item href="">Region 2</NavDropdown.Item>
                                    <NavDropdown.Item href="">etc...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Département"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Dep 1</NavDropdown.Item>
                                    <NavDropdown.Item href="">Dep 2</NavDropdown.Item>
                                    <NavDropdown.Item href="">etc...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <Navbar variant="light" bg="white">
                            <Container>
                              <Navbar.Toggle aria-controls="navbar-dark-example" />
                              <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                  <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Arrondissement"
                                    menuVariant="white"
                                  >
                                    <NavDropdown.Item href="">Ar 1</NavDropdown.Item>
                                    <NavDropdown.Item href="">Ar 2</NavDropdown.Item>
                                    <NavDropdown.Item href="">etc...</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>
                        </Col>
                        <Col sm={12}>
                          <FloatingLabel
                            controlId="floatingVille"
                            label="Ville/Village"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Ville/Village" />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </Container>
                  </AppScrollbar>
                  <Button className='w-100' type='submit'>
                    <IntlMessages id='submit' />
                  </Button>
                </Form>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup >
    </div >
  );
};

export default Signin;
