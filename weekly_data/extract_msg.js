(async () => {
  const rows = Array.from(document.querySelectorAll('link[url*="imInquiryId"], div.item, tr.row'));
  const results = rows.map(row => {
    const text = row.innerText;
    const inquiryId = row.getAttribute('url')?.match(/imInquiryId=(\d+)/)?.[1];
    const countryImg = row.querySelector('img[src*="flag"], img[src*="country"]');
    const country = countryImg?.getAttribute('alt') || countryImg?.getAttribute('title');
    return { text, inquiryId, country };
  });
  return results;
})()