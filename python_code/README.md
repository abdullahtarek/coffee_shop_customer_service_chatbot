# Python Code for Coffee Shop Chatbot
This folder contains the Python code and notebooks necessary for building and deploying the chatbot system for the coffee shop app. The code is organized into several components, each serving a specific function within the overall project.

## 📂 Directory Structure
```bash
├── python_code
│   ├── API/               # Chatbot API for agent-based system
│   ├── dataset/           # Dataset for training recommendation engine    
│   ├── products/          # Product data (names, prices, descriptions, images)   
│   ├── build_vector_database.ipynb             # Builds vector database for RAG model   
│   ├── firebase_uploader.ipynb                 # Uploads products to Firebase    
│   ├── recommendation_engine_training.ipynb    # Trains recommendation engine 
```
## 📚 Components Overview
### API
This folder contains the code for the API that handles requests to the chatbot agent system. It serves as the bridge between the React Native app and the backend functionality.
### Dataset
This folder includes the downloaded dataset from Kaggle used for training the recommendation engine. It serves as the foundation for generating personalized product suggestions.
### Products
Contains product information utilized in the app, including names, prices, descriptions, and images. This data is essential for displaying products within the app and for the chatbot's responses.
### Notebooks
#### build_vector_database.ipynb: 
A Jupyter notebook that constructs the vector database for the Retrieval-Augmented Generation (RAG) model, facilitating efficient data retrieval for the chatbot.
#### firebase_uploader.ipynb: 
A Jupyter notebook that uploads product data to Firebase, enabling the React Native app to fetch this data dynamically.
#### recommendation_engine_training.ipynb: 
A Jupyter notebook that trains the market basket analysis recommendation model, which is used by the recommendation agent to provide personalized product suggestions.


## 🚀 Getting Started

For Detailed instructions follow my Youtube tutorial
To set up the project and run the notebooks, follow these steps:

1. **Install Requirements**:  
   Ensure you have the necessary dependencies installed by running:
   ```bash
   pip install -r requirements.txt
    ```
2. **Create a Huggingface account**:
    * Create a [Hugging Face](https://huggingface.co)
    * Choose an LLM model and If necessary agree to the terms of use for the model you are going to use (necessary for LLama 3). I am going to use [LLama 3](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct).
    * Create a Hugging face account token. You are going to need when setting up the Chatbot on Runpod.
    * Create .env tile python_code folder and add the enviroement variable.
    ```
    MODEL_NAME=<your_chosen_hugginface_model>
    ```

3. **Create a RunPod Account**:
    * Sign up for a [RunPod](https://rebrand.ly/Runpod-Abdullah) account.
    * Create a ChatBot endpoint and an embedding endpoint.
    * Obtain your RunPod token and fill in the .env file with the following:
    ```
    RUNPOD_TOKEN=<your_runpod_token>
    RUNPOD_CHATBOT_URL=<your_chatbot_endpoint>
    RUNPOD_EMBEDDING_URL=<your_embedding_endpoint>
    ``
4. **Create a Pinecone Account**:
    * Sign up for a Pinecone account.
    * Copy and paste your Pinecone API key into the .env file:
    ```
    PINECONE_API_KEY=<your_pinecone_api_key>
    PINECONE_INDEX_NAME=<your_index_name>
    ```
5. **Create a Firebase Account**:
    * Sign up for Firebase
    * Create a project
    * Download json credentionals
    * Then copy paste the necessary json value in .env.
5. **Run Notebooks** :
    * You are now ready to run each Jupyter notebook without any issues. Open the notebooks and execute the cells as needed.