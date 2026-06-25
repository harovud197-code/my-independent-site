
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$selection = $word.Selection

# Function to add heading
function Add-Heading($text, $size = 16) {
    $selection.Font.Size = $size
    $selection.Font.Bold = $true
    $selection.Font.Color = 12615808
    $selection.TypeText($text)
    $selection.TypeParagraph()
    $selection.Font.Reset()
}

# Function to add normal text
function Add-Text($text) {
    $selection.Font.Size = 11
    $selection.Font.Bold = $false
    $selection.Font.Color = 0
    $selection.TypeText($text)
    $selection.TypeParagraph()
}

# Function to add bold text parts
function Add-MixedText($parts) {
    foreach ($part in $parts) {
        $selection.Font.Bold = $part.Bold
        if ($part.Color) { $selection.Font.Color = $part.Color } else { $selection.Font.Color = 0 }
        $selection.TypeText($part.Text)
    }
    $selection.TypeParagraph()
    $selection.Font.Reset()
}

# Define Strings (to avoid encoding issues in logic)
$title = "直通车计划深度分析报告 (计划名：custom socks 20260506)"
$s1_title = "1. 计划基础数据 (2026.05.12-05.18)"
$s1_1 = "总花费："
$s1_2 = "￥855.35"
$s1_3 = "曝光量："
$s1_4 = "6,707"
$s1_5 = "点击量："
$s1_6 = "179"
$s1_7 = " (点击率 "
$s1_8 = "2.67%"
$s1_9 = ")"
$s1_10 = "总商机量："
$s1_11 = "8"
$s1_12 = " (询盘 "
$s1_13 = "1"
$s1_14 = ", TM "
$s1_15 = "7"
$s1_16 = ")"
$s1_17 = "总订单量："
$s1_18 = "1"
$s1_19 = " (来自美国市场)"

$s2_title = "2. 核心产品表现诊断"
$s2_p1_1 = "• FPB-03 (成交担当)"
$s2_p1_2 = "：1 订单，2 商机，点击率 3.75%。结论：核心稳健产品。"
$s2_p2_1 = "• FPS-437 (高转化潜力)"
$s2_p2_2 = "：商机转化率高达 33.33%（6 个点击即获 2 个商机）。结论：建议扩流。"
$s2_p3_1 = "• FPS-413 (引流神器)"
$s2_p3_2 = "：点击率 6.82% (全场最高)，但 0 商机。结论：详情页承接差，需重点整改价格和 MOQ。"

$s3_title = "3. 建议移出/替换产品"
$s3_p1_1 = "• FPS-91"
$s3_p1_2 = " (CTR 1.01%, 0 商机)"
$s3_p2_1 = "• FPS-443"
$s3_p2_2 = " (曝光 647, 0 商机)"

$s4_title = "4. 优化行动指南"
$s4_1 = "• 维持美国市场的核心投放。"
$s4_2 = "• 对 FPS-413 进行详情页 A/B 测试，优化拿样转化。"
$s4_3 = "• 开启 L1+ 标签溢价，提升流量质量。"

# 1. Title
Add-Heading $title 18

# 2. Section 1
Add-Heading $s1_title 14
Add-MixedText @(@{Text=$s1_1; Bold=$false}, @{Text=$s1_2; Bold=$true})
Add-MixedText @(@{Text=$s1_3; Bold=$false}, @{Text=$s1_4; Bold=$true})
Add-MixedText @(@{Text=$s1_5; Bold=$false}, @{Text=$s1_6; Bold=$true}, @{Text=$s1_7; Bold=$false}, @{Text=$s1_8; Bold=$true}, @{Text=$s1_9; Bold=$false})
Add-MixedText @(@{Text=$s1_10; Bold=$false}, @{Text=$s1_11; Bold=$true}, @{Text=$s1_12; Bold=$false}, @{Text=$s1_13; Bold=$true}, @{Text=$s1_14; Bold=$false}, @{Text=$s1_15; Bold=$true}, @{Text=$s1_16; Bold=$false})
Add-MixedText @(@{Text=$s1_17; Bold=$false}, @{Text=$s1_18; Bold=$true}, @{Text=$s1_19; Bold=$false})

# 3. Section 2
Add-Heading $s2_title 14
Add-MixedText @(@{Text=$s2_p1_1; Bold=$true}, @{Text=$s2_p1_2; Bold=$false})
Add-MixedText @(@{Text=$s2_p2_1; Bold=$true}, @{Text=$s2_p2_2; Bold=$false})
Add-MixedText @(@{Text=$s2_p3_1; Bold=$true}, @{Text=$s2_p3_2; Bold=$false})

# 4. Section 3
Add-Heading $s3_title 14
Add-MixedText @(@{Text=$s3_p1_1; Bold=$true}, @{Text=$s3_p1_2; Bold=$false})
Add-MixedText @(@{Text=$s3_p2_1; Bold=$true}, @{Text=$s3_p2_2; Bold=$false})

# 5. Section 4
Add-Heading $s4_title 14
Add-Text $s4_1
Add-Text $s4_2
Add-Text $s4_3

# Save
$path = "C:\Users\admin\Desktop\阿里国际站直通车计划分析与优化报告_custom_socks_20260519.docx"
$doc.SaveAs([ref]$path)
$doc.Close()
$word.Quit()
