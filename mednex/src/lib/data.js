import { CalendarIcon, PillIcon, FileTextIcon, VideoIcon } from "lucide-react";

// export let role = "admin"; admin,doctors,staff,patient,lab,pharmacy

export let role = "admin";

export const hospitalCode = "AI";

export const superAdminCode = "SA";
export const staffCode = "ST";
export const doctorCode = "DC";
export const labCode = "LB";
export const pharmacyCode = "PH";

export const doctors = [
  {
    id: 1,
    doctorName: "Dr. Arjun Patel",
    speciality: "Cardiologist",
    experience: "12 years",
    yearOfJoining: 2012,
    phoneNumber: "9876543210",
    email: "arjun.patel@example.com",
    password: "arjun.patel",
    code: `${hospitalCode}${doctorCode}0001`,
    role: "doctor",
  },
  {
    id: 2,
    doctorName: "Dr. Neha Sharma",
    speciality: "Dermatologist",
    experience: "8 years",
    yearOfJoining: 2016,
    phoneNumber: "9876543211",
    email: "neha.sharma@example.com",
    password: "neha.sharma",
    code: `${hospitalCode}${doctorCode}0002`,
    role: "doctor",
  },
  {
    id: 3,
    doctorName: "Dr. Rohan Iyer",
    speciality: "Neurologist",
    experience: "15 years",
    yearOfJoining: 2009,
    phoneNumber: "9876543212",
    email: "rohan.iyer@example.com",
    password: "rohan.iyer",
    code: `${hospitalCode}${doctorCode}0003`,
    role: "doctor",
  },
  {
    id: 4,
    doctorName: "Dr. Priya Gupta",
    speciality: "Pediatrician",
    experience: "10 years",
    yearOfJoining: 2014,
    phoneNumber: "9876543213",
    email: "priya.gupta@example.com",
    password: "priya.gupta",
    code: `${hospitalCode}${doctorCode}0004`,
    role: "doctor",
  },
  {
    id: 5,
    doctorName: "Dr. Anil Verma",
    speciality: "Orthopedic Surgeon",
    experience: "14 years",
    yearOfJoining: 2010,
    phoneNumber: "9876543214",
    email: "anil.verma@example.com",
    password: "anil.verma",
    code: `${hospitalCode}${doctorCode}0005`,
    role: "doctor",
  },
  {
    id: 6,
    doctorName: "Dr. Meera Kapoor",
    speciality: "Gynecologist",
    experience: "11 years",
    yearOfJoining: 2013,
    phoneNumber: "9876543215",
    email: "meera.kapoor@example.com",
    password: "meera.kapoor",
    code: `${hospitalCode}${doctorCode}0006`,
    role: "doctor",
  },
  {
    id: 7,
    doctorName: "Dr. Vikram Singh",
    speciality: "Oncologist",
    experience: "9 years",
    yearOfJoining: 2015,
    phoneNumber: "9876543216",
    email: "vikram.singh@example.com",
    password: "vikram.singh",
    code: `${hospitalCode}${doctorCode}0007`,
    role: "doctor",
  },
  {
    id: 8,
    doctorName: "Dr. Sanya Nair",
    speciality: "Endocrinologist",
    experience: "7 years",
    yearOfJoining: 2017,
    phoneNumber: "9876543217",
    email: "sanya.nair@example.com",
    password: "sanya.nair",
    code: `${hospitalCode}${doctorCode}0008`,
    role: "doctor",
  },
  {
    id: 9,
    doctorName: "Dr. Rajesh Desai",
    speciality: "Gastroenterologist",
    experience: "13 years",
    yearOfJoining: 2011,
    phoneNumber: "9876543218",
    email: "rajesh.desai@example.com",
    password: "rajesh.desai",
    code: `${hospitalCode}${doctorCode}0009`,
    role: "doctor",
  },
  {
    id: 10,
    doctorName: "Dr. Kavita Menon",
    speciality: "Psychiatrist",
    experience: "16 years",
    yearOfJoining: 2008,
    phoneNumber: "9876543219",
    email: "kavita.menon@example.com",
    password: "kavita.menon",
    code: `${hospitalCode}${doctorCode}0010`,
    role: "doctor",
  },
  {
    id: 11,
    doctorName: "Dr. Akash Rao",
    speciality: "Urologist",
    experience: "10 years",
    yearOfJoining: 2014,
    phoneNumber: "9876543220",
    email: "akash.rao@example.com",
    password: "akash.rao",
    code: `${hospitalCode}${doctorCode}0011`,
    role: "doctor",
  },
  {
    id: 12,
    doctorName: "Dr. Sneha Mukherjee",
    speciality: "Ophthalmologist",
    experience: "12 years",
    yearOfJoining: 2012,
    phoneNumber: "9876543221",
    email: "sneha.mukherjee@example.com",
    password: "sneha.mukherjee",
    code: `${hospitalCode}${doctorCode}0012`,
    role: "doctor",
  },
  {
    id: 13,
    doctorName: "Dr. Arvind Prasad",
    speciality: "Pulmonologist",
    experience: "14 years",
    yearOfJoining: 2010,
    phoneNumber: "9876543222",
    email: "arvind.prasad@example.com",
    password: "arvind.prasad",
    code: `${hospitalCode}${doctorCode}0013`,
    role: "doctor",
  },
  {
    id: 14,
    doctorName: "Dr. Ritu Malhotra",
    speciality: "Nephrologist",
    experience: "8 years",
    yearOfJoining: 2016,
    phoneNumber: "9876543223",
    email: "ritu.malhotra@example.com",
    password: "ritu.malhotra",
    code: `${hospitalCode}${doctorCode}0014`,
    role: "doctor",
  },
  {
    id: 15,
    doctorName: "Dr. Sanjay Kulkarni",
    speciality: "ENT Specialist",
    experience: "11 years",
    yearOfJoining: 2013,
    phoneNumber: "9876543224",
    email: "sanjay.kulkarni@example.com",
    password: "sanjay.kulkarni",
    code: `${hospitalCode}${doctorCode}0015`,
    role: "doctor",
  },
];

