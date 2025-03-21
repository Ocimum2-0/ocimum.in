'use client';

import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock, Building2, ArrowLeft, Phone, Mail, Award, Calendar, ChevronDown, ChevronUp, Sun, Cloud, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Doctor = {
  id: number;
  name: string;
  username: string;
  specialization: string;
  location: string;
  experience: string;
  image: string;
  clinicName: string;
  clinicAddress: string;
  bio: string;
  rating: number;
  reviews: number;
  badges: string[];
  education: string[];
  specialties: string[];
  languages: string[];
  insurance: string[];
  availableSlots: number;
  phone: string;
  email: string;
  schedule: {
    activeDays: string[];
    timeSlots: {
      morning: string;
      afternoon: string;
      evening: string;
    };
  };
};

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Directory
        </Link>
        
        {/* Main Profile Card */}
        <Card className="overflow-hidden mb-8">
          <div className="md:flex">
            <div className="relative w-full md:w-1/3 h-[300px] md:h-auto">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="flex flex-wrap gap-2 mb-4">
                {doctor.badges?.map((badge, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold">{doctor.name}</h1>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{doctor.rating}</span>
                  <span className="text-muted-foreground ml-1">({doctor.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-xl text-primary mb-2">{doctor.specialization}</p>
              <p className="text-muted-foreground mb-4">@{doctor.username}</p>

              {/* Contact & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                  <a href={`mailto:${doctor.email}`} className="hover:text-primary">{doctor.email}</a>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>{doctor.languages.join(", ")}</span>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className={cn(
                  "text-muted-foreground leading-relaxed",
                  !isExpanded && "line-clamp-3"
                )}>
                  {doctor.bio}
                </p>
                <Button
                  variant="ghost"
                  className="mt-2"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <span className="flex items-center">Read Less <ChevronUp className="ml-1 h-4 w-4" /></span>
                  ) : (
                    <span className="flex items-center">Read More <ChevronDown className="ml-1 h-4 w-4" /></span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Education & Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="space-y-3">
              {doctor.education?.map((edu, index) => (
                <li key={index} className="flex items-start">
                  <Award className="w-4 h-4 mr-2 mt-1 text-primary" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties?.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Clinic & Schedule */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Clinic & Schedule</h2>
          
          <div className="space-y-6">
            {/* Clinic Information */}
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{doctor.clinicName}</h3>
              <div className="space-y-2">
                <p className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(doctor.clinicAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {doctor.clinicAddress}
                  </a>
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <a 
                    href={`tel:${doctor.phone}`}
                    className="hover:text-primary"
                  >
                    {doctor.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Active Days */}
            <div>
              <h3 className="font-medium mb-3">Available Days</h3>
              <div className="flex gap-4">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className={cn(
                      "flex flex-col items-center",
                      doctor.schedule.activeDays.includes(day) 
                        ? "text-green-600 dark:text-green-400"
                        : "text-muted-foreground"
                    )}
                  >
                    <div className={cn(
                      "w-3 h-3 rounded-full mb-1",
                      doctor.schedule.activeDays.includes(day)
                        ? "bg-green-600 dark:bg-green-400"
                        : "bg-muted"
                    )} />
                    <span className="text-sm">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="font-medium mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-yellow-50/50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Sun className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="font-medium">Morning</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.schedule.timeSlots.morning}</p>
                </div>
                <div className="p-3 bg-orange-50/50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Cloud className="w-4 h-4 mr-2 text-orange-600" />
                    <span className="font-medium">Afternoon</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.schedule.timeSlots.afternoon}</p>
                </div>
                <div className="p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Moon className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="font-medium">Evening</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.schedule.timeSlots.evening}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}