const core = require('@actions/core')
const {exec} = require('@actions/exec')
const {installGProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const gprologSpec = core.getInput('gprolog-version', {required: true})

  console.log(`##[group]Installing GNU Prolog ${gprologSpec}`)
  await installGProlog(gprologSpec)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-gprolog only supports Ubuntu Linux at this time'
    )
}