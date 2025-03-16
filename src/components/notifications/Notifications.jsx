import { useState, useEffect } from 'react';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'contribution',
      message: 'Votre mot "Marhaba" a été approuvé',
      date: '2024-03-16T10:30:00',
      read: false
    },
    {
      id: 2,
      type: 'badge',
      message: 'Félicitations ! Vous avez obtenu le badge "Contributeur actif"',
      date: '2024-03-15T15:45:00',
      read: true
    },
    {
      id: 3,
      type: 'level',
      message: 'Vous avez atteint le niveau 5 !',
      date: '2024-03-14T09:20:00',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'contribution': return '📝';
      case 'badge': return '🏆';
      case 'level': return '⭐';
      default: return '📌';
    }
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2>Notifications</h2>
        <button 
          className="mark-all-btn"
          onClick={markAllAsRead}
        >
          Tout marquer comme lu
        </button>
      </div>

      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-icon">
              {getNotificationIcon(notification.type)}
            </div>
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <span className="notification-date">
                {new Date(notification.date).toLocaleString()}
              </span>
            </div>
            {!notification.read && (
              <div className="unread-indicator"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications; 