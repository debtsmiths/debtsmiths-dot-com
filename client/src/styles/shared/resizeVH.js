const redefineVH = () => {
  function resetDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }

  window.addEventListener('resize', () => {
    resetDocHeight();
  });

  window.addEventListener('orientationchange', () => {
    resetDocHeight();
  });

  resetDocHeight();
}

export default redefineVH;