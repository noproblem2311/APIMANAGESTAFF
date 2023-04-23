

'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  
  async getCustomers({ response }) {
    const customers = await Customer.all()
    for (const customer of customers.rows)  {
      const projects = await customer.projects().fetch();
      customer.project = projects;
    }
    response.status(200).json({
      message: 'Here are your customers.',
      data: customers
    })
  }
  
  async createCustomers({ request, response }) {
    const { name, description } = request.post()
    
    // save and get instance back
    const customer = await Customer.create({ name, description })
  
    response.status(201).json({
      message: 'Successfully created a new customer.',
      data: customer,
      

    })
  }

  async getDetailCustomers({ request, response }) {
    const  customerr = request.post().customer
    const projects = await customerr.projects().fetch()
    customerr.projects = projects;
    response.status(200).json({
      message: 'Here is your customer.',
      data: customerr,
    
    })
  }

  async updateCustomers({ request, response }) {
    const { name, description, customer } = request.post()

    customer.name = name
    customer.description = description

    await customer.save()

    response.status(200).json({
      message: 'Successfully updated this customer.',
      data: customer
    })
  }

  async deleteCustomers({ request, response, params: { id } }) {
    const customer = request.post().customer

    await customer.delete()

    response.status(200).json({
      message: 'Successfully deleted this customer.',
      id
    })
  }
}

module.exports = CustomerController
