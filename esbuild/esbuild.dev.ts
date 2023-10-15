import esbuild from "esbuild";

import config from './esbuild-config';

async function build() {
    const context = await esbuild.context(config);
    await context.serve({servedir: 'build'});
    console.log('Server listening on http://localhost:8000/');
}
  
build();
