import pandas as pd
import os

# 定义文件路径
file_paths = [
    r"E:/1工作/1全站推数据优化/yoga socks/2026 第16周/全站推广报表-2026-04-29 14_56_02/yoga socks 202604142026-04-29 14_56_02.xlsx",
    r"E:/1工作/1全站推数据优化/yoga socks/2026 第17周/全站推广报表-2026-05-06 15_11_17/yoga socks 202604142026-05-06 15_11_17.xlsx",
    r"E:/1工作/1全站推数据优化/yoga socks/2026 第18周/全站推广报表-2026-05-13 14_47_23/yoga socks 202604142026-05-13 14_47_23.xlsx"
]

def aggregate_reports(paths):
    all_data = []
    # 统计指标列
    metrics = ['曝光量', '点击量', '询盘量', 'TM咨询量', '全站商机量', '订单量']
    
    for path in paths:
        if not os.path.exists(path):
            print(f"警告: 文件不存在 - {path}")
            continue
            
        try:
            # 读取“产品报告”页签，前3行通常是报表抬头信息
            df = pd.read_excel(path, sheet_name='产品报告', skiprows=3)
            
            # 过滤掉汇总行和产品ID为空的行
            if '产品ID' in df.columns:
                df = df[df['产品ID'].astype(str) != '汇总'].dropna(subset=['产品ID'])
            
            # 确保统计列存在并转换为数值类型
            cols_to_keep = ['产品型号'] + [m for m in metrics if m in df.columns]
            df = df[cols_to_keep]
            
            for m in metrics:
                if m in df.columns:
                    df[m] = pd.to_numeric(df[m], errors='coerce').fillna(0)
            
            all_data.append(df)
            print(f"成功读取: {os.path.basename(path)}")
        except Exception as e:
            print(f"读取文件时出错 {os.path.basename(path)}: {e}")

    if not all_data:
        print("未读取到任何有效数据，请检查文件路径和内容。")
        return

    # 合并数据
    combined_df = pd.concat(all_data, ignore_index=True)

    # 按“产品型号”汇总
    summary = combined_df.groupby('产品型号')[metrics].sum().reset_index()

    # 计算点击率 (总点击 / 总曝光)
    summary['点击率'] = (summary['点击量'] / summary['曝光量'].replace(0, 1))
    
    # 格式化点击率为百分比显示
    summary['点击率_str'] = summary['点击率'].map(lambda x: f"{x:.2%}")

    # 排序：按“订单量”降序，再按“全站商机量”降序
    summary = summary.sort_values(by=['订单量', '全站商机量'], ascending=False)

    # 重排各列顺序以符合要求
    final_cols = ['产品型号', '曝光量', '点击量', '点击率_str', '询盘量', 'TM咨询量', '全站商机量', '订单量']
    summary_output = summary[final_cols].rename(columns={'点击率_str': '点击率'})

    # 输出到控制台
    print("\n" + "="*80)
    print(" yoga socks 全站推广数据汇总 (第16-18周)")
    print("="*80)
    print(summary_output.to_string(index=False))
    print("="*80)

if __name__ == "__main__":
    aggregate_reports(file_paths)
