let form = document.getElementById("task")
form.addEventListener("submit", (event) => {
    event.preventDefault()


    let arr = JSON.parse(localStorage.getItem("name")) || [];



    let name = document.getElementById(`name`).value;
    let age = document.getElementById("age").value;
    let dept = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;


    let allstaff = { name: name, age: age, dept: dept, salary: salary }
    arr.push(allstaff);
    localStorage.setItem("task", JSON.stringify(arr));
});

function show() {
    let arr = JSON.parse(localStorage.getItem("name"));
    let data =document.getElementById("display");
    showdata = ""
    arr.forEach((a, b) => {

        let newshow = `<tr>
             <th>${a.name}</th>
             <th>${a.age}</th>
             <th>${a.dept}</th>
             <th>${a.salary}</th>
</tr>`
showdata +=newshow;

    });
data.innerHTML=showdata;


}
