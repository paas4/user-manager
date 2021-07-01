const path = require('path')
const asp = require('@4a/asp')
const multer = require('@koa/multer')
const upload = multer({ dest: 'public/uploads/' })
const Resolver = require('~/class/resolver')
const fs = require('fs-extra')
const appRootDir = require('app-root-dir').get()
const Document = require('../controller/document')

function fileFormat(file) {

    const uuid = file.filename
    const ext = path.extname(file.originalname)
    const filepath = file.path + ext
    const filename = file.filename + ext

    fs.moveSync(
        path.join(appRootDir, file.path),
        path.join(appRootDir, filepath),
    )

    Object.assign(file, { uuid, filename, ext, path: filepath })

    return file
}

class DocumentResolver extends Resolver {

    async get(id) {
        return Document.findOne({ id })
    }

    async gets({ page, size }) {
        const limit = [size * (page - 1), size]
        return {
            page, size,
            total: await Document.count(),
            list: await Document.find({}, { limit })
        }
    }

    async create(ctx, next) {
        const middleware = upload.single('file')
        await middleware(ctx, next)
        const file = fileFormat(ctx.file)
        const body = ctx.request.body

        asp.debug('upload:', file)

        return Document.create({
            uid: ctx.state.user.id,
            ext: file.ext,
            uuid: file.uuid,
            name: body.name || file.originalname,
            path: file.path.replace('public', ''),
            description: body.description
        })
    }

    async update(params) {
        const id = params.id
        return Document.update({ id }, params)
    }
}

module.exports = new DocumentResolver
