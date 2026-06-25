(async () => {
  const targetDate = "2026-4-1";
  const results = [];
  let stop = false;

  const extract = () => {
    const items = Array.from(document.querySelectorAll('a[href*="imInquiryId"]'));
    for (const item of items) {
      const text = item.innerText;
      const creationDateMatch = text.match(/创建时间：\s*([\d-:]+)/);
      const creationDate = creationDateMatch ? creationDateMatch[1] : "";
      
      // Handle "09:12" format (today)
      let fullDate = creationDate;
      if (creationDate.includes(':') && !creationDate.includes('-')) {
        fullDate = "2026-4-2 " + creationDate;
      }

      if (fullDate.startsWith(targetDate)) {
        // Extract buyer, country, summary
        // Text is messy, let's try to split or use selectors on parts
        // Based on the structure, we can try to find cells
        const parentRow = item.closest('tr');
        let buyer = "Unknown";
        let country = "Unknown";
        let summary = "Unknown";
        let time = creationDate;

        if (parentRow) {
           const cells = parentRow.querySelectorAll('td');
           // Cell 2: Summary/Product
           summary = cells[2]?.innerText?.trim() || "Unknown";
           // Cell 3: Buyer & Country
           const buyerCell = cells[3];
           if (buyerCell) {
             const lines = buyerCell.innerText.split('\n').map(l => l.trim()).filter(l => l);
             buyer = lines[0] || "Unknown";
             country = lines[lines.length - 1] || "Unknown";
             // Country usually has flag/text, sometimes includes local time
             if (country.includes('[')) {
                country = country.split('[')[0].trim();
             }
           }
        } else {
            // Fallback to text parsing
            buyer = text.match(/[A-Z]\s+([A-Za-z\s]+)\s+/)?.[1]?.trim() || "Unknown";
        }

        results.push({
          buyer,
          country,
          summary,
          time: fullDate
        });
      } else if (fullDate < targetDate && fullDate.includes('-')) {
        // We reached older dates (if sorted new to old)
        // Note: Lexicographical comparison "2026-4-1" vs "2026-3-31" works mostly
        // But better check if it's before April 1st.
        const d = new Date(fullDate);
        const targetD = new Date("2026-04-01");
        if (d < targetD) {
            stop = true;
        }
      }
    }
  };

  extract();
  
  return { 
    results, 
    stop,
    nextPageAvailable: !!document.querySelector('.next-pagination-list .next-current + .next-btn') || !!document.querySelector('link[ref="e232"]')
  };
})()