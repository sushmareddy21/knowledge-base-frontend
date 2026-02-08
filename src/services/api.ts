import axios from 'axios';
import type { Document, ChatResponse } from '../types';

// FIXED: Use Vite's environment variable syntax
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Document APIs
export const documentApi = {
  // Get all documents
  getAllDocuments: async (): Promise<Document[]> => {
    const response = await api.get<Document[]>('/documents');
    return response.data;
  },

  // Get document by ID
  getDocumentById: async (id: number): Promise<Document> => {
    const response = await api.get<Document>(`/documents/${id}`);
    return response.data;
  },

  // Upload document
  uploadDocument: async (
    file: File,
    uploadedBy: string,
    description?: string
  ): Promise<Document> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uploadedBy', uploadedBy);
    if (description) {
      formData.append('description', description);
    }

    const response = await api.post<Document>('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete document
  deleteDocument: async (id: number): Promise<void> => {
    await api.delete(`/documents/${id}`);
  },

  // Get documents by user
  getDocumentsByUser: async (username: string): Promise<Document[]> => {
    const response = await api.get<Document[]>(`/documents/user/${username}`);
    return response.data;
  },
};

// Chat APIs
export const chatApi = {
  // Ask question across all documents
  askQuestion: async (question: string): Promise<ChatResponse> => {
    const response = await api.post<ChatResponse>('/chat/ask', { question });
    return response.data;
  },

  // Ask question about specific document
  askQuestionByDocument: async (
    documentId: number,
    question: string
  ): Promise<ChatResponse> => {
    const response = await api.post<ChatResponse>(
      `/chat/ask/${documentId}`,
      { question }
    );
    return response.data;
  },

  // Health check
  healthCheck: async (): Promise<any> => {
    const response = await api.get('/chat/health');
    return response.data;
  },
};

export default api;