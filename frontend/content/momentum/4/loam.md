---
lastUpdated: "03/26/2020"
title: "Life of A Message"
description: "Messages are injected into Momentum 4 x either through SMTP or HTTP SMTP injection requires you to have a fully formed message available for injection HTTP injection uses a transmission JSON object submitted through Momentum via the Transmissions API Transmissions specify a content template and a list of recipients both..."
---

## <a name="loam.inject"></a> Inject SMTP Messages or Transmissions

Messages are injected into Momentum 4.x either through SMTP or HTTP. SMTP injection requires you to have a fully-formed message available for injection. HTTP injection uses a transmission JSON object submitted through Momentum via the Transmissions API. Transmissions specify a content template and a list of recipients, both of which may be previously stored or explicitly included in the transmission.

## <a name="loam.image"></a> 

<a name="life_of_a_message.image"></a> 


![Life of A Message](images/life_of_a_message.png)

## <a name="loam.generate.message"></a> Generate Message

Momentum will acknowledge that it accepted a transmission submitted via HTTP with an “HTTP 200” response. For transmissions with multiple recipients, message generation (that is, a mail merge) is performed after the submission. During the mail merge, Momentum will generate messages that include personalized substitution data on a per-recipient basis.

For single recipient transmissions, the message is generated within the HTTP request (default behavior). If an individual recipient’s message fails during message generation, Momentum reports the failure via the Event Hose.

## <a name="loam.apply.policy"></a> Apply Policy

Messages injected over SMTP or generated by Momentum pass through policy phases (or hook points) such as `set_binding`, `final_validation`, etc. Momentum then assigns the message to a binding (i.e., an outgoing IP address used to send a message). Once the message is accepted via SMTP or generated following a transmission submission, Momentum writes it to disk (in the `/var/spool/ecelerity` directory). If the message does not pass the validation checks, it is rejected due to policy.

### Note

The message will still remain in memory; it is only written to disk as a backup in case of a failure or significant delay issues.

## <a name="loam.queue"></a> Queue

Momentum adds messages to the binding/domain active queues. Every active binding on the Momentum servers and every domain (which will receive the message) create an active queue. For example, if there are 20 IPs sending to 100 domains, then there would be 2,000 active queues.

## <a name="loam.delivery"></a> Delivery

Messages in the active queue will try to communicate with the recipient domains. Each active queue will connect to the remote host for delivery of the message.

Adaptive Delivery monitors everything associated with attempts to deliver the message, evaluates feedback, and makes adjustments to the traffic shaping options in the active queues to ensure the messages are delivered.

*   Negative feedback will cause traffic shaping options to be adjusted for fewer connections and fewer messages being sent.

*   No negative feedback will result in adjustments for increased connections and more messages being sent.

The ISP sends a “250 OK” after the messages have been accepted for delivery.

## <a name="loam.engagement.tracking"></a> Engagement Tracking

Momentum uses Engagement Tracking to track opens and clicks. This activity occurs on the Platform node. Opens and clicks for the campaign can then be monitored and reviewed via the web-based UI, Metrics API, and Webhooks API.

## <a name="loam.intro.reporting"></a> Reporting

The event hose reports all aspects of the message disposition to the Analytics database, including any messages generated via HTTP injection.