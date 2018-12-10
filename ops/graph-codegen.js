const { runGraphCli } = require('./graph-cli.js');
const subgraphLocation = `./subgraph.yaml`;

async function codegen(cwd) {
  const result = await runGraphCli([
    'codegen',
    '--output-dir src/types/',
    subgraphLocation
  ], cwd);
  if (result[0] === 1) {
    throw Error(`Deployment failed! ${result}`);
  }
  return result;
}

if (require.main === module) {
	codegen();
} else {
	module.exports = codegen;
}
