import changeStyle from './plugins/change_style';
import { updateCount, resetCount } from './plugins/update_count';

const click = document.querySelector('.clickable');
click.addEventListener('click', (event) => {
  updateCount();
  changeStyle(event);
});

const reloadBtn = document.getElementById('refresh');
reloadBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resetCount();
});
