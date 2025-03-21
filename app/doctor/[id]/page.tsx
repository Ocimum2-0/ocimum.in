import { DoctorProfile } from './doctor-profile';

// Mock data (in a real app, this would come from a database)
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    username: "@sarahjohnson",
    specialization: "Cardiologist",
    location: "New York, NY",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop",
    clinicName: "Heart Care Center",
    clinicAddress: "123 Medical Plaza, New York, NY 10001",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in interventional cardiology and has a particular focus on preventive care. Her approach combines cutting-edge medical technology with personalized patient care to achieve the best possible outcomes.",
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
    email: "dr.johnson@heartcare.com",
    schedule: {
      activeDays: ["Monday", "Wednesday", "Friday"],
      timeSlots: {
        morning: "9:00 AM – 11:00 AM",
        afternoon: "2:00 PM – 4:00 PM",
        evening: "6:00 PM – 8:00 PM"
      }
    }
  }
  // ... other doctors data
];

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const doctor = doctors.find(d => d.id === parseInt(params.id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return <DoctorProfile doctor={doctor} />;
}