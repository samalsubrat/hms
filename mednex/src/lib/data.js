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