# htmlacademy-react-deploy
In this repository you can find guide how to deploy modern react application to cloud.

# Register cloud provider account
Create account in one of popular cloud providers 
Yandex Cloud 
Google Cloud Compute
Digital Ocean
Amazon Web Services 
etc 

Warning - depends on your cloud provider you can face problems with firewall. In this guide  we will skip this section 

# Create VPS
Create VPS in your cloud provider and get access into it with SSH

# Install required packages into system
Nodejs
Docker
nginx

# Deploy V1
Just clone your repository
Build project
Put static files into nginx static directory
Update nginx config
Connect DNS from your cloud provider to your VPS

# Deploy V2
Add docker 
Build project in CI (Github actions)
On VPS just pull image and restart docker 

# Next steps
Learn how to automate deploy
