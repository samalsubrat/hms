// components/MyPDFDocument.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create Document Component
const MyPDFDocument = ({ chiefComplaints, diagnoses, medications, examination, investigation }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Medical Report</Text>
        <Text style={styles.text}>Examination: {examination}</Text>
        <Text style={styles.text}>Investigation: {investigation}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Chief Complaints</Text>
        {chiefComplaints.map((complaint, index) => (
          <Text key={index} style={styles.text}>
            - {complaint.complaint} (Since: {complaint.since}, History: {complaint.history})
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Diagnoses</Text>
        {diagnoses.map((diagnosis, index) => (
          <Text key={index} style={styles.text}>
            - {diagnosis.diagnosis} (Type: {diagnosis.type}, Details: {diagnosis.details})
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Medications</Text>
        {medications.map((medication, index) => (
          <Text key={index} style={styles.text}>
            - {medication.name} ({medication.frequency}, {medication.duration}, {medication.route}, {medication.instructions})
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyPDFDocument;
