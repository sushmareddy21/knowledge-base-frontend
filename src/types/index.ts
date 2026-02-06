// Document type matching backend DTO
export interface Document {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  description: string;
  uploadedAt: string;
  uploadedBy: string;
  isProcessed: boolean;
  pageCount: number;
  fileSizeInMB?: string; // Added: Your backend DTO sends this, very useful for UI!
}

// Chat message type for the UI state
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// API response types
export interface ChatResponse {
  question: string;
  answer: string;
  documentId?: string;
}

export interface UploadResponse {
  id: number;
  fileName: string;
  message?: string;
}

export interface ErrorResponse {
  error: string;
  message?: string;
}