export const staff = [
  {
    id: 1,
    staffName: "Ravi Kumar",
    role: "Nurse",
    department: "Emergency",
    yearOfJoining: 2016,
    phoneNumber: "9876543225",
    email: "ravi.kumar@example.com",
    password: "ravi.kumar",
    code: `${hospitalCode}${staffCode}0001`,
    role: "staff",
  },
  {
    id: 2,
    staffName: "Aisha Patel",
    role: "Receptionist",
    department: "Front Desk",
    yearOfJoining: 2019,
    phoneNumber: "9876543226",
    email: "aisha.patel@example.com",
    password: "aisha.patel",
    code: `${hospitalCode}${staffCode}0002`,
    role: "staff",
  },
  {
    id: 3,
    staffName: "Arjun Sharma",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2015,
    phoneNumber: "9876543227",
    email: "arjun.sharma@example.com",
    password: "arjun.sharma",
    code: `${hospitalCode}${staffCode}0003`,
    role: "staff",
  },
  {
    id: 4,
    staffName: "Priya Singh",
    role: "Administrative Assistant",
    department: "Admin",
    yearOfJoining: 2018,
    phoneNumber: "9876543228",
    email: "priya.singh12@example.com",
    password: "priya.singh12",
    code: `${hospitalCode}${staffCode}0004`,
    role: "staff",
  },
  {
    id: 5,
    staffName: "Rajesh Reddy",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2014,
    phoneNumber: "9876543229",
    email: "rajesh.reddy@example.com",
    password: "rajesh.reddy",
    code: `${hospitalCode}${staffCode}0005`,
    role: "staff",
  },
  {
    id: 6,
    staffName: "Sneha Gupta",
    role: "Billing Specialist",
    department: "Billing",
    yearOfJoining: 2020,
    phoneNumber: "9876543230",
    email: "sneha.gupta@example.com",
    password: "sneha.gupta",
    code: `${hospitalCode}${staffCode}0006`,
    role: "staff",
  },
  {
    id: 7,
    staffName: "Kiran Mehta",
    role: "Medical Records Clerk",
    department: "Medical Records",
    yearOfJoining: 2017,
    phoneNumber: "9876543231",
    email: "kiran.mehta@example.com",
    password: "kiran.mehta",
    code: `${hospitalCode}${staffCode}0007`,
    role: "staff",
  },
  {
    id: 8,
    staffName: "Ankit Joshi",
    role: "Maintenance Staff",
    department: "Facilities",
    yearOfJoining: 2013,
    phoneNumber: "9876543232",
    email: "ankit.joshi@example.com",
    password: "ankit.joshi",
    code: `${hospitalCode}${staffCode}0008`,
    role: "staff",
  },
  {
    id: 9,
    staffName: "Neha Kapoor",
    role: "Ward Clerk",
    department: "Ward",
    yearOfJoining: 2019,
    phoneNumber: "9876543233",
    email: "neha.kapoor@example.com",
    password: "neha.kapoor",
    code: `${hospitalCode}${staffCode}0009`,
    role: "staff",
  },
  {
    id: 10,
    staffName: "Amit Verma",
    role: "IT Support",
    department: "IT",
    yearOfJoining: 2016,
    phoneNumber: "9876543234",
    email: "amit.verma@example.com",
    password: "amit.verma",
    code: `${hospitalCode}${staffCode}0010`,
    role: "staff",
  },
];

