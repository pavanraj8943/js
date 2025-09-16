function staff(event) {
        event.preventDefault();
    let arr = JSON.parse(localStorage.getItem(`name`)) || [];
    let name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    let depertment = document.getElementById(`depertment`).value;
    let salary = document.getElementById(`salary`).value;
    let data = {name:name,age:age,depertment:depertment,salary:salary}
    arr.push(data);
    localStorage.setItem("name", JSON.stringify(arr));
}
function Show() {
    let arr = JSON.parse(localStorage.getItem(`name`)) || [];
    let 
}