import { NotificationPlacement } from 'antd/es/notification';
import { notification } from 'antd';

export const successNotification = (placement: NotificationPlacement, message: string, desc: string) => {
    notification.success({
        message: message,
        description: desc,
        placement,
    });
};

export const errorNotification = (placement: NotificationPlacement, message: string, desc: string) => {
    notification.error({
        message: message,
        description: desc,
        placement,
    });
};
