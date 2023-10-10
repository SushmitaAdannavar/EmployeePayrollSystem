//$(document).ready(function () {

//$("#myBtn").click(function () {
function addEmployee() {
    var Name = $("#name").val();
    console.log(Name);

    var profileImage = $("input[name='Profileimage']:checked").val();
    console.log(profileImage);

    var gender = $("input[name='Gender']:checked").val();
    console.log(gender);

    var arr = [];
    $.each($("input[name='Department']:checked"), function () {
        arr.push($(this).val());
    });
    console.log(arr.join(","));
    arr = arr.join(" ")

    var Salary = $("#salary").val();
    console.log(Salary);

    var Date = $("#date").val();
    var Month = $("#month").val();
    var Year = $("#year").val();
    console.log(`${Date}/${Month}/${Year}`);
    let StartDate = `${Date} ${Month} ${Year}`;

    var Notes = $("#notes").val();
    console.log(Notes);

    let requestData = {

        "Name": Name,
        "profileImage": profileImage,
        "Gender": gender,
        "Department": arr,
        "Salary": Salary,
        "StartDate": StartDate,
        "Notes": Notes
    }

    $.ajax({
        type: "POST",
        url: 'http://localhost:3000/employee',
        data: JSON.stringify(requestData),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {

            console.log("Data stored", response)
        }
    });
}
// })
//})
if (location.hash === '#execute') {
    let urlParams = new URLSearchParams(location.search);
    let empId = urlParams.get('Id');
    $.ajax({
        url: 'http://localhost:3000/employee/' + empId,
        contentType: "application/json; charset=utf-8",
        type: 'GET',
        dataType: 'json',
        success: function (result, textStatus, xhr) {
            $("#name").val(result.Name);
            
            $('input[name=Profileimage][value='+result.profileImage+']').prop('checked',true);
            $('input[name=Gender][value='+result.Gender+']').prop('checked',true);
            $.each($("input[name='Department']:checked"), function () {
                arr.push($(this).val(result.Department));
            });
            $("#salary").val(result.Salary);
            let datestring = result.StartDate.split(" ")
            $("#date").val(datestring[0]);
            $("#month").val(datestring[1]);
            $("#year").val(datestring[2]);
            $("#notes").val(result.Notes);

        },
        error: function (xhr, textStatus, errorthrown) {
            alert("Error in operation");
        }
    })
    function updateEmployee(){
        var Name = $("#name").val();
    console.log(Name);

    var profileImage = $("input[name='Profileimage']:checked").val();
    console.log(profileImage);

    var gender = $("input[name='Gender']:checked").val();
    console.log(gender);

    var arr = [];
    $.each($("input[name='Department']:checked"), function () {
        arr.push($(this).val());
    });
    console.log(arr.join(","));
    arr = arr.join(" ")

    var Salary = $("#salary").val();
    console.log(Salary);

    var Date = $("#date").val();
    var Month = $("#month").val();
    var Year = $("#year").val();
    console.log(`${Date}/${Month}/${Year}`);
    let StartDate = `${Date} ${Month} ${Year}`;

    var Notes = $("#notes").val();
    console.log(Notes);

    let requestData = {

        "Name": Name,
        "profileImage": profileImage,
        "Gender": gender,
        "Department": arr,
        "Salary": Salary,
        "StartDate": StartDate,
        "Notes": Notes
    }
    alert(empId)
if(empId){
    $.ajax({
        type: "PUT",
        url: 'http://localhost:3000/employee/'+empId,
        data: JSON.stringify(requestData),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
             
            console.log("Data updated", response)
        }
    });
    }
    }
}


