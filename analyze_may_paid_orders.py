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
    print(f"Total paid orders found: {len(orders)}")

    pay_ord_amt = 0.0
    for order in orders:
        payment = order.get('payment', {})
        total_amount = float(payment.get('totalAmount', {}).get('amount', 0))
        pay_ord_amt += total_amount

    print(f"payOrdAmt (Paid in May): {pay_ord_amt}")
    
    sorted_orders = sorted(orders, key=lambda x: float(x.get('payment', {}).get('totalAmount', {}).get('amount', 0)), reverse=True)
    print("Top 5 largest orders paid in May 2026:")
    for o in sorted_orders[:5]:
        print(f"ID={o.get('id')}, Status={o.get('status')}, Amount={o.get('payment', {}).get('totalAmount', {}).get('amount')}")

analyze_orders('may_paid_orders.json')
