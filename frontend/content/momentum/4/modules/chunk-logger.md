---
lastUpdated: "03/26/2020"
title: "chunk_logger Module"
description: "Configuration Change This feature is available in Momentum 4 2 and later The chunk logger module provides a safe interface for logging asynchronously from Lua C and C Historically the paniclog has been used for low volume logging via print in Lua or ec mod debug log error in C..."
---

<a name="idp20135616"></a> 

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The chunk_logger module provides a safe interface for logging asynchronously from Lua, C, and C++. Historically, the `paniclog` has been used for low-volume logging via **print()** in Lua or **ec_mod_debug()**/**log_error()** in C/C++. However, logging to the `paniclog` is not suitable for general debug logging or more than occassional debug logging.

Logging to the `paniclog` in the scheduler thread (the main thread) can limit throughput and cause watchdog kills. The scheduler thread's job is to multiplex file descriptors and execute timed events, handing off time-consuming tasks to other threads. Logging to the `paniclog` involves disk I/O, and writing to the `paniclog` in the scheduler thread may block its execution for a long time, thereby holding up other tasks in the scheduler thread and decreasing throughput. If enough data is logged to the `paniclog` in the scheduler thread, it may become so unresponsive to the watchdog process that the watchdog timeout triggers. The chunk_logger module does not have this limitation.

### <a name="modules.chunk_logger.configuration"></a> Configuration

The chunk_logger is configured through a configuration file using a stanza such as:

<a name="example.chunk_logger"></a> 


```
chunk_logger chunk_logger1
{
  timestamp_format = "%m:%d:%H:%M:%S"
  destination = "/path/to/log/file"
  add_newline = "true"
}
```

In this example, the log file is written to `/path/to/log/file` and the `timestamp_format` specifies the timestamp in a **strftime()** format. In addition, **add_newline** enables you to specify whether a new line is added automatically to every item of data that is logged. It defaults to `true`.

The module is in the `msys.beta.chunk_logger_int` namespace:

`msys.beta.chunk_logger_int.log("Hello World!")`
### <a name="modules.chunk_logger.lua_interface"></a> Lua Interface

The module `msys.ts.chunk_logger` and the function `msys.ts.chunk_logger.log()` provides the Lua interface, as shown by the following example.:

<a name="example.chunk_logger.lua_interface"></a> 


```
require("msys.beta.chunk_logger_int")

...

msys.beta.chunk_logger_int.log()
```

### <a name="modules.chunk_logger.c_interface"></a> C Interface

The C interface uses Momentum's module hooks system to provide a callable hook point. `chunk_logger` provides an implementation of the hook point, as shown in the following example:

<a name="example.chunk_logger.c_interface"></a> 


```
#include <module-hooks.h>
#include "hooks/chunk_logger/log.h"

...

call_chunk_logger_log_hook("default", buf, buflen);
```

### Note

"default" is specified here as the name of the log destination. Currently `chunk_logger` only supports one log destination, so this field is ignored. It is recommended that you pass "default" until different log destinations are supported.