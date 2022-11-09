import fs from "fs"
import path from "path"

const worksDir = path.join(process.cwd(), "contents/works")

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDir)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    }
  })
}
