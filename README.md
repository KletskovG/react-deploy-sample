# React Deploy Sample
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
Create [VPS](https://cloud.google.com/learn/what-is-a-virtual-private-server) in your cloud provider and get access into it with SSH

For basic project minimum configuration (for example 1GB RAM 1 vCPU) is OK.

# Generate SSH keys
You can manage VPS with [SSH](https://ru.wikipedia.org/wiki/SSH) connection

The most easy (and, by the way, required by most cloud providers) way to connect to VPS is ssh-keys. Before connection you have to generate private and public key and upload **private** ssh key to VM while configuring.
After your VM is created, you can connect to it with your **public** key

Connect command sample
`ssh -i ~/.ssh/my-key.pub <user>@<vps-ip-address>`

Where `my-key.pub` is the name of public key filename (default is id-rsa.pub)

# Install required packages into system
Connect to your VPS with IP and ssh-keys
* Nodejs ([NVM](https://github.com/nvm-sh/nvm#installing-and-updating) recomended)
* [Docker](https://www.docker.com/)
* [nginx](https://nginx.org/)

# Deploy V1
* Just clone your repository

    `git clone <repo-url>`
* Build project
    
    You will get `build` or `dist` directory with static files inside your project 

* Create Basic NGINX config

    Example of config you can find in `nginx.example.conf` file in this repository
* Try to send request to your VPS 

    `curl <ip-of-your-vps>:80`. You have to see something like this. If you do - everything is OK and you can proceed. If not - try to debug your nginx config with `nginx -t` and `systemctl status nginx`. If you cant find any problems with configuration - it means you cant connect to your VPS via normal HTTP and you have to check firewall and network settings for your Private Cloud in Cloud Provider.

* Put static files into nginx static directory
Update nginx config

# Deploy V2
Add docker
Build project in CI (Github actions)
On VPS just pull image and restart docker

# Next steps
* Connect domain to your VPS (Use [DNS](https://ru.wikipedia.org/wiki/DNS))
* Add [HTTPS](https://ru.wikipedia.org/wiki/HTTPS) connection
* Try to run few projects in parallel ([Docker compose](https://docs.docker.com/compose/))
* Try to configure subdomains - https://blog.example.com | https://api.example.com ETC...
* Connect many VPS into cluster and run your system (Orchestration and [Kubernetes](https://kubernetes.io/))
* Learn what is [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) and DevOps and try to automate whole process of testing of your project and deploy to servers.
