import * as React from 'react';
import { Button, Card, Col, Form, Input, Row, Descriptions, Modal, Popconfirm } from 'antd';
import { ApiApp, instance } from '../Api/Auth';
import { errorNotification, successNotification } from '../source/notification';
import { useEffect, useState } from 'react';

const pencil = [
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" key={0}>
        <path
            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
            className="fill-gray-7"
        />
        <path d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" className="fill-gray-7" />
    </svg>,
];

const deletebtn = [
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" key={0}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
            fill="#111827"
            className="fill-danger"
        />
    </svg>,
];

const Category = () => {
    const [form] = Form.useForm();
    const [form1] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cat, setCat] = useState({
        id: '',
        name: '',
        slug: '',
        status: '',
        description: '',
        meta_title: '',
        meta_keyword: '',
        meta_descrip: '',
    });

    const showModal = (val: any) => {
        setCat(val);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setCat({
            id: '',
            name: '',
            slug: '',
            status: '',
            description: '',
            meta_title: '',
            meta_keyword: '',
            meta_descrip: '',
        });
        form1.resetFields();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setCat({
            id: '',
            name: '',
            slug: '',
            status: '',
            description: '',
            meta_title: '',
            meta_keyword: '',
            meta_descrip: '',
        });
        form1.resetFields();

        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        ApiApp.category(values).then((res) => {
            if (res.data.status === 200) {
                if (res.data.message && typeof res.data.message === 'string') {
                    successNotification('top', '', res.data.message);
                    setLoading(true);
                }
                form.resetFields();
            } else if (res.data.status === 400) {
                errorNotification('top', '', res.data.errors);
            }
        });
    };

    const onFinishModal = (values) => {
        setIsModalOpen(false);
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        instance.get(`/api/edit-category/${cat.id}`).then((res) => {
            if (res.data.status === 200) {
                console.log(res.data.category);
                setLoading(true);
            } else if (res.data.status === 404) {
                console.log(res.data.message);
            }
        });

        instance.put(`/api/update-category/${cat.id}`, values).then((res) => {
            if (res.data.status === 200) {
                successNotification('top', '', res.data.message);
            } else if (res.data.status === 422) {
                errorNotification('top', '', res.data.errors);
            }
        });
    };

    const deleteCategory = (id: number) => {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        instance.delete(`/api/delete-category/${id}`).then((res) => {
            if (res.data.status === 200) {
                successNotification('top', '', res.data.message);
                setLoading(true);
            } else if (res.data.status === 404) {
                console.log(res.data.message);
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    useEffect(() => {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        instance.get('api/view-category').then((res) => {
            if (res.status === 200) {
                setCategories(res.data.category);
            }
            setLoading(false);
        });
    }, [loading]);

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
                    <Card className="criclebox cardbody" title={<h2>Добавить категории вопросов</h2>}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col xs={24} sm={24} md={24} lg={18} xl={10}>
                                <Form
                                    form={form}
                                    name="basic"
                                    initialValues={{
                                        name: '',
                                        slug: '',
                                        description: '',
                                        meta_title: '',
                                        meta_keyword: '',
                                        meta_descrip: '',
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    className="row-col"
                                    labelCol={{ span: 7 }}
                                    wrapperCol={{ span: 17 }}
                                >
                                    <Form.Item
                                        label={'Slug'}
                                        name="slug"
                                        rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                                    >
                                        <Input placeholder="Slug" />
                                    </Form.Item>
                                    <Form.Item
                                        label={'Name'}
                                        name="name"
                                        rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
                                    >
                                        <Input placeholder="Name" />
                                    </Form.Item>

                                    <Form.Item label={'Description'} name="description">
                                        <Input placeholder="Description" />
                                    </Form.Item>

                                    <Form.Item label={'Status'} name="status">
                                        <Input placeholder="Status" />
                                    </Form.Item>

                                    <Form.Item
                                        label={'meta_title'}
                                        name="meta_title"
                                        rules={[{ required: true, message: 'Пожалуйста введите meta_title!' }]}
                                    >
                                        <Input placeholder="meta_title" />
                                    </Form.Item>

                                    <Form.Item label={'meta_keyword'} name="meta_keyword">
                                        <Input placeholder="meta_keyword" />
                                    </Form.Item>

                                    <Form.Item label={'meta_descrip'} name="meta_descrip">
                                        <Input placeholder="meta_descrip" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                            Добавить категорию
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </div>
                    </Card>
                    <Card className="criclebox cardbody" title={<h2>Категории вопросов</h2>}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                                <Row gutter={[24, 24]}>
                                    {!loading
                                        ? categories.map((i, index) => (
                                              <Col span={24} key={index}>
                                                  <Card className="card-billing-info p-5">
                                                      <div className="col-info">
                                                          <Descriptions title={i.name}>
                                                              <Descriptions.Item label="Slug" span={3}>
                                                                  {i.slug}
                                                              </Descriptions.Item>
                                                              <Descriptions.Item label="Description" span={3}>
                                                                  {i.description}
                                                              </Descriptions.Item>
                                                          </Descriptions>
                                                      </div>
                                                      <div className="col-action">
                                                          <Popconfirm
                                                              key={i.id + 'popconfirm'}
                                                              placement="left"
                                                              title={'Вы точно хотите удалить категорию?'}
                                                              onConfirm={() => deleteCategory(i.id)}
                                                              okText="Да"
                                                              cancelText="Нет"
                                                          >
                                                              <Button type="link" danger>
                                                                  {deletebtn}DELETE
                                                              </Button>
                                                          </Popconfirm>

                                                          <Button
                                                              type="link"
                                                              className="darkbtn"
                                                              onClick={() => showModal(i)}
                                                          >
                                                              {pencil} EDIT
                                                          </Button>
                                                      </div>
                                                  </Card>
                                              </Col>
                                          ))
                                        : 'Загрузка категорий...'}
                                </Row>
                            </Col>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Modal
                destroyOnClose
                title="Basic Modal"
                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                visible={isModalOpen}
                footer={false}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    preserve={false}
                    onFinish={onFinishModal}
                    form={form1}
                    name="basic1"
                    className="row-col"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 17 }}
                >
                    <Form.Item
                        initialValue={cat.slug}
                        label={'Slug'}
                        name="slug"
                        rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                    >
                        <Input placeholder="Slug" />
                    </Form.Item>
                    <Form.Item
                        initialValue={cat.name}
                        label={'Name'}
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item initialValue={cat.description} label={'Description'} name="description">
                        <Input placeholder="Description" />
                    </Form.Item>

                    <Form.Item initialValue={cat.status} label={'Status'} name="status">
                        <Input placeholder="Status" />
                    </Form.Item>

                    <Form.Item
                        initialValue={cat.meta_title}
                        label={'meta_title'}
                        name="meta_title"
                        rules={[{ required: true, message: 'Пожалуйста введите meta_title!' }]}
                    >
                        <Input placeholder="meta_title" />
                    </Form.Item>

                    <Form.Item initialValue={cat.meta_keyword} label={'meta_keyword'} name="meta_keyword">
                        <Input placeholder="meta_keyword" />
                    </Form.Item>

                    <Form.Item initialValue={cat.meta_descrip} label={'meta_descrip'} name="meta_descrip">
                        <Input placeholder="meta_descrip" />
                    </Form.Item>

                    <Form.Item initialValue={cat.id} hidden={true} label={'id'} name="id">
                        <Input placeholder="id" />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Category;
