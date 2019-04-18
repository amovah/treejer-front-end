import push from './push';
import pop from './pop';

export default (notification) => {
  push(notification);

  setTimeout(pop, 5000);
};
