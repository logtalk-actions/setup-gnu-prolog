const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installGProlog}

/**
 * Install GNU Prolog.
 *
 * @param {string} version
 */
async function installGProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-gprolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-gprolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-gprolog-windows'), [version])
  }
}
