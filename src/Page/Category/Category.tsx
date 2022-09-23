import * as React from 'react';
import { FunctionComponent as FC, useState } from 'react';
import { CategoryApi } from '../../saga/Api/CategoryApi';
import CategoryModalEdit from './CategoryModalEdit';
import { successNotification } from '../../source/notification';
import { Button, Card, Col, Row, Descriptions, Popconfirm, Tooltip } from 'antd';
import { deletebtn, pencil } from './template-category';
import { categoryType, initCategory } from './categoryType';
import CategoryModalAdd from './CategoryModalAdd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../redux/redux.store';
import { getCategory } from '../../redux/category/category.selector';

const Category: FC = () => {
    const categories = useTypedSelector((state: RootState) => getCategory(state));
    const [loading, setLoading] = useState(true);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalAdd, setIsModalAdd] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<categoryType>(initCategory);

    const showModalEdit = (value?: categoryType) => {
        setCurrentCategory(value);
        setIsModalEdit(true);
    };

    const showModalAdd = () => {
        setIsModalAdd(true);
    };

    const deleteCategory = (id: number) => {
        CategoryApi.categoryDestroy(id).then((res) => {
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0' }}>Категории вопросов</h2>

                <Tooltip title="Добавить категорию">
                    <Button type={'primary'} onClick={showModalAdd}>
                        ДОБАВИТЬ НОВУЮ КАТЕГОРИЮ
                    </Button>
                </Tooltip>
            </div>
        );
    };

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={20} md={18} lg={20} xl={24} className="mb-24">
                    <Card className="criclebox cardbody" title={titleCardCategory()}>
                        <Row gutter={[24, 24]}>
                            {categories.map((i, index) => (
                                <Card
                                    key={index}
                                    size={'small'}
                                    style={{ margin: '0 30px', paddingLeft: '25px', borderRadius: '0px' }}
                                    className="card-billing-info"
                                >
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
                                        <Button type="link" className="darkbtn" onClick={() => showModalEdit(i)}>
                                            {pencil}
                                            <span style={{ marginLeft: '5px' }}>РЕДАКТИРОВАТЬ</span>
                                        </Button>

                                        <Popconfirm
                                            key={i.id + 'popconfirm'}
                                            placement="left"
                                            title={'Вы точно хотите удалить категорию?'}
                                            onConfirm={() => deleteCategory(i.id)}
                                            okText="Да"
                                            cancelText="Нет"
                                        >
                                            <Button type="link" danger>
                                                {deletebtn}
                                                <span style={{ marginLeft: '5px' }}>УДАЛИТЬ</span>
                                            </Button>
                                        </Popconfirm>
                                    </div>
                                </Card>
                            ))}
                        </Row>
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
