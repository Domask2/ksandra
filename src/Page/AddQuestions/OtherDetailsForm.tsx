import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { Col, Form, Input, Row, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { questionType } from './type-question';

interface OtherDetailsFormType {
    question?: questionType;
}

const OtherDetailsForm: FC<OtherDetailsFormType> = ({ question }) => {
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <Form.Item
                initialValue={question ? question.selling_price : ''}
                label={'Selling Price'}
                name="selling_price"
            >
                <Input placeholder="selling_price" />
            </Form.Item>

            <Form.Item initialValue={question ? question.origin_price : ''} label={'Origin Price'} name="origin_price">
                <Input placeholder="origin_price" />
            </Form.Item>

            <Form.Item initialValue={question ? question.quantity : ''} label={'Quantity'} name="quantity">
                <Input placeholder="quantity" />
            </Form.Item>

            <Form.Item initialValue={question ? question.brand : ''} label={'Brand'} name="brand">
                <Input placeholder="brand" />
            </Form.Item>

            <div style={{ display: 'flex', marginBottom: '20px' }}>
                {question && question?.image && (
                    <img src={`http://localhost/${question.image}`} alt={'image'} width={'80px'} />
                )}
                <Form.Item name="image" label="image" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload beforeUpload={() => false} name={'image'}>
                        <Button icon={<UploadOutlined />}>Загрузить изображение</Button>
                    </Upload>
                </Form.Item>
            </div>

            <Row>
                <Col span={'8'}>
                    <Form.Item initialValue={question ? question.featured : ''} label={'Featured'} name="featured">
                        <Input
                            type={'checkbox'}
                            placeholder="featured"
                            checked={question ? !!question.featured : false}
                        />
                    </Form.Item>
                </Col>

                <Col span={'8'}>
                    <Form.Item initialValue={question ? question.popular : ''} label={'Popular'} name="popular">
                        <Input
                            type={'checkbox'}
                            placeholder="popular"
                            checked={question ? !!question.popular : false}
                        />
                    </Form.Item>
                </Col>

                <Col span={'8'}>
                    <Form.Item label={'Status'} name="status">
                        <Input type={'checkbox'} placeholder="status" checked={question ? !!question.status : false} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};

export default OtherDetailsForm;
