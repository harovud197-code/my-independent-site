(async () => {
  const findAndClickCustomDate = () => {
    // Look for date filter elements
    const triggers = Array.from(document.querySelectorAll('span, a, button, div')).filter(el => 
      el.innerText.includes('日期') || el.innerText.includes('最近一年')
    );
    console.log('Potential triggers:', triggers.map(t => t.innerText));
    
    // If we can't find it easily, let's look for common Alibaba date picker classes
    const datePickers = document.querySelectorAll('.next-date-picker, .ant-picker, .date-picker');
    console.log('Date pickers found:', datePickers.length);
    
    return { triggers: triggers.length, datePickers: datePickers.length };
  };
  
  return findAndClickCustomDate();
})()