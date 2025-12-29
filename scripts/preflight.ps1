Write-Host "PRE-FLIGHT CHECKS" -ForegroundColor Cyan

 = False

Write-Host "1) Merge markers..." -ForegroundColor Yellow
 = Select-String -Path .\* -Recurse -ErrorAction SilentlyContinue -Pattern '<<<<<<<|=======|>>>>>>>' 
if () { 
   = True
   | ForEach-Object { Write-Host .Path ":" .Line -ForegroundColor Red }
} else {
  Write-Host "OK" -ForegroundColor Green
}

Write-Host "2) Obvious secrets..." -ForegroundColor Yellow
 = Select-String -Path .\* -Recurse -ErrorAction SilentlyContinue -Pattern 'api_key|apikey|secret|token|BEGIN PRIVATE KEY|password'
if () {
   = True
   | ForEach-Object { Write-Host .Path ":" .Line -ForegroundColor Red }
} else {
  Write-Host "OK" -ForegroundColor Green
}

Write-Host "3) Required context files..." -ForegroundColor Yellow
 = @(
  "AGENTS.md",
  "docs\CODEX_README.md",
  "docs\NEO_business\INDEX.md",
  "sites\ia-transcription\site_spec.yaml"
)
foreach ( in ) {
  if (-not (Test-Path )) {  = True; Write-Host "Missing: " -ForegroundColor Red }
}
if (-not ) { Write-Host "ALL GOOD" -ForegroundColor Green; exit 0 }
else { Write-Host "FAILED" -ForegroundColor Red; exit 1 }
