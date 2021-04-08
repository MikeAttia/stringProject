let passowrd = 'MichaelAt';
let enteredPass = 'MichaelAt';
var messaGe = 'orem ipsum dolor sit amet, consectetur adipiscing elit. '


for (let i = 0; i < 3; i++) {
    {
        if (enteredPass == passowrd) {
            console.log('signed in');
            console.log(messaGe);
            break;
        }

        else {
            console.log('wrong password,try again');

        }
    }
    console.log(messaGe.replaceAll( 'orem ipsum dolor sit amet, consectetur adipiscing elit.','$%###$$%*^&^$#%#$%#$%#%%#@%#$'))
}

     
