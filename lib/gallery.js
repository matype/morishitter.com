import fs from "fs"
import path from "path"

const galleriesDir = path.join(process.cwd(), "contents/galleries")

export function getSortedGalleriesData() {
  const fileNames = fs.readdirSync(galleriesDir)
  const allGalleriesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.js$/, "")
    const metadata = require(`/contents/galleries/${id}`).metadata

    return {
      id,
      ...metadata,
    }
  })

  return allGalleriesData.sort(() => Math.random() - 0.5)
}
