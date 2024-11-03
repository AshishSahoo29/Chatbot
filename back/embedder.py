import sys
from embedchain import App

# Initialize the Embedchain app
embedchain_app = App.from_config(config_path="config.yaml")

def generate_embedding(source_type, source):
    if source_type == 'text':
        return embedchain_app.embed(source)
    elif source_type == 'webpage':
        return embedchain_app.embed_web_page(source)
    elif source_type == 'pdf':
        return embedchain_app.embed_pdf(source)
    elif source_type == 'doc':
        return embedchain_app.embed_google_doc(source)

# Read arguments from Node.js
source_type = sys.argv[1]
source = sys.argv[2]

# Generate the embedding and print it as a response
embedding = generate_embedding(source_type, source)
response = embedchain_app.query(source)
print(response)
