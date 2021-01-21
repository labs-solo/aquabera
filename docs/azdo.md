# Introduction

This document will detail various pieces of the CI/CD infrastructure through Azure DevOps which is located at <https://dev.azure.com/ichi-dev>.

## Adding / Modifying Library variables

The [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) yml files under the `.azure-pipelines` directory read variables from Azure DevOps Libraries located at <https://dev.azure.com/ichi-dev/swap/_library>.

For example the dev/pr build reads from the ichi-farm-deployment-dev Library group.

## Envs for Gated Approvals

To create gated approvals one must have an [Environment](https://dev.azure.com/ichi-dev/swap/_environments).  Here I created a new Environment named `prod` with default settigs.  Then I clicked the right hand side vertical `...` and clicked `Approvals and checks` then `Approvals` and I the `Ichi Farm devs` team (for example).