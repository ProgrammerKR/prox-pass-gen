#!/usr/bin/env node

import readline from 'readline';
import crypto from 'crypto';

// Character sets
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{}<>?';

function generatePassword(length, useLower, useUpper, useNumbers, useSymbols) {
  let charset = '';
  if (useLower) charset += lower;
  if (useUpper) charset += upper;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  if (!charset) {
    console.error('Error: No character set selected.');
    process.exit(1);
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }

  return password;
}

const args = process.argv.slice(2);
const options = {
  length: 16,
  lower: true,
  upper: true,
  numbers: true,
  symbols: true
};

// CLI flags
args.forEach(arg => {
  if (arg.startsWith('--length=')) options.length = parseInt(arg.split('=')[1]);
  if (arg === '--no-lower') options.lower = false;
  if (arg === '--no-upper') options.upper = false;
  if (arg === '--no-numbers') options.numbers = false;
  if (arg === '--no-symbols') options.symbols = false;
  if (arg === '--help') {
    console.log(`
Usage: securepass [options]

Options:
  --length=<number>     Set password length (default: 16)
  --no-lower            Exclude lowercase letters
  --no-upper            Exclude uppercase letters
  --no-numbers          Exclude numbers
  --no-symbols          Exclude special characters
  --help                Show help
    `);
    process.exit(0);
  }
});

const finalPassword = generatePassword(
  options.length,
  options.lower,
  options.upper,
  options.numbers,
  options.symbols
);

console.log(`Generated Password: ${finalPassword}`);
