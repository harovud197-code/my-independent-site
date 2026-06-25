const fs = require('fs');
const path = require('path');

// 自动安装 docx（如果缺失）
try {
  require('docx');
} catch (e) {
  require('child_process').execSync('npm install -g docx', { stdio: 'inherit' });
}

const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  HeadingLevel,
  WidthType,
  BorderStyle,
  ShadingType,
  VerticalAlign,
  LevelFormat,
} = require(require('child_process').execSync('npm root -g').toString().trim() + '/docx');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Microsoft YaHei", size: 22 }, // 11pt
        paragraph: { spacing: { line: 360 } }, // 1.5倍行距
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 36, bold: true, color: "2B5797", font: "Microsoft YaHei" },
        paragraph: { spacing: { before: 480, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, color: "2B5797", font: "Microsoft YaHei" },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 1 },
      },
    ],
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
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } },
      },
      children: [
        // 1. 报告标题
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("直通车计划深度分析报告 (计划名：Grip socks 20260413)")],
        }),

        // 2. 计划基础数据
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("计划基础数据 (2026.05.06-05.12)")],
        }),

        new Table({
          columnWidths: [3120, 6240],
          width: { size: 9360, type: WidthType.DXA },
          rows: [
            // Header
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({
                  width: { size: 3120, type: WidthType.DXA },
                  shading: { fill: "4472C4", type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "指标名称", bold: true, color: "FFFFFF" })] })],
                }),
                new TableCell({
                  width: { size: 6240, type: WidthType.DXA },
                  shading: { fill: "4472C4", type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "数值", bold: true, color: "FFFFFF" })] })],
                }),
              ],
            }),
            // Data Rows
            ...[
              ["总曝光", "9,947"],
              ["点击率 (CTR)", "2.83%"],
              ["总商机量", "16 (询盘 2, TM 14)"],
              ["总订单量", "1"],
            ].map(([label, value], idx) => 
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: idx % 2 === 0 ? "FFFFFF" : "F2F2F2", type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun(label)] })],
                  }),
                  new TableCell({
                    shading: { fill: idx % 2 === 0 ? "FFFFFF" : "F2F2F2", type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: value, bold: true })] })],
                  }),
                ],
              })
            ),
          ],
        }),

        // 3. 核心产品表现诊断
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("核心产品表现诊断")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPG-75 (流量大户)：", bold: true }),
            new TextRun("点击率 "),
            new TextRun({ text: "6.96% (全场最高)", bold: true, color: "FF0000" }),
            new TextRun("，但商机为 0。结论：详情页承接差，需查价并优化。"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPG-70 (唯一出单款)：", bold: true }),
            new TextRun("最高曝光 ("),
            new TextRun({ text: "2,225", bold: true }),
            new TextRun(")，稳健转化。结论：核心资产。"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPS-389 (商机之王)：", bold: true }),
            new TextRun({ text: "6 个商机", bold: true }),
            new TextRun("，转化率 "),
            new TextRun({ text: "13.64%", bold: true }),
            new TextRun("。结论：极具潜力，建议加大权重。"),
          ],
        }),

        // 4. 建议移出/替换产品
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("建议移出/替换产品")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPG-56", bold: true }),
            new TextRun(" (曝光 939, 0 商机, CTR 1.17%)"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPS-374", bold: true }),
            new TextRun(" (CTR 0.97%)"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "FPG-80", bold: true }),
            new TextRun(" (CTR 0.73%)"),
          ],
        }),

        // 5. 优化行动清单
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("优化行动清单")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun({ text: "本周计划不要暂停", bold: true }),
            new TextRun("（流量正处于爆发期）。"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("重点检查并跟进 "),
            new TextRun({ text: "FPS-389", bold: true }),
            new TextRun(" 的商机转化。"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("清洗关键词，屏蔽泛词 "),
            new TextRun({ text: "socks", bold: true, color: "FF0000" }),
            new TextRun("。"),
          ],
        }),
      ],
    },
  ],
});

const fileName = "阿里国际站直通车计划分析与优化报告_Grip_socks_20260413.docx";
const outputPath = path.join("C:\\Users\\admin\\Desktop", fileName);

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document created successfully at ${outputPath}`);
});