export const labTechnicians = [
  {
    id: 1,
    staffName: "Dr. Anil Verma",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2018,
    phoneNumber: "9876543235",
    email: "anil.verma22@example.com",
    password: "anil.verma22",
    code: `${hospitalCode}${labCode}0001`,
    role: "lab",
  },
  {
    id: 2,
    staffName: "Ms. Priya Singh",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2020,
    phoneNumber: "9876543236",
    email: "priya.singh@example.com",
    password: "priya.singh",
    code: `${hospitalCode}${labCode}0002`,
    role: "lab",
  },
  {
    id: 3,
    staffName: "Mr. Rajesh Kumar",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2017,
    phoneNumber: "9876543237",
    email: "rajesh.kumar@example.com",
    password: "rajesh.kumar",
    code: `${hospitalCode}${labCode}0003`,
    role: "lab",
  },
  {
    id: 4,
    staffName: "Ms. Sanya Patel",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2019,
    phoneNumber: "9876543238",
    email: "sanya.patel@example.com",
    password: "sanya.patel",
    code: `${hospitalCode}${labCode}0004`,
    role: "lab",
  },
  {
    id: 5,
    staffName: "Mr. Akash Jain",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2021,
    phoneNumber: "9876543239",
    email: "akash.jain@example.com",
    password: "akash.jain",
    code: `${hospitalCode}${labCode}0005`,
    role: "lab",
  },
  {
    id: 6,
    staffName: "Dr. Meera Rao",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2016,
    phoneNumber: "9876543240",
    email: "meera.rao@example.com",
    password: "meera.rao",
    code: `${hospitalCode}${labCode}0006`,
    role: "lab",
  },
  {
    id: 7,
    staffName: "Ms. Sneha Reddy",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2022,
    phoneNumber: "9876543241",
    email: "sneha.reddy@example.com",
    password: "sneha.reddy",
    code: `${hospitalCode}${labCode}0007`,
    role: "lab",
  },
  {
    id: 8,
    staffName: "Mr. Vikram Kumar",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2015,
    phoneNumber: "9876543242",
    email: "vikram.kumar@example.com",
    password: "vikram.kumar",
    code: `${hospitalCode}${labCode}0008`,
    role: "lab",
  },
  {
    id: 9,
    staffName: "Ms. Ananya Singh",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2018,
    phoneNumber: "9876543243",
    email: "ananya.singh@example.com",
    password: "ananya.singh",
    code: `${hospitalCode}${labCode}0009`,
    role: "lab",
  },
  {
    id: 10,
    staffName: "Mr. Raj Kumar",
    role: "Lab Technician",
    department: "Laboratory",
    yearOfJoining: 2019,
    phoneNumber: "9876543244",
    email: "raj.kumar@example.com",
    password: "raj.kumar",
    code: `${hospitalCode}${labCode}0010`,
    role: "lab",
  },
];

