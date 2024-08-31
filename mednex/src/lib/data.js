export let role ="admin"
export const beds = [
    { id: 1, type: "ICU", location: "Floor 3, Room 301", rate: 1000, status: "Occupied", patient: "John Doe", equipment: ["Ventilator", "Heart Monitor"] },
    { id: 2, type: "General", location: "Floor 2, Room 205", rate: 500, status: "Available", patient: null, equipment: ["IV Stand"] },
    { id: 3, type: "Pediatric", location: "Floor 1, Room 110", rate: 600, status: "Occupied", patient: "Jane Smith", equipment: ["Oxygen Supply"] },
    { id: 4, type: "Maternity", location: "Floor 4, Room 402", rate: 700, status: "Available", patient: null, equipment: ["Fetal Monitor"] },
    { id: 5, type: "ICU", location: "Floor 3, Room 302", rate: 1000, status: "Available", patient: null, equipment: ["Ventilator", "Dialysis Machine"] },
    { id: 6, type: "General", location: "Floor 2, Room 210", rate: 500, status: "Occupied", patient: "Bob Johnson", equipment: ["IV Stand"] },
    { id: 7, type: "Pediatric", location: "Floor 1, Room 115", rate: 600, status: "Available", patient: null, equipment: ["Oxygen Supply"] },
    { id: 8, type: "Maternity", location: "Floor 4, Room 405", rate: 700, status: "Occupied", patient: "Alice Brown", equipment: ["Fetal Monitor"] },
  ]

  export  const consultations = [
    { id: 1, date: "2023-06-01", doctor: "Dr. Smith", specialty: "Cardiology", patientName: "John Doe", reason: "Chest Pain", diagnosis: "Angina", treatment: "Prescribed nitroglycerin", followUp: "2 weeks" },
    { id: 2, date: "2023-05-15", doctor: "Dr. Johnson", specialty: "Orthopedics", patientName: "Jane Smith", reason: "Knee Pain", diagnosis: "Osteoarthritis", treatment: "Prescribed NSAIDs and physical therapy", followUp: "1 month" },
    { id: 3, date: "2023-05-10", doctor: "Dr. Williams", specialty: "Neurology", patientName: "Bob Brown", reason: "Headaches", diagnosis: "Migraine", treatment: "Prescribed sumatriptan", followUp: "3 weeks" },
    { id: 4, date: "2023-04-28", doctor: "Dr. Davis", specialty: "Gastroenterology", patientName: "Alice Johnson", reason: "Abdominal Pain", diagnosis: "Gastritis", treatment: "Prescribed omeprazole", followUp: "2 weeks" },
    { id: 5, date: "2023-04-15", doctor: "Dr. Miller", specialty: "Dermatology", patientName: "Charlie Wilson", reason: "Skin Rash", diagnosis: "Eczema", treatment: "Prescribed topical corticosteroid", followUp: "1 month" },
    { id: 6, date: "2023-04-02", doctor: "Dr. Taylor", specialty: "Endocrinology", patientName: "Eva Martinez", reason: "Fatigue", diagnosis: "Hypothyroidism", treatment: "Prescribed levothyroxine", followUp: "6 weeks" },
    { id: 7, date: "2023-03-20", doctor: "Dr. Anderson", specialty: "Pulmonology", patientName: "Frank Lee", reason: "Shortness of Breath", diagnosis: "Asthma", treatment: "Prescribed inhaler", followUp: "1 month" },
    { id: 8, date: "2023-03-05", doctor: "Dr. Thomas", specialty: "Rheumatology", patientName: "Grace Kim", reason: "Joint Pain", diagnosis: "Rheumatoid Arthritis", treatment: "Prescribed methotrexate", followUp: "2 months" },
  ]