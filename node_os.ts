/**
 * The usage of the Node.js OS module
 * 
 * The Node.js OS Module provides utility functions and properties that allow us to get information 
 * about the operating system. We can use the OS module to gather system-related data
 * 
 * @version 1.0.0
 * @license MIT License
 * @author Mert Özdemir <mertozdemir2026@outlook.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing OS module from Nodejs
import os from "os";

/* 1. os.availableParallelism()

Returns the estimated default parallelism a program should use, always as an integer greater than zero. */

/* 2. os.arch() 

Returns the CPU architecture of the operating system on which the Node.js binary was compiled, as a string. 
Possible returned values: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.
*/
const osArch: string = os.arch();
console.log(osArch);

/* 3. os.constants()

Returns an object containing OS-specific constants such as error codes and signal numbers. Example for arm64:

[Object: null prototype] {
  UV_UDP_REUSEADDR: 4,
  dlopen: {
    RTLD_LAZY: 1,
    RTLD_NOW: 2,
    RTLD_GLOBAL: 8,
    RTLD_LOCAL: 4
  },
  errno: {
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 48,
    // ... more error codes
  },
  signals: {
    SIGHUP: 1,
    SIGINT: 2,
    SIGQUIT: 3,
    // ... more signal numbers
  },
  priority: {
    PRIORITY_LOW: 19,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_NORMAL: 0,
    // ... more priority levels
  }
}
*/

const osConstants = os.constants;
console.log(osConstants);

/* 4. os.cpus()

Returns an array of objects that contains information about each logical CPU core.
For example, a system with 4 CPUs might return:
[
  {
    model: 'Apple M1',
    speed: 24,
    times: { user: 12413412, nice: 0, sys: 12414124, idle: 124124, irq: 0 }
  },
  {
    model: 'Apple M1',
    speed: 24,
    times: { user: 1241241241, nice: 0, sys: 1412412412, idle: 32523523, irq: 0 }
  },
  {
    model: 'Apple M1',
    speed: 24,
    times: { user: 124124124, nice: 0, sys: 214124214, idle: 235235, irq: 0 }
  },
  {
    model: 'Apple M1',
    speed: 24,
    times: { user: 124124124, nice: 0, sys: 214124214, idle: 235235, irq: 0 }
  },
]

Note: 'Nice' values are only available on POSIX systems. On Windows, all CPUs have a nice value of 0.
Note-2: Do not use os.cpus().length to calculate parallelism for applications. Use os.availableParallelism() for that purpose.
*/

const osCpus: os.CpuInfo[] = os.cpus();
console.log(osCpus);

/* 5. os.devNull

/dev/null is a special file in Unix-like operating systems found in the /dev directory. 
Any data written to this file is discarded by the system, and the process writing to it receives an EOF (end-of-file) signal. 
In this sense, /dev/null can be thought of as a black hole. A common use case is to disable unwanted output from applications 
via redirection.

In Node.js, the value returned by os.devNull is '\\.\nul' for Windows and '/dev/null' for POSIX systems.
*/
const osDevNull: string = os.devNull;
console.log(osDevNull);