export const pharmacists = [
  {
    id: 1,
    staffName: "Dr. Arun Patel",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2016,
    phoneNumber: "9876543228",
    email: "arun.patel@example.com",
    password: "arun.patel",
    code: `${hospitalCode}${pharmacyCode}0001`,
    role: "pharmacy",
  },
  {
    id: 2,
    staffName: "Ms. Meena Sharma",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2017,
    phoneNumber: "9876543229",
    email: "meena.sharma@example.com",
    password: "meena.sharma",
    code: `${hospitalCode}${pharmacyCode}0002`,
    role: "pharmacy",
  },
  {
    id: 3,
    staffName: "Mr. Rahul Gupta",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2018,
    phoneNumber: "9876543230",
    email: "rahul.gupta@example.com",
    password: "rahul.gupta",
    code: `${hospitalCode}${pharmacyCode}0003`,
    role: "pharmacy",
  },
  {
    id: 4,
    staffName: "Ms. Priya Mehta",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2019,
    phoneNumber: "9876543231",
    email: "priya.mehta@example.com",
    password: "priya.mehta",
    code: `${hospitalCode}${pharmacyCode}0004`,
    role: "pharmacy",
  },
  {
    id: 5,
    staffName: "Mr. Arun Kumar",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2020,
    phoneNumber: "9876543232",
    email: "arun.kumar@example.com",
    password: "arun.kumar",
    code: `${hospitalCode}${pharmacyCode}0005`,
    role: "pharmacy",
  },
  {
    id: 6,
    staffName: "Dr. Sunita Rao",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2021,
    phoneNumber: "9876543233",
    email: "sunita.rao@example.com",
    password: "sunita.rao",
    code: `${hospitalCode}${pharmacyCode}0006`,
    role: "pharmacy",
  },
  {
    id: 7,
    staffName: "Ms. Anju Verma",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2022,
    phoneNumber: "9876543234",
    email: "anju.verma@example.com",
    password: "anju.verma",
    code: `${hospitalCode}${pharmacyCode}0007`,
    role: "pharmacy",
  },
  {
    id: 8,
    staffName: "Mr. Vikas Reddy",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2015,
    phoneNumber: "9876543235",
    email: "vikas.reddy@example.com",
    password: "vikas.reddy",
    code: `${hospitalCode}${pharmacyCode}0008`,
    role: "pharmacy",
  },
  {
    id: 9,
    staffName: "Ms. Neeta Singh",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2016,
    phoneNumber: "9876543236",
    email: "neeta.singh@example.com",
    password: "neeta.singh",
    code: `${hospitalCode}${pharmacyCode}0009`,
    role: "pharmacy",
  },
  {
    id: 10,
    staffName: "Mr. Rajesh Sharma",
    role: "Pharmacist",
    department: "Pharmacy",
    yearOfJoining: 2017,
    phoneNumber: "9876543237",
    email: "rajesh.sharma@example.com",
    password: "rajesh.sharma",
    code: `${hospitalCode}${pharmacyCode}0010`,
    role: "pharmacy",
  },
];

export const dashboardCards = [
  {
    title: "Next Appointment",
    icon: CalendarIcon,
    content: { header: "Dr. Smith", subText: "Tomorrow, 10:00 AM" },
  },
  {
    title: "Latest Prescription",
    icon: PillIcon,
    content: { header: "Amoxicillin", subText: "Prescribed on 05/15/2023" },
  },
  {
    title: "Recent Test Result",
    icon: FileTextIcon,
    content: { header: "Blood Test", subText: "Received on 05/10/2023" },
  },
  {
    title: "Upcoming Video Call",
    icon: VideoIcon,
    content: { header: "Dr. Johnson", subText: "06/01/2023, 2:00 PM" },
  },
];

