import * as core from '@actions/core'
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";

async function run(): Promise<void> {
   {
    // Get inputs values
    const inputs = {
      appId: core.getInput('appId'),
      clientId: core.getInput('clientId'),
      privateKey: core.getInput('privateKey'),
    }

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: inputs.appId,
    privateKey: inputs.privateKey,
  },
});

const response = await appOctokit.request('GET /app')
const data = response.data

const auth = createAppAuth({
  appId: inputs.appId,
  privateKey: inputs.privateKey,
  clientId: inputs.clientId,
})

}
}

run()