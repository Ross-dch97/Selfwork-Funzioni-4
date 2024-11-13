

let str = 'i topi non avevano nipoti'

str = str.replace(/\W/g, "");

let splitted = str.split('').reverse().join('');

if (str == splitted) {
    console.log('true');
    
}else{
    console.log('false');
    
}







