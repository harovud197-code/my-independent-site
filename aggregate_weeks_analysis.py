import pandas as pd
import os

files = [
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第16周/全站推广报表-2026-04-29 14_56_02/yoga socks 202604142026-04-29 14_56_02.xlsx',
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第17周/全站推广报表-2026-05-06 15_11_17/yoga socks 202604142026-05-06 15_11_17.xlsx',
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第18周/全站推广报表-2026-05-13 14_47_23/yoga socks 202604142026-05-13 14_47_23.xlsx'
]

all_data = []

for f in files:
    if not os.path.exists(f):
        print(f"File not found: {f}")
        continue
    try:
        df = pd.read_excel(f, sheet_name='产品报告', skiprows=3)
        df = df[df['产品ID'].astype(str) != '汇总'].dropna(subset=['产品ID'])
        
        cols = ['产品型号', '产品ID', '曝光量', '点击量', '询盘量', 'TM咨询量', '全站商机量', '订单量']
        df = df[cols]
        
        num_cols = ['曝光量', '点击量', '询盘量', 'TM咨询量', '全站商机量', '订单量']
        for col in num_cols:
            df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)
            
        all_data.append(df)
    except Exception as e:
        print(f"Error reading {f}: {e}")

if all_data:
    combined = pd.concat(all_data)
    agg_df = combined.groupby(['产品型号', '产品ID']).agg({
        '曝光量': 'sum',
        '点击量': 'sum',
        '询盘量': 'sum',
        'TM咨询量': 'sum',
        '全站商机量': 'sum',
        '订单量': 'sum'
    }).reset_index()
    
    agg_df['点击率_val'] = (agg_df['点击量'] / agg_df['曝光量'].replace(0, 1))
    agg_df['点击率'] = (agg_df['点击率_val'] * 100).round(2).astype(str) + '%'
    
    sorted_df = agg_df.sort_values(by=['订单量', '全站商机量', '点击量'], ascending=False)
    
    print("RANK_START")
    print(sorted_df[['产品型号', '曝光量', '点击量', '点击率', '询盘量', 'TM咨询量', '全站商机量', '订单量']].to_string(index=False))
    print("RANK_END")
else:
    print("No data loaded.")
