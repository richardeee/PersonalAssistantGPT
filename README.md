# Personal assistant using Azure OpenAI

This project is a personal assistant that uses Azure OpenAI to answer questions. 

## How to run this demo

### Pre-requisites

* Python 3.10 or later
* Azure OpenAI resource
* npm

### Run locally

Step 1: Create a virtual environment and install the dependencies

Install python requirements:
```bash
python -m venv venv
venv\Scripts\activate
cd backend
pip install -r requirements.txt
```
Build front end:
```bash
cd frontend/personal-assistant
npm install
npm run build
```
Step 2: Run the backend
```bash
cd backend
python app.py
```

### Run in Azure App Service
Step 1: Create Azure App Service Plan and Azure App Service
```bash
az group create --name <resource-group-name> --location <location>
az appservice plan create --name <app-service-plan-name> --resource-group <resource-group-name> --sku B1 --is-linux
az webapp create --resource-group <resource-group-name> --plan <app-service-plan-name> --name <app-service-name> --runtime "PYTHON|3.10"
```
Step 2: Deploy the backend to Azure App Service
```bash
az webapp deployment source config-local-git --name <app-service-name> --resource-group <resource-group-name>
git remote add azure <git-url>
git push azure main
`
Step 3: Configure the Azure App Service
Configure environment variables in Azure App Service
```bash
```



