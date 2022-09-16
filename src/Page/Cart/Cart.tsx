import * as React from 'react';
import { FunctionComponent as FC, useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
import { CartType } from './template';
import { Button, Card, Col, Input, Row } from 'antd';

const Cart: FC = () => {
    const [cart, setCart] = useState<CartType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        ApiApp.cart().then((res) => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setLoading(false);
                    setCart(res.data.cart);
                } else if (res.data.status === 401) {
                    console.error(res.data.message);
                }
            }
        });

        return () => {
            isMounted = false;
        };
    }, [loading]);

    const handleDecrement = (id) => {
        setCart((cart) => {
            return cart.map((item) =>
                id === item.id
                    ? {
                          ...item,
                          question_quantity: (
                              Number(item.question_quantity) - (Number(item.question_quantity) > 1 ? 1 : 0)
                          ).toString(),
                      }
                    : item,
            );
        });
        updateCartQuantity(id, 'dec');
    };

    const handleIncrement = (id) => {
        setCart((cart) => {
            return cart.map((item) =>
                id === item.id
                    ? {
                          ...item,
                          question_quantity: (
                              Number(item.question_quantity) + (Number(item.question_quantity) < 10 ? 1 : 0)
                          ).toString(),
                      }
                    : item,
            );
        });
        updateCartQuantity(id, 'inc');
    };

    const updateCartQuantity = (id, scope) => {
        ApiApp.updateCartQuantity(id, scope).then((res) => {
            if (res.data.status === 200) {
                // successNotification('top', '', res.data.message);
            } else if (res.data.status === 401) {
                console.error(res.data.message);
            }
        });
    };

    const deleteCartItem = (e, id) => {
        e.preventDefault();

        const isClicked = e.currentTarget;
        isClicked.innerHTML = 'Удаление';

        ApiApp.deleteCartItem(id).then((res) => {
            if (res.data.status === 200) {
                isClicked.closest('button').remove();
                setLoading(true);
                // successNotification('top', '', res.data.message);
            } else if (res.data.status === 401) {
                console.error(res.data.message);
            } else if (res.data.status === 404) {
                console.error(res.data.message);
            }
        });
    };

    if (loading) {
        return <>Загрузка....</>;
    }

    return (
        <Row>
            {cart &&
                cart.map((car, index) => {
                    return (
                        <Card key={index} style={{ width: '100%' }}>
                            <Col span={10}>
                                <h4>{car.question.description}</h4>
                                <p>Brand: {car.question.brand}</p>
                                <p>Origin: {car.question.origin_price}</p>
                                <p>Selling: {car.question.selling_price}</p>
                                <div style={{ display: 'flex' }}>
                                    <Button onClick={() => handleDecrement(car.id)}>-</Button>
                                    <Input style={{ width: '20%' }} value={Number(car.question_quantity)} type="text" />
                                    <Button onClick={() => handleIncrement(car.id)}>+</Button>
                                </div>
                                <Button>Добавить вопрос в избранное </Button>
                                <Button onClick={(e) => deleteCartItem(e, car.id)} danger>
                                    Удалить
                                </Button>
                            </Col>
                        </Card>
                    );
                })}
        </Row>
    );
};

export default Cart;
