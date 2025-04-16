# Secure-Pass Generator

A high-security random password generator CLI tool.

## Features

- Custom password length
- Optional inclusion of lowercase, uppercase, numbers, symbols
- Uses `crypto` for secure random generation
- Lightweight, no external dependencies

## Installation

```bash
npm install -g secure-pass-gen
```

## Usage

```bash
secure-pass [options]
```

### Options

| Option           | Description                        |
|------------------|------------------------------------|
| `--length=20`     | Set password length (default: 16) |
| `--no-lower`      | Exclude lowercase letters         |
| `--no-upper`      | Exclude uppercase letters         |
| `--no-numbers`    | Exclude numbers                   |
| `--no-symbols`    | Exclude special characters        |
| `--help`          | Show help                         |

## Example

```bash
secure-pass --length=32 --no-symbols
```

## License

MIT
