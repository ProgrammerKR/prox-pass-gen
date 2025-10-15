#!/usr/bin/env node

/**
 * ProxPass - Advanced Random Password Generator CLI
 * Author: ProgrammerKR
 * Repository: https://github.com/ProgrammerKR/prox-pass-gen
 */

import crypto from 'crypto';
import clipboard from 'clipboardy';
import chalk from 'chalk';

// Character sets
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{}<>?';

// 🧠 Generate a secure random password
function generatePassword(length, useLower, useUpper, useNumbers, useSymbols) {
  let charset = '';
  if (useLower) charset += lower;
  if (useUpper) charset += upper;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  if (!charset) {
    console.error(chalk.red('❌ Error: No character set selected.'));
    process.exit(1);
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// 🔐 Password strength meter
function calculateStrength(password) {
  let score = 0;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;

  switch (score) {
    case 5:
      return chalk.green('🔥 Very Strong');
    case 4:
      return chalk.green('💪 Strong');
    case 3:
      return chalk.yellow('🟡 Moderate');
    case 2:
      return chalk.red('⚠️ Weak');
    default:
      return chalk.red('❌ Very Weak');
  }
}

// ⚙️ Default options
const options = {
  length: 16,
  lower: true,
  upper: true,
  numbers: true,
  symbols: true,
  copy: false
};

// 🧩 Parse CLI arguments
const args = process.argv.slice(2);
args.forEach(arg => {
  if (arg.startsWith('--length=')) options.length = parseInt(arg.split('=')[1]);
  if (arg === '--no-lower') options.lower = false;
  if (arg === '--no-upper') options.upper = false;
  if (arg === '--no-numbers') options.numbers = false;
  if (arg === '--no-symbols') options.symbols = false;
  if (arg === '--copy') options.copy = true;

  if (arg === '--help' || arg === '-h') {
    console.log(chalk.cyanBright(`
🔐 ProxPass - High Security Password Generator

Usage:
  proxpass [options]

Options:
  --length=<number>     Set password length (default: 16)
  --no-lower            Exclude lowercase letters
  --no-upper            Exclude uppercase letters
  --no-numbers          Exclude numbers
  --no-symbols          Exclude special characters
  --copy                Copy the generated password to clipboard
  --help, -h            Show help menu

Examples:
  proxpass --length=20 --no-symbols
  proxpass --length=24 --copy
`));
    process.exit(0);
  }
});

// 🧮 Generate password
const finalPassword = generatePassword(
  options.length,
  options.lower,
  options.upper,
  options.numbers,
  options.symbols
);

// 💪 Evaluate password strength
const strength = calculateStrength(finalPassword);

// 🎨 Output results
console.log(chalk.bold.cyan('\n🔑 Generated Password: ') + chalk.bold.yellow(finalPassword));
console.log(chalk.bold.cyan('🧠 Strength: ') + strength);
console.log(chalk.bold.cyan('📏 Length: ') + chalk.white(`${options.length} characters`));

// 📋 Copy to clipboard (optional)
if (options.copy) {
  try {
    await clipboard.write(finalPassword);
    console.log(chalk.green('📋 Copied to clipboard!'));
  } catch (err) {
    console.error(chalk.red('❌ Failed to copy to clipboard:'), err.message);
  }
}

console.log(chalk.gray('\n✅ ProxPass by ProgrammerKR\n'));
