---
title: "Server setup"
category: "Rekor"
position: 330
---

# Rekor Server Set up

This page describe how to setup a `rekor-server`. Rekor server requires [Trillian](https://github.com/google/trillian), which requires a database for it's persistent storage layer.

## Configure trillians database

To set up trillians database we need to create the database / tables.

Trillian requires a database, we use MariaDB for now (others to be explored later). Once this is installed on your machine, 
edit the `scripts/createdb.sh` file with your database root account credentials and run the script.

If you’re just trying out rekor, keep the DB user name and password the same as in the script (test/zaphod). If you change these,
you need to make the changes on Trillian’s side (visit the trillian repo for details).

      $ wget https://raw.githubusercontent.com/sigstore/rekor/main/scripts/createdb.sh
      $ wget https://raw.githubusercontent.com/sigstore/rekor/main/scripts/storage.sql
      $ chmod +x createdb.sh
      $ sudo ./createdb.sh

## Install trillian 

      $ go install github.com/google/trillian/cmd/trillian_log_server@v1.3.14-0.20210713114448-df474653733c
      $ go install github.com/google/trillian/cmd/trillian_log_signer@v1.3.14-0.20210713114448-df474653733c
      $ go install github.com/google/trillian/cmd/createtree@v1.3.14-0.20210713114448-df474653733c

## Run trillian

First run the trillian log server:

      $ trillian_log_server -http_endpoint=localhost:8091 -rpc_endpoint=localhost:8090 --logtostderr ...

Now run the signer:

      $ trillian_log_signer --logtostderr --force_master --http_endpoint=localhost:8191 -rpc_endpoint=localhost:8190  --batch_size=1000 --sequencer_guard_window=0 --sequencer_interval=200ms

Create tree:

      $ createtree --admin_server=localhost:8090

## Run Rekor

We are now ready to run rekor.

      $ rekor-server serve --rekor_server.address=0.0.0.0 --rekor_server.port=3000 --enable_retrieve_api=false

> :notebook: If you want a quick handy search index, then you will need to install redis-server
   and remove the argument `--enable_retrieve_api=false`.

Example:

```
2021-07-29T12:06:47.829+0100	INFO	app/root.go:107	Using config file: /home/luke/go/src/github.com/lukehinds/rekor/rekor-server.yaml
2021-07-29T12:06:47.830+0100	INFO	app/serve.go:66	starting rekor-server 
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'jar'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'jar'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'intoto'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'intoto'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'rfc3161'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'rfc3161'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'alpine'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'alpine'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'helm'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'helm'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'rekord'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'rekord'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:91	Loading support for pluggable type 'rpm'
2021-07-29T12:06:47.841+0100	INFO	app/serve.go:92	Loading version '0.0.1' for pluggable type 'rpm'
2021-07-29T12:06:47.858+0100	INFO	restapi/server.go:230	Serving rekor server at http://127.0.0.1:3000
```

