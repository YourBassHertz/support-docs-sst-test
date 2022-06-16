---
lastUpdated: "03/26/2020"
title: "io_wrapper Functions"
description: "Table of Contents io wrapper addref Add a reference to the specified io object io wrapper async close Close an IO wrapper deprecated io wrapper async destroy schedules an io wrapper destroy in the IO thread pool if you're not in the scheduler thread you can use io wrapper destroy..."
---

              
| Name                                                                                                                                  | Description                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| [io_wrapper_addref](/momentum/3/3-api/apis-io-wrapper-addref)                                     | Add a reference to the specified io_object                                                                                           |
| [io_wrapper_async_close](/momentum/3/3-api/apis-io-wrapper-async-close)                           | Close an IO wrapper (deprecated)                                                                                                     |
| [io_wrapper_async_destroy](/momentum/3/3-api/apis-io-wrapper-async-destroy)                       | schedules an io_wrapper_destroy in the IO thread pool if you're not in the scheduler thread, you can use io_wrapper_destroy directly |
| [io_wrapper_clone](/momentum/3/3-api/apis-io-wrapper-clone)                                       | Duplicates an io_object, making it an independent cursor on the stream                                                               |
| [io_wrapper_close](/momentum/3/3-api/apis-io-wrapper-close)                                       | Close an IO wrapper (deprecated)                                                                                                     |
| [io_wrapper_copy_memory](/momentum/3/3-api/apis-io-wrapper-copy-memory)                           | Creates a copy of a memory buffer and returns a handle to that buffer                                                                |
| [io_wrapper_copy_to_buffer](/momentum/3/3-api/apis-io-wrapper-copy-to-buffer)                     | copies up to len bytes from the io object and writes them to buf                                                                     |
| [io_wrapper_create_object](/momentum/3/3-api/apis-io-wrapper-create-object)                       | manufactures an io_object on the fly                                                                                                 |
| [io_wrapper_create_read_job](/momentum/3/3-api/apis-io-wrapper-create-read-job)                   | Creates a job to read the contents of a file                                                                                         |
| [io_wrapper_delref](/momentum/3/3-api/apis-io-wrapper-delref)                                     | Decrements the refcount on the io_object, and closes and frees it if the refcount reaches 0                                          |
| [io_wrapper_destroy](/momentum/3/3-api/apis-io-wrapper-destroy)                                   | Decrements the refcount on the io_object, and closes and frees it if the refcount reaches 0                                          |
| [io_wrapper_fdopen](/momentum/3/3-api/apis-io-wrapper-fdopen)                                     | Open an io_object on top of an existing descriptor                                                                                   |
| [io_wrapper_flush](/momentum/3/3-api/apis-io-wrapper-flush)                                       | Flush a resource                                                                                                                     |
| [io_wrapper_get_app_context](/momentum/3/3-api/apis-io-wrapper-get-app-context)                   | Retrieve the application context value                                                                                               |
| [io_wrapper_get_context](/momentum/3/3-api/apis-io-wrapper-get-context)                           | Retrieves the context for an io object                                                                                               |
| [io_wrapper_get_handle](/momentum/3/3-api/apis-io-wrapper-get-handle)                             | Gets the internal handle for an io object                                                                                            |
| [io_wrapper_get_mode](/momentum/3/3-api/apis-io-wrapper-get-mode)                                 | Retrieves the mode associated with an io object                                                                                      |
| [io_wrapper_get_options](/momentum/3/3-api/apis-io-wrapper-get-options)                           | Retrieve the options associated with an io object                                                                                    |
| [io_wrapper_get_path](/momentum/3/3-api/apis-io-wrapper-get-path)                                 | Retrieve the path associated with an io object                                                                                       |
| [io_wrapper_get_scheme](/momentum/3/3-api/apis-io-wrapper-get-scheme)                             | Retrieves the scheme associated with an io object                                                                                    |
| [io_wrapper_is_memory_based](/momentum/3/3-api/apis-io-wrapper-is-memory-based)                   | returns the memtype if an io_object is an in-memory io_object                                                                        |
| [io_wrapper_lookup](/momentum/3/3-api/apis-io-wrapper-lookup)                                     | Look up the specified IO wrapper                                                                                                     |
| [io_wrapper_lseek](/momentum/3/3-api/apis-io-wrapper-lseek)                                       | Reposition read/write resource offset                                                                                                |
| [io_wrapper_mkpath_and_open](/momentum/3/3-api/apis-io-wrapper-mkpath-and-open)                   | Open a handle to a resource, creating any missing directories if necessary and (options and O_CREAT)                                 |
| [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open)                                         | Open a handle to a resource                                                                                                          |
| [io_wrapper_open2](/momentum/3/3-api/apis-io-wrapper-open-2)                                       | Open a handle to a resource with context                                                                                             |
| [io_wrapper_open_memory](/momentum/3/3-api/apis-io-wrapper-open-memory)                           | Open a read-only handle on some memory                                                                                               |
| [io_wrapper_open_tmpspool](/momentum/3/3-api/apis-io-wrapper-open-tmpspool)                       | creates a temporary file in the spool                                                                                                |
| [io_wrapper_printf](/momentum/3/3-api/apis-io-wrapper-printf)                                     | printf-like function that operates on an io_object pointer                                                                           |
| [io_wrapper_read](/momentum/3/3-api/apis-io-wrapper-read)                                         | Read the specified number of bytes                                                                                                   |
| [io_wrapper_set_app_context_and_dtor](/momentum/3/3-api/apis-io-wrapper-set-app-context-and-dtor) | Set an application-specific context value and destructor                                                                             |
| [io_wrapper_set_context](/momentum/3/3-api/apis-io-wrapper-set-context)                           | Sets the context for an io object                                                                                                    |
| [io_wrapper_set_handle](/momentum/3/3-api/apis-io-wrapper-set-handle)                             | Sets the internal handle for an io object                                                                                            |
| [io_wrapper_set_path](/momentum/3/3-api/apis-io-wrapper-set-path)                                 | Set the path associated with an io object                                                                                            |
| [io_wrapper_set_scheme](/momentum/3/3-api/apis-io-wrapper-set-scheme)                             | Set the scheme associated with an io object                                                                                          |
| [io_wrapper_supports_lseek](/momentum/3/3-api/apis-io-wrapper-supports-lseek)                     | Indicates if a stream is seekable                                                                                                    |
| [io_wrapper_vprintf](/momentum/3/3-api/apis-io-wrapper-vprintf)                                   | vprintf-like function that operates on an io_object pointer                                                                          |
| [io_wrapper_writev](/momentum/3/3-api/apis-io-wrapper-writev)                                     | Write a vector                                                                                                                       |