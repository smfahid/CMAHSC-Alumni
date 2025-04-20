"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Bookmark, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample member data - in a real app, this would come from an API or database
const members = [
  {
    id: 1,
    name: "Rakib",
    bloodGroup: "A+",
    district: "Lakshmipur",
    mobile: "01764440404",
    email: "rakib@gmail.com",
    batch: "2001",
    currentLocation: "Guimara, Khagrachodi",
    image: "/assets/rakib.jpeg",
  },
  {
    id: 2,
    name: "Rana",
    bloodGroup: "A+",
    district: "Lakshmipur",
    mobile: "01717741771",
    email: "rana@gmail.com",
    batch: "2001",
    currentLocation: "Jatrabari, Dhaka",
    image: "/assets/rana.jpeg",
  },
  {
    id: 3,
    name: "Oronno Anam",
    bloodGroup: "AB+",
    district: "Dhaka",
    mobile: "+880 1712 345678",
    email: "oronno@example.com",
    batch: "2010",
    currentLocation: "Dhaka, Bangladesh",
    image: "/profile.jpeg",
  },
  {
    id: 4,
    name: "Maksudur Rahman",
    bloodGroup: "B+",
    district: "Brahmanbaria",
    mobile: "+880 1812 345678",
    email: "maksudur@example.com",
    batch: "2012",
    currentLocation: "Brahmanbaria, Bangladesh",
    image: "/profile.jpeg",
  },
  {
    id: 5,
    name: "Md Iqbal Hossain",
    bloodGroup: "AB+",
    district: "Dhaka",
    mobile: "+880 1912 345678",
    email: "iqbal@example.com",
    batch: "2008",
    currentLocation: "Dhaka, Bangladesh",
    image: "/profile.jpeg",
  },
  {
    id: 6,
    name: "Obaydul Ahmed Faraz",
    bloodGroup: "O+",
    district: "Munshiganj",
    mobile: "+880 1612 345678",
    email: "obaydul@example.com",
    batch: "2015",
    currentLocation: "Munshiganj, Bangladesh",
    image: "/profile.jpeg",
  },
  {
    id: 7,
    name: "Abu",
    bloodGroup: "B+",
    district: "Munshiganj",
    mobile: "+880 1512 345678",
    email: "abu@example.com",
    batch: "2011",
    currentLocation: "Munshiganj, Bangladesh",
    image: "/profile.jpeg",
  },
  {
    id: 8,
    name: "Aditi",
    bloodGroup: "B+",
    district: "Dhaka",
    mobile: "+880 1312 345678",
    email: "aditi@example.com",
    batch: "2014",
    currentLocation: "Dhaka, Bangladesh",
    image: "/profile.jpeg",
  },
];

// Extract unique values for filters
const batches = [...new Set(members.map((member) => member.batch))];

export default function ContactPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("all");

  // Filter members based on search and batch criteria
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBatch =
      selectedBatch === "all" ? true : member.batch === selectedBatch;

    return matchesSearch && matchesBatch;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBatch("all");
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center">
          <Filter className="mr-2 h-5 w-5 text-[#963634]" />
          <h2 className="text-lg font-medium">Search & Filter Members</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <Input
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <Select value={selectedBatch} onValueChange={setSelectedBatch}>
            <SelectTrigger>
              <SelectValue placeholder="Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              {batches.map((batch) => (
                <SelectItem key={batch} value={batch}>
                  {batch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            onClick={resetFilters}
            className="text-[#963634]"
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Member Cards */}
      {filteredMembers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center p-4 md:w-1/3">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#963634]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <div className="mb-4 flex items-center">
                    <span className="mr-2 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                      {member.bloodGroup}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {member.district}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{member.mobile}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Bookmark className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Batch: {member.batch}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{member.currentLocation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center">
          <p className="text-lg font-medium text-gray-500">No members found</p>
          <p className="text-sm text-gray-400">
            Try adjusting your search or filter criteria
          </p>
          <Button
            variant="outline"
            onClick={resetFilters}
            className="mt-4 text-[#963634]"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
