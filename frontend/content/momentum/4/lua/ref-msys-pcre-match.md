---
lastUpdated: "03/26/2020"
title: "msys.pcre.match"
description: "msys pcre match Perform a PCRE regex match operation msys pcre match subject pattern Perform a PCRE regex match operation Captures return their matches in numeric order and are referenced using the numeric index preceded by a dollar sign The first capture is referenced using 1 the second using 2..."
---

<a name="lua.ref.msys.pcre.match"></a> 
## Name

msys.pcre.match — Perform a PCRE regex match operation

<a name="idp18193408"></a> 
## Synopsis

`msys.pcre.match(subject, pattern);`

```
subject: string
pattern: string
```
<a name="idp18196400"></a> 
## Description

Perform a PCRE regex match operation. Captures return their matches in numeric order and are referenced using the numeric index preceded by a dollar sign. The first capture is referenced using `$1`, the second using `$2` and so on. Pass in the string to be matched and the PCRE regex pattern to match against.

Enable this function with the statement `require('msys.pcre')`.

This function returns three values:

`matches, errstr, errnum = msys.pcre.match(subject, pattern);`

The return values are as follows:

*   `matches` nil if no matches were found, otherwise a table consisting of the following indices:

    *   `0` complete matched portion of the string

    *   `1` the first capture subexpression

    *   `2` the second capture subexpression

    *   `...` additional capture subexpression

    If named captures, (?P<name>....), were used in the pattern, then the names will be also be keys in the table, with their values set to the value of the appropriate subexpression.

*   `errstr` if there was a failure during compilation of the regex, this string will contain the error message

*   `errnum` this will contain a numeric representation of the error condition

<a name="idp18213488"></a> 
## See Also

[msys.pcre.split](/momentum/4/lua/ref-msys-pcre-split), [msys.pcre.replace](/momentum/4/lua/ref-msys-pcre-replace)