var inquirer = require('inquirer');
var fs = require('fs');
var createReadme = ({title, Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions})=>
`
##${title} 
##${Description}
##${TableOfContents}
##${Installation}
##${Usage}
##${License}
##${Contributing}
##${Tests}
##${Questions}
`

inquirer
     .prompt([
          {
               type: 'input',
               name: 'Title',
               message: 'What is the title of your project?',
             },
             {
               type: 'input',
               name: 'Description',
               message: 'What is the description of your project?',
             },

     ])
     .then((answers) => {
          const readmeContent = createReadme(answers);      
          fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
          );
        });