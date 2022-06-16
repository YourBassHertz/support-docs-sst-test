---
lastUpdated: "03/26/2020"
title: "Address Resolution Protocol (ARP) traffic"
description: "Some networks may experience difficulties with Address Resolution Protocol ARP traffic when using the Dura VIP™ clustering feature If you are experiencing ARP related issues you can set arp all hosts false in the cluster stanza to limit the scope of the ARP traffic generated by Dura VIP™ moves For..."
---

Some networks may experience difficulties with Address Resolution Protocol (ARP) traffic when using the DuraVIP™ clustering feature. If you are experiencing ARP-related issues, you can set `arp_all_hosts` = `false` in the cluster stanza to limit the scope of the ARP traffic generated by DuraVIP™ moves. For additional details, see [arp_all_hosts](/momentum/4/modules/4-modules-cluster#option.arp_all_hosts) .