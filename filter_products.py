import pandas as pd

file_path = r'E:/1工作/1全站推数据优化/潜力品推优品/全站推广报表-2026-05-05 14_06_28/潜力推优 202512152026-05-05 14_06_28.xlsx'

try:
    # Read the Product Report sheet
    df = pd.read_excel(file_path, sheet_name='产品报告', skiprows=3)
    
    # Remove the summary row and empty rows
    df = df[df['产品ID'].astype(str) != '汇总'].dropna(subset=['产品ID'])
    
    # Convert relevant columns to numeric
    df['曝光量'] = pd.to_numeric(df['曝光量'], errors='coerce')
    df['全站商机量'] = pd.to_numeric(df['全站商机量'], errors='coerce')
    
    # Filtering criteria: Exposure > 500 AND Opportunities <= 1
    mask = (df['曝光量'] > 500) & (df['全站商机量'] <= 1)
    filtered_df = df[mask]
    
    # Select columns to display
    columns_to_show = ['产品型号', '产品ID', '曝光量', '全站商机量', '点击率', '产品信息']
    output_df = filtered_df[columns_to_show]
    
    if output_df.empty:
        print("未找到符合条件（曝光量 > 500 且 商机量 <= 1）的产品。")
    else:
        # Sort by exposure descending for better readability
        output_df = output_df.sort_values(by='曝光量', ascending=False)
        print(output_df.to_markdown(index=False))

except Exception as e:
    print(f"处理文件时出错: {e}")
