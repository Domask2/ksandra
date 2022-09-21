import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { ApiApp } from '../../saga/Api/Auth';
import CategoryModalEdit from './CategoryModalEdit';
import { successNotification } from '../../source/notification';
import { Button, Card, Col, Row, Descriptions, Popconfirm, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { deletebtn, pencil } from './template-category';
import { categoryType, initCategory } from './categoryType';
import CategoryModalAdd from './CategoryModalAdd';

const Category: FC = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalAdd, setIsModalAdd] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<categoryType>(initCategory);

    useEffect(() => {
        ApiApp.viewCategory().then((res) => {
            if (res.status === 200) {
                setCategories(res.data.category);
            }
            setLoading(false);
        });
    }, [loading]);

    const showModalEdit = (value?: categoryType) => {
        setCurrentCategory(value);
        setIsModalEdit(true);
    };

    const showModalAdd = () => {
        setIsModalAdd(true);
    };

    const deleteCategory = (id: number) => {
        ApiApp.deleteCategory(id).then((res) => {
            if (res.data.status === 200) {
                successNotification('top', '', res.data.message);
                setLoading(true);
            } else if (res.data.status === 404) {
                console.error(res.data.message);
            }
        });
    };

    const titleCardCategory = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Категории вопросов</h2>

                <Tooltip title="Добавить категорию">
                    <Button onClick={showModalAdd} style={{ borderRadius: '50%' }}>
                        <PlusOutlined style={{ fontSize: '20px' }} />
                    </Button>
                </Tooltip>
            </div>
        );
    };

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
                    <Card className="criclebox cardbody" title={titleCardCategory()}>
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
                                                              onClick={() => showModalEdit(i)}
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

            <CategoryModalAdd isModalAdd={isModalAdd} setLoading={setLoading} setIsModalAdd={setIsModalAdd} />

            <CategoryModalEdit
                currentCategory={currentCategory}
                isModalEdit={isModalEdit}
                setIsModalEdit={setIsModalEdit}
                setLoading={setLoading}
            />
        </>
    );
};

export default Category;
