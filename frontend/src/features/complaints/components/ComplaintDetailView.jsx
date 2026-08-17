import React, { useState, useEffect } from "react";
import { Calendar, MapPin, User, Clock, CheckCircle2, Trash2, Edit2, Check, X } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../services/api";
import { complaintService } from "../../../services/complaints";
import { formatDate } from "../../../utils/date";
import StatusBadge from "../../../components/ui/StatusBadge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import PageHeader from "../../../components/ui/PageHeader";

const ComplaintDetailView = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [complaint, setComplaint] = useState(null);
   const [isEditing, setIsEditing] = useState(false);
   const [editedData, setEditedData] = useState({});
   const [errorMessage, setErrorMessage] = useState("");
   const [loading, setLoading] = useState(true);

   const handleSave = async () => {
      try {
         const data = await complaintService.editComplaintFields(id, editedData);
         setComplaint(data);
         setIsEditing(false);
         setErrorMessage("");
      } catch (error) {
         setErrorMessage(error.response?.data?.error || "Failed to update complaint fields.");
      }
   };

   const handleDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this complaint?");
      if (!confirmDelete) return;

      try {
         await complaintService.deleteComplaint(id);
         navigate("/dashboard");
      } catch (error) {
         setErrorMessage(error.response?.data?.error || "Delete failed.");
      }
   };

   useEffect(() => {
      const fetchComplaint = async () => {
         try {
            const data = await complaintService.getComplaintById(id);
            setComplaint(data);
         } catch (error) {
            console.error("Error fetching complaint:", error.response?.data);
         } finally {
            setLoading(false);
         }
      };

      if (id) fetchComplaint();
   }, [id]);

   if (loading) {
      return (
         <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center animate-pulse font-sans">
            <div className="h-8 bg-gray-100 rounded-xl w-1/3 mx-auto mb-4" />
            <div className="h-4 bg-gray-100 rounded-lg w-1/2 mx-auto" />
         </div>
      );
   }

   if (!complaint) {
      return (
         <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center font-sans">
            <h3 className="text-xl font-bold text-gray-900">Complaint Not Found</h3>
            <p className="text-xs text-gray-500 mt-2">The requested issue record could not be retrieved.</p>
            <Button className="mt-4" onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
         </div>
      );
   }

   const formattedCreatedDate = formatDate(complaint.created_at);
   const formattedUpdatedDate = formatDate(complaint.updated_at);

   const handleConfirm = async () => {
      try {
         await complaintService.confirmSolution(id, true);
         window.location.reload();
      } catch (error) {
         console.error(error.response?.data);
      }
   };

   const handleReopen = async () => {
      try {
         await complaintService.confirmSolution(id, false);
         window.location.reload();
      } catch (error) {
         console.error(error.response?.data);
      }
   };

   const isAuthorityResolved = complaint.status?.toUpperCase().trim() === "RESOLVED_BY_AUTHORITY";

   return (
      <div className="max-w-6xl mx-auto space-y-8 font-sans">
         
         <PageHeader
            title={`Issue #${complaint.id}: ${complaint.title}`}
            subtitle={`Reported in ${complaint.city || 'your area'}`}
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Dashboard', href: '/dashboard' },
               { label: `Issue #${complaint.id}` },
            ]}
            action={
               complaint.status === "PENDING" && (
                  <div className="flex gap-2">
                     {!isEditing ? (
                        <>
                           <Button
                              variant="secondary"
                              size="sm"
                              icon={Edit2}
                              onClick={() => {
                                 setIsEditing(true);
                                 setEditedData({
                                    title: complaint.title,
                                    description: complaint.description,
                                    city: complaint.city,
                                 });
                              }}
                           >
                              Edit Issue
                           </Button>
                           <Button
                              variant="danger"
                              size="sm"
                              icon={Trash2}
                              onClick={handleDelete}
                           >
                              Delete
                           </Button>
                        </>
                     ) : (
                        <>
                           <Button variant="primary" size="sm" icon={Check} onClick={handleSave}>
                              Save
                           </Button>
                           <Button variant="secondary" size="sm" icon={X} onClick={() => setIsEditing(false)}>
                              Cancel
                           </Button>
                        </>
                     )}
                  </div>
               )
            }
         />

         {errorMessage && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-xs font-semibold">
               {errorMessage}
            </div>
         )}

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Details & Photo */}
            <div className="lg:col-span-2 space-y-6">
               
               <Card>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                     <StatusBadge status={complaint.status} />
                     <span className="text-xs font-bold text-gray-400">Category: {complaint.category?.replace("_", " ")}</span>
                  </div>

                  {isEditing ? (
                     <input
                        value={editedData.title}
                        onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                        className="text-2xl font-black text-gray-900 w-full border border-gray-200 rounded-xl px-3 py-2 focus:border-blue-600 focus:outline-none"
                     />
                  ) : (
                     <h2 className="text-2xl font-black text-gray-900 tracking-tight">{complaint.title}</h2>
                  )}

                  <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs font-medium text-gray-500 mt-4">
                     <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-blue-600" />
                        <span>Reported by {complaint.user}</span>
                     </div>

                     <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Date: {formattedCreatedDate}</span>
                     </div>

                     <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span>{complaint.street}, {complaint.area}, {complaint.city}</span>
                     </div>
                  </div>
               </Card>

               <Card>
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-3">Detailed Description</h3>
                  {isEditing ? (
                     <textarea
                        value={editedData.description}
                        onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-700 focus:border-blue-600 focus:outline-none"
                        rows={4}
                     />
                  ) : (
                     <p className="text-sm text-gray-600 leading-relaxed font-medium">{complaint.description}</p>
                  )}
               </Card>

               <Card>
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-3">Issue Photo Evidence</h3>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 relative shadow-2xs">
                     <img
                        src={
                           complaint.image?.startsWith("http")
                              ? complaint.image
                              : `${API_BASE_URL}${complaint.image}`
                        }
                        alt="Evidence photo"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                           e.target.src = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop";
                        }}
                     />
                  </div>
               </Card>

            </div>

            {/* Right Column: Case Timeline & Quick Info */}
            <div className="space-y-6">
               
               <Card>
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-6">Resolution Timeline</h3>

                  <div className="space-y-8 relative pl-2">
                     <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100" />

                     {/* Step 1: Submitted */}
                     <div className="relative flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center relative z-10 shrink-0">
                           <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-gray-900">Submitted</p>
                           <p className="text-[11px] text-gray-500 mt-0.5">Complaint received into system</p>
                           <p className="text-[10px] text-gray-400 font-medium mt-1">{formattedCreatedDate} • {complaint.user}</p>
                        </div>
                     </div>

                     {/* Step 2: Last Updated */}
                     {complaint.updated_at && (
                        <div className="relative flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-blue-600 shadow-md shadow-blue-500/20 flex items-center justify-center relative z-10 shrink-0">
                              <Clock className="w-4 h-4 text-white" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-blue-600">{complaint.status?.replace("_", " ").toUpperCase()}</p>
                              <p className="text-[11px] text-gray-500 mt-0.5">Status update processed</p>
                              <p className="text-[10px] text-gray-400 font-medium mt-1">{formattedUpdatedDate}</p>
                           </div>
                        </div>
                     )}
                  </div>

                  {isAuthorityResolved && (
                     <div className="pt-6 border-t border-gray-100 mt-6 space-y-2">
                        <p className="text-xs font-bold text-gray-900">Confirm Solution</p>
                        <div className="flex gap-2">
                           <Button variant="primary" size="sm" onClick={handleConfirm}>
                              Confirm Solved
                           </Button>
                           <Button variant="danger" size="sm" onClick={handleReopen}>
                              Not Solved
                           </Button>
                        </div>
                     </div>
                  )}
               </Card>

               <Card className="bg-blue-50/40 border-blue-100/80">
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">Case Overview</h3>
                  <div className="space-y-3 text-xs font-medium">
                     <div className="flex justify-between">
                        <span className="text-gray-500">Case ID</span>
                        <span className="font-mono font-bold text-gray-900">#{complaint.id}</span>
                     </div>

                     <div className="flex justify-between">
                        <span className="text-gray-500">Category</span>
                        <span className="font-semibold text-gray-900">{complaint.category?.replace("_", " ")}</span>
                     </div>

                     <div className="flex justify-between pt-3 border-t border-blue-100">
                        <span className="text-gray-500">Pincode</span>
                        <span className="font-semibold text-gray-900">{complaint.pincode || 'N/A'}</span>
                     </div>
                  </div>
               </Card>

            </div>

         </div>

      </div>
   );
};

export default ComplaintDetailView;
