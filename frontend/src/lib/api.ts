import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectsAPI = {
  getAll: async () => {
    const response = await api.get('/api/projects/');
    return response.data.projects;
  },
  
  getById: async (id: number) => {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
  },
  
  create: async (project: any) => {
    const response = await api.post('/api/projects/', project);
    return response.data;
  },
  
  update: async (id: number, project: any) => {
    const response = await api.put(`/api/projects/${id}`, project);
    return response.data;
  },
  
  delete: async (id: number) => {
    const response = await api.delete(`/api/projects/${id}`);
    return response.data;
  },
};

export default api;
