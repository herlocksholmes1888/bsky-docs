module.exports = [{"type":"doc","id":"api/app-bsky/at-protocol-xrpc-api"},{"type":"category","label":"app.bsky.actor","items":[{"type":"doc","id":"api/app-bsky/app-bsky-actor-get-preferences","label":"Get private preferences attached to the account.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-get-profile","label":"Get detailed profile view of an actor.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-get-profiles","label":"Get detailed profile views of multiple actors.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-get-suggestions","label":"Get a list of suggested actors, used for discovery.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-put-preferences","label":"Set the private preferences attached to the account.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-search-actors","label":"Find actors (profiles) matching search criteria.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-actor-search-actors-typeahead","label":"Find actor suggestions for a prefix search term.","className":"api-method get"}]},{"type":"category","label":"app.bsky.feed","items":[{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-actor-feeds","label":"Get a list of feeds created by the actor.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-actor-likes","label":"Get a list of posts liked by an actor.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-author-feed","label":"Get a view of an actor's feed.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-feed","label":"Get a hydrated feed from an actor's selected feed generator.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-feed-generator","label":"Get information about a feed generator.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-feed-generators","label":"Get information about a list of feed generators.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-likes","label":"Get the list of likes.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-list-feed","label":"Get a view of a recent posts from actors in a list.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-post-thread","label":"Get posts in a thread.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-posts","label":"Get a view of an actor's feed.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-reposted-by","label":"Get a list of reposts.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-suggested-feeds","label":"Get a list of suggested feeds for the viewer.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-get-timeline","label":"Get a view of the actor's home timeline.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-feed-search-posts","label":"Find posts matching search criteria.","className":"api-method get"}]},{"type":"category","label":"app.bsky.graph","items":[{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-blocks","label":"Get a list of who the actor is blocking.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-followers","label":"Get a list of an actor's followers.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-follows","label":"Get a list of who the actor follows.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-list","label":"Get a list of actors.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-list-blocks","label":"Get lists that the actor is blocking.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-list-mutes","label":"Get lists that the actor is muting.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-lists","label":"Get a list of lists that belong to an actor.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-mutes","label":"Get a list of who the actor mutes.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-get-suggested-follows-by-actor","label":"Get suggested follows related to a given actor.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-mute-actor","label":"Mute an actor by DID or handle.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-mute-actor-list","label":"Mute a list of actors.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-unmute-actor","label":"Unmute an actor by DID or handle.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-graph-unmute-actor-list","label":"Unmute a list of actors.","className":"api-method post"}]},{"type":"category","label":"app.bsky.notification","items":[{"type":"doc","id":"api/app-bsky/app-bsky-notification-get-unread-count","label":"Get the count of unread notifications.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-notification-list-notifications","label":"Get a list of notifications.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-notification-register-push","label":"Register for push notifications with a service.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-notification-update-seen","label":"Notify server that the user has seen notifications.","className":"api-method post"}]},{"type":"category","label":"app.bsky.unspecced","items":[{"type":"doc","id":"api/app-bsky/app-bsky-unspecced-apply-labels","label":"Allow a labeler to apply labels directly.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/app-bsky-unspecced-get-popular","label":"DEPRECATED: will be removed soon. Use a feed generator alternative.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/app-bsky-unspecced-get-popular-feed-generators","label":"An unspecced view of globally popular feed generators.","className":"api-method get"}]},{"type":"category","label":"com.atproto.admin","items":[{"type":"doc","id":"api/app-bsky/com-atproto-admin-disable-account-invites","label":"Disable an account from receiving new invite codes, but does not invalidate existing codes.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-disable-invite-codes","label":"Disable some set of codes and/or all codes associated with a set of users.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-emit-moderation-event","label":"Take a moderation action on an actor.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-enable-account-invites","label":"Re-enable an account's ability to receive invite codes.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-account-info","label":"Get details about an account.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-invite-codes","label":"Get an admin view of invite codes.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-moderation-event","label":"Get details about a moderation event.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-moderation-report","label":"Get details about a moderation report.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-moderation-reports","label":"Get moderation reports related to a subject.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-record","label":"Get details about a record.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-repo","label":"Get details about a repository.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-get-subject-status","label":"Get the service-specific admin status of a subject (account, record, or blob).","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-query-moderation-events","label":"List moderation events related to a subject.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-query-moderation-statuses","label":"View moderation statuses of subjects (record or repo).","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-rebase-repo","label":"Administrative action to rebase an account's repo","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-search-repos","label":"Find repositories based on a search term.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-send-email","label":"Send email to a user's account email address.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-update-account-email","label":"Administrative action to update an account's email.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-update-account-handle","label":"Administrative action to update an account's handle.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-admin-update-subject-status","label":"Update the service-specific admin status of a subject (account, record, or blob).","className":"api-method post"}]},{"type":"category","label":"com.atproto.identity","items":[{"type":"doc","id":"api/app-bsky/com-atproto-identity-resolve-handle","label":"Provides the DID of a repo.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-identity-update-handle","label":"Updates the handle of the account.","className":"api-method post"}]},{"type":"category","label":"com.atproto.moderation","items":[{"type":"doc","id":"api/app-bsky/com-atproto-moderation-create-report","label":"Report a repo or a record.","className":"api-method post"}]},{"type":"category","label":"com.atproto.repo","items":[{"type":"doc","id":"api/app-bsky/com-atproto-repo-apply-writes","label":"Apply a batch transaction of creates, updates, and deletes.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-create-record","label":"Create a new record.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-delete-record","label":"Delete a record, or ensure it doesn't exist.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-describe-repo","label":"Get information about the repo, including the list of collections.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-get-record","label":"Get a record.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-list-records","label":"List a range of records in a collection.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-put-record","label":"Write a record, creating or updating it as needed.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-rebase-repo","label":"Simple rebase of repo that deletes history","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-repo-upload-blob","label":"Upload a new blob to be added to repo in a later request.","className":"api-method post"}]},{"type":"category","label":"com.atproto.server","items":[{"type":"doc","id":"api/app-bsky/com-atproto-server-confirm-email","label":"Confirm an email using a token from com.atproto.server.requestEmailConfirmation.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-create-account","label":"Create an account.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-create-app-password","label":"Create an App Password.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-create-invite-code","label":"Create an invite code.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-create-invite-codes","label":"Create invite codes.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-create-session","label":"Create an authentication session.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-delete-account","label":"Delete an actor's account with a token and password.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-delete-session","label":"Delete the current session.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-describe-server","label":"Get a document describing the service's accounts configuration.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-server-get-account-invite-codes","label":"Get all invite codes for a given account.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-server-get-session","label":"Get information about the current session.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-server-list-app-passwords","label":"List all App Passwords.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-server-refresh-session","label":"Refresh an authentication session.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-request-account-delete","label":"Initiate a user account deletion via email.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-request-email-confirmation","label":"Request an email with a code to confirm ownership of email.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-request-email-update","label":"Request a token in order to update email.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-request-password-reset","label":"Initiate a user account password reset via email.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-reserve-signing-key","label":"Reserve a repo signing key for account creation.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-reset-password","label":"Reset a user account password using a token.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-revoke-app-password","label":"Revoke an App Password by name.","className":"api-method post"},{"type":"doc","id":"api/app-bsky/com-atproto-server-update-email","label":"Update an account's email.","className":"api-method post"}]},{"type":"category","label":"com.atproto.sync","items":[{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-blob","label":"Get a blob associated with a given repo.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-blocks","label":"Get blocks from a given repo.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-checkout","label":"DEPRECATED - please use com.atproto.sync.getRepo instead","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-commit-path","label":"Gets the path of repo commits","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-head","label":"DEPRECATED - please use com.atproto.sync.getLatestCommit instead","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-latest-commit","label":"Get the current commit CID & revision of the repo.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-record","label":"Get blocks needed for existence or non-existence of record.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-get-repo","label":"Gets the DID's repo, optionally catching up from a specific revision.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-list-blobs","label":"List blob CIDs since some revision.","className":"api-method get"},{"type":"doc","id":"api/app-bsky/com-atproto-sync-list-repos","label":"List DIDs and root CIDs of hosted repos.","className":"api-method get"}]},{"type":"category","label":"com.atproto.temp","items":[{"type":"doc","id":"api/app-bsky/com-atproto-temp-upgrade-repo-version","label":"Upgrade a repo to v3","className":"api-method post"}]}];