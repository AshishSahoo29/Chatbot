import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, User, LogOut, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files.length) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file) => {
    const validTypes = ['.doc', '.docx', '.pdf', '.odt', '.rtf'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

    if (validTypes.includes(fileExtension)) {
      setFile(file);
    } else {
      alert('Please upload a valid file format (.doc, .docx, .pdf, .odt, .rtf)');
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 relative">
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">John Doe</span>
            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-10 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Upload</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Upload your contact list securely. We'll help you streamline your campaign outreach.
          </p>
        </div>

        <div 
          className={`border-2 border-dashed rounded-xl p-10 transition-all duration-300 ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label htmlFor="file-upload" className="cursor-pointer block">
            <div className="flex justify-center mb-6">
              {file ? (
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              ) : (
                <Upload className="w-16 h-16 text-blue-500" />
              )}
            </div>
            
            {!file ? (
              <>
                <p className="text-blue-600 font-semibold hover:underline">
                  Click to upload
                </p>
                <p className="text-gray-500 mt-2">or drag and drop files here</p>
              </>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-8 h-8 text-blue-500" />
                <span className="text-gray-700 font-medium">{file.name}</span>
              </div>
            )}

            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".doc,.docx,.pdf,.odt,.rtf"
              onChange={handleFileInput}
            />
          </label>

          <div className="mt-6 text-sm text-gray-500">
            <p>Supported formats: .doc, .docx, .pdf, .odt, .rtf</p>
            <p className="text-red-500 font-medium">(Required)</p>
          </div>
        </div>

        {file && (
          <div className="mt-6">
            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg 
              hover:bg-blue-700 transition-colors font-semibold"
            >
              Continue with {file.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;