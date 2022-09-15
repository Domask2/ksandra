import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { categoryType } from '../Category/categoryType';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
import { questionType } from './type-question';
const { Option } = Select;

interface HomeFormType {
    question?: questionType;
}

const HomeForm: FC<HomeFormType> = ({ question }) => {
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        ApiApp.allCategory().then((res) => {
            if (res.status === 200) {
                setCategoriesList(res.data.category);
            }
        });
    }, []);
    return (
        <>
            <Form.Item
                initialValue={question ? question.category_id : ''}
                label={'Category_id'}
                name={'category_id'}
                rules={[{ required: true, message: 'Пожалуйста выберите категорию!' }]}
            >
                <Select
                    onChange={(value) => {
                        console.log(value);
                    }}
                    placeholder="Выберите категорию!"
                >
                    {categoriesList?.length &&
                        categoriesList.map((cat: categoryType) => {
                            return (
                                <Option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </Option>
                            );
                        })}
                </Select>
            </Form.Item>

            <Form.Item
                initialValue={question ? question.slug : ''}
                label={'Slug'}
                name={'slug'}
                rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
            >
                <Input placeholder="Slug" />
            </Form.Item>

            <Form.Item
                initialValue={question ? question.name : ''}
                label={'Name'}
                name="name"
                rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
            >
                <Input placeholder="Name" />
            </Form.Item>

            <Form.Item initialValue={question ? question.description : ''} label={'Description'} name="description">
                <Input placeholder="Description" />
            </Form.Item>

            <Form.Item hidden initialValue={question ? question.id : ''} label={'id'} name="id">
                <Input placeholder="id" />
            </Form.Item>
        </>
    );
};

export default HomeForm;
