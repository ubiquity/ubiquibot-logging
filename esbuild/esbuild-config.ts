import esbuild from 'esbuild';

const config: esbuild.BuildOptions = {
  sourcemap: false,
  entryPoints: [
      'scripts/constants/index.ts',
      'scripts/helpers/utils.ts',
      'scripts/index.ts',
      'styles/index.css',
      'index.html',
  ],
  bundle: true,
  minify: false,
  loader: {
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
    ".html": "copy",
  },
  outdir: "build",
};

export default config;
