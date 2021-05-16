const fs =require("fs");
const inquirer = require("inquirer");
const HTMLOutput = require("./src/template");
const Manager = require("./lib/manager");

const group = [];

function writeHTML(cards) {
    fs.writeFileSync("./dist/team.html", HTMLOutput(cards), "utf-8");
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter their employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their email address."
        },
        {
            type: "input",
            name: "github",
            message: "What is their GitHub username?"
        },
        {
            type: "input",
            name: "team",
            message: "Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Engineer", "Intern", "Finish building your team"]
        }
    ]).then((response) => {
        const engineer = {"name": response.name, "id": response.id, "email": response.email, "github": response.github, "role": "engineer"}
        group.push(engineer);
        if(response.team === "Engineer") {
            addEngineer();
        }else if(response.team === "Intern") {
            addIntern();
        }else if(response.team === "Finish building your team") {
            writeHTML(group);
        }
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter their employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their email address."
        },
        {
            type: "input",
            name: "school",
            message: "What school are they from?"
        },
        {
            type: "input",
            name: "team",
            message: "Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Engineer", "Intern", "Finish building your team"]
        }
    ]).then((response) => {
        const intern = {"name": response.name, "id": response.id, "email": response.email, "school": response.school, "role": "intern"}
        group.push(intern);
        if(response.team === "Engineer") {
            addEngineer();
        }else if(response.team === "Intern") {
            addIntern();
        }else if(response.team === "Finish building your team") {
            writeHTML(group);
        }
    })
}

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter their employee ID."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter their email address."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"
    },
    {
        type: "input",
        name: "team",
        message: "Would you like to add an engineer, add an intern, or finish building the team?",
        choices: ["Engineer", "Intern", "Finish building your team"]
    }
]).then((response) => {
    const manager = {"name": response.name, "id": response.id, "email": response.email, "officeNumber": response.officeNumber, "role": "manager"}
    group.push(manager);
    if(response.team === "Engineer") {
        addEngineer();
    }else if(response.team === "Intern") {
        addIntern();
    }else if(response.team === "Finish building your team") {
        writeHTML(group);
    }
})