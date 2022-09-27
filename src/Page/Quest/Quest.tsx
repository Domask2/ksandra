import * as React from 'react';
import { FunctionComponent as FC, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getCategory, getCategoryLoading } from '../../redux/category/category.selector';
import { Button, Card, Col, Row, Tooltip } from 'antd';
import { RootState } from '../../redux/redux.store';
import { useActions } from '../../hooks/useActions';
import QuestionModalAdd from './QuestionModalAdd';
import QuestionModalEdit from './QuestionModalEdit';
import { categoryType, initCategory } from '../Category/categoryType';

const Category: FC = () => {
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

    const titleCardCategory = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0' }}>Список вопросов</h2>

                <Tooltip title="Добавить вопрос">
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
                        <Row gutter={[24, 24]}></Row>
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
