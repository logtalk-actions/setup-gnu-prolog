const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installGNUProlog}

/**
 * Install GNU Prolog.
 *
 * @param {string} version
 */
async function installGNUProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-gnu-prolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-gnu-prolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-gnu-prolog-windows'), [version])
  }
}
