const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/Prompts")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function init(){
    console.log("Welcome to the team generator. Let's start with your info, Mr. Manager.")
    inquirer.
        prompt([
            {
                type: "input",
                name: "name",
                message: "What's your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What's your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What's your email adress?"
            },
            {
                type: "list",
                name: "license",
                message: "What kind of license should your project have?",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            },
        ])
}

inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What's your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What's your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email adress?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    }
])
.then(function(response){
    const filename = "README.md";
    const generatedREADME =  generatedMarkdown(response)
    fs.writeFileSync(filename, generatedMarkdown(response), function(err){
        if (err) {
            return console.log(err);
        }

        console.log("README.md generated")
    });
});


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
