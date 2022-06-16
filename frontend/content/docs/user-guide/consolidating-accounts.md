---
lastUpdated: "02/08/2020"
title: "Consolidating/Migrating SparkPost Accounts"
description: "Guidance for consolidating SparkPost accounts. It is important to also become familiar with the subaccounts feature before beginning consolidation. "
---

As you start utilizing subaccounts it will be essential to become familiar with management of this feature. Please read through this article before determining how you would like to set up your account: [Subaccounts in SparkPost](https://www.sparkpost.com/docs/user-guide/subaccounts/).

Determine what account you want to be your remaining account or create a new account if applicable.

## API Keys

Once you determine your remaining account, make sure you have an API key with all permissions to complete the migration.

## Sending Domains

You will have to delete the sending domain from the old account before adding it to the new one. Make sure you are using the correct API keys, as that is what is used to determine which account to delete from/add to.

* [How to delete a sending domain using the API](https://developers.sparkpost.com/api/sending-domains#sending-domains-retrieve,-update,-and-delete-delete)
* [How to create a sending domain using the API](https://developers.sparkpost.com/api/sending-domains#sending-domains-create-post)

Please be aware of the `generate_dkim` setting. If you already have your own key pair, please set this to false and no changes to your DKIM record will be necessary. If you were using a key pair generated by SparkPost and use our signing, please set this to true and apply the new key to your DNS records so signing can continue. 

## Recipient List

Upload your most up to date recipient lists to your new account. These will not be specific to subaccounts.

## Suppression List

You can save your current suppression list and upload it to your consolidated account. 

[How to retrieve your current suppression list via the API](https://developers.sparkpost.com/api/suppression-list#suppression-list-retrieve,-delete)

To get the entire list, do not enter a specific email address. You can then convert the list by simply changing `{ "results": [` to `{ "recipients": {`. Make sure that it is a JSON object instead of an array. You can use jsonlint.com to make sure you close all the brackets appropriately to make it a valid JSON blob. Then you can upload that blob to your suppression list on the consolidated account. If you get an error about too many requests, please split your upload into different blobs. 

Or you, can get a JSON to CSV converter (there are many free options online) and upload it via the UI under Lists --> Suppressions.

## Templates

If you have any stored templates these will have to be moved individually but can be done in the UI or API. These will not be specific to subaccounts.

## Webhooks

These need to be manually set up again via API or UI.

## Analytics Data

These stats (including message events) cannot be transferred to the consolidated account.

## Custom Bounce Domains

The CNAME record will not have to be adjusted if it is already in place. However, you will have to register it again either via the UI or the API. These can be subaccount specific.

## Tracking Domains

These need to be registered on the new account via the UI or the API. These can be subaccount specific.

## Users

You will have to be recreate any users you had on the consolidated accounts. This can be done on the UI in Account --> Users.

## Deleting Old Accounts

You can remove all information (like those listed above) from a free account but there is no option to delete an account. For a paid account, please do the same by removing all information you would not like to remain on the account and downgrade it to the free tier. 

## Other

Any API calls you’ve been using will need to have the authorization updated to your new API key (keeping in mind what permissions you have for which key and that they can be assigned to specified subaccount).