
function nodeChanger()
{
    if(validate())/**/
    {
        var fname = document.getElementById("fn").value;
        var lname = document.getElementById("ln").value;
        var phno = document.getElementById("pn").value;
        var email = document.getElementById("em").value;
        var city = document.getElementById("city").value;
        var cl=document.getElementById("cl").value;
        var mj=document.getElementById("major").value;
        var gyear=document.getElementById("year").value;
 


        // Create a new row and cells
        var table = document.getElementById("modifiable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);




        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = phno;
        cell4.innerHTML = email;
        cell5.innerHTML = city;
        cell6.innerHTML = cl;
        cell7.innerHTML = mj;
        cell8.innerHTML = gyear;

  
    


    }

}
function validate() {
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var phno = document.getElementById("pn").value;
    var email = document.getElementById("em").value;
    var hno = document.getElementById("hno").value;
    var stno = document.getElementById("stno").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

 
  //res=document.getElementById("cv");
    var cl=document.getElementById("cl").value;
    //lv=document.getElementById("level");
    var sch=document.getElementById("school").value;
    var mj=document.getElementById("major").value;
    var yr=document.getElementById("year").value;
    var hist=document.getElementById("ehis").value;
    var cmp=document.getElementById("company").value;
    var emp=document.getElementById("edate").value;

    var resp=document.getElementById("responsibilities").value;
    var skl=document.getElementById("skills").value;
    //cert=document.getElementById("certifications");
    var dt=document.getElementById("date").value;
    var sched=document.getElementById("schedule").value;
    var refn=document.getElementById("refname").value;
    var refc=document.getElementById("refcontact").value;
    var relat=document.getElementById("relationship").value;
    var ques=document.getElementById("Questions").value;

    var termscheckbox = document.getElementById('terms');
    var privacycheckbox = document.getElementById('privacy');


    // Check if any field is empty
    if (!fname || !lname || !phno || !email || !hno || !stno || !city || !state || !zip  || !cl  || !sch || !mj || !yr || !hist || !cmp || !emp ||!resp || !skl || !dt || !sched || !refn || !refc || !relat || !ques ) {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate phone number
    var phonePattern = /^\d{10}$/;
    if (!phno.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Email validation (you may want to use a more comprehensive email validation pattern)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if(!termscheckbox.checked){
        alert('Kindly agree to terms and conditions')
        return false;
    }

    if(!privacycheckbox.checked){
        alert('Kindly agree to our privacy policy')
        return false;
    }

    // If all validations pass, return true
    return true;
}