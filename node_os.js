/**
 * Node.js OS Modülü (OS Modülü Kaynak Kodları: https://github.com/nodejs/node/blob/v19.6.0/lib/os.js);
   Node.js OS Modülü, işletim sistemiyle ilgili bilgiler almamızı sağlayan yardımcı fonksiyonlar ve özellikler sağlar. 
   İşletim sisteminin bilgilerini OS modülü ile alabiliriz. 

   Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

const os = require("node:os");

/* 1- os.availableParallelism()

Bir programın kullanması gereken varsayılan tahmini paralellik miktarını, her zaman sıfırdan büyük olmak üzere bir integer değer olarak döner. */

/* 2- os.arch() 

Node.js ikili dosyasının (binary) derlendiği işletim sisteminin (mevcut işletim sistemi) CPU mimarisini string olarak döner. 
Döneceğin olası değerler: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x' ve 'x64'.
*/
const osArch = os.arch();
console.log(osArch);

/* 3- os.contants()

İşletim sistemine ait özgü sabitleri (hata kodları, işlem sinyalleri gibi) bir obje olarak döner. Örnek olarak arm64:

[Object: null prototype] {
  UV_UDP_REUSEADDR: 4,
  dlopen: [Object: null prototype] {
    RTLD_LAZY: 1,
    RTLD_NOW: 2,
    RTLD_GLOBAL: 8,
    RTLD_LOCAL: 4
  },
  errno: [Object: null prototype] {
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 48,
    EADDRNOTAVAIL: 49,
    EAFNOSUPPORT: 47,
    EAGAIN: 35,
    EALREADY: 37,
    EBADF: 9,
    EBADMSG: 94,
    EBUSY: 16,
    ECANCELED: 89,
    ECHILD: 10,
    ECONNABORTED: 53,
    ECONNREFUSED: 61,
    ECONNRESET: 54,
    EDEADLK: 11,
    EDESTADDRREQ: 39,
    EDOM: 33,
    EDQUOT: 69,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EHOSTUNREACH: 65,
    EIDRM: 90,
    EILSEQ: 92,
    EINPROGRESS: 36,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISCONN: 56,
    EISDIR: 21,
    ELOOP: 62,
    EMFILE: 24,
    EMLINK: 31,
    EMSGSIZE: 40,
    EMULTIHOP: 95,
    ENAMETOOLONG: 63,
    ENETDOWN: 50,
    ENETRESET: 52,
    ENETUNREACH: 51,
    ENFILE: 23,
    ENOBUFS: 55,
    ENODATA: 96,
    ENODEV: 19,
    ENOENT: 2,
    ENOEXEC: 8,
    ENOLCK: 77,
    ENOLINK: 97,
    ENOMEM: 12,
    ENOMSG: 91,
    ENOPROTOOPT: 42,
    ENOSPC: 28,
    ENOSR: 98,
    ENOSTR: 99,
    ENOSYS: 78,
    ENOTCONN: 57,
    ENOTDIR: 20,
    ENOTEMPTY: 66,
    ENOTSOCK: 38,
    ENOTSUP: 45,
    ENOTTY: 25,
    ENXIO: 6,
    EOPNOTSUPP: 102,
    EOVERFLOW: 84,
    EPERM: 1,
    EPIPE: 32,
    EPROTO: 100,
    EPROTONOSUPPORT: 43,
    EPROTOTYPE: 41,
    ERANGE: 34,
    EROFS: 30,
    ESPIPE: 29,
    ESRCH: 3,
    ESTALE: 70,
    ETIME: 101,
    ETIMEDOUT: 60,
    ETXTBSY: 26,
    EWOULDBLOCK: 35,
    EXDEV: 18
  },
  signals: [Object: null prototype] {
    SIGHUP: 1,
    SIGINT: 2,
    SIGQUIT: 3,
    SIGILL: 4,
    SIGTRAP: 5,
    SIGABRT: 6,
    SIGIOT: 6,
    SIGBUS: 10,
    SIGFPE: 8,
    SIGKILL: 9,
    SIGUSR1: 30,
    SIGSEGV: 11,
    SIGUSR2: 31,
    SIGPIPE: 13,
    SIGALRM: 14,
    SIGTERM: 15,
    SIGCHLD: 20,
    SIGCONT: 19,
    SIGSTOP: 17,
    SIGTSTP: 18,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGURG: 16,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SIGVTALRM: 26,
    SIGPROF: 27,
    SIGWINCH: 28,
    SIGIO: 23,
    SIGINFO: 29,
    SIGSYS: 12
  },
  priority: [Object: null prototype] {
    PRIORITY_LOW: 19,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_NORMAL: 0,
    PRIORITY_ABOVE_NORMAL: -7,
    PRIORITY_HIGH: -14,
    PRIORITY_HIGHEST: -20
  }
}
*/

const osConstants = os.constants;
console.log(osConstants);

/* 4- os.cpus()

Her bir mantıksal işlemci çekirdeği için (logical CPU core) bazı bilgiler içeren bir array döner. Her bir işlemciye ait bilgiler array içinde
obje olarak döner. Örnek olarak 4 işlemcili bir işletim sisteminde aşağıdaki dizi dönecektir (model string olarak, speed number olarak, times obje olarak döner):

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

Not: Nice değerleri yalnızca POSIX içindir. Windows'ta, tüm işlemcilerin nice değerleri her zaman 0'dır.
Not-2: os.cpus().length, bir uygulamanın kullanabileceği paralellik miktarını hesaplamak için kullanılmamalıdır. Bu amaç için os.availableParallelism()'i kullanın.
*/

const osCpus = os.cpus();
console.log(osCpus);

/* 5- os.devNull

/dev/null Unix benzeri işletim sistemlerinin aygıtlar dizininde (/dev) bulunan bir stream dosyasıdır. 
Bu belgeye yazılan her tür ve herhangi miktarda olan veriyi sistem yok sayar ve yazan işleme EOF gönderilir. 
Bu açıdan /dev/null bir kara deliğe benzetilir. Yaygın kullanımlarından biri uygulamaların istenmeyen çıktılarını, 
yönlendirme aracılığı ile, devre dışı bırakmaktır.

Nodejs'de os.devNull kullanımında işletim sistemi windows için "\\.\nul" döner, POSIX için "/dev/null" döner.
*/

const osDevNull = os.devNull;
console.log(osDevNull);