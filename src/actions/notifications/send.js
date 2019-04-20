import push from './push';
import remove from './remove';

export default (notification, autoClose = true) => {
  const id = push(notification);

  if (autoClose) {
    setTimeout(() => remove(id), 5000);
  }
};
