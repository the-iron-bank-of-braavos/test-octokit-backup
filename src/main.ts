import * as core from '@actions/core'
import {Octokit} from '@octokit/rest'
import {createAppAuth} from '@octokit/auth-app'

async function run(): Promise<void> {
    {
        // Get inputs values
        const inputs = {
            repository: core.getInput('repository'),
            appId: core.getInput('appId'),
            clientId: core.getInput('clientId'),
            privateKey: core.getInput('privateKey')
        }

        // Define owner and repo
        const [owner, repo] = inputs.repository.split('/')

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

        const commit = new Octokit.rest.git.createCommit({
          owner: owner,
          repo: repo,
          message: 'Test verified commit',
          tree: 'main',
          'author.name': 'github-actions',
          'author.email': 'github-actions@github.com'
        })

        const commitResponse = await commit.request('POST /repos/{owner}/{repo}/git/commits',{
          "verification": {
            "verified": true,
            "reason": "valid",
            "signature": "-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----",
            "payload": "tree main\n..."
          }
        })

    }
}

run()