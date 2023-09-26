import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import { InputGroup, Container, Tab, Tabs, Table, Badge, Form, Col, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { BsFillEyeFill } from 'react-icons/bs';
import { AiFillPrinter, AiOutlineStar, AiOutlineSearch } from 'react-icons/ai';
import AppRowContainer from '@crema/core/AppRowContainer';


const Params = () => {
    return (
        <>
            <AppPageMetadata title='Dashboard' />
            <AppCard className='align-items-left'>
                <div className={styles.packageOneRow}>
                    <Tabs
                        defaultActiveKey="historique"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="candidate" title="Candidature">
                            <Container>
                                <AppRowContainer>
                                    <Col xs={12} md={10}>
                                        <AppRowContainer>
                                            <Col xs={12} md={8}>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="search"></InputGroup.Text>
                                                    <Form.Control
                                                        type='date'
                                                        aria-label="search-field"
                                                        aria-describedby="search"
                                                    />
                                                    <Form.Control
                                                        type='date'
                                                        aria-label="search-field"
                                                        aria-describedby="search"
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="Search..."
                                                        aria-label="search-field"
                                                        aria-describedby="search"
                                                    />
                                                    <InputGroup.Text id="search" style={{ background: "transparent" }}><Button variant='light' className={styles.btnSearch}><AiOutlineSearch style={{ width: "20px", height: "20px", color: "#000" }} /></Button></InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                        </AppRowContainer>
                                    </Col>
                                    <Col xs={12} md={2}>
                                        <Dropdown as={ButtonGroup}>
                                            <Button variant="transparent">category</Button>

                                            <Dropdown.Toggle split variant="transparent" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </AppRowContainer>
                            </Container>
                            <AppScrollbar className={styles.cardModalScrollbar}>
                                <Table className={styles.tableDesign}>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form.Check type='checkbox' id={0} />
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Statut</span>
                                                <span className={styles.subTitle}></span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>First name</span>
                                                <span className={styles.subTitle}>name</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Last name</span>
                                                <span className={styles.subTitle}>surname</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Date</span>
                                                <span className={styles.subTitle}>souscription</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Activate</span>
                                                <span className={styles.subTitle}>activate shop/service</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>ID Order</span>
                                                <span className={styles.subTitle}>identifier of order</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>ID Payment</span>
                                                <span className={styles.subTitle}>identifier of payment</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Amount</span>
                                                <span className={styles.subTitle}>includes fees</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Fees</span>
                                                <span className={styles.subTitle}>surcharges</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Tickets</span>
                                                <span className={styles.subTitle}>Type of souscription</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Long</span>
                                                <span className={styles.subTitle}>for how many time ?</span>
                                            </th>
                                            <th>
                                                <span className={styles.headTitle}>Options</span>
                                                <span className={styles.subTitle}>actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check type='checkbox' id={1} />
                                            </td>
                                            <td>
                                                <Badge bg="success">success</Badge>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Mayega Nguimbus</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Alain Donatien</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Nov 15, 2014</span>
                                                <span className={styles.subTitle}>18:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>Dec 03, 2014</span>
                                                <span className={styles.subTitle}>13:15 pm</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>57846</span>
                                                <span className={styles.subTitle}>IDO78qsd47dffg87879dfg87fg</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>36.3587.45DFRG</span>
                                                <span className={styles.subTitle}>IDP78qsqsf7sdfsdfdfsdfdsd87654</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 785.89</span>
                                                <span className={styles.subTitle}>direct payment</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>$ 5.59</span>
                                                <span className={styles.subEndTitle}>-5%</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>GOLD</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <span className={styles.headTitle}>8 months</span>
                                                <span className={styles.subTitle}>basic pricing</span>
                                                <span className={styles.subSecondTitle}>SHOP</span>
                                            </td>
                                            <td>
                                                <div className={styles.rangeBtn}>
                                                    <span className={styles.btnInfos}>
                                                        <AiFillPrinter style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <BsFillEyeFill style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                    <span className={styles.btnInfos}>
                                                        <AiOutlineStar style={{ width: "20px", height: "20px", color: "#616161" }} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </AppScrollbar>
                        </Tab>
                        <Tab eventKey="favoris" title="Favoris">
                            Tab content for favoris
                        </Tab>
                        <Tab eventKey="rejected" title="Rejetés">
                            Tab content for rejected candidatures
                        </Tab>
                        <Tab eventKey="corbeille" title="Corbeille">
                            corbeile
                        </Tab>
                    </Tabs>
                </div>
            </AppCard >
        </>
    );
};

export default Params;

Params.propTypes = {
    pricing: PropTypes.array,
};
