const core = require('@actions/core')
const {installGNUProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const version = core.getInput('gnu-prolog-version', {required: true})

  console.log(`##[group]Installing GNU Prolog ${version}`)
  await installGNUProlog(version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'win32')
    throw new Error(
      '@logtalk-actions/setup-gnu-prolog does not support Windows at this time.'
    )
}
