import * as React from 'react';
import { Card, Col, Table, Tag, Button } from 'antd';
import { useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
import ViewQuestionsModalEdit from './ViewQuestionsModalEdit';
import { initForm } from '../AddQuestions/AddQuestions';

const ViewQuestion = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [qustion, setQuestion] = useState(initForm);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (tag) => <span>{tag.name}</span>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        Table.EXPAND_COLUMN,
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (tag) => <span>{tag.length > 10 ? tag.substring(0, 10) + '...' : tag}</span>,
        },
        {
            title: 'Meta_title',
            dataIndex: 'meta_title',
            key: 'meta_title',
        },
        {
            title: 'Meta_keyword',
            dataIndex: 'meta_keyword',
            key: 'meta_keyword',
        },
        {
            title: 'Selling_price',
            dataIndex: 'selling_price',
            key: 'selling_price',
            render: (tag) => (
                <span>
                    <Tag color={tag === 'small' ? 'geekblue' : 'green'} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                </span>
            ),
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (tag, record) => (
                <span>
                    <img src={`http://localhost/${tag}`} alt={record.name} width={'50px'} />
                </span>
            ),
        },
        {
            title: 'Origin_price',
            dataIndex: 'origin_price',
            key: 'origin_price',
            render: (tag) => (
                <span>
                    <Tag color={tag === 'LIGHT' ? 'geekblue' : 'green'} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                </span>
            ),
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            render: (edit, record) => (
                <span>
                    <Tag
                        style={{ cursor: 'pointer' }}
                        color={'lightgray'}
                        key={edit}
                        onClick={() => {
                            setIsModalEdit(true);
                            setQuestion(record);
                        }}
                    >
                        EDIT
                    </Tag>
                </span>
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete    ',
            render: (edit, record) => (
                <span>
                    <Tag style={{ cursor: 'pointer' }} color={'red'} key={edit} onClick={() => console.log(record)}>
                        Delete
                    </Tag>
                </span>
            ),
        },
    ];

    useEffect(() => {
        document.title = 'Вопросы';

        ApiApp.viewQuestions().then((res) => {
            if (res.data.status === 200) {
                const arr = res.data.questions.map((ques) => {
                    ques['key'] = ques.id;
                    return ques;
                });
                setLoading(false);
                setDataSource(arr);
            }
        });
    }, []);

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
                    columns={columns}
                    dataSource={dataSource}
                />

                <ViewQuestionsModalEdit qustion={qustion} isModalEdit={isModalEdit} setIsModalEdit={setIsModalEdit} />
            </Card>
        </Col>
    );
};

export default ViewQuestion;
