variable "name" {
  type = string
}

variable "subscription_id" {
  type = string
  default = "923018dd-348d-4b78-9283-67bb7a427c4c"
}

variable "resource_group" {
  type = string
}

variable "location" {
  type = string
}

variable "kind" {
  type    = string
  default = "StorageV2"
}

variable "tier" {
  type    = string
  default = "Standard"
}

variable "replication_type" {
  type    = string
  default = "LRS"
}

variable "is_hns_enabled" {
  type    = bool
  default = false
}

variable "containers" {
  type    = list(string)
  default = []
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "protect" {
  type    = bool
  default = false
}