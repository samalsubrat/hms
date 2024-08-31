from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
from prediction import predict_disease, specialist_assign

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    symptoms = data.get('symptoms', [])
    
    if not symptoms or not isinstance(symptoms, list):
        return jsonify({"error": "No symptoms provided or invalid format"}), 400

    predicted_disease = predict_disease(symptoms)
    recommended_specialist = specialist_assign(predicted_disease)
    response = {
        "disease": predicted_disease,
        "specialist": recommended_specialist
    }
    
@app.route('/chat',methods=['POST'])
def chat():
    data=request.get_json()
    question=data.get('question','')
    
    response=generate_response(question)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
