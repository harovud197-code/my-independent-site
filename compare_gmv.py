import pandas as pd
import numpy as np

def clean_gmv(df, col_name):
    # Convert to numeric, errors='coerce' will turn non-numeric (like header strings) to NaN
    return pd.to_numeric(df[col_name], errors='coerce').fillna(0)

# --- 9S Data ---
df_9s = pd.read_excel('E:/业务组/9S/订单记录表.xlsx', sheet_name='2026年', header=1)
# Clean columns
df_9s['实收金额_clean'] = clean_gmv(df_9s, '实收金额')
df_9s['付款日期_clean'] = pd.to_datetime(df_9s['付款日期'], errors='coerce')

# Filter for May and June 2026
may_9s = df_9s[(df_9s['付款日期_clean'].dt.year == 2026) & (df_9s['付款日期_clean'].dt.month == 5)]
june_9s = df_9s[(df_9s['付款日期_clean'].dt.year == 2026) & (df_9s['付款日期_clean'].dt.month == 6)]

gmv_9s_may = may_9s['实收金额_clean'].sum()
count_9s_may = len(may_9s[may_9s['实收金额_clean'] > 0])

gmv_9s_june = june_9s['实收金额_clean'].sum()
count_9s_june = len(june_9s[june_9s['实收金额_clean'] > 0])

# --- 3S Data ---
df_3s_may = pd.read_excel('E:/业务组/3S/提成计算/提成计算2026.xlsx', sheet_name='2026年5月')
df_3s_june = pd.read_excel('E:/业务组/3S/提成计算/提成计算2026.xlsx', sheet_name='2026年6月')

gmv_3s_may = clean_gmv(df_3s_may, '实收金额').sum()
count_3s_may = len(df_3s_may[pd.to_numeric(df_3s_may['实收金额'], errors='coerce') > 0])

gmv_3s_june = clean_gmv(df_3s_june, '实收金额').sum()
count_3s_june = len(df_3s_june[pd.to_numeric(df_3s_june['实收金额'], errors='coerce') > 0])

# --- Summary ---
total_gmv_may = gmv_9s_may + gmv_3s_may
total_orders_may = count_9s_may + count_3s_may
aov_may = total_gmv_may / total_orders_may if total_orders_may > 0 else 0

total_gmv_june = gmv_9s_june + gmv_3s_june
total_orders_june = count_9s_june + count_3s_june
aov_june = total_gmv_june / total_orders_june if total_orders_june > 0 else 0

growth_rate = (total_gmv_june - total_gmv_may) / total_gmv_may if total_gmv_may > 0 else 0

print(f"May 2026 9S GMV: {gmv_9s_may:.2f} (Orders: {count_9s_may})")
print(f"May 2026 3S GMV: {gmv_3s_may:.2f} (Orders: {count_3s_may})")
print(f"May 2026 Total GMV: {total_gmv_may:.2f} (Total Orders: {total_orders_may}, AOV: {aov_may:.2f})")
print("-" * 30)
print(f"June 2026 9S GMV: {gmv_9s_june:.2f} (Orders: {count_9s_june})")
print(f"June 2026 3S GMV: {gmv_3s_june:.2f} (Orders: {count_3s_june})")
print(f"June 2026 Total GMV: {total_gmv_june:.2f} (Total Orders: {total_orders_june}, AOV: {aov_june:.2f})")
print("-" * 30)
print(f"GMV Growth Rate (June vs May): {growth_rate:.2%}")
