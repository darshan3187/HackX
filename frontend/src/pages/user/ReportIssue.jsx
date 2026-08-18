import React, { useState, useRef } from "react";
import { Upload, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { complaintService } from "../../services/complaints";
import { CATEGORY_OPTIONS } from "../../constants/complaints";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/ui/PageHeader";

const ReportIssue = () => {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const [imagePreview, setImagePreview] = useState(null);

   const [formData, setFormData] = useState({
      title: "",
      description: "",
      category: "GARBAGE",
      street: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      image: null,
   });

   const fileInputRef = useRef(null);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setFormData({
            ...formData,
            image: file,
         });
         setImagePreview(URL.createObjectURL(file));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrorMsg("");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("street", formData.street);
      data.append("area", formData.area);
      data.append("city", formData.city);
      data.append("state", formData.state);
      data.append("pincode", formData.pincode);
      if (formData.image) {
         data.append("image", formData.image);
      }

      try {
         await complaintService.createComplaint(data);
         navigate("/dashboard");
      } catch (error) {
         console.error("Submission error:", error);
         setErrorMsg("Failed to submit issue. Please verify all required fields.");
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="space-y-8 font-sans">
         <PageHeader
            title="Report a Civic Issue"
            subtitle="Submit a complaint to your local authority for real-time tracking and resolution."
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Dashboard', href: '/dashboard' },
               { label: 'Report Issue' },
            ]}
         />

         <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Top Guidance Steps */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border border-blue-100">01</div>
                     <span className="text-xs font-bold text-gray-900">Issue Details</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center border border-emerald-100">02</div>
                     <span className="text-xs font-bold text-gray-900">Location</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 font-bold text-xs flex items-center justify-center border border-purple-100">03</div>
                     <span className="text-xs font-bold text-gray-900">Evidence</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 font-bold text-xs flex items-center justify-center border border-amber-100">04</div>
                     <span className="text-xs font-bold text-gray-900">Submit</span>
                  </div>
               </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-10 space-y-8">
               
               {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                     {errorMsg}
                  </div>
               )}

               <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* 01 Issue Information */}
                  <div className="space-y-4">
                     <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider text-blue-600">01. Issue Information</h3>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5 md:col-span-2">
                           <label className="block text-xs font-bold text-gray-700">Issue Title *</label>
                           <input
                              type="text"
                              name="title"
                              required
                              value={formData.title}
                              onChange={handleChange}
                              placeholder="e.g. Broken Street Light on Main Street"
                              className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                           />
                        </div>

                        <div className="space-y-1.5">
                           <label className="block text-xs font-bold text-gray-700">Category *</label>
                           <select
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
                           >
                              {CATEGORY_OPTIONS.map((opt) => (
                                 <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>

                     <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-700">Detailed Description *</label>
                        <textarea
                           rows="4"
                           name="description"
                           required
                           value={formData.description}
                           onChange={handleChange}
                           placeholder="Provide exact details about what is wrong and how long it has been present..."
                           className="w-full bg-white border border-gray-200 rounded-xl text-sm p-4 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 resize-none"
                        />
                     </div>
                  </div>

                  {/* 02 Location */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                     <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider text-emerald-600">02. Location Details</h3>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                           <label className="block text-xs font-bold text-gray-700">Street Address *</label>
                           <input
                              type="text"
                              name="street"
                              required
                              value={formData.street}
                              onChange={handleChange}
                              placeholder="House / Street / Landmark"
                              className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                           />
                        </div>

                        <div className="space-y-1.5">
                           <label className="block text-xs font-bold text-gray-700">Area / Neighborhood *</label>
                           <input
                              type="text"
                              name="area"
                              required
                              value={formData.area}
                              onChange={handleChange}
                              placeholder="Area or Locality"
                              className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                           />
                        </div>

                        <div className="space-y-1.5">
                           <label className="block text-xs font-bold text-gray-700">City *</label>
                           <input
                              type="text"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="City"
                              className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                           />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <label className="block text-xs font-bold text-gray-700">State *</label>
                              <input
                                 type="text"
                                 name="state"
                                 required
                                 value={formData.state}
                                 onChange={handleChange}
                                 placeholder="State"
                                 className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                              />
                           </div>
                           <div className="space-y-1.5">
                              <label className="block text-xs font-bold text-gray-700">Pincode *</label>
                              <input
                                 type="text"
                                 name="pincode"
                                 required
                                 maxLength="6"
                                 value={formData.pincode}
                                 onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                 onChange={handleChange}
                                 placeholder="Pincode"
                                 className="w-full bg-white border border-gray-200 rounded-xl text-sm px-4 py-3 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* 03 Photo Upload */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                     <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider text-purple-600">03. Upload Photo Evidence</h3>
                     
                     <div
                        onClick={() => fileInputRef.current.click()}
                        className="border-2 border-dashed border-gray-200 hover:border-blue-500 rounded-2xl p-8 text-center bg-gray-50/50 hover:bg-blue-50/30 transition-all cursor-pointer flex flex-col items-center justify-center space-y-3"
                     >
                        {imagePreview ? (
                           <div className="relative w-36 h-28 rounded-xl overflow-hidden shadow-md">
                              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                           </div>
                        ) : (
                           <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                              <Upload className="w-6 h-6" />
                           </div>
                        )}

                        <div>
                           <p className="text-sm font-bold text-gray-900">
                              {formData.image ? formData.image.name : "Click to browse photo or drag here"}
                           </p>
                           <p className="text-xs text-gray-400 mt-1">PNG, JPG or WEBP up to 10MB</p>
                        </div>
                     </div>

                     <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                     />
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-4">
                     <Button
                        type="button"
                        variant="secondary"
                        onClick={() => navigate('/dashboard')}
                     >
                        Cancel
                     </Button>
                     <Button
                        type="submit"
                        isLoading={isLoading}
                        icon={Send}
                        className="w-full sm:w-auto"
                     >
                        Submit Civic Issue
                     </Button>
                  </div>

               </form>
            </div>

         </div>
      </div>
   );
};

export default ReportIssue;