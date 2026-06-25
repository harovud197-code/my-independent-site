
$htmlPath = "C:\Users\admin\Desktop\report.html"
$docxPath = "C:\Users\admin\Desktop\阿里国际站直通车计划分析与优化报告_custom_socks_20260519.docx"

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open($htmlPath)
    
    # Save as docx (Format 16 is wdFormatXMLDocument)
    $doc.SaveAs([ref]$docxPath, [ref]16)
    $doc.Close()
    $word.Quit()
    
    # Optional: Release COM objects
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($doc) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
    
    Write-Host "Success: Converted $htmlPath to $docxPath"
} catch {
    Write-Error "Error during conversion: $_"
    if ($word) { $word.Quit() }
}
