function Employee(first_name, last_name, id_number, job_title, annual_salary) {
  function monthly_pay () {
    return annual_salary / 12;
  }
  this.first_name = first_name;
  this.last_name = last_name;
  this.id_number = id_number;
  this.job_title = job_title;
  this.annual_salary = annual_salary;
  this.monthly_pay = monthly_pay();
}
$(document).ready(function(){


//event listener
$('#submit').on('click', addEmployee);
$('#employee-list').on('click', '.delete', deleteEmployee);
});

function addEmployee() {
    var employee = new Employee ($('#first_name').val(),$('#last_name').val(),$('#id_number').val(),$('#job_title').val(),$('#annual_salary').val());
    $('#employees').append('<tr><td>' + employee.first_name + '</td><td>' + employee.last_name + '</td><td>' + employee.id_number + '</td><td>' + employee.job_title + '</td><td>' + employee.annual_salary + '</td><td>' + Math.round(employee.monthly_pay) + '</td><td><button class="delete">Delete</button></td></tr>');
    $('input').val('');

}
function deleteEmployee() {
  $(this).parent().parent().remove();
}
