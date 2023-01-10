import { FC } from 'react';
import { createPortal } from 'react-dom'
import { NotificationBox } from './Notification.styled';

interface INotification { 
  message: string, 
  handleClick(): void; 
}

const Notification: FC<INotification> = ({ message, handleClick }) => {

  return createPortal(
    <NotificationBox onClick={handleClick}>{message}</NotificationBox>,
    document.getElementById('modal') as HTMLDivElement,
  )
}

export default Notification;
