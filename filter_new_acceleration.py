import pandas as pd

file_path = r'E:/1工作/1全站推数据优化/新品加速/全站推广报表-2026-05-05 14_45_11/新品加速_202603132026-05-05 14_45_11.xlsx'

try:
    # Read the sheet starting from the header row (row index 51 in the file corresponds to row 52 in 0-based index if we account for offset)
    # The '产品报告' sheet starts at row 44, headers are at row 52.
    df = pd.read_excel(file_path, sheet_name='产品报告', skiprows=3)
    
    # Remove the summary row and metadata
    df = df[df['产品ID'].astype(str) != '汇总'].dropna(subset=['产品ID'])
    
    # Ensure numeric types for columns
    df['曝光量'] = pd.to_numeric(df['曝光量'], errors='coerce')
    df['全站商机量'] = pd.to_numeric(df['全站商机量'], errors='coerce')
    
    # Filter: Exposure > 500 and Opportunities <= 1
    mask = (df['曝光量'] > 500) & (df['全站商机量'] <= 1)
    filtered_df = df[mask]
    
    # Selected columns
    cols_to_show = ['产品型号', '产品ID', '曝光量', '全站商机量', '点击率', '产品信息']
    output = filtered_df[cols_to_show].sort_values(by='曝光量', ascending=False)
    
    if output.empty:
        print("未找到符合条件（曝光量 > 500 且 商机量 <= 1）的产品。")
    else:
        print(output.to_markdown(index=False))

except Exception as e:
    print(f"Error processing file: {e}")
