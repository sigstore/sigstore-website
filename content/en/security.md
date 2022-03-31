---
title: 'Security model'
description: ''
category: 'About sigstore'
position: 3
---

The Sigstore security model has a few key components, each aimed at establishing trust or proving identity.

## Proving Identity in Sigstore

Sigstore relies on the widely used OpenID Connect (OIDC) protocol to prove identity.
When running something like `cosign sign`, users will complete an OIDC flow and authenticate via an identity provider (GitHub, Google, etc.) to prove they are the owner of their account.
Similarly, automated systems (like GitHub Actions) can use Workload Identity or [SPIFFE](https://spiffe.io/) Verifiable Identity Documents (SVIDs) to authenticate themselves via OIDC.
The identity associated with the OIDC token is embedded in the short-lived certificate issued by Sigstore’s Certificate Authority, Fulcio. 

## Sigstore’s Trust Model

Sigstore’s trust model originates from the Trust Root and chains down to short-lived certificates issued by Fulcio. 

### Sigstore’s Trust Root

The Trust Root, which was established during a public [root key signing ceremony](https://www.youtube.com/watch?v=GEuFsc8Zm9U), is made up of a rotation of five keyholders from varying companies and academic institutions who contribute to Sigstore.
It’s used to secure the keys used by the entire Sigstore project.
The Sigstore Trust Root allows individuals and systems to automatically retrieve digital certificates that prove who they are, and then use these certificates to sign the artifacts they distribute.
End users can verify the signatures and certificates issued by Fulcio against the Sigstore Trust Root, allowing them to verify (and trust) that the distributors of the software they use are who they say they are.

For more details on the Trust Root or the key signing ceremony, see [A New Kind of Trust Root](https://blog.sigstore.dev/a-new-kind-of-trust-root-f11eeeed92ef).

### Fulcio Security Model

One of the targets secured by the Sigstore Trust Root is the Fulcio root certificate, which is used to issue short-lived code signing certificates. 

Fulcio assumes that a valid OIDC token from a trusted provider is sufficient “proof of ownership” of the associated identity. 
To help protect against OIDC compromise, Fulcio uses a certificate transparency log. This means:

* Fulcio MUST publish all certificates to the log.
* Clients MUST NOT trust certificates that are not in the log

As a result, users can detect any misissued certificates.
Combined with Rekor's signature transparency, artifacts signed with compromised accounts can be identified.

Fulcio also uses short-lived certificates as a solution to the key management problem.
Traditional signing involves issuing long-lived certificates, but this method assumes that users won’t lose their private key or that the key won’t get stolen or otherwise compromised for long periods of time.
Long-lived certificates also make it hard to revoke previously issued keys.

Fulcio was designed to avoid revocation by issuing short-lived certificates instead.
When signing, the user only needs to know that the artifact was signed while the certificate was valid. 

Fulcio achieves this by relying on the Rekor transparency log.
When a signature is stored in the log, the associated entry is included into the log with a signed timestamp.
End users can request the entry, cryptographically verify the timestamp is correct, and verify that an artifact was signed while the certificate was valid.

Storing the signature in a transparency log also makes certificates easily discoverable so that maintainers don’t have to worry about public key distribution.

### Rekor Security Model
The Rekor service provides a transparency log of software signatures.
The log is append-only and once entries are added they cannot be modified; a valid log can be cryptographically verified by any third-party.
As entries are appended into this log, Rekor periodically signs the full Merkle tree along with a timestamp.

An entry in Rekor provides a single-party attestation that a piece of data existed prior to a certain time.
These timestamps cannot be tampered with later, providing long-term trust.
This long-term trust also requires that the log is monitored.

Transparency Logs make it hard to forge timestamps long term, but in short time windows, it would be much easier for the Rekor operator to fake or forge timestamps.
To mitigate this, Rekor’s timestamps and tree head are signed with a valid Signed Tree Head (STH) that contains a non-repudiable timestamp.
These signed timestamp tokens are saved as evidence in case Rekor’s clock changes in the future.
