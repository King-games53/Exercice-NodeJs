// const firstname = process.argv[2];
// const lastname = process.argv[3];
// const domain = process.argv[4];
//
// console.log(firstname, lastname, domain);

const ArgumentParser = require('argparse').ArgumentParser;
const fs = require ('fs');
const path = require ('path');
const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-f', '--firstname' ],
    {
        help: 'Firstname'
    }
);

parser.addArgument(
    [ '-l', '--lastname' ],
    {
        help: 'Lastname'
    }
);

parser.addArgument(
    [ '-d', '--domain' ],
    {
        help: 'Domain (ex: domain.tld)'
    }
);

const args = parser.parseArgs();

const symbols = ['.', '-', '_'];
console.log(args.firstname, args.lastname, args.domain);

const listMailsFirstnameLastname = symbols.map(symbol => `${args.firstname}${symbol}${args.lastname}@${args.domain}`);
const listMailsLastnameFirstname = symbols.map(symbol => `${args.lastname}${symbol}${args.firstname}@${args.domain}`);
const listMailsLFirstname = symbols.map(symbol => `${args.lastname.substring(0, 1)}${symbol}${args.firstname}@${args.domain}`);
const listMails = [...listMailsFirstnameLastname, ...listMailsLastnameFirstname, ...listMailsLFirstname];

let string = '';

listMails.forEach(mail => {
    string += `${args.firstname}, ${args.lastname}, ${args.domain}, ${mail}\n`;
});

const csvFile = path.join(__dirname, 'email.csv');


fs.writeFile(csvFile, string, (err) => {
    if (err) throw err;
console.log('The file has been saved!');
});