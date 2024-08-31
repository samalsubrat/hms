from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
from prediction import predict_disease, specialist_assign

app = Flask(__name__)

# Handle the POST request for disease prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Ensure 'symptoms' is provided as a list in the JSON input
    symptoms = data.get('symptoms', [])
    
    if not symptoms or not isinstance(symptoms, list):
        return jsonify({"error": "No symptoms provided or invalid format"}), 400
    
    # Predict the disease
    predicted_disease = predict_disease(symptoms)
    
    # Find the recommended specialist
    recommended_specialist = specialist_assign(predicted_disease)
    
    response = {
        "disease": predicted_disease,
        "specialist": recommended_specialist
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
