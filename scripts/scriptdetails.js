
$(document).ready(function () {
    console.log("document entered");
   $.ajax({
    url:'http://localhost:3000/employee',
    method:'GET',
    contentType: "application/json; charset=utf-8",
    dataType:'json',
    
    success:function(result,textStatus,xhr){
        var trHTML='';

        $.each(result,function(i,item){

            trHTML+=`<tr class="tableentrytype"><td class="nameform">`+`<img src='`+item.profileImage+`'style="border-radius: 50%;position: relative;;top:4px" height=20 width="20" class="img1">`+item.Name+`</td><td class="genderform">`+item.Gender+`</td><td class="departmentform">`+item.Department+`</td><td class="salaryform">`+item.Salary+`</td><td class="startDateform">`+item.StartDate+`</td><td><button  type="button" onclick="deleteEmployee(${(item.id)})" class="deletingButton"><img src="../Assets/Screenshot 2023-08-18 103047.jpg" alt="logo" width=19px
            height=19px ></button>
        <button  type="button" onclick="editEmployee(${(item.id)})" class="editingbutton"><img src="../Assets/Screenshot 2023-08-18 103015.jpg" alt="logo" width=18px height=18px></button></td></tr>`;
            
        });
        console.log(trHTML);
       $('#Empdetails').append(trHTML);
    },
    error:function(xhr,textStatus,errorthrown){
        console.log("Error in operation");
    }
})
})

function deleteEmployee(empId){
    $.ajax({
    url:'http://localhost:3000/employee/'+empId,
    type:'DELETE',
    dataType:'json',
    success:function(result,textStatus,xhr){
        alert("Deleted data");
    },
    error:function(xhr,textStatus,errorthrown){
        console.log("Error in operation");
    }
    })
}
function editEmployee(empId){
    url='Empform.html'
     location.href=`${url}?Id=${empId}#execute`;
 }

 function adduser(){
    url='Empform.html'
     location.href=`${url}`;
 }

