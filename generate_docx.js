const globalPath = require('child_process').execSync('npm root -g').toString().trim();
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType, VerticalAlign, Footer, PageNumber } = require(globalPath + '/docx');
const fs = require('fs');
const axios = require(globalPath + '/axios');
const path = require('path');

async function downloadImage(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        console.error(`Failed to download image from ${url}:`, error.message);
        return null;
    }
}

async function generate() {
    const products = [
        { id: "1", name: "Unisex Athletic Grip Socks with Rubber Dots", sellingPoint: "全能型竞技款，Verified供应商，4.8高评分", img: "https://s.alicdn.com/@sc04/kf/Hdb863e5ecedf4fddbd9a9abba522d332m.jpg_640x640.jpg", price: "$2.02-2.42 / 100双" },
        { id: "2", name: "High Quality Sport Dots Crew Football Socks", sellingPoint: "极低价格门槛，性价比之选，适合走量", img: "https://s.alicdn.com/@sc04/kf/Hb567a71ca112488caccf055ee8d1d642Y.jpg_640x640.jpg", price: "$0.58-0.88 / 3双" },
        { id: "3", name: "Custom Logo Youth Soccer Non-Skid Socks", sellingPoint: "针对青少年足球市场，配色丰富", img: "https://s.alicdn.com/@sc04/kf/H6126787fcb9248059c48feb04a658cb0Y.jpg_640x640.jpg", price: "$0.50-0.60 / 5双" },
        { id: "4", name: "Striped Glue Football Socks (Dot Grip)", sellingPoint: "2024新款条纹胶印，视觉识别度极高", img: "https://s.alicdn.com/@sc04/kf/Haae9f45acb8a4d459cf39233174ec8d0N.jpg_640x640.jpg", price: "$1.69 / 10双" },
        { id: "5", name: "Unisex Anti-Slip Dots Breathable Socks", sellingPoint: "爆款引流款，超低价，极强市场穿透力", img: "https://s.alicdn.com/@sc04/kf/He77b3ece346d45aba8a6a2c1a075393dp.jpg_640x640.jpg", price: "$0.49 / 2双" },
        { id: "6", name: "High Quality Anti Slip Pure Color Socks", sellingPoint: "纯色极简风，适合B端机构定制Logo", img: "https://s.alicdn.com/@sc04/kf/Hedda1772833b41bfbaa8c9174be663240.jpg_640x640.jpg", price: "$0.85 / 300双" },
        { id: "7", name: "Crew Compression Soccer Sports Socks", sellingPoint: "带有压缩功能，针对精英级球员，护踝支撑", img: "https://s.alicdn.com/@sc04/kf/H959b659518ec4c35a54d98235a73e344u.jpg_640x640.jpg", price: "$0.55-1 / 2双" },
        { id: "8", name: "Anti Slip Grip Pad Soccer Socks", sellingPoint: "网红爆款，采用方块状/条状大胶块展示", img: "https://s.alicdn.com/@sc04/kf/He2747f3a6b224bd2845114605bac9c9cb.jpg_640x640.jpg", price: "$0.48 / 1双" },
        { id: "9", name: "Outdoor Sports Running Grip Socks", sellingPoint: "针对马拉松/越野跑，强化足弓稳定", img: "https://s.alicdn.com/@sc04/kf/H5c9970ae0970463f888e4bdebfaff6c7e.jpg_640x640.jpg", price: "$0.65-1.15 / 30双" },
        { id: "10", name: "Custom Non Slip Cushioned Knitted Socks", sellingPoint: "厚实毛圈底，针对对抗激烈的足球对抗赛", img: "https://s.alicdn.com/@sc04/kf/Hd10bba53b7fb4ac2be1523d7ab1abbfdU.jpg_640x640.jpg", price: "$1.20 / 2双" }
    ];

    const tableHeaderBorders = {
        top: { style: BorderStyle.SINGLE, size: 2, color: "4472C4" },
        bottom: { style: BorderStyle.SINGLE, size: 2, color: "4472C4" },
        left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
        right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
    };

    const tableCellBorders = {
        top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
        bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
        left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
        right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
    };

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: { font: "Microsoft YaHei", size: 22 },
                    paragraph: { spacing: { line: 276 } }
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
                },
                {
                    id: "Heading3",
                    name: "Heading 3",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: { size: 24, bold: true, color: "333333", font: "Microsoft YaHei" },
                    paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 }
                }
            ]
        },
        sections: [{
            properties: {
                page: {
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
                }
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
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 240, after: 480 },
                    children: [
                        new TextRun({
                            text: "阿里巴巴国际站 点胶运动袜 (Grip Sports Socks) 市场调研报告",
                            bold: true,
                            size: 44,
                            color: "000000"
                        })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "本报告针对",
                        }),
                        new TextRun({
                            text: "竞技类点胶运动袜",
                            bold: true
                        }),
                        new TextRun({
                            text: "（主要用于足球、篮球、跑步等高强度运动）进行市场调研。这类产品与普拉提袜在审美、功能重点及视觉呈现上有显著差异。",
                        })
                    ]
                }),
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("一、 10款高点击/高转化点胶运动袜参考")] }),
                new Paragraph({
                    children: [new TextRun("点胶运动袜在阿里国际站上主要以“Soccer Grip Socks”或“Anti-slip Athletic Socks”为核心关键词，强调瞬间爆发力和减少磨泡。")]
                }),
                new Table({
                    columnWidths: [600, 2400, 2400, 2400, 1560], // Total 9360
                    rows: [
                        new TableRow({
                            tableHeader: true,
                            children: [
                                "序号", "产品名称", "核心卖点", "图片参考", "参考价格/MOQ"
                            ].map(text => new TableCell({
                                borders: tableHeaderBorders,
                                shading: { fill: "4472C4", type: ShadingType.CLEAR },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [new TextRun({ text, bold: true, color: "FFFFFF" })]
                                })]
                            }))
                        }),
                        ...(await Promise.all(products.map(async (p, i) => {
                            const imgData = await downloadImage(p.img);
                            return new TableRow({
                                children: [
                                    new TableCell({
                                        borders: tableCellBorders,
                                        shading: i % 2 === 1 ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun(p.id)] })]
                                    }),
                                    new TableCell({
                                        borders: tableCellBorders,
                                        shading: i % 2 === 1 ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
                                        children: [new Paragraph({ children: [new TextRun(p.name)] })]
                                    }),
                                    new TableCell({
                                        borders: tableCellBorders,
                                        shading: i % 2 === 1 ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
                                        children: [new Paragraph({ children: [new TextRun(p.sellingPoint)] })]
                                    }),
                                    new TableCell({
                                        borders: tableCellBorders,
                                        shading: i % 2 === 1 ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
                                        children: imgData ? [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new ImageRun({
                                                        data: imgData,
                                                        transformation: { width: 100, height: 100 },
                                                        type: "jpg",
                                                        altText: { title: p.name, description: p.name, name: p.name }
                                                    })
                                                ]
                                            })
                                        ] : [new Paragraph({ children: [new TextRun("Image Unavailable")] })]
                                    }),
                                    new TableCell({
                                        borders: tableCellBorders,
                                        shading: i % 2 === 1 ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
                                        children: [new Paragraph({ children: [new TextRun(p.price)] })]
                                    })
                                ]
                            });
                        })))
                    ]
                }),
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("二、 点胶运动袜高点击率（CTR）视觉策略")] }),
                new Paragraph({
                    children: [new TextRun("与普拉提袜的“优雅感”不同，运动点胶袜需要传达的是“硬核”、“性能”和“爆发力”。")]
                }),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1. 主图制作要点")] }),
                new Paragraph({ children: [new TextRun("• 高对比度配色：主色建议选择黑色、白色或荧光绿。点胶部分与袜身要有鲜明的颜色对比（如白袜黑点），突出点胶的存在感。")] }),
                new Paragraph({ children: [new TextRun("• 爆发力动态视角：")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 脚尖点地视角：模拟运动员发力瞬间，展现脚踝压缩感和袜底胶点的拉伸感。")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 内部结构对比图：左侧展示普通袜子的滑移，右侧展示点胶袜的“锁死（Locked-in）”状态。")] }),
                new Paragraph({ children: [new TextRun("• 纹理细节：必须能清晰看到袜身的透气网眼（Mesh）和毛圈底的厚度。")] }),

                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2. 副图转化框架（5+2策略）")] }),
                new Paragraph({ children: [new TextRun("• P1：止滑块微距（Grip Pad Tech）")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 展示胶块厚度和防滑纹路。竞技类用户非常在意胶点是否会因为出汗而变滑，需强调“Anti-skid even when wet”。")] }),
                new Paragraph({ children: [new TextRun("• P2：场景对比（Action Shot）")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 展示在足球鞋（尤其是剪掉袜底的自制训练袜）中的配合效果。")] }),
                new Paragraph({ children: [new TextRun("• P3：透气性演示（Breathability）")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 利用烟雾测试或光照图，展示袜面脚背位置的疏孔结构，解决运动闷汗痛点。")] }),
                new Paragraph({ children: [new TextRun("• P4：多重支撑（Support Zones）")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 标注足弓加压（Arch Support）、加厚足跟（Heel Protection）和无缝脚尖（Seamless Toe）。")] }),
                new Paragraph({ children: [new TextRun("• P5：防磨泡/减震（Anti-blister/Cushioning）")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 展示内里毛圈组织，强调在高强度急停、转身时对足底的保护。")] }),
                new Paragraph({ children: [new TextRun("• P6/P7：定制案例与包装")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("o 展示为俱乐部或品牌代工的成品案例。")] }),

                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("三、 视觉避雷与升级")] }),
                new Paragraph({ children: [new TextRun("1. 避雷：点胶运动袜的主图切忌拍得太“软”。灯光要冷峻，背景要干净，体现工业感和科技感。")] }),
                new Paragraph({ children: [new TextRun("2. 升级建议：")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("• 主图可加入一个小图标提示“Improve speed by 10%”（在文案中合规表述）。")] }),
                new Paragraph({ indent: { left: 720 }, children: [new TextRun("• 视频中务必包含“急停测试”，展示袜子在草地或木地板上不动如山的抓地效果。")] }),

                new Paragraph({ spacing: { before: 480 }, children: [new TextRun("---")] }),
                new Paragraph({ children: [new TextRun("文件生成于: 2026-05-08")] }),
                new Paragraph({ children: [new TextRun("作者: Accio AI Assistant")] })
            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync("C:\\Users\\admin\\Desktop\\Grip_Sports_Socks_Alibaba_Market_Research.docx", buffer);
    console.log("File saved to C:\\Users\\admin\\Desktop\\Grip_Sports_Socks_Alibaba_Market_Research.docx");
}

generate().catch(console.error);
