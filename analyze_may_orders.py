import json
import codecs

def analyze_orders(file_path):
    # Try different encodings to handle BOM or UTF-16
    encodings = ['utf-8-sig', 'utf-16', 'utf-8']
    data = None
    for enc in encodings:
        try:
            with codecs.open(file_path, 'r', encoding=enc) as f:
                data = json.load(f)
            print(f"Successfully loaded using encoding: {enc}")
            break
        except Exception as e:
            continue
    
    if not data:
        print("Failed to load JSON file with known encodings.")
        return

    orders = data.get('data', {}).get('tradeList', [])
    total_count = len(orders)
    total_paid_amount = 0
    order_details = []

    for order in orders:
        order_id = order.get('id')
        payment = order.get('payment', {})
        
        # Using totalAmount for transaction volume
        total_amt = float(payment.get('totalAmount', {}).get('amount', 0))
        advance_amt = float(payment.get('advanceAmount', {}).get('amount', 0))
        
        status = order.get('sellerStatus')
        create_date = order.get('createDate')
        
        total_paid_amount += total_amt
        order_details.append({
            'id': order_id,
            'amount': total_amt,
            'advance': advance_amt,
            'status': status,
            'date': create_date
        })

    # Sort by amount descending
    order_details.sort(key=lambda x: x['amount'], reverse=True)

    print(f"\nAnalysis Summary:")
    print(f"Total Orders: {total_count}")
    print(f"Total Sum (totalAmount): ${total_paid_amount:,.2f}")
    
    print(f"\nTop 3 Orders by Amount:")
    for i, order in enumerate(order_details[:3]):
        print(f"{i+1}. ID: {order['id']}, Amount: ${order['amount']:,.2f}, Status: {order['status']}, Date: {order['date']}")

    # Specifically look for the ~2.9w order
    target_order = None
    for order in order_details:
        if 29000 <= order['amount'] <= 30000:
            target_order = order
            break
    
    if target_order:
        print(f"\nTarget Large Order Found:")
        print(f"ID: {target_order['id']}, Amount: ${target_order['amount']:,.2f}, Status: {target_order['status']}, Date: {target_order['date']}")
    else:
        print("\nTarget Large Order (~$2.9w) NOT found in this list.")

analyze_orders('may_paid_orders.json')
