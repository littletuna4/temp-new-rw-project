// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'

export default async ({ args }) => {
  const fs = require('fs')
  const path = require('path')
  const { execSync } = require('child_process')

  function listPrismaModels() {
    const schemaPath = path.join(__dirname, '../api/db/schema.prisma') // Update with actual path
    const schemaContent = fs.readFileSync(schemaPath, 'utf8')

    const modelRegex = /^model\s+(\w+)/gm
    let match
    const models = []

    while ((match = modelRegex.exec(schemaContent)) !== null) {
      models.push(match[1])
    }

    return models
  }

  function generateSdlsForModels() {
    const models = listPrismaModels()
    models.forEach((model) => {
      try {
        console.log(`Generating SDL for model: ${model}`)
        execSync(`yarn rw g sdl ${model} --force`, { stdio: 'inherit' })
      } catch (e) {
        console.log(`Failed to generate SDL for model: ${model}`)
      }
    })
  }

  generateSdlsForModels()
}
