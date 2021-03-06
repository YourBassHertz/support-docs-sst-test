---
lastUpdated: "03/26/2020"
title: "msys.audit.rejections"
description: "msys audit rejections Return the number of rejections that have occurred for a CIDR block within a configured time window msys audit rejections monitor options Returns the number of rejections that have occurred for a CIDR block within a configured time window monitor corresponds to one of the monitors defined..."
---

<a name="lua.ref.msys.audit.rejections"></a> 
## Name

msys.audit.rejections — Return the number of rejections that have occurred for a CIDR block within a configured time window

<a name="idp25950480"></a> 
## Synopsis

`msys.audit.rejections(monitor, options);`

```
monitor: string
options: table, optional
```
<a name="idp25953216"></a> 
## Description

Returns the number of rejections that have occurred for a CIDR block within a configured time window. `monitor` corresponds to one of the monitors defined in the inbound_audit module. If the named module is not configured, an error is raised. `options` is a table that can contain the following keys:

*   `startv` the starting window (default 0) to query across.

*   `endv` the ending window (default 0) to query across.

*   `cidr` an IP/mask specifying the address of interest. If not specified, the current connected IP is assumed.

*   `cluster` use the cluster wide metrics, rather than the local node metrics. If `options` is not a table, it is interpreted as though it was the cidr value of interest.

When specifying a window range, the aggregate sum over the specified range will be returned instead of the value from the current time window.

**As of version 3.4, this feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

Enable this function with the statement `require('msys.audit');`.

<a name="idp25968640"></a> 
## See Also

[msys.audit.receptions](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-receptions), [msys.audit.connections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-connections), [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit)