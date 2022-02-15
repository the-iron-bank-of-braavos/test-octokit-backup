import * as core from '@actions/core'
import {Octokit} from '@octokit/rest'

async function run(): Promise<void> {
    {
        // Get inputs values
        const inputs = {
            token: core.getInput('token'),
        }

        const octokit = new Octokit({
            auth: inputs.token
        });

        const commit = appOctokit.rest.git.createCommit({
          owner: owner,
          repo: repo,
          message: 'Test verified commit',
          tree: 'main',
          author.name: 'github-actions',
          author.email: 'github-actions@github.com'
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
