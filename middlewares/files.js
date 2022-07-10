const multer = require('multer')

const validateImage = ({ required = false, keyName = 'image' } = { required: false, keyName: 'image' }) => {
  const multerMiddleware = (req, res, next) => {
    try {
      const multerConfig = getSingleImageMulterConfig()
      const uploadImage = multer(multerConfig)
      const upload = uploadImage.single(keyName)

      upload(req, res, (error) => {
        if (error || (!req.file && required)) {
          const errorMsg = error ? error.message : 'file required'
          const resObj = errorAsValidationError(errorMsg, keyName)
          return res.status(400).json(resObj)
        }
        return next()
      })
    } catch (error) {
      next(error)
    }
  }
  return multerMiddleware
}

module.exports = {
  validateImage
}

function getSingleImageMulterConfig () {
  const storage = multer.diskStorage({
    destination: 'temp/'
  })
  const limits = {
    fileSize: 8 * 1024 * 1024, // 8MB
    files: 1
  }
  const fileFilter = (req, file, cb) => {
    const acceptedFiles = ['image/jpeg', 'image/png']
    if (!acceptedFiles.includes(file.mimetype)) {
      return cb(new Error(`File upload only supports the following filetypes ${acceptedFiles.join(', ')}`))
    }
    cb(null, true)
  }
  return {
    storage,
    limits,
    fileFilter
  }
}

function errorAsValidationError (msg, fieldName) {
  return {
    errors: [
      {
        msg,
        param: fieldName,
        location: 'body'
      }
    ]
  }
}
