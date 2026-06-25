const fs = require('fs');
const path = require('path');

// 自动安装 docx（如果缺失）
try {
    require('docx');
} catch (e) {
    console.log("Installing docx...");
    require('child_process').execSync('npm install -g docx', { stdio: 'inherit' });
}

const docx = require(require('child_process').execSync('npm root -g').toString().trim() + '/docx');
const { 
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
    AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType, 
    VerticalAlign, LevelFormat, PageNumber, Header, Footer
} = docx;

const doc = new Document({
    styles: {
        default: {
            document: {
                run: { font: "Arial", size: 22 }, // 11pt
                paragraph: { spacing: { line: 276 } } // 1.15倍行距
            }
        },
        paragraphStyles: [
            {
                id: "Heading1",
                name: "Heading 1",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: { size: 36, bold: true, color: "1F3864", font: "Microsoft YaHei" },
                paragraph: { spacing: { before: 480, after: 240 }, outlineLevel: 0 }
            },
            {
                id: "Heading2",
                name: "Heading 2",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: { size: 28, bold: true, color: "2E75B6", font: "Microsoft YaHei" },
                paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 1 }
            }
        ]
    },
    numbering: {
        config: [
            {
                reference: "bullet-list",
                levels: [
                    {
                        level: 0,
                        format: LevelFormat.BULLET,
                        text: "•",
                        alignment: AlignmentType.LEFT,
                        style: {
                            paragraph: {
                                indent: { left: 720, hanging: 360 }
                            }
                        }
                    }
                ]
            }
        ]
    },
    sections: [{
        properties: {
            page: {
                margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
            }
        },
        headers: {
            default: new Header({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                            new TextRun({
                                text: "直通车数据报告 | yoga socks 20260414",
                                color: "808080",
                                size: 18
                            })
                        ]
                    })
                ]
            })
        },
        footers: {
            default: new Footer({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun("第 "),
                            new TextRun({ children: [PageNumber.CURRENT] }),
                            new TextRun(" 页 / 共 "),
                            new TextRun({ children: [PageNumber.TOTAL_PAGES] }),
                            new TextRun(" 页")
                        ]
                    })
                ]
            })
        },
        children: [
            // Title
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "直通车计划深度分析报告",
                        bold: true,
                        size: 44,
                        color: "1F3864",
                        font: "Microsoft YaHei"
                    })
                ],
                spacing: { after: 120 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "(计划名：yoga socks 20260414)",
                        italics: true,
                        size: 24,
                        color: "2E75B6"
                    })
                ],
                spacing: { after: 480 }
            }),

            // Section 1: Basic Data
            new Paragraph({
                text: "1. 计划基础数据 (2026.04.01-04.30)",
                heading: HeadingLevel.HEADING_1
            }),
            new Table({
                width: { size: 9360, type: WidthType.DXA },
                columnWidths: [3120, 6240],
                rows: [
                    createRow("数据维度", "数据表现", true),
                    createRow("总曝光", "10,607"),
                    createRow("总点击", "291"),
                    createRow("点击率 (CTR)", "2.74% (偏低)"),
                    createRow("总商机量", "24 (询盘 4, TM 21)"),
                    createRow("商机转化率", "8.25% (表现极佳)"),
                    createRow("平均点击成本 (CPC)", "￥12.86")
                ],
                spacing: { after: 240 }
            }),

            // Section 2: Product Diagnosis
            new Paragraph({
                text: "2. 核心产品表现诊断",
                heading: HeadingLevel.HEADING_1
            }),
            bulletPoint("FPG-128 (王牌款)：贡献了 50% 的商机，转化率达 24.49%，点击率 4.25%。结论：计划的核心支柱，需倾斜预算。"),
            bulletPoint("FPG-84 (高消耗款)：曝光最高但转化率仅 4.62%。结论：主图吸粉但详情页承接差，建议降权或替换。"),
            bulletPoint("FPG-63 & FPG-35 (利基潜力款)：虽然流量小，但转化率极高（14%-20%）。结论：建议扩流测试。"),

            // Section 3: Market Insights
            new Paragraph({
                text: "3. 市场与国家洞察",
                heading: HeadingLevel.HEADING_1
            }),
            bulletPoint("美国市场：15 个商机，第一大市场。"),
            bulletPoint("加拿大 & 德国：表现出极高的转化效率（13.33%-18%），建议保持 120% 溢价。"),

            // Section 4: Keyword Strategy
            new Paragraph({
                text: "4. 关键词策略建议",
                heading: HeadingLevel.HEADING_1
            }),
            bulletPoint("核心成交词：pilates socks, grip socks for pilates."),
            bulletPoint("负向词清理：已屏蔽 socks, alo socks, nike 等泛词（04.29已执行）。"),

            // Section 5: Action Plan
            new Paragraph({
                text: "5. 行动指南",
                heading: HeadingLevel.HEADING_1
            }),
            bulletPoint("维持 FPG-128 的充足曝光，确保日预算不低于 200 元。"),
            bulletPoint("剔除 4 月曝光 > 500 但商机为 0 的低效产品（如 FPG-86, FPG-114）。"),
            bulletPoint("复盘 FPG-128 的 21 个 TM 咨询，针对“莫兰迪色系”或“轻定制”需求优化库存。")
        ]
    }]
});

function createRow(label, value, isHeader = false) {
    const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "D9D9D9" };
    const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };
    
    return new TableRow({
        children: [
            new TableCell({
                children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, color: isHeader ? "FFFFFF" : "333333" })] })],
                width: { size: 3120, type: WidthType.DXA },
                shading: { fill: isHeader ? "4472C4" : "F2F2F2", type: ShadingType.CLEAR },
                borders: cellBorders,
                verticalAlign: VerticalAlign.CENTER
            }),
            new TableCell({
                children: [new Paragraph({ children: [new TextRun({ text: value, bold: isHeader, color: isHeader ? "FFFFFF" : "000000" })] })],
                width: { size: 6240, type: WidthType.DXA },
                shading: { fill: isHeader ? "4472C4" : "FFFFFF", type: ShadingType.CLEAR },
                borders: cellBorders,
                verticalAlign: VerticalAlign.CENTER
            })
        ]
    });
}

function bulletPoint(text) {
    // 处理文本中的粗体（如果有特定标记，这里简单处理）
    return new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun(text)],
        spacing: { after: 120 }
    });
}

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("C:\\Users\\admin\\Desktop\\阿里国际站直通车计划分析与优化报告_yoga_socks_20260414.docx", buffer);
    console.log("File saved successfully.");
});
