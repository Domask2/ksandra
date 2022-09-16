import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { Card, Col, Radio, Row, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { list } from '../Home/template';
import { ApiApp } from '../../Api/Auth';
const { Title } = Typography;

const Profile: FC = () => {
    const onChange = (e) => console.log(e.target.value);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        ApiApp.profile().then((res) => {
            if (isMounted) {
                if (res.data.status === 200) {
                    console.log(res.data);
                } else if (res.data.status === 404) {
                    console.error(res.data.message);
                } else if (res.data.status === 400) {
                    console.error(res.data.message);
                }
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <Row gutter={[24, 0]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
                <Card bordered={false} className="criclebox cardbody h-full">
                    <div className="project-ant">
                        <div>
                            <Title level={5}>Question</Title>
                            <Paragraph className="lastweek">
                                решено в этом месяце<span className="blue">40%</span>
                            </Paragraph>
                        </div>
                        <div className="ant-filtertabs">
                            <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                                <Radio.Group onChange={onChange} defaultValue="question">
                                    <Radio.Button value="question">Вопросы</Radio.Button>
                                    <Radio.Button value="stores">Статьи</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                    <div className="ant-list-box table-responsive">
                        <table className="width-100">
                            <thead>
                                <tr>
                                    <th>Вопросы</th>
                                    <th>ALL</th>
                                    <th>COMPLETION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((d, index) => (
                                    <tr key={index}>
                                        <td>
                                            <h6>{d.Title}</h6>
                                        </td>
                                        <td>
                                            <span className="text-xs font-weight-bold">{d.bud} </span>
                                        </td>
                                        <td>
                                            <div className="percent-progress">{d.progress}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </Col>
            {/*<Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">*/}
            {/*    <Card bordered={false} className="criclebox h-full">*/}
            {/*        <div className="timeline-box">*/}
            {/*            <Title level={5}>Orders History</Title>*/}
            {/*            <Paragraph className="lastweek" style={{ marginBottom: 24 }}>*/}
            {/*                this month <span className="bnb2">20%</span>*/}
            {/*            </Paragraph>*/}

            {/*            <Timeline pending="Recording..." className="timelinelist" reverse={reverse}>*/}
            {/*                {timelineList.map((t, index) => (*/}
            {/*                    <Timeline.Item color={t.color} key={index}>*/}
            {/*                        <Title level={5}>{t.title}</Title>*/}
            {/*                        <Text>{t.time}</Text>*/}
            {/*                    </Timeline.Item>*/}
            {/*                ))}*/}
            {/*            </Timeline>*/}
            {/*            <Button type="primary" className="width-100" onClick={() => setReverse(!reverse)}>*/}
            {/*                {<MenuUnfoldOutlined />} REVERSE*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Card>*/}
            {/*</Col>*/}
        </Row>
    );
};

export default Profile;
