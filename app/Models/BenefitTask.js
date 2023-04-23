'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BenefitTask extends Model {
    tasks () {
        return this.belongsToMany('App/Models/Task')
      }
    benefits () {
        return this.belongsToMany('App/Models/Benefit')
      }
}

module.exports = BenefitTask
