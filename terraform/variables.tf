variable "subscription_id" {
  description = "Your Azure subscription ID"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "southeastasia"
}
