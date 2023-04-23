'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Benefit extends Model {
    tasks () {
        return this.belongsToMany('App/Models/Task').pivotTable('benefit_tasks')
      }
    benefittasks () {
        return this.hasMany('App/Models/BenefitTask')
      }
}

module.exports = Benefit
