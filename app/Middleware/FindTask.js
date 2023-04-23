'use strict'
const Task = use('App/Models/Task')

class FindTask {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const tas = await Task.query().with("benefits").fetch()
    const task = await Task.find(id)
    let newsubtask = {}
   
    for (const subtask of tas.rows)  {
     
      if (subtask.id == task.id){
         newsubtask  = subtask
      }
    }
    if (!newsubtask) {
      return response.status(404).json({
        message: 'Task not found.',
        id
      })
    }

    request.body.task = newsubtask

    await next()
  }
}

module.exports = FindTask
