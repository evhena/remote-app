import rimraf from 'rimraf';

// Export the plugin function as a named export
export function removeUnwantedFilesPlugin() {
  return {
    name: 'remove-unwanted-files-plugin',
    async generateBundle(options, bundle) {
      // Remove unwanted files from the dist directory
      rimraf.sync('dist/assets');
      rimraf.sync('dist/__federation_expose_RemoteApp-CUoX02FD.js');
      rimraf.sync('dist/__federation_shared_react-dom-BV8i0YaF.js');
      rimraf.sync('dist/__federation_fn_import-DwYL490U.js');
      // Add more rimraf.sync calls as needed for other unwanted files
    },
  };
}
