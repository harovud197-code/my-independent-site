const fs = require('fs');
const { 
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
    AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType, VerticalAlign 
} = require('docx');

const doc = new Document({
    styles: {
        default: { document: { run: { font: "Arial", size: 24 } } },
        paragraphStyles: [
            {
                id: "Heading1",
                name: "Heading 1",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: { size: 36, bold: true, color: "0000FF", font: "Arial" },
                paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 }
            },
            {
                id: "Heading2",
                name: "Heading 2",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: { size: 28, bold: true, color: "0000FF", font: "Arial" },
                paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 }
            }
        ]
    },
    sections: [{
        properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        children: [
            new Paragraph({
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "直通车计划深度分析报告", bold: true, size: 48 })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "(计划名：custom socks 20260506)", size: 28 })]
            }),
            new Paragraph({ children: [new TextRun("")] }), // Spacer

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("一、 计划基础数据 (2026.05.19-05.25)")]
            }),

            new Table({
                columnWidths: [4680, 4680],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ shading: { fill: "D5E8F0", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "指标", bold: true })] })] }),
                            new TableCell({ shading: { fill: "D5E8F0", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "数值", bold: true })] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("总花费")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("￥1,421.24")] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("曝光量")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("5,848")] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("点击率 (CTR)")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("3.01%")] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("总商机量")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("11 (询盘 3, TM 9)")] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("商机转化率")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("6.25%")] })] })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("订单量")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("1 (来自美国市场)")] })] })
                        ]
                    })
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("二、 核心产品表现诊断")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "1. FPB-03 (成交担当 / 明星单品)：", bold: true }),
                    new TextRun("本周唯一出单产品，贡献了 1 个订单和 1 个商机。累计点击占比 27%。结论：核心稳健产品，建议维持高权重。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "2. FPS-443 & FPS-362 (商机黑马)：", bold: true }),
                    new TextRun("FPS-443 贡献 3 个商机，转化率 11.11%；FPS-362 转化率 13.33%。结论：高意向潜力款，建议重点培养。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "3. FPS-413 (引流神器)：", bold: true }),
                    new TextRun("点击率高达 7.6% (全场最高)，但商机转化率仅 3.85%。结论：主图极具吸引力但详情页承接差，需重点整改价格和 MOQ。")
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("三、 建议移出/替换产品")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- FPS-340：", bold: true }),
                    new TextRun("曝光 240 但 0 商机，买家无感。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- FPS-255：", bold: true }),
                    new TextRun("点击率仅 1.16%，主图竞争力差。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- FPS-437：", bold: true }),
                    new TextRun("点击率极低 (0.92%)，严重拖累计划权重。")
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("四、 本周优化行动指南")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "1. 人群溢价优化：", bold: true }),
                    new TextRun("当前 L1+ 买家点击占比为 31.82%，建议针对 L1+ 买家标签开启 30%-50% 的溢价。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "2. 国家策略：", bold: true }),
                    new TextRun("美国市场是绝对核心，维持 120% 溢价。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "3. 产品整改：", bold: true }),
                    new TextRun("针对 FPS-413 进行价格微调和详情页优化，增加“低起订量”标签。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "4. 产品更新：", bold: true }),
                    new TextRun("剔除上述低效产品，换入 2-3 款针对运动场景的刺绣袜新品。")
                ]
            })
        ]
    }]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/admin/Desktop/阿里国际站直通车分析报告_custom_socks_20周.docx", buffer);
    console.log("Report generated successfully on Desktop.");
});
