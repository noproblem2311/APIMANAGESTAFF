'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Benefit =  use('App/Models/Benefit')
/**
 * Resourceful controller for interacting with benefits
 */
class BenefitController {
  /**
   * Show a list of all benefits.
   * GET benefits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getBenefits ({ request, response, view }) {
    response.status(200).json({
      message: 'Here are your all benefit.',
      data: await Benefit.all()
    })
  }


  /**
   * Create/save a new benefit.
   * POST benefits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async createBenefits ({ request, response }) {
    const { name} = request.post()
    const benefit = await Benefit.create({ name })
    response.status(200).json({
      message: 'created successfully',
      data: benefit
    })
  }

  /**
   * Display a single benefit.
   * GET benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getDetailBenefits ({ request, response, view , params: { id }}) {
    const benefit = await Benefit.find(id)
    response.status(200).json({
      message: 'Here is your benefit.',
      benefit:  benefit,
      task: benefit.task().fetch()
      

    })

  }

  /**
   * Render a form to update an existing benefit.
   * GET benefits/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update benefit details.
   * PUT or PATCH benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a benefit with id.
   * DELETE benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BenefitController
