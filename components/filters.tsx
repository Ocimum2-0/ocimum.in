'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const specializations = [
  'Cardiologist',
  'Neurologist',
  'Pediatrician',
  'Orthopedic Surgeon',
  'Dermatologist',
  'Psychiatrist',
  'Gynecologist',
  'Dentist'
];

const experienceRanges = [
  '0-5 years',
  '5-10 years',
  '10+ years'
];

const availabilityOptions = [
  'Available Today',
  'Next 3 Days',
  'This Week'
];

interface FiltersProps {
  className?: string;
  isMobile?: boolean;
}

export function Filters({ className, isMobile = false }: FiltersProps) {
  const [selectedSpecializations, setSelectedSpecializations] = React.useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = React.useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = React.useState<string[]>([]);

  const FilterContent = () => (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="specialization">
          <AccordionTrigger>Specialization</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Search specializations..."
                className="mb-2"
              />
              {specializations.map((spec) => (
                <div key={spec} className="flex items-center space-x-2">
                  <Checkbox
                    id={spec}
                    checked={selectedSpecializations.includes(spec)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedSpecializations([...selectedSpecializations, spec]);
                      } else {
                        setSelectedSpecializations(
                          selectedSpecializations.filter((s) => s !== spec)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={spec}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {spec}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger>Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {experienceRanges.map((exp) => (
                <div key={exp} className="flex items-center space-x-2">
                  <Checkbox
                    id={exp}
                    checked={selectedExperience.includes(exp)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedExperience([...selectedExperience, exp]);
                      } else {
                        setSelectedExperience(
                          selectedExperience.filter((e) => e !== exp)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={exp}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {exp}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {availabilityOptions.map((opt) => (
                <div key={opt} className="flex items-center space-x-2">
                  <Checkbox
                    id={opt}
                    checked={selectedAvailability.includes(opt)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedAvailability([...selectedAvailability, opt]);
                      } else {
                        setSelectedAvailability(
                          selectedAvailability.filter((a) => a !== opt)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={opt}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className={className}>
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <FilterContent />
    </div>
  );
}