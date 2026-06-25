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
            }
        ]
    },
    sections: [{
        properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        children: [
            new Paragraph({
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "全站推广计划分析报告", bold: true, size: 48 })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "(计划名：yoga socks 20260414)", size: 28 })]
            }),
            new Paragraph({ children: [new TextRun("")] }),

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
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("总花费")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("￥1,462.60")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("曝光量")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("3,897")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("点击量")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("75")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("点击率 (CTR)")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("1.92%")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("总商机量")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("7 (TM 咨询 7, 询盘 0)")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("商机转化率")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("9.33%")] })] })] }),
                    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun("订单量")] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun("0")] })] })] })
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("二、 核心产品表现诊断")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "1. FPG-133 (商机之王)：", bold: true }),
                    new TextRun("曝光 624, 点击 17, 点击率 2.72%，贡献 4 个商机。结论：计划内表现最稳的引流转化款。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "2. FPG-109 (引流瓶颈)：", bold: true }),
                    new TextRun("曝光 615, 点击率仅 0.98%。结论：点击率远低于平均值，主图吸引力不足，需重点优化。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "3. FPG-128 & FPG-135：", bold: true }),
                    new TextRun("表现稳健，各自贡献 1 个商机，点击率在 2.3% 左右。")
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("三、 市场与地域洞察")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- 美国市场：", bold: true }),
                    new TextRun("贡献 4 个商机，主要流量和获客来源，需保持投入。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- 荷兰市场：", bold: true }),
                    new TextRun("点击率虽然不高，但商机转化率达 33.33%，表现出极高的单次点击价值。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- 英国市场：", bold: true }),
                    new TextRun("点击率不错 (2.28%)，但转化 0。建议检查针对英国买家的价格或运费策略。")
                ]
            }),

            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [new TextRun("四、 优化行动指南")]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "1. 提升点击率 (CTR)：", bold: true }),
                    new TextRun("针对 FPG-109、FPG-97、FPG-102 等点击率低于 1% 的产品，更换为更具视觉冲击力的莫兰迪实拍场景图。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "2. 流量质量优化：", bold: true }),
                    new TextRun("目前 L1+ 买家点击占比为 37.88%，低于 50% 的理想值。建议针对 L1+ 标签开启 20%-30% 的溢价。")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "3. 清理无效消耗：", bold: true }),
                    new TextRun("针对 FPG-103、FPG-99 等曝光过百但 0 点击的产品，检查产品信息是否完整，或考虑替换新品。")
                ]
            })
        ]
    }]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/admin/Desktop/阿里国际站直通车分析报告_yoga_socks_20周_汇总.docx", buffer);
    console.log("Report generated successfully on Desktop.");
});
