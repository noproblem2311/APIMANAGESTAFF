'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenefitsSchema extends Schema {
  up () {
    this.create('benefits', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
    })
  }

  down () {
    this.drop('benefits')
  }
}

module.exports = BenefitsSchema
