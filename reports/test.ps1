
$word = New-Object -ComObject Word.Application
$word.Visible = $true
$doc = $word.Documents.Add()
$doc.Range().Text = "Hello World"
$doc.SaveAs("C:\Users\admin\Desktop\test.docx")
$doc.Close()
$word.Quit()
