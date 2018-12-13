const path = require('path');
const { runGraphCli } = require('./graph-cli.js');
const { subgraphyamlLocation } = require('./settings.js')

async function deploy(cwd) {
  if (cwd === undefined) {
    cwd = path.resolve(`${__dirname}/..`);
  }
  console.log(`using ${cwd} and ${subgraphyamlLocation}`);
  const result = await runGraphCli([
    'deploy',
    '--access-token ""',
    '--ipfs ${ipfs-/ip4/127.0.0.1/tcp/5001}',
    '--node ${node_rpc-http://127.0.0.1:8020/}',
    '-n daostack',
    subgraphyamlLocation
  ], cwd);
  const msg = result[1];
  if (result[0] === 1) {
    throw Error(`Deployment failed! ${msg}`);
  }
  if (msg.toLowerCase().indexOf('error') > 0) {
    throw Error(`Deployment failed! ${msg}`);
  }
  return result;
}


if (require.main === module) {
	deploy().catch((err)  => { console.log(err); process.exit(1) })
} else {
	module.exports = deploy;
}
