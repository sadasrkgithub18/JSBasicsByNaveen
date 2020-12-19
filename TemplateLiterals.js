const msg = 'This is my first JavaScript code';
const msg2 = 'This is my \nfirst JavaScript code';
const msg3 = 'This is my \n' +
             ' \'first\' JavaScript code';

console.log(msg3);


// literals
// Object  = {}
// Boolean = true, false
// String = ' ', " "
// ES6: Template Literals --> Back tick chars --> ` `

let name = 'Tom';

let product = function()
{
    return 'Apple';
}

const mailBody = `Hi ${name} ${9 + 9} ${product()},
This is naveen here!
Thanks for adding me to the 'Mail'  list


have a great day

Regards,
SRK
`

console.log(mailBody);


