const fs = require('fs');
const path = require('path');

// 自动安装 docx（如果缺失）
try {
  require('docx');
} catch (e) {
  console.log('Installing docx...');
  require('child_process').execSync('npm install -g docx', { stdio: 'inherit' });
}

const root = require('child_process').execSync('npm root -g').toString().trim();
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
  BorderStyle,
  WidthType,
  ShadingType,
  VerticalAlign,
  Header,
  Footer,
  PageNumber,
  LevelFormat,
} = require(path.join(root, 'docx'));

const outputPath = "C:\\Users\\admin\\Desktop\\阿里国际站三周汇总分析与优化报告_Yoga_Socks.docx";

const BLUE_HEADER = "2B5797";
const GRAY_BORDER = "D9D9D9";
const ALT_ROW_FILL = "F2F2F2";
const HEADER_FILL = "4472C4";

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "微软雅黑", size: 22 }, // 11pt
        paragraph: { spacing: { line: 276 } } // 1.15 line spacing
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, color: BLUE_HEADER, font: "微软雅黑" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
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
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }
        ]
      }
    ]
  },
  sections: [
    {
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
              children: [new TextRun({ text: "阿里国际站三周汇总分析报告 | Yoga Socks", color: "888888", size: 20 })]
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
                new TextRun({ text: "第 ", size: 20 }),
                new TextRun({ children: [PageNumber.CURRENT], size: 20 }),
                new TextRun({ text: " 页", size: 20 })
              ]
            })
          ]
        })
      },
      children: [
        // 1. Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 480 },
          children: [
            new TextRun({
              text: "yoga socks 20260414 计划三周汇总分析报告\n(第 16-18 周)",
              bold: true,
              size: 44,
              color: BLUE_HEADER
            })
          ]
        }),

        // 2. Core Data Table
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("1. 核心数据汇总表 (排名由高到低)")]
        }),

        new Table({
          columnWidths: [1200, 1000, 800, 1000, 800, 800, 3760],
          width: { size: 9360, type: WidthType.DXA },
          rows: [
            // Header Row
            new TableRow({
              tableHeader: true,
              children: [
                "款号", "曝光", "点击", "点击率", "商机", "订单", "备注"
              ].map(text => new TableCell({
                shading: { fill: HEADER_FILL, type: ShadingType.CLEAR },
                borders: {
                  top: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  bottom: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  left: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  right: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER }
                },
                verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text, color: "FFFFFF", bold: true, size: 22 })]
                })]
              }))
            }),
            // Data Rows
            ...[
              ["FPG-128", "1565", "60", "3.83%", "7", "1", "全计划唯一出单款，转化之王"],
              ["FPG-135", "1330", "64", "4.81%", "4", "0", "高意向，需促成交"],
              ["FPG-133", "758", "20", "2.64%", "3", "0", "稳健型潜力款"],
              ["FPG-84", "1654", "43", "2.60%", "2", "0", "高曝光低转化，需预警"],
              ["FPG-109", "1114", "29", "2.60%", "0", "0", "零商机，流量虚耗"]
            ].map((row, index) => new TableRow({
              children: row.map(cellText => new TableCell({
                shading: index % 2 === 1 ? { fill: ALT_ROW_FILL, type: ShadingType.CLEAR } : undefined,
                borders: {
                  top: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  bottom: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  left: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER },
                  right: { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER }
                },
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({
                    text: cellText,
                    bold: ["FPG-128", "1", "4.81%", "7"].includes(cellText) // Bold key data
                  })]
                })]
              }))
            }))
          ]
        }),

        new Paragraph({ spacing: { before: 240 } }),

        // 3. Key Insights
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("2. 关键洞察")]
        }),
        ...[
          ["FPG-128", " 表现最稳，不仅贡献了唯一的订单，商机量也持续领跑。"],
          ["FPG-135", " 拥有最高的累计点击率 (", "4.81%", ")，说明主图极具吸引力。"],
          ["德国市场", "在第18周爆发，贡献了全月唯一的订单，表现出极高的转化潜力。"]
        ].map(parts => new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: parts.map((text, i) => new TextRun({ text, bold: i === 0 || text === "4.81%" }))
        })),

        // 4. Optimization Suggestions
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("3. 优化建议")]
        }),
        ...[
          [
            { t: "重点加推：", b: true },
            { t: "将 " },
            { t: "FPG-128", b: true },
            { t: " 作为计划的核心，确保其在重点国家（美国、德国、英国）的曝光量。" }
          ],
          [
            { t: "转化攻坚：", b: true },
            { t: "针对 " },
            { t: "FPG-135", b: true },
            { t: "，复盘 TM 咨询内容，核实买家是否对价格或起订量有异议，建议增加“拿样服务”。" }
          ],
          [
            { t: "清理低效品：", b: true },
            { t: "FPG-109", b: true },
            { t: " 累计曝光过千却无商机，建议本周果断移出计划，换入 FPG-128 类似的莫兰迪色新品。" }
          ],
          [
            { t: "地域策略：", b: true },
            { t: "维持对美国、德国的 " },
            { t: "120% 溢价", b: true },
            { t: "。针对英国市场询盘多转化低的问题，检查物流运费模板。" }
          ]
        ].map(parts => new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: parts.map(p => new TextRun({ text: p.t, bold: p.b }))
        }))
      ]
    }
  ]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log("Document created successfully at: " + outputPath);
});
