import push from './push';
import remove from './remove';

export default (notification) => {
  const id = push(notification);

  setTimeout(() => remove(id), 5000);
};
