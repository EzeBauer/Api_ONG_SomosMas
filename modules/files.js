const s3 = require('./s3')
const fs = require('fs')
const path = require('path')

const uploadFile = async (file, deleteTempFile = true) => {
  const fileToCreate = {
    path: file.path,
    ext: path.extname(file.originalname),
    contentType: file.mimetype
  }
  const uploadedFile = await s3.uploadFile(fileToCreate)
  if (deleteTempFile) {
    try {
      await deleteLocalFile(file.path)
    } catch (error) {
      // TODO Log error to devs
    }
  }
  return uploadedFile.Location // file URL
}

const deleteFile = async (fileUrl) => {
  try {
    // Temporary comment. AWS access denied error
    /* const fileS3Key = getS3KeyFromUrl(fileUrl)
    await s3.deleteFile(fileS3Key) */
  } catch (err) {
    err.message = 'Error deleting the image'
    err.status = 500
    throw err
  }
}

const deleteLocalFile = async (filePath) => {
  await fs.promises.unlink(filePath)
}

const updateImageHandler = async (newImage = null, previousImageUrl = null) => {
  try {
    const areSameImage = newImage === previousImageUrl
    if (previousImageUrl && !areSameImage) {
      try {
        await deleteFile(previousImageUrl)
      } catch (error) {
        // TODO Log error to devs
      }
    }

    const imageIsUrl = typeof newImage === 'string'
    if (imageIsUrl) {
      return newImage
    }

    const imageIsFile = typeof newImage === 'object'
    if (imageIsFile) {
      const createdImageUrl = await uploadFile(newImage)
      return createdImageUrl
    }

    return null
  } catch (err) {
    // TODO Log error to dev
    err.message = 'Error loading the image'
    err.status = 500
    throw err
  }
}

module.exports = {
  uploadFile,
  deleteFile,
  deleteLocalFile,
  updateImageHandler
}

function getS3KeyFromUrl (url) {
  return url.substring(url.lastIndexOf('/') + 1)
}
