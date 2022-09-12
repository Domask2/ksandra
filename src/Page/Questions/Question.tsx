import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';

interface QuestionType {
    id: number;
}

const Question: FC<QuestionType> = ({ id }) => {
    const [categories, setCategories] = useState<any>({ name: '' });

    useEffect(() => {
        setCategories({ name: '' });
        ApiApp.viewCategoryId(id).then((res) => {
            if (res.data.status === 200) {
                // console.log(res.data.category);
                setCategories(res.data.category);
            } else if (res.data.status === 404) {
                console.error(res.data.message);
            }
        });
    }, [id]);

    return <>{categories.name !== '' ? <div>{categories.name}</div> : <>Загрузка...</>}</>;
};

export default Question;
