# React Deploy Sample
In this repository you can find guide how to deploy modern React.js application to cloud.

# Register cloud provider account
Create account in one of popular cloud providers
- [Yandex Cloud](https://cloud.yandex-team.ru)
- [Digital Ocean](https://www.digitalocean.com)
- [Google Cloud Compute](https://cloud.google.com/)
- [Amazon Web Services](https://aws.amazon.com)

Warning - depends on your cloud provider you can face problems with firewall and private cloud subnets. In this guide we will skip this section. For example - in Digital Ocean and Yandex Cloud you will not face such kind of problems.

# Generate SSH keys
You can manage VPS with [SSH](https://ru.wikipedia.org/wiki/SSH) connection

The most easy (and, by the way, required by most cloud providers) way to connect to VPS is ssh-keys. Before connection you have to generate private and public key and upload **private** ssh key to VM while configuring.
After your VM is created, you can connect to it with your **public** key

* `ssh-keygen -t ed25519`
* Choose file location if needed, or just rename files after generating

Where `my-key.pub` is the name of public key filename (default is id-rsa.pub)

# Create VPS
Create [VPS](https://cloud.google.com/learn/what-is-a-virtual-private-server) in your cloud provider and get access into it with SSH

For basic project minimum configuration (for example 1GB RAM 1 vCPU) is OK.

* Dont forget to Mention Subnet
* Upload your public key to VPS
* with IP and your private you should be able to connect
`ssh -i ~/.ssh/deploy-sample.pub ubuntu@<ip>`

# Install required packages into system
Connect to your VPS with IP and ssh-keys
* Nodejs ([NVM](https://github.com/nvm-sh/nvm#installing-and-updating) recomended)
* [Docker](https://www.docker.com/) **// TODO: Slides** (sudo snap install docker)
* [nginx](https://nginx.org/) **// TODO: Slides** (sudo apt install nginx-core)

# Deploy V1: Git, NGINX, Static files
* Just clone your repository

    `git clone <repo-url>`
    
    **// TODO: Slides**
    `git clone https://github.com/kletskovg/react-deploy-sample.git`
* Edit Basic NGINX config 

    **// TODO Slides**
    (/etc/nginx/sites-available/default)
    
    Example of config you can find in `nginx.example.conf` file in this repository

* Check your NGINX status
    Just do `systemctl status nginx` and to open your IP address in web browser

* Build project with NPM
    
    You will get `build` or `dist` directory with static files inside your project 

* Move your static files from dist to /var/www/html
    `sudo mv ./dist/* /var/www/html`

After completion of this steps you will able to open your ip address in web browser and see your project

# Deploy V2: Docker
Build docker image on your VPS or on your local machine (docker build . -t site-frontend)
On VPS run or rerun container

# Deploy V3 (Homework):
Add Github Actions and automate build and push of docker images
Connect to VPS and pull images

# Next steps
* Connect domain to your VPS (Use [DNS](https://ru.wikipedia.org/wiki/DNS))
* Add [HTTPS](https://ru.wikipedia.org/wiki/HTTPS) connection
* Try to run few projects in parallel ([Docker compose](https://docs.docker.com/compose/))
* Try to configure subdomains - https://blog.example.com | https://api.example.com ETC...
* Connect many VPS into cluster and run your system (Orchestration and [Kubernetes](https://kubernetes.io/))
* Learn what is [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) and DevOps and try to automate whole process of testing of your project and deploy to servers.
