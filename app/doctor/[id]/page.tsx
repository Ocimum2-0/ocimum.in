import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock, Building2, ArrowLeft, Phone, Mail, Award, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data (in a real app, this would come from a database)
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    location: "New York, NY",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Heart Care Center",
    clinicAddress: "123 Medical Plaza, New York, NY 10001",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in interventional cardiology and has a particular focus on preventive care.",
    rating: 4.9,
    reviews: 127,
    badges: ["MBBS", "MD", "DM"],
    education: [
      "Johns Hopkins University School of Medicine",
      "Mayo Clinic - Residency",
      "Cleveland Clinic - Fellowship"
    ],
    specialties: [
      "Interventional Cardiology",
      "Preventive Cardiology",
      "Heart Failure Management"
    ],
    languages: ["English", "Spanish"],
    insurance: ["Medicare", "Blue Cross", "Aetna", "UnitedHealth"],
    availableSlots: 3,
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@heartcare.com"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    location: "San Francisco, CA",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Brain & Spine Institute",
    clinicAddress: "456 Health Avenue, San Francisco, CA 94102",
    bio: "Dr. Michael Chen is a highly skilled neurologist specializing in the diagnosis and treatment of complex neurological disorders. With 12 years of experience, he has developed expertise in stroke management and neurodegenerative diseases. Dr. Chen earned his medical degree from Stanford University.",
    rating: 4.8,
    reviews: 98
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    location: "Miami, FL",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Children's Wellness Center",
    clinicAddress: "789 Pediatric Way, Miami, FL 33101",
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents. With 10 years of experience, she specializes in developmental pediatrics and preventive care. Dr. Rodriguez completed her medical education at the University of Miami.",
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic Surgeon",
    location: "Chicago, IL",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Advanced Orthopedics",
    clinicAddress: "321 Bone & Joint Way, Chicago, IL 60601",
    bio: "Dr. James Wilson is a renowned orthopedic surgeon with two decades of experience in sports medicine and joint replacement surgery. He has helped countless athletes return to their peak performance and has pioneered minimally invasive surgical techniques.",
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialization: "Dermatologist",
    location: "Los Angeles, CA",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Skin Care Specialists",
    clinicAddress: "567 Beverly Hills Dr, Los Angeles, CA 90210",
    bio: "Dr. Lisa Thompson is a board-certified dermatologist specializing in both medical and cosmetic dermatology. She is known for her expertise in treating complex skin conditions and her artistic approach to cosmetic procedures.",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialization: "Psychiatrist",
    location: "Boston, MA",
    experience: "14 years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Mind Wellness Center",
    clinicAddress: "890 Mental Health Ave, Boston, MA 02110",
    bio: "Dr. Robert Kim is a compassionate psychiatrist who specializes in treating anxiety, depression, and PTSD. He takes a holistic approach to mental health, combining traditional psychiatry with modern therapeutic techniques.",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialization: "Gynecologist",
    location: "Houston, TX",
    experience: "16 years",
    image: "https://images.unsplash.com/photo-1642388538891-16c428a5c6c9?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Women's Health Clinic",
    clinicAddress: "432 Women's Health Pkwy, Houston, TX 77001",
    bio: "Dr. Maria Garcia is a leading gynecologist with extensive experience in women's health. She specializes in minimally invasive surgery and provides comprehensive care for women of all ages.",
    rating: 4.9,
    reviews: 178
  },
  {
    id: 8,
    name: "Dr. David Brown",
    specialization: "Dentist",
    location: "Seattle, WA",
    experience: "11 years",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Smile Dental Care",
    clinicAddress: "765 Dental Row, Seattle, WA 98101",
    bio: "Dr. David Brown is a skilled dentist known for his gentle approach and expertise in cosmetic dentistry. He uses the latest technology to provide comfortable and effective dental care.",
    rating: 4.8,
    reviews: 145
  },
  {
    id: 9,
    name: "Dr. Rachel Green",
    specialization: "Pediatric Surgeon",
    location: "Denver, CO",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Children's Surgical Center",
    clinicAddress: "543 Children's Way, Denver, CO 80201",
    bio: "Dr. Rachel Green is a highly skilled pediatric surgeon specializing in minimally invasive procedures. She has pioneered several innovative surgical techniques for treating complex pediatric conditions.",
    rating: 4.9,
    reviews: 167
  }
];

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id.toString()
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const doctor = doctors.find(d => d.id === parseInt(params.id));
  
  return {
    title: `${doctor?.name} - ${doctor?.specialization} | Doctor Directory`,
    description: doctor?.bio,
    openGraph: {
      title: `${doctor?.name} - ${doctor?.specialization}`,
      description: doctor?.bio,
      images: [doctor?.image],
    },
  };
}

export default function DoctorProfile({ params }: { params: { id: string } }) {
  const doctor = doctors.find(d => d.id === parseInt(params.id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

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
              
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{doctor.name}</h1>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{doctor.rating}</span>
                  <span className="text-muted-foreground ml-1">({doctor.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-xl text-primary mb-6">{doctor.specialization}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>{doctor.experience} of experience</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>{doctor.email}</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <Building2 className="w-5 h-5 mr-3 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-medium">{doctor.clinicName}</p>
                  <p className="text-muted-foreground">{doctor.clinicAddress}</p>
                </div>
              </div>
              
              {doctor.availableSlots > 0 && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center mb-6">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>{doctor.availableSlots} appointment slots available today</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
          </Card>

          {/* Education & Specialties */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Education & Expertise</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Education</h3>
                <ul className="space-y-2">
                  {doctor.education?.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 mr-2 mt-1 text-primary" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Specialties</h3>
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
              </div>
            </div>
          </Card>

          {/* Languages & Insurance */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages?.map((language, index) => (
                    <span
                      key={index}
                      className="bg-secondary/50 text-secondary-foreground text-sm px-3 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Insurance Accepted</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.insurance?.map((ins, index) => (
                    <span
                      key={index}
                      className="border text-muted-foreground text-sm px-3 py-1 rounded-full"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}