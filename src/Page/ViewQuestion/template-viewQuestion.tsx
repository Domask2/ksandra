import { Popconfirm, Table, Tag } from 'antd';
import * as React from 'react';

export const columns = (setIsModalEdit, setQuestion, deleteQuestion) => {
    return [
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
            render: (tag) => (
                <span>{typeof tag === 'string' && tag?.length > 10 ? tag.substring(0, 10) + '...' : tag}</span>
            ),
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
            render: (tag, record) => <span>{tag ? <img src={`http://localhost/${tag}`} width={'50px'} /> : ''}</span>,
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
