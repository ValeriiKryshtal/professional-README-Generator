function generateMarkdown(data) {
return `# ${data.title}
## Licensing:
[![license](https://img.shields.io/badge/license-${data.License}-blue)](https://shields.io)
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)
## Description:
${data.Description}
## Installation:
${data.Installation}
## Usage:
${data.Usage}
## License:
${data.License}
## Contribution:
${data.Contributing}
## Testing:
${data.Tests}
## Additional Info:
If you have any questions please feel free to contact me by:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email};`};

module.exports = generateMarkdown;
