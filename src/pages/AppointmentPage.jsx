import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone, Mail, FileText } from "lucide-react";

export function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset  3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        notes: "",
      });
    }, 3000);
  };
  console.log(formData);

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-green-600">
              Appointment Confirmed!
            </CardTitle>
            <CardDescription>
              We've received your appointment request. You'll receive a
              confirmation email shortly.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Book an Appointment
          </h1>
          <p className="text-gray-600">
            Schedule your consultation with our team
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Appointment Details
            </CardTitle>
            <CardDescription>
              Please fill out the form below to schedule your appointment. All
              fields are required.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <User className="w-4 h-4" />
                  Personal Information
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Marky Johny"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="marky@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <Clock className="w-4 h-4" />
                  Appointment Schedule
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="service">Service Type</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">
                      Sira niko Ni monika poki ko
                    </option>
                    <option value="follow-up">
                      Sira niko Ni monika poki ko
                    </option>
                    <option value="specialist">
                      Sira niko Ni monika poki ko
                    </option>
                    <option value="emergency">
                      Sira niko Ni monika poki ko
                    </option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <FileText className="w-4 h-4" />
                  Additional Information
                </h3>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <textarea
                    id="notes"
                    placeholder="Please provide any additional information or special requirements..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  Booking Appointment...
                </div>
              ) : (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </>
              )}
            </Button>

            <div className="text-sm text-center text-gray-600">
              <p>
                By booking an appointment, you agree to our terms and
                conditions.
              </p>
              <Button variant="link" className="h-auto p-0 text-sm">
                Need help? Contact us
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
