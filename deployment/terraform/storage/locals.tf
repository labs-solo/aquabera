locals {
  name                       = lower(var.name)
  resource_group             = var.resource_group
  tags                       = merge(var.tags, { "managed-by" = "Terraform" })
}