import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Input, Row } from 'antd';
import { initForm as initQuestion, questionType } from '../AddQuestions/type-question';
import { ApiApp } from '../../Api/Auth';
import { successNotification } from '../../source/notification';

const QuestionDetails: FC = () => {
    const { js, slug } = useParams();
    const [question, setQuestion] = useState<questionType>(initQuestion);
    const [loading, setLoading] = useState<boolean>(true);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        let isMounted = true;
        ApiApp.fetchQuestionId(js, slug).then((res) => {
            if (isMounted) {
                if (res.data.status === 200) {
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

    const submitSaveCart = () => {
        const data = {
            question_id: question.id,
            question_quantity: quantity,
        };

        ApiApp.addQuantityQuestion(data).then((res) => {
            if (res.data.status === 201) {
                successNotification('top', '', res.data.message);
            } else if (res.data.status === 401) {
                console.error(res.data.message);
            } else if (res.data.status === 404) {
                console.error(res.data.message);
            } else if (res.data.status === 409) {
                console.log(res.data.message);
            }
        });
    };

    if (loading) {
        return <>Загрузка....</>;
    }

    return (
        <Row>
            <Card title={question.name} style={{ width: '100%' }}>
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
                        <div style={{ display: 'flex' }}>
                            <Button
                                onClick={() =>
                                    setQuantity((state) => {
                                        if (state === 1) return 1;
                                        return state - 1;
                                    })
                                }
                            >
                                -
                            </Button>
                            <Input style={{ width: '20%' }} value={quantity} type="text" />
                            <Button onClick={() => setQuantity((state) => state + 1)}>+</Button>
                            <Button onClick={submitSaveCart}>Сохранить</Button>
                        </div>
                        <Button>Добавить вопрос в избранное </Button>
                    </Col>
                </Row>
            </Card>
        </Row>
    );
};

export default QuestionDetails;
