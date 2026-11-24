# Terraform: builds a test copy of the portfolio's Azure setup
# (resource group + free App Service plan + Linux web app)

terraform {
  required_providers {
    azurerm = { source = "hashicorp/azurerm", version = "~> 4.0" }
    random  = { source = "hashicorp/random", version = "~> 3.6" }
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

# short random ending so the website name is unique worldwide
resource "random_string" "suffix" {
  length  = 5
  upper   = false
  special = false
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-portfolio-tf"
  location = var.location
}

resource "azurerm_service_plan" "plan" {
  name                = "plan-portfolio-tf"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "F1" # free tier
}

resource "azurerm_linux_web_app" "app" {
  name                = "ibrarkhan-tf-${random_string.suffix.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
    always_on        = false # must be off on the free tier
    app_command_line = "node server.js"
    application_stack {
      node_version = "22-lts"
    }
  }
}
