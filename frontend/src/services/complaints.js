import API from "./api";

const getAuthHeaders = (extraHeaders = {}) => {
  const token = localStorage.getItem("access");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...extraHeaders,
    },
  };
};

export const complaintService = {
  async getComplaints() {
    const response = await API.get("/api/complaints/", getAuthHeaders());
    return response.data;
  },

  async getComplaintById(id) {
    const response = await API.get(`/api/complaints/${id}/`, getAuthHeaders());
    return response.data;
  },

  async createComplaint(formData) {
    const response = await API.post(
      "/api/complaints/",
      formData,
      getAuthHeaders({ "Content-Type": "multipart/form-data" })
    );
    return response.data;
  },

  async updateComplaintStatus(id, status) {
    const response = await API.patch(
      `/api/complaints/${id}/update_status/`,
      { status },
      getAuthHeaders()
    );
    return response.data;
  },

  async editComplaintFields(id, fields) {
    const response = await API.patch(
      `/api/complaints/${id}/edit_fields/`,
      fields,
      getAuthHeaders()
    );
    return response.data;
  },

  async deleteComplaint(id) {
    const response = await API.delete(`/api/complaints/${id}/`, getAuthHeaders());
    return response.data;
  },

  async confirmSolution(id, confirmed) {
    const response = await API.post(
      `/api/complaints/${id}/confirm_solution/`,
      { confirmed },
      getAuthHeaders()
    );
    return response.data;
  },
};
