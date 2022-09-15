import * as React from 'react';
import { useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
import ViewQuestionsModalEdit from './ViewQuestionsModalEdit';
import { Card, Col, Table } from 'antd';
import { columns } from './template-viewQuestion';
import { initForm, questionType } from '../AddQuestions/type-question';
import { successNotification } from '../../source/notification';

const ViewQuestion = () => {
    const [dataSource, setDataSource] = useState<questionType[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [question, setQuestion] = useState<questionType>(initForm);

    useEffect(() => {
        document.title = 'Вопросы';

        ApiApp.viewQuestions().then((res) => {
            if (res.data.status === 200) {
                const arr: questionType[] = res.data.questions.map((ques: questionType) => {
                    ques['key'] = ques.id;
                    return ques;
                });
                setLoading(false);
                setDataSource(arr);
            }
        });
    }, [loading]);

    const deleteQuestion = (id: number) => {
        ApiApp.deleteQuestions(id).then((res) => {
            if (res.data.status === 200) {
                setLoading(true);
                successNotification('top', '', res.data.message);
            } else if (res.data.status === 404) {
                console.error(res.data.errors);
            }
        });
    };

    return (
        <Col xs={24} sm={20} md={20} lg={24} xl={24}>
            <Card style={{ padding: '20px' }}>
                <Table
                    size={'small'}
                    loading={loading}
                    scroll={{ x: 200 }}
                    expandable={{
                        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                    }}
                    columns={columns(setIsModalEdit, setQuestion, deleteQuestion)}
                    dataSource={dataSource}
                />

                <ViewQuestionsModalEdit
                    question={question}
                    isModalEdit={isModalEdit}
                    setIsModalEdit={setIsModalEdit}
                    setLoading={setLoading}
                />
            </Card>
        </Col>
    );
};

export default ViewQuestion;
