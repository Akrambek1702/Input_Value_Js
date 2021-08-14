// let ism = prompt('Ismingizni kiriting!');


// document.querySelector('#click').addEventListener('mouseout', function(){
//     console.log(ism);
// })  

// document.querySelector('#click').addEventListener('mouseenter', function(){
//     console.log('sichqoncha contentda');
// })

// document.querySelector('#click').addEventListener('mouseout', function(){
//     console.log('sichqoncha contentdan chiqdi');
// })


// document.querySelector('#click').addEventListener('click', function(){
//     let name =document.querySelector('#name').value;
//     console.log(name);
//     document.querySelector('#name').value = ' ';
// })

// document.querySelector('#name').addEventListener('change', function(){
//   console.log(this.value);
//   this.value = '';
// })

// document.getElementById('color').addEventListener('input', function(){
//    document.querySelector('#body').style = 'background:' + this.value;
// });


// document.getElementById('input').addEventListener('change', function(){
//     document.querySelector('#img').style = 'width:' + '#input'+ 'opacity:';
//     // console.log();
// })

document.getElementById('input').addEventListener('input', function(){
    document.querySelector('#img').style = 'opacity:' + this.value/100;
})    
 