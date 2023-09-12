let stat = document.querySelector('h5');
let btn = document.querySelector('#add');

let check=0;

btn.addEventListener('click',function(){
    if(check == 0){
    stat.innerHTML = "Friends";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "grey"
    stat.style.color = "green"
    check=1;
    }
    else {
        stat.innerHTML = "Stranger";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "cadetblue"
        stat.style.color = "red"
        check=0;
    }
})