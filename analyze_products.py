import pandas as pd

file_path = r'E:/1工作/1全站推数据优化/爆品/20264月数据统计/全站推广报表-2026-05-04 15_39_27/爆品202604132026-05-04 15_39_27.xlsx'
df = pd.read_excel(file_path, sheet_name='产品报告', skiprows=3)

# 整理列名
cols = ['产品型号', '全站商机量', '点击量', '曝光量', '点击率', '询盘量', 'TM咨询量']
df_clean = df[cols].dropna(subset=['产品型号']).copy()

# 处理点击率，转换为数值用于排序
df_clean['点击率_num'] = df_clean['点击率'].astype(str).str.rstrip('%').astype('float')

# 定义打印函数
def print_sorted(by_col, label, sort_col=None):
    sc = sort_col if sort_col else by_col
    sorted_df = df_clean.sort_values(by=sc, ascending=False)
    print(f"\n### {label} 排名")
    print(sorted_df[cols].to_markdown(index=False))

print("## 4月全站推广产品维度多指标对比")
print_sorted('全站商机量', '1. 全站商机量 (总商机)')
print_sorted('点击量', '2. 点击量')
print_sorted('曝光量', '3. 曝光量')
print_sorted('点击率', '4. 点击率', sort_col='点击率_num')
print_sorted('询盘量', '5. 询盘量')
print_sorted('TM咨询量', '6. TM咨询量')
