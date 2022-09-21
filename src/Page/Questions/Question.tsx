import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Link as LinkScroll, Element, animateScroll as scroll } from 'react-scroll';
import { Card, Col, Row } from 'antd';
import { initCategory } from '../Category/categoryType';
import { initForm as initQuestion } from '../AddQuestions/type-question';
import { ApiApp } from '../../saga/Api/Auth';

const Question: FC = () => {
    const { js } = useParams();
    const [category, setCategory] = useState<any>(initCategory);
    const [question, setQuestion] = useState<any>(initQuestion);
    const [loading, setLoading] = useState<any>(true);
    let showQuestionList;

    useEffect(() => {
        let isMounted = true;
        ApiApp.fetchQuestion(js).then((res) => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setLoading(false);
                    setCategory(res.data.question_data.category);
                    setQuestion(res.data.question_data.question);
                } else if (res.data.status === 404) {
                    console.error(res.data.message);
                } else if (res.data.status === 400) {
                    console.error(res.data.message);
                }
            }
        });

        return () => {
            isMounted = false;
            setCategory(initCategory);
            setLoading(true);
        };
    }, [js]);

    if (loading) {
        return <>Загрузка....</>;
    } else {
        showQuestionList = question.length ? (
            question.map((quest, index) => {
                return (
                    <Element key={index} name={`${index + 1}`} className="element">
                        <Card size={'small'} title={`${index + 1} - ${quest.name}`} style={{ marginBottom: '10px' }}>
                            <div>{quest.description}</div>
                            <Link to={`/question/${js}/${quest.id}`}>подробнее...</Link>
                        </Card>
                    </Element>
                );
            })
        ) : (
            <div>Нет вопросов!</div>
        );
    }

    const showQuestionScrollList = question.map((quest, index) => {
        return (
            <div style={{ cursor: 'pointer' }} key={index} onClick={() => scroll.scrollToTop()}>
                <LinkScroll
                    activeClass="active"
                    to={`${index + 1}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={750}
                    // onSetActive={scroll.scrollToTop}
                >
                    Вопрос {index + 1}
                </LinkScroll>
            </div>
        );
    });

    return (
        <div>
            <div>{category.name} </div>

            <Row>
                <Col style={{ marginRight: '10px' }} span={20}>
                    {showQuestionList}
                </Col>
                <Col span={3}>
                    <Card>{question.length && showQuestionScrollList}</Card>
                </Col>
            </Row>
        </div>
    );
};

export default Question;
