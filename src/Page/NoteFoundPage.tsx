import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

// страница ошибки 404
const NoteFoundPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    if (isLoading) return <></>;

    return (
        <Result
            status="404"
            title="404"
            subTitle="Извнините, такой страницы не существуют!"
            extra={<Link to={'/'}>Вернуться назад</Link>}
        />
    );
};

export default NoteFoundPage;
