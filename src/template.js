function generateHTMLWrapper(group) {
    var HTMLWrapper = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header>
    <h1>Our Team Members</h1>
    </header>
    ${
        group.map(employee => {
            return `
            <div class="card">
            <div class="card-body">
            <div id="manager-card">
            <h2>${employee.name}</h2>
            <p>${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>${employee.officeNumber}</p>
            </div>
            </div>
            </div>
            `
        }).join("")
    }
    ${
        group.map(employee => {
            return `
            <div class="card">
            <div class="card-body">
            <div id="engineer-card">
            <h2>${employee.name}</h2>
            <p>${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>${employee.github}</p>
            </div>
            </div>
            </div>
            `
        }).join("")
    }
    ${
        group.map(employee => {
            return `
            <div class="card">
            <div class="card-body">
            <div id="intern-card">
            <h2>${employee.name}</h2>
            <p>${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>${employee.school}</p>
            </div>
            </div>
            </div>
            `
        }).join("")
    }
    </body>
    </html>
    `
}