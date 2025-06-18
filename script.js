document.querySelectorAll('.subject-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const li = btn.closest('.subject');
    li.classList.toggle('open');
    document.querySelectorAll('.subject').forEach(other => {
      if (other !== li) other.classList.remove('open');
    });
  });
});