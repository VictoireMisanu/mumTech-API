import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  declare course_id: number

  @column()
  declare course_title: string

  @column()
  declare course_description: string

  @column()
  declare image_url: string

  @column()
  declare video_url: string

  @column()
  declare video_duration: number

  @column()
  declare document_url: string

  @column()
  declare language: string

  @column()
  declare module: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
