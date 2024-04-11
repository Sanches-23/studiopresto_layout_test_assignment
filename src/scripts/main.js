document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('menuCheckbox');
  const headerAside = document.querySelector('.header__aside');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      headerAside.style.transform = 'translateX(0)';
      headerAside.style.display = 'block';
    } else {
      headerAside.style.transform = '';
      headerAside.style.display = 'none';
    }
  });
});
