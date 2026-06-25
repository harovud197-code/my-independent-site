import pandas as pd
import os

files = [
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第16周/全站推广报表-2026-04-29 14_56_02/yoga socks 202604142026-04-29 14_56_02.xlsx',
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第17周/全站推广报表-2026-05-06 15_11_17/yoga socks 202604142026-05-06 15_11_17.xlsx',
    r'E:/1工作/1全站推数据优化/yoga socks/2026 第18周/全站推广报表-2026-05-13 14_47_23/yoga socks 202604142026-05-13 14_47_23.xlsx'
]

all_data = []

for f in files:
    try:
        # Load the Product Report sheet
        # Skipping first 3 rows as identified previously
        df = pd.read_excel(f, sheet_name='产品报告', skiprows=3, engine='openpyxl')
        
        # Clean data
        df = df[df['产品ID'].notna()]
        df = df[df['产品ID'].astype(str) != '汇总']
        
        cols = ['产品型号', '曝光量', '点击量', '询盘量', 'TM咨询量', '全站商机量', '订单量']
        df = df[cols]
        
        for c in ['曝光量', '点击量', '询盘量', 'TM咨询量', '全站商机量', '订单量']:
            df[c] = pd.to_numeric(df[c], errors='coerce').fillna(0)
            
        all_data.append(df)
    except Exception as e:
        print(f"Error processing {f}: {e}")

if all_data:
    combined = pd.concat(all_data)
    summary = combined.groupby('产品型号').sum().reset_index()
    
    # Calculate CTR
    summary['点击率'] = (summary['点击量'] / summary['曝光量'].replace(0, 1) * 100).round(2).astype(str) + '%'
    
    # Sort by Orders then Opportunities
    summary = summary.sort_values(by=['订单量', '全站商机量'], ascending=False)
    
    print("SUMMARY_START")
    print(summary[['产品型号', '曝光量', '点击量', '点击率', '询盘量', 'TM咨询量', '全站商机量', '订单量']].to_string(index=False))
    print("SUMMARY_END")
else:
    print("No data.")
