(async () => {
  const elements = Array.from(document.querySelectorAll('span, div, a'));
  const target = elements.find(e => e.textContent.includes('最近一年'));
  if (target) {
    target.click();
    return { status: 'clicked', text: target.textContent };
  }
  return { status: 'not found' };
})()