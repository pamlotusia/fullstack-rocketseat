const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  async saveFile(file) {
    // rename -> renomear ou mover o arquivo
    await fs.promises.rename(
      // endereço original
      path.resolve(uploadConfig.TMP_FOLDER, file),
      // endereço de novo
      path.resolve(uploadConfig.UPLOAD_FOLDER, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOAD_FOLDER, file)
    try {
      // stat -> retorna o status do arquivo
      await fs.promises.stat(filePath)
    } catch {
      return
    }
    // unlink -> remove o arquivo
    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage
