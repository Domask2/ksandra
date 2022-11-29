import * as React from 'react';
import { Form, Input } from 'antd';
import { FunctionComponent as FC } from 'react';
import { questionType } from './type-question';

interface SeoTagsFormType {
    question?: questionType;
}

const SeoTagsForm: FC<SeoTagsFormType> = ({ question }) => {
    return (
        <>
            <Form.Item initialValue={question ? question.meta_title : ''} label={'meta_title'} name="meta_title">
                <Input placeholder="meta_title" />
            </Form.Item>

            <Form.Item initialValue={question ? question.meta_keyword : ''} label={'meta_keyword'} name="meta_keyword">
                <Input placeholder="meta_keyword" />
            </Form.Item>

            <Form.Item initialValue={question ? question.meta_descrip : ''} label={'meta_descrip'} name="meta_descrip">
                <Input placeholder="meta_descrip" />
            </Form.Item>
        </>
    );
};

export default SeoTagsForm;
