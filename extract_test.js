(async () => {
  const rows = Array.from(document.querySelectorAll('.feedback-item-list .next-table-row') || []);
  if (rows.length === 0) {
    // Try another selector if the first one fails
    const alternativeRows = Array.from(document.querySelectorAll('.inquiry-item') || []);
    // Based on snapshot, let's look for elements with role="row" inside table
    const tableRows = Array.from(document.querySelectorAll('tr.next-table-row'));
    return { 
      rowCount: rows.length, 
      alternativeRowCount: alternativeRows.length,
      tableRowCount: tableRows.length,
      firstRowText: tableRows[0]?.innerText || "none"
    };
  }
  return { rowCount: rows.length };
})()