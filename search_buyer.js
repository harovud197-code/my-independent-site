(async () => {
  const inputs = Array.from(document.querySelectorAll('input'));
  const searchInput = inputs.find(i => i.placeholder === '搜索' || i.getAttribute('aria-label') === '搜索');
  if (searchInput) {
    searchInput.focus();
    searchInput.value = 'Londonette Revis';
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    searchInput.dispatchEvent(new Event('change', { bubbles: true }));
    // Try to find a search button or press enter
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      which: 13,
      bubbles: true
    });
    searchInput.dispatchEvent(enterEvent);
    return { success: true, message: 'Typed and pressed enter' };
  }
  return { success: false, message: 'Search input not found' };
})()