# Creating resources

To deploy the necessary serviecs into Azure create a `dev.tfvars` within `deployment/terraform/storage` and run:

```text
terraform init --var-file dev.tfvars
terraform apply --var-file dev.tfvars
```

An example `dev.tfvars` would be:

```text
name = "ichiorgdev"
resource_group = "dev_rg"
location = "East US 2"
```

An example `staging.tfvars` would be:

```text
name = "ichiorgstaging"
resource_group = "staging_rg"
location = "East US 2"
```

An example `prod.tfvars` would be:

```text
name = "ichiorgprod"
resource_group = "prod_rg"
location = "East US 2"
```

Note that if you want to manage the various dev/staging/prod terraform deployments locally you'd need to delete the `*.tfstate` between the terraform actions and re-import state.  There are more elegant ways to handle this that may be necessary if the project grows sufficiently.

## Azure Storage Static Website Hosting

Hosting a static site through Azure Storage is easy, it really just involves pushing to the `$web` container.  This is handled in [../.azure-pipelines/site-deployment-template.yml](../.azure-pipelines/site-deployment-template.yml).  From this point we just need to point the CNAME to this storage account. We are currently using Cloudfare for the DNS.  For setting up the DNS to point to the Azure Storage container see these [docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal).

The only catch is that the CNAME should be set to `DNS Only` when following the instructions.  After setup, then switch it back to `Proxied` which will handle the https.  Note that the Azure storage should not force https in this scenario.  Cloudfare will handle the SSL and proxy to the http site behind the scenes.
