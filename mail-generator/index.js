// const firstname = process.argv[2];
// const lastname = process.argv[3];
// const domain = process.argv[4];
//
// console.log(firstname, lastname, domain);

const ArgumentParser = require('argparse').ArgumentParser;

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

console.log(args.firstname, args.lastname, args.domain);