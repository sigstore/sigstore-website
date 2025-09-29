window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  const HTTPSOnly = function() {
    return {
      components: {
        schemes: function() {
          return null
        }
      }
    }
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
	      "name": "Rekor v2",
	      "url": "https://raw.githubusercontent.com/sigstore/rekor-tiles/main/docs/openapi/rekor/v2/rekor_service.swagger.json"
      },
      {
	      "name": "Rekor",
	      "url": "https://raw.githubusercontent.com/sigstore/rekor/main/openapi.yaml"
      },
      {
	      "name":"Fulcio",
	      "url": "https://raw.githubusercontent.com/sigstore/fulcio/main/fulcio.swagger.json"
      },
      {
	      "name":"Fulcio - Legacy API",
	      "url": "https://raw.githubusercontent.com/sigstore/fulcio/main/fulcio_legacy.swagger.json"
      }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      HTTPSOnly
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