export const medications = [
  {
    id: 1,
    name: "Aspirin",
    batchNumber: "ASP20230601",
    quantity: 5000,
    expiryDate: "2024-06-01",
    supplier: "PharmaCorp",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Amoxicillin",
    batchNumber: "AMX20230515",
    quantity: 2000,
    expiryDate: "2024-05-15",
    supplier: "MediPharm",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Lisinopril",
    batchNumber: "LIS20230420",
    quantity: 3000,
    expiryDate: "2025-04-20",
    supplier: "HealthDrugs",
    status: "In Stock",
  },
  {
    id: 4,
    name: "Metformin",
    batchNumber: "MET20230710",
    quantity: 4000,
    expiryDate: "2024-07-10",
    supplier: "Diabetescare",
    status: "In Stock",
  },
  {
    id: 5,
    name: "Simvastatin",
    batchNumber: "SIM20230825",
    quantity: 1500,
    expiryDate: "2024-08-25",
    supplier: "HeartHealth",
    status: "Low Stock",
  },
  {
    id: 6,
    name: "Omeprazole",
    batchNumber: "OMP20230930",
    quantity: 2500,
    expiryDate: "2024-09-30",
    supplier: "GastroMed",
    status: "In Stock",
  },
  {
    id: 7,
    name: "Levothyroxine",
    batchNumber: "LEV20231105",
    quantity: 3500,
    expiryDate: "2025-11-05",
    supplier: "ThyroidCare",
    status: "In Stock",
  },
  {
    id: 8,
    name: "Amlodipine",
    batchNumber: "AML20231220",
    quantity: 1800,
    expiryDate: "2024-12-20",
    supplier: "CardioPharm",
    status: "Low Stock",
  },
];

export const reports = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: "P001",
    type: "Blood Test",
    testName: "Complete Blood Count",
    date: "2023-06-01",
    status: "Completed",
    result: "Normal",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    patientId: "P002",
    type: "Scan",
    testName: "CT Scan - Chest",
    date: "2023-06-02",
    status: "Pending",
    result: "Awaiting",
  },
  {
    id: 3,
    patientName: "Bob Johnson",
    patientId: "P003",
    type: "Blood Test",
    testName: "Lipid Panel",
    date: "2023-06-03",
    status: "Completed",
    result: "Abnormal",
  },
  {
    id: 4,
    patientName: "Alice Brown",
    patientId: "P004",
    type: "Scan",
    testName: "MRI - Brain",
    date: "2023-06-04",
    status: "In Progress",
    result: "Awaiting",
  },
  {
    id: 5,
    patientName: "Charlie Davis",
    patientId: "P005",
    type: "Blood Test",
    testName: "Thyroid Function",
    date: "2023-06-05",
    status: "Completed",
    result: "Normal",
  },
  {
    id: 6,
    patientName: "Eva Wilson",
    patientId: "P006",
    type: "Scan",
    testName: "X-Ray - Chest",
    date: "2023-06-06",
    status: "Completed",
    result: "Abnormal",
  },
  {
    id: 7,
    patientName: "Frank Miller",
    patientId: "P007",
    type: "Blood Test",
    testName: "Liver Function",
    date: "2023-06-07",
    status: "Pending",
    result: "Awaiting",
  },
  {
    id: 8,
    patientName: "Grace Taylor",
    patientId: "P008",
    type: "Scan",
    testName: "Ultrasound - Abdomen",
    date: "2023-06-08",
    status: "Completed",
    result: "Normal",
  },
];

