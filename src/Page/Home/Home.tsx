import * as React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Paragraph from 'antd/lib/typography/Paragraph';
import { count } from './template';
import card from '../../assets/images/info-card-1.jpg';
const { Title, Text } = Typography;

function Home() {
    return (
        <>
            <div className="layout-content">
                <Row className="rowgap-vbox" gutter={[24, 0]}>
                    {count.map((c, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6} className="mb-24">
                            <Card bordered={false} className="criclebox ">
                                <div className="number">
                                    <Row align="middle" gutter={[24, 0]}>
                                        <Col xs={18}>
                                            <span>{c.today}</span>
                                            <Title level={3}>
                                                {c.title} <small className={c.bnb}>{c.persent}</small>
                                            </Title>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="icon-box">{c.icon}</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row gutter={[24, 0]}>
                    <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
                        <Card bordered={false} className="criclebox h-full">
                            <Row>
                                <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mobile-24">
                                    <div className="h-full col-content p-20">
                                        <div className="ant-muse">
                                            <Text>Built by developers</Text>
                                            <Title level={5}>Muse Dashboard for Ant Design</Title>
                                            <Paragraph className="lastweek mb-36">
                                                From colors, cards, typography to complex elements, you will find the
                                                full documentation.
                                            </Paragraph>
                                        </div>
                                        <div className="card-footer">
                                            <a className="icon-move-right" href="#pablo">
                                                Read More
                                                {<RightOutlined />}
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={12} sm={24} lg={12} xl={10} className="col-img">
                                    <div className="ant-cret text-right">
                                        <img src={card} alt="" className="border10" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col xs={24} md={12} sm={24} lg={12} xl={10} className="mb-24">
                        <Card bordered={false} className="criclebox card-info-2 h-full">
                            <div className="gradent h-full col-content">
                                <div className="card-content">
                                    <Title level={5}>Work with the best</Title>
                                    <p>
                                        Wealth creation is an evolutionarily recent positive-sum game. It is all about
                                        who take the opportunity first.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a className="icon-move-right" href="#pablo">
                                        Read More
                                        <RightOutlined />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;
