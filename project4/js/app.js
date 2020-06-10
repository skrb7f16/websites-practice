console.log('welcome to my travel');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let submit = document.getElementById('submit')
valid=[false,false,false]

name.addEventListener('blur', ()=>{
    let regex=/^[a-z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    if(regex.test(str)){
        name.classList.remove('is-invalid');
        name.classList.add('is-valid')
        valid[0]=true;
    }
    else{
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
        valid[0]=false;
    }
})
phone.addEventListener('blur', ()=>{
    let regex=/^([0-9]){10}$/;
    let str=phone.value;
    if(regex.test(str)){
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
        valid[1]=true;
    }
    else{
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        valid[1]=false;
    }
})
email.addEventListener('blur', ()=>{
    let regex=/^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid')
        valid[2]=true;
    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        valid[2]=false;
    }
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(valid[0] & valid[1] & valid[2]){
       let s=`<div class="alert alert-success alert-dismissible fade show" role="alert" id="success">
<strong>Success</strong> Your Car has been booked
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>
</div>`;
        document.getElementById('alert').innerHTML=s;
    }
    else{
        s=`<div class="alert alert-danger alert-dismissible fade show" role="alert" id="success">
<strong>Failure</strong> Your Car has Not been booked Please check the entries.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>
</div>`;
        document.getElementById('alert').innerHTML=s;
    }
})