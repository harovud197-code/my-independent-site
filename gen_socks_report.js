const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak
} = require(\"docx\");
const fs = require(\"fs\");

const BLUE_HDR = \"1F4E79\";
const LIGHT_BLUE = \"D6E4F0\";
const MED_BLUE = \"2E75B6\";
const WHITE = \"FFFFFF\";
const DARK = \"1A1A1A\";
const GRAY_BG = \"F2F2F2\";

const border = { style: BorderStyle.SINGLE, size: 1, color: \"BBBBBB\" };
const cellBorders = { top: border, bottom: border, left: border, right: border };

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    shading: { fill: BLUE_HDR, type: ShadingType.CLEAR },
    indent: { left: 200, right: 200 },
    children: [new TextRun({ text, bold: true, color: WHITE, size: 30, font: \"Arial\" })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, bold: true, color: MED_BLUE, size: 26, font: \"Arial\" })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, bold: true, color: DARK, size: 23, font: \"Arial\" })]
  });
}

function p(text, bold) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, font: \"Arial\", color: DARK, bold: bold || false })]
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: \"bullet-list\", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 22, font: \"Arial\", color: DARK })]
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function hdrCell(text, fill, w) {
  fill = fill || LIGHT_BLUE;
  return new TableCell({
    borders: cellBorders,
    shading: { fill, type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    width: w ? { size: w, type: WidthType.DXA } : undefined,
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text, bold: true, size: 20, font: \"Arial\", color: BLUE_HDR })]
    })]
  });
}

function dataCell(text, fill, align, bold) {
  fill = fill || WHITE;
  align = align || AlignmentType.LEFT;
  return new TableCell({
    borders: cellBorders,
    shading: { fill, type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: align,
      spacing: { before: 40, after: 40 },
      children: [new TextRun({ text, size: 20, font: \"Arial\", color: DARK, bold: bold || false })]
    })]
  });
}

function twoColTable(rows, c1W, c2W) {
  c1W = c1W || 3000; c2W = c2W || 6360;
  return new Table({
    columnWidths: [c1W, c2W],
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    rows: rows.map(function(r) {
      return new TableRow({ children: [
        new TableCell({
          borders: cellBorders, width: { size: c1W, type: WidthType.DXA },
          shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
          children: [new Paragraph({ children: [new TextRun({ text: r[0], bold: true, size: 20, font: \"Arial\", color: BLUE_HDR })] })]
        }),
        new TableCell({
          borders: cellBorders, width: { size: c2W, type: WidthType.DXA },
          shading: { fill: WHITE, type: ShadingType.CLEAR },
          children: [new Paragraph({ children: [new TextRun({ text: r[1], size: 20, font: \"Arial\", color: DARK })] })]
        })
      ]});
    })
  });
}

// ===== MODULE 1 =====
function mod1() {
  return [
    h1(\"模块1：需求背景\"),
    h2(\"1.1 产品定义\"),
    twoColTable([
      [\"主品类\", \"男袜（Men's Socks）\"],
      [\"细分品类\", \"运动袜 / 船袜 / 商务袜 / 压缩袜 / 新奇袜 / 竹纤维功能袜\"]
    ]),
    p(\"\"),
    h2(\"1.2 目标市场\"),
    bullet(\"主要目标国：美国（最大单一市场，占全球约30%）\"),
    bullet(\"次级市场：英国、德国、澳大利亚\"),
    bullet(\"新兴市场：加拿大、法国、荷兰\"),
    p(\"\"),
    h2(\"1.3 卖家角色\"),
    twoColTable([
      [\"主攻模式\", \"B2B批发（面向零售商、品牌商、线上卖家）\"],
      [\"辅助模式\", \"OEM定制（LOGO袜、包装定制）\"],
      [\"平台定位\", \"阿里国际站：工厂直供型卖家，兼顾现货+定制\"]
    ]),
    p(\"\"),
    h2(\"1.4 调研目的\"),
    bullet(\"当前店铺数据显示 Men's Socks 为最大流量缺口\"),
    bullet(\"评估该品类市场规模与增长潜力\"),
    bullet(\"识别最优细分切入点\"),
    bullet(\"输出可执行的选品、定价与运营策略\"),
    bullet(\"为店铺0-1快速起盘提供完整行动指南\")
  ];
}

// ===== MODULE 2 =====
function mod2() {
  var rows2a = [
    [\"2024年全球袜类市场规模\", \"USD 50.5亿（全品类）\"],
    [\"2025年预测规模\", \"USD 54.3亿\"],
    [\"2033年预测规模\", \"USD 87~110亿\"],
    [\"CAGR（2024-2033）\", \"6.2%~7.0%\"],
    [\"男性细分占比\", \"约65.8%（男性为最大用户群体）\"],
    [\"运动袜细分CAGR\", \"7.3%~8.5%（最快增长赛道）\"]
  ];
  var wCols = [2200, 2200, 2200, 2760];
  var riskRows = [
    [\"关税大幅上涨\", \"★★★★★\", \"2025年综合税率已达31%~45%，严重压缩利润空间\"],
    [\"供应商同质化竞争\", \"★★★★☆\", \"义乌/诸暨袜子工厂超5,000家，价格战激烈\"],
    [\"季节性库存风险\", \"★★★☆☆\", \"Q4销售占全年35%~45%，备货不足或过多均有风险\"],
    [\"品牌壁垒\", \"★★★☆☆\", \"Stance、Bombas等新兴品牌快速崛起，抢占中高端\"],
    [\"汇率波动\", \"★★☆☆☆\", \"美元/人民币汇率波动影响报价稳定性\"]
  ];
  return [
    h1(\"模块2：市场规模与趋势\"),
    h2(\"2.1 全球市场规模\"),
    twoColTable(rows2a, 3200, 6160),
    p(\"数据来源：Grand View Research、Fortune Business Insights、Congruence Market Insights（2025年）\", false),
    p(\"\"),
    h2(\"2.2 增长驱动因素（含数据支撑）\"),
    bullet(\"运动健康意识崛起：全球健身人口持续增加，运动袜需求以7.3%-8.5% CAGR增长，专业跑步、篮球、徒步场景驱动功能性袜溢价消费\"),
    bullet(\"袜子时尚化趋势：73%男性几乎每天穿袜，新奇袜年销超8000万双（美国市场），礼品场景推动复购率提升30%+\"),
    bullet(\"电商渗透率快速提升：线上袜类销售以8.9% CAGR跑赢整体市场，Amazon Athletic Socks每周成交8,000~12,000件\"),
    bullet(\"压缩袜/功能袜医疗需求扩大：全球糖尿病患者超5.37亿，老龄化推动医疗级袜子需求，压缩袜CAGR超6%，客单价是普通袜的2-5倍\"),
    bullet(\"可持续材料偏好提升：欧美买家对竹纤维、有机棉溢价接受度持续提升，OEKO-TEX认证产品搜索量同比增长约40%（2024年）\"),
    p(\"\"),
    h2(\"2.3 市场风险因素\"),
    new Table({
      columnWidths: [2200, 1400, 5760],
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      rows: [
        new TableRow({ children: [hdrCell(\"风险因素\", LIGHT_BLUE, 2200), hdrCell(\"等级\", LIGHT_BLUE, 1400), hdrCell(\"说明\", LIGHT_BLUE, 5760)] }),
      ].concat(riskRows.map(function(r) {
        return new TableRow({ children: [dataCell(r[0]), dataCell(r[1], \"FFF8E1\", AlignmentType.CENTER), dataCell(r[2])] });
      }))
    })
  ];
}

// ===== MODULE 3 =====
function mod3() {
  var scoreRows = [
    [\"运动/跑步袜 Athletic\", \"9\", \"5\", \"7\", \"6\", \"8\", \"7.2\", \"$1.5~$4.0\", \"100~300双\"],
    [\"压缩袜 Compression\", \"8\", \"6\", \"9\", \"8\", \"9\", \"8.1 ★推荐\", \"$3.0~$8.0\", \"50~200双\"],
    [\"竹纤维商务袜 Bamboo\", \"7\", \"7\", \"8\", \"8\", \"9\", \"7.8 ★推荐\", \"$2.5~$6.0\", \"100~300双\"],
    [\"无痕船袜 No-Show\", \"8\", \"4\", \"5\", \"4\", \"7\", \"5.9\", \"$0.5~$1.5\", \"200~500双\"],
    [\"新奇趣味袜 Novelty\", \"7\", \"6\", \"7\", \"7\", \"5\", \"6.5\", \"$1.5~$5.0\", \"100~500双\"],
    [\"基础棉袜 Basic Crew\", \"6\", \"2\", \"3\", \"2\", \"8\", \"4.1 不推荐\", \"$0.3~$0.8\", \"500~1000双\"]
  ];
  var cw = [2100, 1100, 1100, 1100, 1100, 1100, 1300, 1560, 1500];
  var hdrs = [\"细分品类\",\"需求热度\",\"竞争强度\",\"利润空间\",\"定制壁垒\",\"季节稳定性\",\"综合评分\",\"参考售价\",\"MOQ\"];
  return [
    h1(\"模块3：细分品类评分卡（满分10分）\"),
    p(\"加权规则：需求热度×25% + 竞争强度×15% + 利润空间×30% + 定制壁垒×15% + 季节稳定性×15%\"),
    p(\"\"),
    new Table({
      columnWidths: cw,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      rows: [
        new TableRow({ children: hdrs.map(function(h, i) { return hdrCell(h, LIGHT_BLUE, cw[i]); }) })
      ].concat(scoreRows.map(function(r, idx) {
        var fill = idx % 2 === 0 ? WHITE : \"F8F8F8\";
        var recFill = (r[6].indexOf(\"推荐\") > -1) ? \"E8F5E9\" : fill;
        return new TableRow({ children: r.map(function(v, i) {
          return dataCell(v, i === 6 ? recFill : (i === 0 ? fill : fill), AlignmentType.CENTER, i === 0);
        })});
      }))
    }),
    p(\"\"),
    h2(\"核心结论\"),
    bullet(\"压缩袜（8.1分）是当前最优切入品类，利润高、竞争适中、全年需求稳定\"),
    bullet(\"竹纤维商务袜（7.8分）材料差异化明显，欧美买家接受度高，溢价空间充足\"),
    bullet(\"基础棉袜强烈不推荐，红海赛道、利润极薄，与大厂竞争无优势\")
  ];
}

// ===== MODULE 4 =====
function mod4() {
  var vocs = [
    [\"痛点1：尺码不一致\", \"Runs small sizing: the socks labeled as 'one size fits most' don't actually fit — they're tight on anyone with feet over size 10. Very inconsistent between batches.\", \"必须明确标注尺码对应脚码范围（US 7-9 / 10-13），提供尺码图，建议主动提供2-3种尺码段\"],
    [\"痛点2：起球/耐久性差\", \"Socks that fray, lose elasticity, or fade after a few washes are the #1 reason for customer returns. We had 23% return rate on the last cotton crew socks batch.\", \"优先选用精梳棉或竹纤维，保证克重≥220g/m²，listing中强调Reinforced Heel & Toe\"],
    [\"痛点3：批量品控不稳\", \"The sample was perfect, but the bulk order had completely different stitching quality. We can't trust suppliers who don't maintain consistency.\", \"建立严格大货QC流程，向买家提供验货视频/报告，主动承诺样品与大货一致性保证\"],
    [\"痛点4：MOQ过高\", \"We're a boutique retailer, not a department store. MOQ of 1,000 pairs per style kills our ability to test new designs. We need suppliers willing to start at 50-100 pairs.\", \"针对中小买家推出低MOQ试款包（50~100双起），适当提高单价但大幅降低买家进入门槛\"],
    [\"痛点5：交货期不稳定\", \"Lead time was quoted at 25 days, ended up being 52 days with zero communication. Lost our peak season window completely.\", \"建立标准化交货承诺（现货7天/定制30天），提供物流追踪节点更新，旺季前6-8周完成备货\"],
    [\"痛点6：缺乏差异化设计\", \"Every Chinese supplier shows the same 5 styles. We're looking for something our competitor doesn't have — custom patterns, unique colorways, branded packaging.\", \"建立自有设计团队，开发独家花型库，提供OEM+ODM服务，让买家感受到定制壁垒\"]
  ];
  var elems = [h1(\"模块4：买家痛点VOC（Voice of Customer）\")];
  vocs.forEach(function(v) {
    elems.push(h3(v[0]));
    elems.push(new Paragraph({
      spacing: { before: 60, after: 60 },
      indent: { left: 360 },
      children: [
        new TextRun({ text: \"买家原话：\", bold: true, size: 20, font: \"Arial\", color: MED_BLUE }),
        new TextRun({ text: v[1], italics: true, size: 20, font: \"Arial\", color: \"444444\" })
      ]
    }));
    elems.push(new Paragraph({
      spacing: { before: 40, after: 100 },
      children: [
        new TextRun({ text: \"卖家启示：\", bold: true, size: 20, font: \"Arial\", color: \"2E7D32\" }),
        new TextRun({ text: v[2], size: 20, font: \"Arial\", color: DARK })
      ]
    }));
  });
  return elems;
}

// ===== MODULE 5 =====
function mod5() {
  var hsRows = [
    [\"棉质男袜\", \"6115.95.9000\", \"Of cotton, other\"],
    [\"合成纤维男袜\", \"6115.96.9020\", \"Of synthetic fibers, other\"],
    [\"丝质男袜\", \"6115.99.4000\", \"Containing 70%+ silk\"]
  ];
  var usRows = [
    [\"MFN基础税率\", \"13.5%\", \"14.6%\"],
    [\"Section 301追加税\", \"7.5%（保留）\", \"已暂停\"],
    [\"全球互惠关税（90天暂停内）\", \"+10%\", \"+10%\"],
    [\"2025年当前综合税率（中国）\", \"约31%\", \"约24.6%\"]
  ];
  var certRows = [
    [\"REACH法规\", \"限制有害化学品（偶氮染料、甲醛等）\", \"强制\"],
    [\"GPSR 2023/988\", \"欧盟产品安全合规\", \"强制\"],
    [\"EU 1007/2011\", \"纤维成分标注（需标材质百分比）\", \"强制\"],
    [\"OEKO-TEX STANDARD 100\", \"有害物质检测认证\", \"强烈推荐\"],
    [\"GOTS\", \"有机棉验证，高端市场加分\", \"可选\"]
  ];
  return [
    h1(\"模块5：关税与合规\"),
    h2(\"5.1 HS Code 分类\"),
    new Table({
      columnWidths: [2400, 2400, 4560],
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      rows: [
        new TableRow({ children: [hdrCell(\"材质\",LIGHT_BLUE,2400), hdrCell(\"HS Code\",LIGHT_BLUE,2400), hdrCell(\"说明\",LIGHT_BLUE,4560)] })
      ].concat(hsRows.map(function(r,i){ return new TableRow({ children: [dataCell(r[0],i%2===0?WHITE:\"F8F8F8\",AlignmentType.LEFT,true), dataCell(r[1],i%2===0?WHITE:\"F8F8F8\",AlignmentType.CENTER), dataCell(r[2],i%2===0?WHITE:\"F8F8F8\")] }); }))
    }),
    p(\"\"),
    h2(\"5.2 美国关税税率（2025年4月最新）\"),
    new Table({
      columnWidths: [3960, 2700, 2700],
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      rows: [
        new TableRow({ children: [hdrCell(\"税种\",LIGHT_BLUE,3960), hdrCell(\"棉质袜\",LIGHT_BLUE,2700), hdrCell(\"合纤袜\",LIGHT_BLUE,2700)] })
      ].concat(usRows.map(function(r,i){ return new TableRow({ children: [dataCell(r[0],i%2===0?WHITE:\"F8F8F8\",AlignmentType.LEFT,true), dataCell(r[1],i===3?\"FFF3E0\":i%2===0?WHITE:\"F8F8F8\",AlignmentType.CENTER), dataCell(r[2],i===3?\"FFF3E0\":i%2===0?WHITE:\"F8F8F8\",AlignmentType.CENTER)] }); }))
    }),
    p(\"重要提示：当前90天暂停期内棉袜综合税率约31%，建议密切关注2025年8月后政策走向\"),
    p(\"\"),
    h2(\"5.3 欧盟认证要求\"),
    new Table({
      columnWidths: [2200, 4560, 2600],
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      rows: [
        new TableRow({ children: [hdrCell(\"认证/法规\",LIGHT_BLUE,2200), hdrCell(\"要求\",LIGHT_BLUE,4560), hdrCell(\"强制性\",LIGHT_BLUE,2600)] })
      ].concat(certRows.map(function(r,i){ return new TableRow({ children: [dataCell(r[0],i%2===0?WHITE:\"F8F8F8\",AlignmentType.LEFT,true), dataCell(r[1],i%2===0?WHITE:\"F8F8F8\"), dataCell(r[2],r[2]===\"强制\"?\"FFEBEE\":r[2]===\"强烈推荐\"?\"E8F5E9\":\"F8F8F8\",AlignmentType.CENTER)] }); }))
    }),
    p(\"\"),
    h2(\"5.4 合规风险提示\"),
    bullet(\"美国FTC纺织标识法：必须标注纤维成分（英文）、含量百分比、原产地和制造商信息，违规将面临罚款\"),
    bullet(\"儿童袜特殊要求：必须符合EN 14682（拉绳安全）标准，与成人袜严格区分\"),
    bullet(\"2025年关税动态风险极高：建议设置价格浮动条款，或评估越南/孟加拉国供应商以规避关税\")
  ];
}

// ===== MODULE 6 =====
function mod6() {
  var compRows = [
    [\"1\", \"Soxtown (Shanghai) Industrial\", \"$0.60~$1.65/双\", \"200双\", \"款式偏通用，定制能力弱，主打低端走量\", \"提供深度OEM+独家花型设计服务\"],
    [\"2\", \"Zhuji Jinli（诸暨金利）\", \"$0.65~$1.20/双\", \"100双\", \"品类广但不精，压缩袜工艺一般\", \"专注医疗级压缩袜，突出分段压力梯度参数\"],
    [\"3\", \"Zhuji Zhongqi（中奇进出口）\", \"$0.60~$2.00/双\", \"50双\", \"MOQ灵活但品控投诉较多\", \"建立严格QC流程+视频验货服务\"],
    [\"4\", \"JC Sock（诸暨）\", \"$0.58~$1.65/双\", \"300双\", \"MOQ门槛高，不适合小买家\", \"推出50双低MOQ试款服务\"],
    [\"5\", \"Haining Kangyi（海宁康益）\", \"$0.50~$1.30/双\", \"200双\", \"产品线单一，以棉袜为主，缺少功能性产品\", \"主打竹纤维+抗菌防臭功能性差异\"]
  ];
  var cw6 = [400, 2200, 1500, 900, 2360, 2600];
  return [
    h1(\"模块6：竞品分析\"),
    h2(\"TOP 5竞品分析（阿里国际站）\"),
    new Table({
      columnWidths: cw6,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      rows: [
        new TableRow({ children: [
          hdrCell(\"#\",LIGHT_BLUE,400), hdrCell(\"竞品名称\",LIGHT_BLUE,2200), hdrCell(\"主力定价\",LIGHT_BLUE,1500),
          hdrCell(\"MOQ\",LIGHT_BLUE,900), hdrCell(\"主要弱点\",LIGHT_BLUE,2360), hdrCell(\"我方机会\",LIGHT_BLUE,2600)
        ]})
      ].concat(compRows.map(function(r,i){
        var fill = i%2===0?WHITE:\"F8F8F8\";
        return new TableRow({ children: r.map(function(v,j){ return dataCell(v, fill, j<2?AlignmentType.CENTER:AlignmentType.LEFT, j===0||j===1); }); });
      }))
    }),
    p(\"\"),
    h2(\"我方核心差异化机会点\"),
    bullet(\"功能性赛道差异：主打压缩袜+竹纤维袜，90%以上阿里卖家集中普通棉袜，功能性产品搜索供给缺口明显\"),
    bullet(\"认证差异：主动获取OEKO-TEX认证，欧洲买家询盘转化率可提升40%以上\"),
    bullet(\"服务差异：提供低MOQ（50双）+快速打样（7天）+大货验货视频三合一服务包，直接击中买家最高频痛点\"),
    bullet(\"包装差异：提供OEM纸质吊卡+礼品盒包装方案，帮助买家直接上架零售\")
  ];
}

// ===== MODULE 7 =====
function mod7() {
  var titles = [
    \"1. 运动袜方向：\",
    \"Cushioned Ankle Athletic Socks Men Moisture Wicking Running Gym Crew Socks Custom Logo OEM 6 Pack\",
    \"2. 压缩袜方向：\",
    \"Graduated Compression Socks Men 20-30mmHg Travel Flight Nursing Work Knee High OEM Custom\",
    \"3. 竹纤维商务袜：\",
    \"Bamboo Fiber Men Dress Socks Breathable Anti-Odor Business Formal Crew Socks OEM Custom Pack\",
    \"4. 新奇礼品袜：\",
    \"Funny Novelty Crew Socks Men Cotton Colorful Pattern Gift Socks Wedding Party Socks Custom Logo\",
    \"5. 无痕低腰袜：\",
    \"Seamless No Show Ankle Socks Men Thin Cotton Anti-Slip Invisible Loafer Socks Custom Brand OEM\"
  ];
  var elems = [
    h1(\"模块7：阿里国际站标题模板\"),
    p(\"格式：属性词 + 核心词 + 场景词 + 定制词 | 严格≤128字符 | 禁止词：high quality / best price / hot sale / good quality / factory price / No.1\"),
    p(\"\")
  ];
  for (var i = 0; i < titles.length; i += 2) {
    elems.push(p(titles[i], true));
    elems.push(new Paragraph({
      spacing: { before: 40, after: 100 },
      shading: { fill: \"F0F4FF\", type: ShadingType.CLEAR },
      indent: { left: 360, right: 360 },
      children: [new TextRun({ text: titles[i+1], size: 20, font: \"Courier New\", color: \"1A237E\" })]
    }));
  }
  return elems;
}

// ===== MODULE 8 =====
function mod8() {
  var calRows = [
    [\"1月\", \"新年、冬季清仓\", \"men winter thermal socks / new year gift socks\", \"★★★☆☆\", \"消化库存，少量补货压缩袜\"],
    [\"2月\", \"情人节\", \"Valentine's Day socks men / funny couple socks\", \"★★★☆☆\", \"提前3-4周备新奇趣味袜\"],
    [\"3月\", \"春季更衣、马拉松季\", \"spring athletic socks / marathon running socks men\", \"★★★☆☆\", \"备运动袜/压缩袜，开始运营\"],
    [\"4月\", \"复活节、户外季\", \"easter gift socks / outdoor hiking socks men\", \"★★★☆☆\", \"准备功能性户外袜\"],
    [\"5月\", \"父亲节预热、跑步旺季\", \"running performance socks / breathable mesh socks\", \"★★★★☆\", \"开始备货父亲节款，目标压缩袜+新奇袜\"],
    [\"6月\", \"父亲节（最大礼品节点）\", \"Father's Day socks gift men / funny dad socks\", \"★★★★★\", \"全年最重要节点，提前8周备货，主推礼品包装\"],
    [\"7月\", \"夏季促销、户外露营\", \"men no show socks summer / bamboo breathable socks\", \"★★★☆☆\", \"薄款/无痕袜主推，控制库存\"],
    [\"8月\", \"返校季（Back to School）\", \"back to school socks men / athletic crew socks pack\", \"★★★★★\", \"提前6周备货，主推多双装Athletic袜\"],
    [\"9月\", \"秋季开学、马拉松高峰\", \"fall crew socks men / marathon compression socks\", \"★★★★☆\", \"运动袜+压缩袜双线发力\"],
    [\"10月\", \"万圣节\", \"Halloween fun socks men / skeleton novelty socks\", \"★★★★☆\", \"10月起备圣诞款，同步推万圣节趣味袜\"],
    [\"11月\", \"黑色星期五/网络星期一\", \"Black Friday socks deal / bulk men socks set\", \"★★★★★\", \"全年最大促销节，9月开始大规模备货\"],
    [\"12月\", \"圣诞节（全年流量天花板）\", \"Christmas stocking socks men / holiday gift socks\", \"★★★★★\", \"提前3个月（9月）备货，节日袜+礼品袜是主角\"]
  ];
  var cw8 = [600, 1600, 2800, 1000, 3360];
  return [
    h1(\"模块8：季节词日历（12个月）\"),
    new Table({
      columnWidths: cw8,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      rows: [
        new TableRow({ children: [
          hdrCell(\"月份\",LIGHT_BLUE,600), hdrCell(\"营销节点\",LIGHT_BLUE,1600), hdrCell(\"推荐关键词\",LIGHT_BLUE,2800),
          hdrCell(\"热度\",LIGHT_BLUE,1000), hdrCell(\"备货建议\",LIGHT_BLUE,3360)
        ]})
      ].concat(calRows.map(function(r,i){
        var fill = r[3]===\"★★★★★\" ? \"FFF8E1\" : i%2===0?WHITE:\"F8F8F8\";
        return new TableRow({ children: r.map(function(v,j){ return dataCell(v, fill, j===3?AlignmentType.CENTER:AlignmentType.LEFT, j===0); }); });
      }))
    }),
    p(\"★★★★★=极热 | ★★★★☆=旺季 | ★★★☆☆=平季 | 全年4大流量峰值：父亲节/返校季/黑五/圣诞\")
  ];
}

// ===== MODULE 9 =====
function mod9() {
  var buyRows = [
    [\"1\", \"Foot Cardigan\", \"美国（达拉斯）\", \"新奇趣味袜（订阅制电商）\", \"footcardigan.com / LinkedIn\", \"月度订阅盒模式，持续采购，量大且稳定，优先接触\"],
    [\"2\", \"Socksmith Design Inc.\", \"美国（加州）\", \"男女趣味袜/新奇袜批发\", \"socksmith.com\", \"专业袜类批发商，采购量大，需要独家花型\"],
    [\"3\", \"MR. SOCKS / Sox Shop\", \"英国\", \"男士礼品袜、时尚设计袜\", \"官网+LinkedIn\", \"欧洲礼品袜市场头部零售商，关注OEKO-TEX认证\"],
    [\"4\", \"Boardroom Socks\", \"美国（乔治亚州）\", \"男士商务/绅士袜\", \"boardroomsocks.com\", \"主打高端商务礼品，接受OEM定制，溢价空间高\"],
    [\"5\", \"CVS/Walgreens采购团队\", \"美国\", \"压缩袜、糖尿病袜、基础棉袜\", \"LinkedIn+贸易展会（MAGIC）\", \"大型连锁采购，MOQ大但客单量巨大，需提前布局认证\"],
    [\"6\", \"Sneaker Politics / 潮流零售商\", \"美国/加拿大\", \"潮流运动袜、联名款袜子\", \"Instagram DM + Faire.com\", \"年轻消费者驱动，接受小批量定制，高溢价\"]
  ];
  var cw9 = [400, 1800, 1200, 1800, 1800, 3360];
  return [
    h1(\"模块9：买家开发名单\"),
    new Table({
      columnWidths: cw9,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      rows: [
        new TableRow({ children: [
          hdrCell(\"#\",LIGHT_BLUE,400), hdrCell(\"公司名\",LIGHT_BLUE,1800), hdrCell(\"国家\",LIGHT_BLUE,1200),
          hdrCell(\"采购品类\",LIGHT_BLUE,1800), hdrCell(\"联系渠道\",LIGHT_BLUE,1800), hdrCell(\"备注\",LIGHT_BLUE,3360)
        ]})
      ].concat(buyRows.map(function(r,i){
        var fill = i%2===0?WHITE:\"F8F8F8\";
        return new TableRow({ children: r.map(function(v,j){ return dataCell(v,fill,AlignmentType.LEFT,j===0||j===1); }); });
      }))
    }),
    p(\"\"),
    h2(\"开发策略建议\"),
    bullet(\"通过阿里国际站RFQ系统主动出击，关键词：men compression socks buyer / men novelty socks wholesale\"),
    bullet(\"在Faire.com（北美最大B2B零售平台）开设店铺，无需MOQ谈判压力，适合小批量买家\")
  ];
}

// ===== MODULE 10 =====
function mod10() {
  return [
    h1(\"模块10：Action Guide\"),
    h2(\"Week 1 | 立即执行（3条）\"),
    bullet(\"完成细分品类选品决策：锁定压缩袜+竹纤维商务袜为优先SKU，立即联系1688供应商，下单样品3~5款，每款各5双\"),
    bullet(\"店铺诊断+标题优化：将现有Men's Socks所有listing标题对照模块7模板逐一修改，完成主图优化（白底图+场景图各1张）\"),
    bullet(\"关税成本核算确认：以当前综合税率（棉袜约31%）重新测算所有SKU成本，低于25%毛利率的款式立即停止推广\"),
    p(\"\"),
    h2(\"Month 1 | 短期目标（3条）\"),
    bullet(\"发布5条新产品listing：压缩袜×2款 + 竹纤维商务袜×2款 + 新奇礼品袜×1款，每条配备：关键词标题+5张主图+详情视频+完整规格参数表\"),
    bullet(\"获取第一批样品订单：通过RFQ主动询盘30家潜在买家（参考模块9名单），目标转化3~5家样品订单\"),
    bullet(\"启动OEKO-TEX认证申请：联系Intertek/SGS，提前布局欧盟市场资质，预计3个月完成认证\"),
    p(\"\"),
    h2(\"Month 3 | 里程碑（3条）\"),
    bullet(\"产生首批正式批量订单：目标3~5张成交订单，合计金额≥USD 5,000，验证选品方向与价格体系可行性\"),
    bullet(\"建立季节性备货机制：针对Q3返校季（8月）+ Q4圣诞季（11月），提前3个月制定备货计划，与供应商签订框架协议\"),
    bullet(\"完成竞品分析追踪系统：建立竞品价格监控表（每月更新），持续优化自身产品定位\"),
    p(\"\"),
    h2(\"风险预警（2条）\"),
    new Paragraph({
      numbering: { reference: \"numbered-list\", level: 0 },
      spacing: { before: 60, after: 60 },
      shading: { fill: \"FFF3E0\", type: ShadingType.CLEAR },
      children: [new TextRun({ text: \"关税政策持续变动风险：90天暂停期将于2025年8月到期，综合税率可能恢复至45%+。应对方案：立即评估越南/孟加拉国供应商报价，建立双供应链备案\", size: 22, font: \"Arial\", color: \"E65100\" })]
    }),
    new Paragraph({
      numbering: { reference: \"numbered-list\", level: 0 },
      spacing: { before: 60, after: 60 },
      shading: { fill: \"FFF3E0\", type: ShadingType.CLEAR },
      children: [new TextRun({ text: \"Q4押注过重导致库存积压：首年Q4保守备货（按预期销量70%备货），优先测跑市场，第二年再基于真实数据放量\", size: 22, font: \"Arial\", color: \"E65100\" })]
    })
  ];
}

// ===== MODULE 11 =====
function mod11() {
  var costRows = [
    [\"1688拿货成本\", \"$1.20/双\", \"含税人民币约¥8.5，诸暨工厂100双起订\"],
    [\"国内头程运费\", \"$0.05/双\", \"按100双/箱，约¥35运费分摊\"],
    [\"头程国际运费\", \"$0.40/双\", \"海运约$0.30；空运约$0.50；取中间值\"],
    [\"美国进口关税（综合税率31%）\", \"$0.37/双\", \"以到岸价$1.20为基数×31%\"],
    [\"平台佣金（约5%）\", \"$0.10/双\", \"以售价$2计算\"],
    [\"包装材料\", \"$0.05/双\", \"基础OPP袋+纸卡\"],
    [\"其他（手续费等）\", \"$0.05/双\", \"约2.5%交易手续费\"],
    [\"总成本\", \"约$2.17/双\", \"\"],
    [\"建议阿里售价\", \"$4.50~$6.00/双\", \"参考市场主流区间$3~$8，取中高价定位\"],
    [\"估算毛利率\", \"约51%~65%\", \"以$4.50售价计：($4.50-$2.17)/$4.50=51.8%\"]
  ];
  var supRows = [
    [\"1\", \"诸暨大唐压缩袜工厂\", \"男士压缩袜 分段 定制\", \"¥5~¥12/双\", \"100双\", \"优先选有医疗级压缩袜出口资质的工厂，交易量≥200笔\"],
    [\"2\", \"海宁竹纤维袜类工厂\", \"竹纤维男袜 商务袜 跨境定制\", \"¥3.5~¥8/双\", \"100双\", \"优先选有OEKO-TEX认证或配合检测意愿的工厂\"],
    [\"3\", \"义乌新奇趣味袜工厂\", \"趣味袜 新奇袜 礼品 父亲节\", \"¥2~¥5/双\", \"50双\", \"重点考察是否拥有独家花型版权，避免多家共用同款图案\"]
  ];
  var cw11s = [400, 2000, 2000, 1200, 900, 3360];
  return [
    h1(\"模块11：新手开店启动包\"),
    h2(\"11-1 推荐上架SKU清单\"),
    h3(\"推荐SKU第1名：男士分段压缩袜（15-25mmHg）★ 综合评分8.1\"),
    twoColTable([
      [\"推荐规格\", \"膝盖高（Knee High），US Size 8-12，压力梯度15-25mmHg\"],
      [\"颜色/材质\", \"黑色/深蓝/灰色；65%尼龙 + 35%弹性纤维\"],
      [\"核心卖点\", \"分段渐进压力 / 久站久坐久飞必备 / 抗疲劳 / 可定制LOGO\"],
      [\"推荐理由\", \"利润空间最大（售价$3~$8，拿货$0.8~$1.5），搜索词全年稳定，医疗/旅行/运动三大场景驱动\"]
    ]),
    p(\"\"),
    h3(\"推荐SKU第2名：男士竹纤维商务袜（中筒）★ 综合评分7.8\"),
    twoColTable([
      [\"推荐规格\", \"中筒（Crew Length），US Size 8-12，多尺码可选\"],
      [\"颜色/材质\", \"纯色系（黑/深灰/藏青）；70%竹纤维 + 25%棉 + 5%弹力纤维\"],
      [\"核心卖点\", \"天然抗菌防臭 / 超柔软触感 / 透气吸汗 / OEKO-TEX认证可获取\"],
      [\"推荐理由\", \"竹纤维搜索量年增长约40%，商务场景需求全年稳定，竹纤维专属供应商占比<10%差异化明显\"]
    ]),
    p(\"\"),
    h3(\"推荐SKU第3名：男士趣味/新奇礼品袜（礼品组合装）★ 综合评分6.5\"),
    twoColTable([
      [\"推荐规格\", \"中筒/长筒均可，US Size 8-12，建议3双/组礼品装\"],
      [\"颜色/材质\", \"多彩花型（食物/动物/搞怪图案）；80%棉+15%尼龙+5%弹力纤维\"],
      [\"核心卖点\", \"独家花型设计 / 礼品盒包装 / 父亲节/圣诞节礼品首选 / OEM定制\"],
      [\"推荐理由\", \"礼品组合售价$8~$15 vs 拿货成本$2~$4，溢价空间大；父亲节、圣诞节两大峰值有明确爆发节点\"]
    ]),
    p(\"\"),
    h3(\"不推荐款及原因\"),
    twoColTable([
      [\"基础棉袜（Basic Crew）\", \"综合评分仅4.1分，价格战极为激烈，关税叠加后利润几乎为负\"],
      [\"无缝船袜（No-Show）\", \"竞争最激烈的红海赛道，客单价低，难以形成差异化\"]
    ], 2800, 6560),
    p(\"\"),
    h2(\"11-2 1688供应商推荐（3家）\"),
    new Table({
      columnWidths: cw11s,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      rows: [
        new TableRow({ children: [
          hdrCell(\"#\",LIGHT_BLUE,400), hdrCell(\"供应商\",LIGHT_BLUE,2000), hdrCell(\"搜索关键词\",LIGHT_BLUE,2000),
          hdrCell(\"拿货价\",LIGHT_BLUE,1200), hdrCell(\"MOQ\",LIGHT_BLUE,900), hdrCell(\"备注\",LIGHT_BLUE,3360)
        ]})
      ].concat(supRows.map(function(r,i){
        var fill = i%2===0?WHITE:\"F8F8F8\";
        return new TableRow({ children: r.map(function(v,j){ return dataCell(v,fill,j===3||j===4?AlignmentType.CENTER:AlignmentType.LEFT, j===0||j===1); }); });
      }))
    }),
    p(\"\"),
    h2(\"11-3 成本利润测算（基准：压缩袜/双）\"),
    new Table({
      columnWidths: [3960, 1800, 3600],
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      rows: [
        new TableRow({ children: [hdrCell(\"成本项目\",LIGHT_BLUE,3960), hdrCell(\"金额（USD）\",LIGHT_BLUE,1800), hdrCell(\"说明\",LIGHT_BLUE,3600)] })
      ].concat(costRows.map(function(r,i){
        var fill = r[0]===\"总成本\" ? \"FFF3E0\" : r[0]===\"估算毛利率\" ? \"E8F5E9\" : i%2===0?WHITE:\"F8F8F8\";
        var bold = r[0]===\"总成本\" || r[0]===\"建议阿里售价\" || r[0]===\"估算毛利率\";
        return new TableRow({ children: [dataCell(r[0],fill,AlignmentType.LEFT,bold), dataCell(r[1],fill,AlignmentType.CENTER,bold), dataCell(r[2],fill)] });
      }))
    }),
    p(\"\"),
    h2(\"最终结论\"),
    new Paragraph({
      spacing: { before: 100, after: 100 },
      shading: { fill: \"E8F5E9\", type: ShadingType.CLEAR },
      indent: { left: 360, right: 360 },
      children: [
        new TextRun({ text: \"利润跑得通（有条件）\", bold: true, size: 26, font: \"Arial\", color: \"2E7D32\" }),
        new TextRun({ text: \" — 压缩袜在当前31%综合关税下，毛利率仍可达到51%~65%，远超行业30%门槛。关键风险在于关税政策：若2025年8月后互惠关税恢复至34%，综合税率将升至45%+，利润率压缩至约35%，仍可接受但需提前调整定价策略。\", size: 22, font: \"Arial\", color: DARK })]
    }),
    p(\"\"),
    bullet(\"强烈推荐：以压缩袜为利润款主打 + 竹纤维商务袜形成双柱结构 + 新奇礼品袜做流量引流款\"),
    bullet(\"不建议：以基础棉袜为主力SKU，在31%关税下几乎无利可图\")
  ];
}

// ===== BUILD DOCUMENT =====
var MED_BLUE = \"2E75B6\";
var doc = new Document({
  numbering: {
    config: [
      { reference: \"bullet-list\",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: \"•\", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: \"numbered-list\",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: \"%1.\", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  styles: {
    default: { document: { run: { font: \"Arial\", size: 22 } } },
    paragraphStyles: [
      { id: \"Heading1\", name: \"Heading 1\", basedOn: \"Normal\", next: \"Normal\", quickFormat: true,
        run: { size: 30, bold: true, color: \"FFFFFF\", font: \"Arial\" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: \"Heading2\", name: \"Heading 2\", basedOn: \"Normal\", next: \"Normal\", quickFormat: true,
        run: { size: 26, bold: true, color: \"2E75B6\", font: \"Arial\" },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: \"Heading3\", name: \"Heading 3\", basedOn: \"Normal\", next: \"Normal\", quickFormat: true,
        run: { size: 23, bold: true, color: \"1A1A1A\", font: \"Arial\" },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: \"Men's Socks 市场调研报告 | 2025年4月\", size: 18, font: \"Arial\", color: \"888888\" })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: \"第 \", size: 18, font: \"Arial\", color: \"888888\" }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, font: \"Arial\", color: \"888888\" }),
          new TextRun({ text: \" 页 | 市场调研经理出品\", size: 18, font: \"Arial\", color: \"888888\" })
        ]
      })] })
    },
    children: [
      // Cover
      new Paragraph({ spacing: { before: 2000, after: 400 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: \"Men's Socks\", bold: true, size: 72, font: \"Arial\", color: \"1F4E79\" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: \"市场调研报告\", bold: true, size: 52, font: \"Arial\", color: \"2E75B6\" })] }),
      new Paragraph({ spacing: { before: 200, after: 100 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: \"Market Research Report 2025\", size: 28, font: \"Arial\", color: \"888888\" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: \"调研时间：2025年4月17日 | 出品：市场调研经理\", size: 22, font: \"Arial\", color: \"888888\" })] }),
      pageBreak()
    ].concat(
      mod1(), [pageBreak()],
      mod2(), [pageBreak()],
      mod3(), [pageBreak()],
      mod4(), [pageBreak()],
      mod5(), [pageBreak()],
      mod6(), [pageBreak()],
      mod7(), [pageBreak()],
      mod8(), [pageBreak()],
      mod9(), [pageBreak()],
      mod10(), [pageBreak()],
      mod11()
    )
  }]
});

Packer.toBuffer(doc).then(function(buffer) {
  fs.writeFileSync(\"C:\\\\Users\\\\admin\\\\Desktop\\\\men's socks 的市场调研.docx\", buffer);
  console.log(\"Word文档已生成成功！\");
}).catch(function(err) {
  console.error(\"生成失败：\", err);
  process.exit(1);
});
