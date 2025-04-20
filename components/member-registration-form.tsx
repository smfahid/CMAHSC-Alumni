"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Camera, Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function MemberRegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    altMobile: "",
    birthday: "",
    gender: "",
    bloodGroup: "",
    fathersName: "",
    mothersName: "",
    institution: "Char Mehar Azizia High School",
    degree: "BSc",
    department: "",
    passingYear: "",
    batch: "",
    hall: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    district: "",
    country: "",
    designation: "",
    professionalInfo: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input when the button is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Read the selected file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show the preview modal instead of submitting directly
    setShowPreviewModal(true);
  };

  const handleFinalSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setShowPreviewModal(false);
    // You could redirect or show a success message here
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-md"
      >
        {/* Profile Picture Upload */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full bg-slate-200">
            {profileImage ? (
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="Profile Preview"
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Camera className="h-8 w-8" />
                </div>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            id="profile-photo"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleUploadClick}
          >
            Upload Photo
          </Button>
        </div>

        {/* Personal Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile">Mobile</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="altMobile">Alt. Mobile</Label>
                <Input
                  id="altMobile"
                  name="altMobile"
                  value={formData.altMobile}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="birthday">Birthday</Label>
              <div className="relative mt-1">
                <Input
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("gender", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("bloodGroup", value)
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="fathersName">Father&apos;s name</Label>
              <Input
                id="fathersName"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="mothersName">Mother&apos;s name</Label>
              <Input
                id="mothersName"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>

        {/* Institution Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Institution Information
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="institution">Institution</Label>
              <Select
                defaultValue="Char Mehar Azizia High School"
                onValueChange={(value) =>
                  handleSelectChange("institution", value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select institution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Char Mehar Azizia High School">
                    Char Mehar Azizia High School
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="degree">Degree</Label>
              <Select
                defaultValue="BSc"
                onValueChange={(value) => handleSelectChange("degree", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BSc">BSc</SelectItem>
                  <SelectItem value="MSc">MSc</SelectItem>
                  <SelectItem value="PhD">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("department", value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSE">
                    Computer Science and Engineering
                  </SelectItem>
                  <SelectItem value="EEE">
                    Electrical and Electronic Engineering
                  </SelectItem>
                  <SelectItem value="ME">Mechanical Engineering</SelectItem>
                  <SelectItem value="CE">Civil Engineering</SelectItem>
                  <SelectItem value="NAME">
                    Naval Architecture and Marine Engineering
                  </SelectItem>
                  <SelectItem value="IPE">
                    Industrial and Production Engineering
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="passingYear">Passing Year</Label>
              <div className="relative mt-1">
                <Input
                  id="passingYear"
                  name="passingYear"
                  type="number"
                  value={formData.passingYear}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="batch">Batch (HSC)</Label>
              <div className="relative mt-1">
                <Input
                  id="batch"
                  name="batch"
                  type="text"
                  value={formData.batch}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="hall">Hall</Label>
              <Select
                onValueChange={(value) => handleSelectChange("hall", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select hall" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ahsanullah">Ahsanullah Hall</SelectItem>
                  <SelectItem value="Chatri">Chatri Hall</SelectItem>
                  <SelectItem value="Nazrul">Kazi Nazrul Islam Hall</SelectItem>
                  <SelectItem value="Rashid">Shahid Smriti Hall</SelectItem>
                  <SelectItem value="Sher">Sher-e-Bangla Hall</SelectItem>
                  <SelectItem value="Titumir">Titumir Hall</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Address</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="addressLine1">Address Line 1</Label>
              <Input
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="addressLine2">Address Line 2</Label>
              <Input
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Professional Information
          </h2>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="professionalInfo">Professional Info</Label>
              <Input
                id="professionalInfo"
                name="professionalInfo"
                value={formData.professionalInfo}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>

        {/* Portal Access */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Portal Access</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-8 flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={handleCheckboxChange}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I hereby declare that, as a Life Member/ Associate Life Member, I
              shall abide by the rules and regulations of Char Mehar Azizia High
              School Alumni and support its activities that will help achieve
              its objectives.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            PREVIEW
          </Button>
        </div>
      </form>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Registration Preview</h2>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6 flex flex-col items-center">
              <div className="relative mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200">
                {profileImage ? (
                  <Image
                    src={profileImage || "/placeholder.svg"}
                    alt="Profile Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      <Camera className="h-6 w-6" />
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-gray-600">{formData.email}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Personal Information */}
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 text-lg font-semibold">
                  Personal Information
                </h3>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <span className="font-medium">First Name:</span>
                    <span>{formData.firstName}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Last Name:</span>
                    <span>{formData.lastName}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Mobile:</span>
                    <span>{formData.mobile}</span>
                  </div>
                  {formData.altMobile && (
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Alt. Mobile:</span>
                      <span>{formData.altMobile}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Birthday:</span>
                    <span>{formData.birthday}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Gender:</span>
                    <span>{formData.gender}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Blood Group:</span>
                    <span>{formData.bloodGroup}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Father&apos;s Name:</span>
                    <span>{formData.fathersName}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Mother&apos;s Name:</span>
                    <span>{formData.mothersName}</span>
                  </div>
                </div>
              </div>

              {/* Institution Information */}
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 text-lg font-semibold">
                  Institution Information
                </h3>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Institution:</span>
                    <span>{formData.institution}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Degree:</span>
                    <span>{formData.degree}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Department:</span>
                    <span>{formData.department}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Passing Year:</span>
                    <span>{formData.passingYear}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Batch (HSC):</span>
                    <span>{formData.batch}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Hall:</span>
                    <span>{formData.hall}</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 text-lg font-semibold">Address</h3>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Address Line 1:</span>
                    <span>{formData.addressLine1}</span>
                  </div>
                  {formData.addressLine2 && (
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Address Line 2:</span>
                      <span>{formData.addressLine2}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2">
                    <span className="font-medium">City:</span>
                    <span>{formData.city}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Postcode:</span>
                    <span>{formData.postcode}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">District:</span>
                    <span>{formData.district}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Country:</span>
                    <span>{formData.country}</span>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="rounded-lg border p-4">
                <h3 className="mb-3 text-lg font-semibold">
                  Professional Information
                </h3>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Designation:</span>
                    <span>{formData.designation}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-medium">Professional Info:</span>
                    <span>{formData.professionalInfo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowPreviewModal(false)}
              >
                Edit Information
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={handleFinalSubmit}
              >
                Submit Registration
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
