const {exec} = require('@actions/exec')

module.exports = {installGProlog}

/**
 * Install Logtalk.
 *
 * @param {string} version
 */
async function installGProlog(version) {
  await exec(path.join(__dirname, 'install-gprolog-ubuntu'), [version])
}
