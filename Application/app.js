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
const { get } = require("http");

let employees = [];

getMember();

function getMember(){

    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Who's the next team member you'd like to add?",
            choices: ["Manager", "Engineer", "Intern", "No more team members"]
        }
    ]).then(response => {
        if(response.nextEmployee === "Manager") {
            askManager();
        }
        if(response.nextEmployee === "Engineer") {
            askEngineer();
        }else if(response.nextEmployee === "Intern") {
            askIntern();
        }else if (response.nextEmployee === "No more team members") {
            fs.writeFileSync("./output/team.html", render(employees), function(err) {

                if (err) {
                    return console.log(err);
                }
                  
                console.log("HTML Rendered in output folder!");
                  
                });
        }
    })
};

function askManager() {
    let manager;
    inquirer
        .prompt(questions.managerQuestions)
        .then(response => {
            let manager;
            manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(manager);
            getMember();
        });
}

function askEngineer() {
    let engineer;
    inquirer
        .prompt(questions.engineerQuestions)
        .then(response => {
            engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer)
            getMember();
        });
}

function askIntern() {
    let intern;
    inquirer
        .prompt(questions.internQuestions)
        .then(response => {
            intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern)
            getMember();
        });
}