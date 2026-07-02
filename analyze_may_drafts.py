import json
import re

def analyze_orders(file_path):
    content = ""
    encodings = ['utf-16', 'utf-8', 'gbk']
    for enc in encodings:
        try:
            with open(file_path, 'r', encoding=enc) as f:
                content = f.read()
                if content: break
        except:
            continue
    
    if not content:
        print("Failed to read file.")
        return

    if content.startswith('data:'):
        content = content[content.find('{'):]
    
    try:
        raw_data = json.loads(content)
    except:
        match = re.search(r'\{.*\}', content, re.DOTALL)
        if match:
            raw_data = json.loads(match.group(0))
        else:
            print("Failed to parse JSON")
            return

    orders = raw_data.get('data', {}).get('tradeList', [])
    print(f"Total orders (including drafts) found: {len(orders)}")

    total_amt = 0.0
    for order in orders:
        payment = order.get('payment', {})
        total_amt += float(payment.get('totalAmount', {}).get('amount', 0))

    print(f"Total Amount (Draft + Normal): {total_amt}")

analyze_orders('may_draft_orders.json')
