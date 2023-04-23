
'use strict'
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */



const { validate } = use('indicative/validator')

const createCustomerSchema = {
  username: 'required|min:3|max:50',
  email: 'required|email'
}


/**
 * Resourceful controller for interacting with registers
 */
class RegisterController {
  /**
   * Show a list of all registers.
   * GET registers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new register.
   * GET registers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new register.
   * POST registers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async signupUser ({ request, response }) {
    const username= request.post().username
    const email= request.post().email
    const password= request.post().password 

     
   const data = {username,email}
   
    try {
      await validate(data, createCustomerSchema)

    } catch (errors) {
      return response.status(422).json({
        message: 'Validation failed.',
        errors
      })
    }


    const user = await User.create({
        username: username,
        email: email,
        password: password  
    })
    .then((user) => {
      response.status(200).json({
        message: 'Successfully created user',
        data: user
      }) 
    }
    )
    .catch((error) => {
      response.status(400).json({
        message: 'failed to create user',
        error: error
      }) 
    });
    
  }

  /**
   * Display a single register.
   * GET registers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing register.
   * GET registers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update register details.
   * PUT or PATCH registers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a register with id.
   * DELETE registers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RegisterController
