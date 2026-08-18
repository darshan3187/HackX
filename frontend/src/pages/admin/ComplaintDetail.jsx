import React, { useState, useEffect } from "react";
import { Calendar, MapPin, User } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";
import { complaintService } from "../../services/complaints";
import { formatDate } from "../../utils/date";
import { STATUS_OPTIONS_ADMIN } from "../../constants/complaints";
import StatusBadge from "../../components/ui/StatusBadge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";

const AdminComplaintDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [complaint, setComplaint] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [statusSuccess, setStatusSuccess] = useState(false);

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const data = await complaintService.getComplaintById(id);
                setComplaint(data);
                setSelectedStatus(data.status);
            } catch (err) {
                console.error("Error fetching complaint:", err);
                setError("Failed to load authority complaint data.");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchComplaint();
    }, [id]);

    const handleSaveStatus = async () => {
        if (!selectedStatus || selectedStatus === complaint.status) return;
        setIsUpdating(true);
        setStatusSuccess(false);
        try {
            await complaintService.updateComplaintStatus(id, selectedStatus);
            setComplaint({ ...complaint, status: selectedStatus });
            setStatusSuccess(true);
            setTimeout(() => setStatusSuccess(false), 3000);
        } catch (err) {
            console.error("Error updating status:", err);
            alert(err.response?.data?.error || "Failed to update status.");
            setSelectedStatus(complaint.status);
        } finally {
            setIsUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center animate-pulse font-sans">
                <div className="h-8 bg-gray-100 rounded-xl w-1/3 mx-auto mb-4" />
                <div className="h-4 bg-gray-100 rounded-lg w-1/2 mx-auto" />
            </div>
        );
    }

    if (error || !complaint) {
        return (
            <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center font-sans">
                <h3 className="text-xl font-bold text-gray-900">Complaint Not Found</h3>
                <p className="text-xs text-gray-500 mt-2">{error || "The requested issue record could not be retrieved."}</p>
                <Button className="mt-4" onClick={() => navigate('/admin')}>Back to Admin Portal</Button>
            </div>
        );
    }

    const formattedCreatedDate = formatDate(complaint.created_at);

    return (
        <div className="max-w-6xl mx-auto space-y-8 font-sans pb-12">
            <PageHeader
                title={`Authority Review: Issue #${complaint.id}`}
                subtitle={`Reported by citizen ${complaint.user}`}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Authority Portal', href: '/admin' },
                    { label: `Issue #${complaint.id}` },
                ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Details & Attachment */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                            <StatusBadge status={complaint.status} />
                            <span className="text-xs font-bold text-gray-400">Category: {complaint.category?.replace("_", " ")}</span>
                        </div>

                        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">{complaint.title}</h2>
                        
                        <div className="space-y-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Detailed Description</span>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">{complaint.description}</p>
                        </div>

                        {complaint.image && (
                            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Submitted Photo Evidence</span>
                                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 relative shadow-2xs">
                                    <img
                                        src={
                                            complaint.image?.startsWith("http")
                                                ? complaint.image
                                                : `${API_BASE_URL}${complaint.image}`
                                        }
                                        alt="Complaint Evidence"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop";
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </Card>
                </div>

                {/* Right Column: Status Update & Location Meta */}
                <div className="space-y-6">
                    
                    {/* Status Update Panel */}
                    <Card>
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">Update Case Status</h3>

                        {statusSuccess && (
                            <div className="p-3 mb-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                                Status updated successfully!
                            </div>
                        )}

                        <div className="space-y-4">
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                disabled={complaint.status === 'CLOSED'}
                                className="w-full bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 cursor-pointer disabled:bg-gray-50"
                            >
                                {STATUS_OPTIONS_ADMIN.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <Button
                                onClick={handleSaveStatus}
                                isLoading={isUpdating}
                                isDisabled={selectedStatus === complaint.status || complaint.status === 'CLOSED'}
                                className="w-full"
                            >
                                Save Status Changes
                            </Button>

                            {complaint.status === 'CLOSED' && (
                                <p className="text-xs text-center font-medium text-gray-500 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                                    This issue has been closed and locked.
                                </p>
                            )}
                        </div>
                    </Card>

                    {/* Metadata Card */}
                    <Card className="bg-slate-50/50">
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">Reporter & Location</h3>

                        <div className="space-y-3.5 text-xs font-medium">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                    <User className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Citizen</p>
                                    <p className="font-bold text-gray-900">{complaint.user}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Submitted On</p>
                                    <p className="font-bold text-gray-900">{formattedCreatedDate}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Location</p>
                                    <p className="font-bold text-gray-900">{complaint.street}, {complaint.area}, {complaint.city}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>

            </div>
        </div>
    );
};

export default AdminComplaintDetail;