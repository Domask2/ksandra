import { NotificationPlacement } from 'antd/es/notification';
import { notification } from 'antd';

export const successNotification = (placement: NotificationPlacement, message: string, desc: string) => {
    notification.success({
        duration: 1,
        message: message,
        description: desc,
        placement,
    });
};

export const errorNotification = (placement: NotificationPlacement, message: string, desc: string) => {
    notification.error({
        duration: 2,
        message: message,
        description: desc,
        placement,
    });
};
