'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenefitTasksSchema extends Schema {
  up () {
    this.create('benefit_tasks', (table) => {
      table.increments()
      table.integer('task_id').unsigned().references('id').inTable('tasks')
      table.integer('benefit_id').unsigned().references('id').inTable('benefits')
      table.timestamps()
    })
  }

  down () {
    this.drop('benefit_tasks')
  }
}

module.exports = BenefitTasksSchema
