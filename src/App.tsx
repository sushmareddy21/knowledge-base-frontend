import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import DocumentList from './components/DocumentList';
import type { Document } from './types'; // Fixed: Added 'type'
import { documentApi } from './services/api';

function App() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const docs = await documentApi.getAllDocuments();
      setDocuments(docs);
    } catch (error) {
      console.error('Error fetching documents:', error);
      alert('Failed to load documents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            📚 Knowledge Base AI
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Upload documents and ask questions powered by AI
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload */}
          <div>
            <FileUpload onUploadSuccess={fetchDocuments} />
          </div>

          {/* Right Column - Document List */}
          <div>
            {loading ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading documents...</p>
              </div>
            ) : (
              <DocumentList
                documents={documents}
                onDocumentDeleted={fetchDocuments}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;