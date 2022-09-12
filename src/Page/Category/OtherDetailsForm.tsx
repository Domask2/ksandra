import * as React from 'react';
import { Col, Form, Input, Row, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const SeoTagsForm = () => {
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <Form.Item label={'Selling Price'} name="selling_price">
                <Input placeholder="selling_price" />
            </Form.Item>

            <Form.Item label={'Origin Price'} name="origin_price">
                <Input placeholder="origin_price" />
            </Form.Item>

            <Form.Item label={'Quantity'} name="quantity">
                <Input placeholder="quantity" />
            </Form.Item>

            <Form.Item label={'Brand'} name="brand">
                <Input placeholder="brand" />
            </Form.Item>

            {/*<Form.Item label={'Image'} name="image">*/}
            {/*    <Input type={'file'} onChange={(e) => console.log(e.target.files[0])} placeholder="image" />*/}
            {/*</Form.Item>*/}

            <Form.Item name="image" label="image" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload name={'image'}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Row>
                <Col span={'8'}>
                    <Form.Item label={'Featured'} name="featured">
                        <Input type={'checkbox'} placeholder="featured" />
                    </Form.Item>
                </Col>

                <Col span={'8'}>
                    <Form.Item label={'Popular'} name="popular">
                        <Input type={'checkbox'} placeholder="popular" />
                    </Form.Item>
                </Col>

                <Col span={'8'}>
                    <Form.Item label={'Status'} name="status">
                        <Input type={'checkbox'} placeholder="status" />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};

export default SeoTagsForm;
