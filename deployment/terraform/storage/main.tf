provider "azurerm" {
  features {}
  version                    = "=2.40.0"
  subscription_id            = var.subscription_id
  skip_provider_registration = true
}

data "azurerm_client_config" "this" {}

resource "azurerm_storage_account" "this" {
  resource_group_name = var.resource_group
  location                 = var.location

  name                = local.name
  account_tier             = var.tier
  account_kind             = var.kind
  account_replication_type = var.replication_type
  is_hns_enabled           = var.is_hns_enabled
  min_tls_version          = "TLS1_2"
  enable_https_traffic_only = false

  tags = local.tags

  identity {
    type = "SystemAssigned"
  }

  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_management_lock" "this" {
  count      = var.protect ? 1 : 0
  name       = "StorageDeleteLock"
  scope      = azurerm_storage_account.this.id
  lock_level = "CanNotDelete"
  notes      = "This resource is protected"
}