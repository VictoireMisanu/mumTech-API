import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

       table.string('title').notNullable()
      table.text('description').nullable()
      table.integer('module_id').unsigned().references('id').inTable('modules').onDelete('CASCADE')
      table.string('video_url').nullable()
      table.string('image_url').nullable()
      table.integer('video_duration').unsigned().nullable().comment('Duration in seconds')
      table.string('document_url').nullable()
      table.string('language').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}