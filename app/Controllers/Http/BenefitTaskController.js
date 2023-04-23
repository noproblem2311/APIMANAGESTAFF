'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const BenefitTask = use('App/Models/BenefitTask')
/**
 * Resourceful controller for interacting with benefittasks
 */
class BenefitTaskController {
  /**
   * Show a list of all benefittasks.
   * GET benefittasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new benefittask.
   * GET benefittasks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new benefittask.
   * POST benefittasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async createBenefitTask ({ request, response }) {
    const { task_id, benefit_id } = request.post()

    // save and get instance back
    const benefittask = await BenefitTask.create({ task_id, benefit_id })
    response.status(201).json({
      message: 'Successfully created a new BenefitTask.',
      data: benefittask,
      

    })
  }

  /**
   * Display a single benefittask.
   * GET benefittasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing benefittask.
   * GET benefittasks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update benefittask details.
   * PUT or PATCH benefittasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a benefittask with id.
   * DELETE benefittasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BenefitTaskController
