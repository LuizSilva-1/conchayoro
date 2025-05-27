# ------------------------------------------------------------
# terraform.tfvars — valores reais das variáveis
# ------------------------------------------------------------
AWS_REGION        = "us-east-1"
PROJECT_NAME      = "conchayoro"
MODULE_NAME       = "app"
SOLUTION_STACK_NAME = "64bit Amazon Linux 2 v3.5.10 running Docker"
EnvironmentType   = "SingleInstance"
LoadBalancerType  = "application"
MinSize           = 1
MaxSize           = 1
DeploymentPolicy  = "AllAtOnce"
BatchSizeType     = "Fixed"
BatchSize         = 50
Timeout           = 3600
