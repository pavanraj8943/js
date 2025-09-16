function frmsubmit(event) {
    event.preventDefault();
    let arr = JSON.parse(localStorage.getItem(`name`)) || [];
    let name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    let mark = document.getElementById(`mark`).value;
    let course = document.getElementById(`course`).value;

    let student = {Sname:name,Sage:age,Smark:mark,Scourse:course}

    arr.push(student);
    localStorage.setItem("name",JSON.stringify(arr));
}
