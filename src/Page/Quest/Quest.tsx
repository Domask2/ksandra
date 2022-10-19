import * as React from 'react';
import { FunctionComponent as FC, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getCategory, getCategoryLoading } from '../../redux/category/category.selector';
import { Button, Card, Col, Row, Table, Tooltip } from 'antd';
import { RootState } from '../../redux/redux.store';
import { useActions } from '../../hooks/useActions';
import QuestionModalAdd from './QuestionModalAdd';
import QuestionModalEdit from './QuestionModalEdit';
import { categoryType, initCategory } from '../Category/categoryType';
import { columns } from './template-question';
import ViewQuestionsModalEdit from '../ViewQuestion/ViewQuestionsModalEdit';
import { initForm, questionType } from '../AddQuestions/type-question';
import { ApiApp } from '../../saga/Api/Auth';
import { successNotification } from '../../source/notification';
import { getQuestion, getQuestionLoading } from '../../redux/question/question.selector';

const Category: FC = () => {
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalAdd, setIsModalAdd] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<categoryType>(initCategory);

    const loading = useTypedSelector((state: RootState) => getQuestionLoading(state));
    const question = useTypedSelector((state: RootState) => getQuestion(state));

    const showModalEdit = (value?: categoryType) => {
        setCurrentCategory(value);
        setIsModalEdit(true);
    };

    const showModalAdd = () => {
        setIsModalAdd(true);
    };

    const deleteQuestion = (id: number) => {
        ApiApp.deleteQuestions(id).then((res) => {
            if (res.data.status === 200) {
                successNotification('top', '', res.data.message);
            } else if (res.data.status === 404) {
                console.error(res.data.errors);
            }
        });
    };

    const titleCardCategory = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0' }}>Список вопросов</h2>

                <Tooltip title="Добавить вопрос">
                    <Button type={'primary'} onClick={showModalAdd}>
                        ДОБАВИТЬ ВОПРОС
                    </Button>
                </Tooltip>
            </div>
        );
    };

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
                    <Card style={{ padding: '10px' }} className="criclebox cardbody" title={titleCardCategory()}>
                        <Table
                            bordered={true}
                            size={'small'}
                            loading={loading}
                            scroll={{ x: 200 }}
                            expandable={{
                                expandedRowRender: (record) => {
                                    return (
                                        <div>
                                            <div style={{ margin: 0 }}>Вопрос: {record.question}</div>
                                            <div style={{ margin: 0 }}>Ответ: {record.answer}</div>
                                        </div>
                                    );
                                },
                            }}
                            columns={columns(setIsModalEdit, deleteQuestion)}
                            dataSource={question}
                        />

                        {/*<ViewQuestionsModalEdit*/}
                        {/*    question={question}*/}
                        {/*    isModalEdit={isModalEdit}*/}
                        {/*    setIsModalEdit={setIsModalEdit}*/}
                        {/*    setLoading={setLoading}*/}
                        {/*/>*/}
                    </Card>
                </Col>
            </Row>

            <QuestionModalAdd isModalAdd={isModalAdd} setIsModalAdd={setIsModalAdd} />

            <QuestionModalEdit
                currentCategory={currentCategory}
                isModalEdit={isModalEdit}
                setIsModalEdit={setIsModalEdit}
            />
        </>
    );
};

export default Category;
