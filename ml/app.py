from flask import Flask, request, jsonify
from chatbot import generate_response

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/chat',methods=['POST'])
def chat():
    data=request.get_json()
    question=data.get('question','')
    
    response=generate_response(question)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
