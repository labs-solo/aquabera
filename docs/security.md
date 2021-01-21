# Security

## Service Principal

Instructions on creating the service principal in Azure

```text
az ad sp create-for-rbac -n "InfraSP" --role contributor --scopes /subscriptions/923018dd-348d-4b78-9283-67bb7a427c4c/resourceGroups/dev_rg
```

Output:

```text
Changing "InfraSP" to a valid URI of "http://InfraSP", which is the required format used for service principal names
Creating a role assignment under the scope of "/subscriptions/923018dd-348d-4b78-9283-67bb7a427c4c/resourceGroups/dev_rg"
  Retrying role assignment creation: 1/36
{
  "appId": "f1309552-2ff1-4944-b55e-b86eb86df572",
  "displayName": "InfraSP",
  "name": "http://InfraSP",
  "password": "***",
  "tenant": "78d2249d-17d2-4e10-93e1-519c350d6971"
}
```

Login with the SP:

```text
az login --service-principal -u "f1309552-2ff1-4944-b55e-b86eb86df572" -p "***" --tenant "78d2249d-17d2-4e10-93e1-519c350d6971"
```

## Authorization issues

The SP has least privileges, so, for example, when attempting to create a new resource group from the command line, you may see:

```text
Error: Error checking for presence of existing resource group: resources.GroupsClient#Get: Failure responding to request: StatusCode=403 -- Original Error: autorest/azure: Service returned an error. Status=403 Code="AuthorizationFailed" Message="The client '601749d9-3488-467e-8614-b10c28b16659' with object id '601749d9-3488-467e-8614-b10c28b16659' does not have authorization to perform action 'Microsoft.Resources/subscriptions/resourcegroups/read' over scope '/subscriptions/923018dd-348d-4b78-9283-67bb7a427c4c/resourcegroups/staging_rg' or the scope is invalid. If access was recently granted, please refresh your credentials."
```

To fix this add the role to the SP or user in question, for example:

```text
az role assignment create --assignee "http://InfraSP" --role "Management Group Reader"
```

Note that you'd need to run the above command from a user logged into Azure as an Owner or User Access Administrator, see <https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-cli>.  Easiest to do this from the Azure Portal [Cloud Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview).

Furthermore you may need to add the Contributor role to the SP as well:

```text
az role assignment create --assignee "http://InfraSP" --role "Contributor"
```
