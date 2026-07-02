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
    
    if content.startswith('data:'):
        content = content[content.find('{'):]
    
    raw_data = json.loads(content)
    orders = raw_data.get('data', {}).get('tradeList', [])

    suc_ord_amt = 0.0
    for order in orders:
        status_obj = order.get('status', {})
        status = status_obj.get('status', '') if isinstance(status_obj, dict) else status_obj
        if status in ['trade_success', 'success', 'finish']:
            payment = order.get('payment', {})
            suc_ord_amt += float(payment.get('totalAmount', {}).get('amount', 0))

    print(f"sucOrdAmt (Modified in May): {suc_ord_amt}")

analyze_orders('may_modified_orders.json')
