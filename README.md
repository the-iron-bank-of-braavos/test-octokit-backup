# Workflow Dispatch Action

<!-- END: This section should be removed after revission-->

<!-- DocToc recommended commands:                             -->
<!-- npm install -g doctoc                                    -->
<!-- doctoc --notitle --update-only --entryprefix '*'         -->
<!-- MarkDown Linter commands:                                -->
<!-- npm install -g markdownlint-cli@0.25.0                   -->
<!-- markdownlint '**/*.md' -c .github/config/lint-config.yml -->

__Description__: Put a meaningful, short, plain-language description of what
this project is trying to accomplish and why it matters.
Describe the problem(s) this project solves.
Describe how this software can improve the lives of its audience.

## Table of content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Dependencies](#dependencies)
* [Installation](#installation)
* [Configuration](#configuration)
* [Usage](#usage)
* [How to test the software](#how-to-test-the-software)
* [Known issues](#known-issues)
* [Getting help](#getting-help)
* [Getting involved](#getting-involved)
* [Open source licensing info](#open-source-licensing-info)
* [Credits and references](#credits-and-references)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Inputs

| Input          | Required  | Default             | Description                                                                                                    |
|----------------|-----------|---------------------|----------------------------------------------------------------------------------------------------------------|
| `token`        | **False** |                     | Personal access token used to fetch the repository. This field is required if app credentials are not defined. |
| `organization` | **False** |                     | If application credentials are defined, this is the organization project that has the application installed.   |
| `appId`        | **False** |                     | GitHub application ID.                                                                                         |
| `privateKey`   | **False** |                     | GitHub application private key.                                                                                |
| `clientId`     | **False** |                     | GitHub application client id.                                                                                  |
| `clientSecret` | **False** |                     | GitHub application secret.                                                                                     |
| `repository`   | **False** | `github.repository` | Repository where is stored the workflow.                                                                       |
| `ref`          | **False** | `github.ref`        | Branch, tag or commit.                                                                                         |
| `workflow`     | **True**  |                     | Workflow file name                                                                                             |
| `inputs`       | **False** | `{}`                | JSON String with workflow imputs.                                                                              |
  
## Usage
  
Use this action dispatching a workflow in the same repository using application credentials.
  
```yaml
  test-local-dispatch:
    name: Test local dispatch
    needs: [build]
    runs-on: ubuntu-latest
    steps:
      - name: Test workflow dispatch
        uses: santander-group/workflow-dispatch-action@main
        with:
          appId: ${{ secrets.APP_ID }}
          privateKey: ${{ secrets.APP_RSA_PRIVATE_KEY }}
          clientId: ${{ secrets.APP_CLIENT_ID }}
          clientSecret: ${{ secrets.APP_CLIENT_SECRET }}
          workflow: nested-workflow.yml
          inputs: "{\"name\":\"Command Line User\", \"home\":\"CLI\" }"
```

Use this action dispatching a workflow in an external repository using token.
  
```yaml
  test-remote-dispatch:
    name: Test remote workflow dispatch
    needs: [build]
    runs-on: ubuntu-latest
    steps:
      - name: Test remote workflow dispatch
        uses: santander-group/workflow-dispatch-action@main
        with:
          token: ${{ secrets.USER_PAT }}
          repository: the-iron-bank-of-braavos/poc-actions
          ref: refs/heads/feature/workflow-dispatch
          workflow: nested-workflow.yml
          inputs: "{\"name\":\"Remote Command Line User\", \"home\":\"CLI\" }"
```

You can use token or application credentials in both examples.

## Known issues

Not known.

## Getting help

Instruct users how to get help with this software; this might include links to
an issue tracker, wiki, mailing list, etc.

## Getting involved

Please, dont be afraid and get involved!

General instructions on _how_ to contribute should be stated with a link to
[CONTRIBUTING](CONTRIBUTING.md).

---

## Licensing info

* [LICENSE](LICENSE)

---

## Credits and references

1. Projects that inspired you
2. Related projects
3. Books, papers, talks, or other sources that have meaningful impact or
  influence on this project
