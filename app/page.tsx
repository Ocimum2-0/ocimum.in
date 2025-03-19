'use client';

import { Input } from "@/components/ui/input";
import { Search, Menu, MapPin, Star, Clock, Building2, ChevronDown, Settings, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/carousel";
import { Filters } from "@/components/filters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "next-themes";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    location: "New York, NY",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Heart Care Center",
    rating: 4.9,
    reviews: 127,
    badges: ["MBBS", "MD", "DM"],
    availableSlots: 3
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    location: "San Francisco, CA",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Brain & Spine Institute",
    rating: 4.8,
    reviews: 98,
    badges: ["MBBS", "MD"],
    availableSlots: 2
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    location: "Miami, FL",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Children's Wellness Center",
    rating: 4.7,
    reviews: 156,
    badges: ["MBBS", "MD"],
    availableSlots: 5
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic Surgeon",
    location: "Chicago, IL",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Advanced Orthopedics",
    rating: 4.9,
    reviews: 203,
    badges: ["MBBS", "MS", "MCh"],
    availableSlots: 1
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialization: "Dermatologist",
    location: "Los Angeles, CA",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Skin Care Specialists",
    rating: 4.6,
    reviews: 87,
    badges: ["MBBS", "MD"],
    availableSlots: 4
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialization: "Psychiatrist",
    location: "Boston, MA",
    experience: "14 years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Mind Wellness Center",
    rating: 4.8,
    reviews: 134,
    badges: ["MBBS", "MD"],
    availableSlots: 3
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialization: "Gynecologist",
    location: "Houston, TX",
    experience: "16 years",
    image: "https://images.unsplash.com/photo-1642388538891-16c428a5c6c9?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Women's Health Clinic",
    rating: 4.9,
    reviews: 178,
    badges: ["MBBS", "MD", "DNB"],
    availableSlots: 2
  },
  {
    id: 8,
    name: "Dr. David Brown",
    specialization: "Dentist",
    location: "Seattle, WA",
    experience: "11 years",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Smile Dental Care",
    rating: 4.7,
    reviews: 145,
    badges: ["BDS", "MDS"],
    availableSlots: 6
  },
  {
    id: 9,
    name: "Dr. Rachel Green",
    specialization: "Pediatric Surgeon",
    location: "Denver, CO",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Children's Surgical Center",
    rating: 4.9,
    reviews: 167,
    badges: ["MBBS", "MS", "MCh"],
    availableSlots: 1
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClinic, setSelectedClinic] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, theme } = useTheme();
  
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50 transition-all duration-200 ${
        isScrolled ? "border-b shadow-sm" : ""
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="hidden md:inline">DoctorDirectory</span>
          </Link>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search doctors, specializations..."
                className="pl-9 pr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={selectedClinic} onValueChange={setSelectedClinic}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Clinic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clinics</SelectItem>
                <SelectItem value="heart">Heart Care Center</SelectItem>
                <SelectItem value="neuro">Brain & Spine Institute</SelectItem>
                <SelectItem value="pediatric">Children's Wellness</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => {}}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Settings className="h-5 w-5" />
            </Button>

            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>

            <Filters isMobile className="md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <Carousel />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <Filters />
          </aside>

          {/* Doctors Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDoctors.map((doctor) => (
                <Link href={`/doctor/${doctor.id}`} key={doctor.id}>
                  <div className="doctor-card group">
                    <div className="flex p-4 gap-4">
                      <div className="avatar-container h-20 w-20 flex-shrink-0">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold truncate">{doctor.name}</h3>
                            <p className="text-primary text-sm">{doctor.specialization}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {doctor.bio || "Experienced healthcare professional dedicated to providing exceptional patient care."}
                        </p>

                        <div className="space-y-1">
                          <div className="info-row">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm truncate">{doctor.location}</span>
                          </div>
                          <div className="info-row">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{doctor.experience}</span>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {doctor.badges?.map((badge, index) => (
                            <span key={index} className="badge">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {doctor.availableSlots > 0 && (
                      <div className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm border-t flex items-center justify-between">
                        <span>Next available: Today at {4 + doctor.id}:00 PM</span>
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Book Now
                        </Button>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}