console.log('script sources');

// shortcut for ready
$(readyNow);
let monthlyTotal=0;

function readyNow() {
    console.log('jQuery is working');
    // Add Event handlers
    $('#employee-form').submit(onFormSubmit);
    // on submit is a better practice for forms, .submit is a short cut to on('submit')
    // $('#employee-form').on('submit', onFormSubmit);

    // Listening for 'clicks' on the buttons
    // $('#submit-btn').on('click', onFormSubmit);
    //     TARGET           EVENT       FILTER         FUNCTION
    $('#employee-data').on('click', '.delete-button', deleteEmployee);


    // test to confirm update monthly total function is working
    // updateMonthlyTotal(10000000);
}

function deleteEmployee(event) {
    console.log(event.target);
    console.log(this);
    let salary = $(this).closest('tr').find('.salary-amount').text();
    console.log('salary', salary);
    updateMonthlyTotal(-salary)

    $(this).parent().parent().remove();
    //T this does the same thing as targeting the nearest TR
    // $(this).closest('tr').remove();
}

function onFormSubmit(event){
    event.preventDefault();
    console.log('Form!');
    let employeeName = $('#employee-name').val();
    let employeeLast = $('#employee-last').val();
    let employeeID = $('#employee-id').val();
    let employeeTitle = $('#employee-title').val();
    let employeeSalary = $('#employee-salary').val();
    console.log('Employee', employeeName);
    // Access the HTML table body element
    let employeeTable = $('#employee-data');
    // Append our data to the table body
    employeeTable.append(`
        <tr>
            <td>${employeeName}</td>
            <td>${employeeLast}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td class="salary-amount">${employeeSalary}</td>
            <td>
                <button class="delete-button">
                    Delete
                </button>
            </td>
        </tr>
    `)
    updateMonthlyTotal(employeeSalary);
}



function updateMonthlyTotal(salary) {
    let monthly = Number(salary) / 12;
    monthlyTotal += Math.round(monthly);
    monthlyTotal = Math.round(monthlyTotal);
    $('#total-dollar').text(`$${monthlyTotal}`);
    if (monthlyTotal > 20000) {
        // .addClass, .removeClass, would also work
        $('#monthly-total').css('background-color', 'red');
    } else {
        $('#monthly-total').css('background-color', 'white');
    }
}