export const beds = [
  {
    id: 1,
    type: "ICU",
    location: "Floor 3, Room 301",
    rate: 1000,
    status: "Occupied",
    patient: "John Doe",
    equipment: ["Ventilator", "Heart Monitor"],
  },
  {
    id: 2,
    type: "General",
    location: "Floor 2, Room 205",
    rate: 500,
    status: "Available",
    patient: null,
    equipment: ["IV Stand"],
  },
  {
    id: 3,
    type: "Pediatric",
    location: "Floor 1, Room 110",
    rate: 600,
    status: "Occupied",
    patient: "Jane Smith",
    equipment: ["Oxygen Supply"],
  },
  {
    id: 4,
    type: "Maternity",
    location: "Floor 4, Room 402",
    rate: 700,
    status: "Available",
    patient: null,
    equipment: ["Fetal Monitor"],
  },
  {
    id: 5,
    type: "ICU",
    location: "Floor 3, Room 302",
    rate: 1000,
    status: "Available",
    patient: null,
    equipment: ["Ventilator", "Dialysis Machine"],
  },
  {
    id: 6,
    type: "General",
    location: "Floor 2, Room 210",
    rate: 500,
    status: "Occupied",
    patient: "Bob Johnson",
    equipment: ["IV Stand"],
  },
  {
    id: 7,
    type: "Pediatric",
    location: "Floor 1, Room 115",
    rate: 600,
    status: "Available",
    patient: null,
    equipment: ["Oxygen Supply"],
  },
  {
    id: 8,
    type: "Maternity",
    location: "Floor 4, Room 405",
    rate: 700,
    status: "Occupied",
    patient: "Alice Brown",
    equipment: ["Fetal Monitor"],
  },
];

export const consultations = [
  {
    id: 1,
    date: "2023-06-01",
    doctor: "Dr. Smith",
    specialty: "Cardiology",
    patientName: "John Doe",
    reason: "Chest Pain",
    diagnosis: "Angina",
    treatment: "Prescribed nitroglycerin",
    followUp: "2 weeks",
  },
  {
    id: 2,
    date: "2023-05-15",
    doctor: "Dr. Johnson",
    specialty: "Orthopedics",
    patientName: "Jane Smith",
    reason: "Knee Pain",
    diagnosis: "Osteoarthritis",
    treatment: "Prescribed NSAIDs and physical therapy",
    followUp: "1 month",
  },
  {
    id: 3,
    date: "2023-05-10",
    doctor: "Dr. Williams",
    specialty: "Neurology",
    patientName: "Bob Brown",
    reason: "Headaches",
    diagnosis: "Migraine",
    treatment: "Prescribed sumatriptan",
    followUp: "3 weeks",
  },
  {
    id: 4,
    date: "2023-04-28",
    doctor: "Dr. Davis",
    specialty: "Gastroenterology",
    patientName: "Alice Johnson",
    reason: "Abdominal Pain",
    diagnosis: "Gastritis",
    treatment: "Prescribed omeprazole",
    followUp: "2 weeks",
  },
  {
    id: 5,
    date: "2023-04-15",
    doctor: "Dr. Miller",
    specialty: "Dermatology",
    patientName: "Charlie Wilson",
    reason: "Skin Rash",
    diagnosis: "Eczema",
    treatment: "Prescribed topical corticosteroid",
    followUp: "1 month",
  },
  {
    id: 6,
    date: "2023-04-02",
    doctor: "Dr. Taylor",
    specialty: "Endocrinology",
    patientName: "Eva Martinez",
    reason: "Fatigue",
    diagnosis: "Hypothyroidism",
    treatment: "Prescribed levothyroxine",
    followUp: "6 weeks",
  },
  {
    id: 7,
    date: "2023-03-20",
    doctor: "Dr. Anderson",
    specialty: "Pulmonology",
    patientName: "Frank Lee",
    reason: "Shortness of Breath",
    diagnosis: "Asthma",
    treatment: "Prescribed inhaler",
    followUp: "1 month",
  },
  {
    id: 8,
    date: "2023-03-05",
    doctor: "Dr. Thomas",
    specialty: "Rheumatology",
    patientName: "Grace Kim",
    reason: "Joint Pain",
    diagnosis: "Rheumatoid Arthritis",
    treatment: "Prescribed methotrexate",
    followUp: "2 months",
  },
];
