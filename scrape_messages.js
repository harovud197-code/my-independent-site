(async () => {
  const rows = Array.from(document.querySelectorAll('.aui-inquiry-list-row, [class*=\"inquiry-item\"]'));
  const data = rows.map(row => {
    try {
      const idElement = row.querySelector('[class*=\"id-link\"], .inquiry-id');
      const timeElement = row.querySelector('[class*=\"time-info\"], .time-info');
      const customerElement = row.querySelector('.customer-info, .customer-name-wrapper');
      const statusElement = row.querySelector('.status-info, .business-status');
      const typeElement = row.querySelector('.business-type, .商机分类'); // Try class or text content

      // For some sites, we need more specific selectors or regex on the row text
      const text = row.innerText;
      const createdMatch = text.match(/创建时间：\s*([\d:-]+|\d+:\d+)/);
      const updatedMatch = text.match(/更新时间：\s*([\d:-]+|\d+:\d+)/);
      
      const createdStr = createdMatch ? createdMatch[1] : '';
      const updatedStr = updatedMatch ? updatedMatch[1] : '';

      const customerName = customerElement ? customerElement.innerText.split('\n')[0].trim() : '';
      const country = text.includes('United States') ? 'United States' : (text.match(/United Kingdom|France|Canada|Australia|Singapore|Chile|Albania|Venezuela/) || [''])[0];
      
      const type = text.includes('TM 商机') ? 'TM' : (text.includes('询盘商机') ? 'Inquiry' : '');
      const status = statusElement ? statusElement.innerText.trim() : (text.includes('洽谈中') ? '洽谈中' : '');

      return {
        id: idElement ? idElement.innerText : '',
        created: createdStr,
        updated: updatedStr,
        customer: customerName,
        country: country,
        type: type,
        status: status,
        raw: text.substring(0, 500)
      };
    } catch (e) {
      return { error: e.message };
    }
  });

  return { __result: data };
})()