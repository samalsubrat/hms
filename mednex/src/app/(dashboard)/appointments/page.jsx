import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-green-dark">Appointments</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-dark">
              Schedule Appointment
            </CardTitle>
            <CardDescription>Choose a doctor and time slot</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="doctor">Select Doctor</Label>
                <select
                  id="doctor"
                  className="w-full rounded-md border border-green-secondary p-2"
                >
                  {[
                    { doctor: "Dr. Arjun Patel", time: "12 years" },
                    { doctor: "Dr. Neha Sharma", time: "8 years" },
                    { doctor: "Dr. Rohan Iyer", time: "15 years" },
                    { doctor: "Dr. Priya Gupta", time: "10 years" },
                    { doctor: "Dr. Anil Verma", time: "14 years" },
                    { doctor: "Dr. Meera Kapoor", time: "11 years" },
                    { doctor: "Dr. Vikram Singh", time: "9 years" },
                    { doctor: "Dr. Sanya Nair", time: "7 years" },
                    { doctor: "Dr. Rajesh Desai", time: "13 years" },
                    { doctor: "Dr. Kavita Menon", time: "16 years" },
                    { doctor: "Dr. Akash Rao", time: "10 years" },
                    { doctor: "Dr. Sneha Mukherjee", time: "12 years" },
                    { doctor: "Dr. Arvind Prasad", time: "14 years" },
                    { doctor: "Dr. Ritu Malhotra", time: "8 years" },
                    { doctor: "Dr. Sanjay Kulkarni", time: "11 years" },
                  ].map((i, index) => (
                    <option key={index}>{i.doctor}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Select Date</Label>
                <Input
                  id="date"
                  type="date"
                  className="border-green-secondary"
                />
              </div>
              <Button className="bg-green-main hover:bg-green-700">
                Schedule Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-green-dark">
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { doctor: "Dr. Arjun Patel", time: "12 years" },
                { doctor: "Dr. Neha Sharma", time: "8 years" },
                { doctor: "Dr. Rohan Iyer", time: "15 years" },
                { doctor: "Dr. Priya Gupta", time: "10 years" },
                { doctor: "Dr. Anil Verma", time: "14 years" },
                { doctor: "Dr. Meera Kapoor", time: "11 years" },
                { doctor: "Dr. Vikram Singh", time: "9 years" },
                { doctor: "Dr. Sanya Nair", time: "7 years" },
                { doctor: "Dr. Rajesh Desai", time: "13 years" },
                { doctor: "Dr. Kavita Menon", time: "16 years" },
                { doctor: "Dr. Akash Rao", time: "10 years" },
                { doctor: "Dr. Sneha Mukherjee", time: "12 years" },
                { doctor: "Dr. Arvind Prasad", time: "14 years" },
                { doctor: "Dr. Ritu Malhotra", time: "8 years" },
                { doctor: "Dr. Sanjay Kulkarni", time: "11 years" },
              ].map((appointment, index) => (
                <li
                  key={index}
                  className="flex justify-between rounded-lg border p-2"
                >
                  <span>{appointment.doctor}</span>
                  <span>{appointment.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
