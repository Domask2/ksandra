import { Popconfirm, Table, Tag } from 'antd';
import * as React from 'react';

export const columns = (setIsModalEdit, setCurrentQuestion, deleteQuestion) => {
    return [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
            filters: [
                { text: 'php', value: 'PHP' },
                { text: 'JS', value: 'Java Script' },
            ],
            onFilter: (value: string, record) => record.category.includes(value),
        },
        Table.EXPAND_COLUMN,
        {
            title: 'question',
            dataIndex: 'question',
            key: 'question',
            render: (tag) => (
                <span>{typeof tag === 'string' && tag?.length > 10 ? tag.substring(0, 10) + '...' : tag}</span>
            ),
        },
        {
            title: 'level',
            dataIndex: 'level',
            key: 'level',
            render: (tag) => (
                <span>
                    <Tag color={tag === 'small' ? 'geekblue' : 'green'} key={tag}>
                        {tag?.toUpperCase()}
                    </Tag>
                </span>
            ),
        },
        {
            title: 'classification',
            dataIndex: 'classification',
            key: 'classification',
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
                            setCurrentQuestion(record);
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
                    <Popconfirm
                        key={record.id + 'popconfirm'}
                        placement="left"
                        title={'Вы точно хотите удалить вопрос?'}
                        onConfirm={() => deleteQuestion(record.id)}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <Tag
                            style={{ cursor: 'pointer' }}
                            color={'red'}
                            key={edit}
                            onClick={() => deleteQuestion(record.id)}
                        >
                            Delete
                        </Tag>
                    </Popconfirm>
                </span>
            ),
        },
    ];
};
