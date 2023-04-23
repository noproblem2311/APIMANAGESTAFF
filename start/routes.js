
'use strict'

const Route = use('Route')


// Customers
Route.get('customers/:id', 'CustomerController.getDetailCustomers').middleware([
  'findCustomer'
])
Route.get('customers', 'CustomerController.getCustomers')

Route.post('customers', 'CustomerController.createCustomers')
Route.patch('customers/:id', 'CustomerController.updateCustomers').middleware([
  'findCustomer'
])
Route.delete('customers/:id', 'CustomerController.deleteCustomers').middleware([
  'findCustomer'
])



// projects
Route.get('projects', 'ProjectController.getProjects')
Route.get('projects/:id', 'ProjectController.getDetailProjects').middleware(['findProject'])
Route.post('projects', 'ProjectController.createProjects')
Route.patch('projects/:id', 'ProjectController.updateProjects').middleware([
  'findProject'
])
Route.delete('projects/:id', 'ProjectController.deleteProjects').middleware([
  'findProject'
])





// tasks
Route.get('tasks', 'TaskController.getTasks')
Route.get('tasks/:id', 'TaskController.getDetailTasks').middleware(['findTask'])
Route.post('tasks', 'TaskController.createTasks')
Route.patch('tasks/:id', 'TaskController.updateTasks').middleware(['findTask'])
Route.delete('tasks/:id', 'TaskController.deleteTasks').middleware(['findTask'])



//benefits
Route.get('benefits', 'BenefitController.getBenefits')
Route.post('benefits','BenefitController.createBenefits')
Route.get('benefits/:id', 'BenefitController.getDetailBenefit')



// benefits task 
Route.post('benefitstasks','BenefitTaskController.createBenefitTask')





//authentication
Route.post('register','RegisterController.signupUser').as('register.signupUser')
Route.post('login','LoginController.loginUser').as('register.loginUser')