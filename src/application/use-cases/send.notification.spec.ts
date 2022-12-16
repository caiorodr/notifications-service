import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification"

let  notifications: Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification) {
       notifications.push(notification);
    }
}

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository)

        const {notification} = await sendNotification.execute({
            content: 'this is a notification',
            category: 'social',
            recipientId: 'exemple-recipient-id'
        });

        console.log(notifications);
        
        expect(notifications).toHaveLength(1);
    });
});