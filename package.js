Package.describe({
  summary: "Adds dropbox api both on client and server"
});

Npm.depends({ "dropbox": "0.10.2" });

Package.on_use(function (api, where) {
  api.add_files([
    "dropbox-client.js"
  ], 'client');
  api.add_files([
    "dropbox-server.js"
  ], 'server');

  api.export("Dropbox", ["client", "server"]);
});

Package.on_test(function (api) {
});