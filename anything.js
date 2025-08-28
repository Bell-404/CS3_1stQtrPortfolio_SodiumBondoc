// gma - 7
// abs cbn - 2
// ibc - 13
// ptv - 4
// tv5 - 5
/* require -> #include in C++
readline -> library


*/

// rli keeps waiting for a line
const rl = require('readline') // importing a module from a library of functions     like the section
const rli = rl.createInterface({ // contains a function we need, lets the OS talk to the terminal. "createInterface" allows you to type in the terminal like in C++    like the student
    input: process.stdin, //input interface of javascript    student creates interface
})

/*
can also be :
require('readline').createInterface({
    input: process.stdin,
}).on('line', give_channel_name)
*/


rli.on('line', give_channel_name) // line -> series of characters typed + enter

function give_channel_name(num) {
    switch (num) {
        case '7':
            console.log("gm" + "a")
            break
        case '2':
            console.log("abs", "cbn")
            break
        case '13':
            var last_letter = "C"
            console.log(`IB${last_letter}`)
            break
        case '4':
            console.log('PTV')
            break
        case '5':
            console.log('TV5')
            break
        default:
            console.log('Invalid Channel Number')
    }
    rli.close()
}