import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { initForm as initQuestion, questionType } from '../AddQuestions/type-question';
import { ApiApp } from '../../Api/Auth';

const QuestionDetails: FC = () => {
    const { js, slug } = useParams();
    const [question, setQuestion] = useState<questionType>(initQuestion);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        ApiApp.fetchQuestionId(js, slug).then((res) => {
            if (isMounted) {
                if (res.data.status === 200) {
                    console.log(res.data.question);
                    setLoading(false);
                    setQuestion(res.data.question);
                } else if (res.data.status === 404) {
                    console.error(res.data.message);
                } else if (res.data.status === 400) {
                    console.error(res.data.message);
                }
            }
        });

        return () => {
            isMounted = false;
            setLoading(true);
        };
    }, [js, slug]);

    if (loading) {
        return <>Загрузка....</>;
    }

    return (
        <Row>
            <Card title={question.name}>
                <Row>
                    {question.image && (
                        <Col style={{ marginRight: '20px' }} span={5}>
                            <img src={`http://localhost/${question.image}`} alt="image" />
                        </Col>
                    )}
                    <Col span={10}>
                        <h4>{question.description}</h4>
                        <p>Brand: {question.brand}</p>
                        <p>Origin: {question.origin_price}</p>
                        <p>Selling: {question.selling_price}</p>
                    </Col>
                </Row>
            </Card>
        </Row>
    );
};

export default QuestionDetails;
