# CertKi
PKI (Public Key Infrastructure) management tool, controlled by a web GUI.

### Features
* Generate CA & CSR.
* Issue & Revoke (Managed CRL).
* Create alerts & notifications on expiring certs.

### Build
======
#### Environment Variables
##### Optional
* PORT

##### Required
* JWT_SECRET_KEY
* MONGO_HOST
* MONGO_DB
* MONGO_USER
* MONGO_PASSWORD
