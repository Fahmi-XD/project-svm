let blockBack = true;

window.addEventListener('popstate', (e) => {
  if (blockBack) {
    history.go(1);
  }
});

// window.addEventListener('contextmenu', (e) => e.preventDefault());
// window.addEventListener('keydown', (e) => {
//   if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
//     e.preventDefault();
//   }
// });