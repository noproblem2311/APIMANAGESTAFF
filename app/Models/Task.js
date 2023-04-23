'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
    project () {
        return this.belongsTo('App/Models/Project')
      }
      benefits () {
        return this.belongsToMany('App/Models/Benefit').pivotTable('benefit_tasks')
      }
      benefittasks () {
        return this.hasMany('App/Models/BenefitTask')
      }
}

module.exports = Task
