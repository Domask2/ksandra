import * as React from 'react';
import { Button, Form, Input } from 'antd';

const SeoTagsForm = () => {
    return (
        <>
            <Form.Item label={'meta_title'} name="meta_title">
                <Input placeholder="meta_title" />
            </Form.Item>

            <Form.Item label={'meta_keyword'} name="meta_keyword">
                <Input placeholder="meta_keyword" />
            </Form.Item>

            <Form.Item label={'meta_descrip'} name="meta_descrip">
                <Input placeholder="meta_descrip" />
            </Form.Item>
        </>
    );
};

export default SeoTagsForm;
