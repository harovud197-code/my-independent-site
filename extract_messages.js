(async () => {
  const rows = Array.from(document.querySelectorAll('.next-table-row'));
  const data = rows.map(row => {
    const text = row.innerText;
    const inquiryIdMatch = text.match(/询价单号：(\d+)/);
    const updateTimeMatch = text.match(/更新时间：\s*([\d:-]+|[\d:]+)/);
    const createTimeMatch = text.match(/创建时间：\s*([\d:-]+|[\d:]+)/);
    
    // Extract Type from the "TM 商机" or "询盘商机" text
    const type = text.includes('TM 商机') ? 'TM' : (text.includes('询盘商机') ? 'Inquiry' : 'Unknown');
    
    // Extract Buyer and Country
    // Pattern: [Name] [Country] [Local Time: ...]
    // Example: "J Jessica Do Canada [Local Time: 21: 01 Mon Apr 06]"
    // Or more reliably, find the cell containing the name
    const infoCell = row.querySelector('.business-info-cell') || row.querySelector('td:nth-child(2)');
    const infoText = infoCell ? infoCell.innerText : '';
    
    // Better name/country extraction
    // "J Jessica Do Canada [Local Time..."
    // We can try to split by " [Local Time"
    let name = '';
    let country = '';
    const parts = infoText.split(/\[Local Time/);
    if (parts.length > 0) {
      const nameCountryStr = parts[0].trim();
      // This string usually ends with the country. 
      // Countries are usually "United States", "Canada", etc.
      // Since it's hard to distinguish name from country without a list, 
      // we can look at the text provided in the snapshot which often has them separated.
      // Actually, the snapshot says "J Jessica Do Canada". 
      // Let's use a regex for common countries or just take the last word if it's a known country.
      
      const commonCountries = ["United States", "United Kingdom", "Australia", "Canada", "Philippines", "Nigeria", "Azerbaijan", "Chile", "France"];
      for (const c of commonCountries) {
        if (nameCountryStr.endsWith(c)) {
          country = c;
          name = nameCountryStr.slice(0, -c.length).trim();
          break;
        }
      }
      if (!country) {
          // Fallback: take last word
          const words = nameCountryStr.split(/\s+/);
          country = words[words.length - 1];
          name = words.slice(0, -1).join(' ');
      }
    }

    const highIntent = text.includes('高意向');
    const paid = text.includes('已付款') || text.includes('订单');

    return {
      id: inquiryIdMatch ? inquiryIdMatch[1] : null,
      updateTime: updateTimeMatch ? updateTimeMatch[1] : null,
      createTime: createTimeMatch ? createTimeMatch[1] : null,
      name,
      country,
      type,
      highIntent,
      paid
    };
  });
  return data;
})()