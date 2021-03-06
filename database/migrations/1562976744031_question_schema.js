'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number').notNullable()
      table.text('description').notNullable()
      table.string('type').notNullable()
      table.string('options').notNullable()
      table.string('answer').notNullable()
      table.integer('timer').notNullable()
      table.timestamps()
    }) 
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
