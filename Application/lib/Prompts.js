const managerQuestions = [
    {
        type : "input",
        name : "name",
        message : "What's your name?"
    },
    {
        type : "input",
        name : "id",
        message : "What's your employee ID?"
    },
    {
        type : "input",
        name : "email",
        message : "What's your email adress?"
    },
    {
        type : "input",
        name : "officeNumber",
        message : "What's your office number?"
    }
];

const engineerQuestions = [
    {
        type : "input",
        name : "name",
        message : "What's their name?"
    },
    {
        type : "input",
        name : "id",
        message : "What's their employee ID?"
    },
    {
        type : "input",
        name : "email",
        message : "What's their email adress?"
    },
    {
        type : "input",
        name : "github",
        message : "What's their Github Username?"
    }
];

const internQuestions = [
    {
        type : "input",
        name : "name",
        message : "What's their name?"
    },
    {
        type : "input",
        name : "id",
        message : "What's their employee ID?"
    },
    {
        type : "input",
        name : "email",
        message : "What's their email adress?"
    },
    {
        type : "input",
        name : "school",
        message : "What's their school?"
    }
]

const questions = {
    managerQuestions : managerQuestions,
    engineerQuestions : engineerQuestions,
    internQuestions : internQuestions,
}

module.exports = questions;