$ErrorActionPreference = 'Stop'
$taskRoot = $PSScriptRoot
foreach ($taskApp in @('mhay-cardapio-prototipo','umai-cardapio-prototipo')) {
  Push-Location (Join-Path $taskRoot $taskApp)
  try {
    foreach ($taskCheck in @('lint','typecheck','test','build')) {
      & npm.cmd run $taskCheck 2>&1 | Tee-Object -FilePath (Join-Path $taskRoot "evidencias\$taskApp-$taskCheck.log")
      if ($LASTEXITCODE -ne 0) { throw "$taskApp / $taskCheck falhou: $LASTEXITCODE" }
    }
  } finally { Pop-Location }
}
