[![generator-eip-ci Actions Status](https://github.com/abdelhamidbakhta/generator-eip/workflows/generator-eip-ci/badge.svg)](https://github.com/abdelhamidbakhta/generator-eip/actions)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/abdelhamidbakhta/tx-api-gw/blob/master/LICENSE)
[![sonar-quality-gate][sonar-quality-gate]][sonar-url][![sonar-bugs][sonar-bugs]][sonar-url] [![sonar-vulnerabilities][sonar-vulnerabilities]][sonar-url]

# EIP Generator

![EIP Generator Demo](demo/demo-eip-generator.gif)

## What is it ?
EIP generator is a Yeoman generator to kickstart Ethereum Improvement Proposal.

The EIP process is described at https://eips.ethereum.org/EIPS/eip-1 .

The output files follow the [official EIP template](https://raw.githubusercontent.com/ethereum/EIPs/master/eip-template.md). 

## How to use it ?

### Install Prerequisites

- [npm](https://www.npmjs.com/) package manager
- [yeoman](https://yeoman.io/)

#### Install Yeoman
```shell script
npm install -g yo
```

### Install the generator

### Install from source

```shell script
npm install -g
```

### Install from package manager

```shell script
npm install -g generator-eip
```

### Run the generator

```shell script
yo  eip
```

[sonar-url]: https://sonarcloud.io/dashboard?id=abdelhamidbakhta_generator-eip
[sonar-quality-gate]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-eip&metric=alert_status
[sonar-coverage]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-eip&metric=coverage
[sonar-bugs]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-eip&metric=bugs
[sonar-vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-eip&metric=vulnerabilities

