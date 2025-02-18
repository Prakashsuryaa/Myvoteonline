import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import img4 from "../../src/images/bg.jpg";

const InputField = ({ label, name, type = "text", value, onChange, placeholder, error }) => (
  <div className="w-full">
    <label className="block text-sm font-medium">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={`w-full border rounded p-2 ${error ? "border-red-500" : "border-gray-300"}`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="w-full">
    <label className="block text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full border rounded p-2 ${error ? "border-red-500" : "border-gray-300"}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const VoterForm = () => {
  const [formData, setFormData] = useState({
    parliamentaryNo: "",
    assemblyNo: "",
    wardNo: "",
    epicNo: "",
    name: "",
    fatherName: "",
    dob: "",
    age: "",
    religion: "",
    caste: "",
    gender: "",
    phone: "",
    aadharNo: "",
    familyId: "",
    rationCard: "",
    boothNo: "",
    partNo: "",
    address: "",
    district: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Voter registration saved successfully!");
      setFormData({
        parliamentaryNo: "",
        assemblyNo: "",
        wardNo: "",
        epicNo: "",
        name: "",
        fatherName: "",
        dob: "",
        age: "",
        religion: "",
        caste: "",
        gender: "",
        phone: "",
        aadharNo: "",
        familyId: "",
        rationCard: "",
        boothNo: "",
        partNo: "",
        address: "",
        district: "",
        state: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-4 pt-10"  style={{ backgroundImage: `url(${img4} )`, backgroundSize: '100% 100%' }}>
        <div className=" shadow-lg rounded-lg p-6 w-full max-w-7xl">
          <h2 className="text-xl font-semibold text-center mb-4">Voter Registration Form</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <InputField label="Parliamentary No." name="parliamentaryNo" value={formData.parliamentaryNo} onChange={handleChange} placeholder="Enter No." />
            <InputField label="Assembly No." name="assemblyNo" value={formData.assemblyNo} onChange={handleChange} placeholder="Enter Assembly no." />
            <InputField label="Ward No." name="wardNo" value={formData.wardNo} onChange={handleChange} placeholder="Enter Ward no." />
            <InputField label="EPIC NO." name="epicNo" value={formData.epicNo} onChange={handleChange} placeholder="NAH0000123" />
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" error={errors.name} />
            <InputField label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" error={errors.fatherName} />
            <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" error={errors.dob} />
            <InputField label="Age" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" error={errors.age} />
            <InputField label="Religion" name="religion" value={formData.religion} onChange={handleChange} placeholder="Religion" />
            <InputField label="Caste" name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" />
            <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={[{ value: "", label: "Select Gender" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }]} error={errors.gender} />
            <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="XXXXXX XXXXX" error={errors.phone} />
            <InputField label="Aadhar No." name="aadharNo" value={formData.aadharNo} onChange={handleChange} placeholder="XXXX XXXX XXXX" error={errors.aadharNo} />
            <InputField label="Family ID No." name="familyId" value={formData.familyId} onChange={handleChange} placeholder="Enter Family Id No."  />
            <InputField label="Ration Card No." name="rationCard" value={formData.rationCard} onChange={handleChange} placeholder="Enter Ration Card no." />
            <InputField label="Booth No." name="boothNo" value={formData.boothNo} onChange={handleChange} placeholder="Enter Booth No." />
            <InputField label="Part  No." name="partNo" value={formData.partNo} onChange={handleChange} placeholder="Enter part No." />
            
            <InputField label="Address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" error={errors.address} />
            <InputField label="District" name="district" value={formData.district} onChange={handleChange} placeholder="District" error={errors.district} />
            <InputField label="State" name="state" value={formData.state} onChange={handleChange} placeholder="State" error={errors.state} />
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-end mt-4">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VoterForm;
