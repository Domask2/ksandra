import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { categoryType } from '../Category/categoryType';
import { useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
const { Option } = Select;

const HomeForm = () => {
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
                    {categoriesList &&
                        categoriesList.map((cat: categoryType) => {
                            return (
                                <Option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </Option>
                            );
                        })}
                </Select>
            </Form.Item>

            <Form.Item label={'Slug'} name={'slug'} rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}>
                <Input placeholder="Slug" />
            </Form.Item>

            <Form.Item label={'Name'} name="name" rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}>
                <Input placeholder="Name" />
            </Form.Item>

            <Form.Item label={'Description'} name="description">
                <Input placeholder="Description" />
            </Form.Item>
        </>
    );
};

export default HomeForm;
