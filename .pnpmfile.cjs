module.exports = {
  hooks: {
    readPackage(pkg) {
      // Approve builds for these packages
      if (pkg.name === '@tailwindcss/oxide' || pkg.name === 'esbuild') {
        pkg.pnpm = pkg.pnpm || {};
        pkg.pnpm.allowBuild = true;
      }
      return pkg;
    },
  },
};
