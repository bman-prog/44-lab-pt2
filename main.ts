function askName () {
    nameToFind = game.askForString("Enter a name")
    for (let value of NAMES) {
        if (nameToFind.compare(value) == 0) {
            message = "The message was successful"
            break;
        } else if (nameToFind.compare(value) == 1) {
        	
        } else {
            message = "The message was NOT successful"
            break;
        }
    }
    game.splash(message)
}
let message = ""
let nameToFind = ""
let NAMES: string[] = []
NAMES = [
"abbie",
"boris",
"chan",
"david",
"henry",
"isaac",
"jeff",
"ken",
"leo",
"max"
]
askName()
