
'use strict'

const Benefit = require("../../Models/Benefit")
const BenefitTask = use('App/Models/BenefitTask')
const Task = use('App/Models/Task')

class TaskController {
  async getTasks({ response }) {
    const tas = await Task.query().with("benefits").fetch()

    response.status(200).json({
      message: 'Here are your tasks',
      data: tas
    })
  }

  async createTasks({ request, response }) {
    const { name, description, project_id ,benefit} = request.post()
    const len =Object.keys(benefit).length
    const task = await Task.create({ name, description, project_id })
    let task_id= task.id
    let benefit_id = 0
    for (let i = 0; i < len; i++) {
      benefit_id = benefit[i]
      const benefittask = await BenefitTask.create({ task_id, benefit_id })
    }
    response.status(201).json({
      message: 'Successfully created a new task.',
      data: task
    })
  }
   
  async getDetailTasks({ request, response }) {
   const taskss= request.post().task
 
    response.status(200).json({
      message: 'Here is your task.',
      data:taskss

    })
  }

  async updateTasks({ request, response, params: { id } }) {
    const { name, description, project_id, task } = request.post()

    task.name = name
    task.description = description
    task.project_id = project_id

    await task.save()

    response.status(200).json({
      message: 'Successfully updated this task.',
      data: task
    })
  }

  async deleteTasks({ request, response, params: { id } }) {
    const { task } = request.post()

    await task.delete()

    response.status(200).json({
      message: 'Deleted task.',
      id
    })
  }
}

module.exports = TaskController
