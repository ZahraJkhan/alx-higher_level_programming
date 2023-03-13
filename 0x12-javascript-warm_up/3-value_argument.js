#!/usr/bin/node
/*
   A js script that only prints the first argument passed to it on the
   Terminal.
   Commandline arguments in js is made possible using the process.argv
   which is an array that contains all arguments of the CLI.
*/
const value = process.argv[2];
if (value === undefined) {
  console.log('No argument');
} else {
  console.log(value);
}
