let count = 0;
const countBtn = document.getElementById('count');

const updateCount = () => {
  count += 1;
  countBtn.innerText = count;
};

const resetCount = () => {
  window.location.reload();
};

export { updateCount, resetCount };
