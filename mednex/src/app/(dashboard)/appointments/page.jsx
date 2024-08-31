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
                  <option>Dr. Anuj</option>
                  <option>Dr. Rahul</option>
                  <option>Dr. Rekha</option>
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
                { doctor: "Dr. Rahul", time: "Tomorrow, 10:00 AM" },
                { doctor: "Dr. Rekha", time: "06/10/2023, 2:00 PM" },
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
