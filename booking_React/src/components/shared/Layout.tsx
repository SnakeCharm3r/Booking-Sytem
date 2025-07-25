import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  showUserNav?: boolean;
}

export default function Layout({
  children,
  title,
  showBack = false,
  showUserNav = true,
}: LayoutProps) {
  const { user, logout } = useAuth();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              {showBack && (
                <button
                  onClick={handleBack}
                  className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors group"
                  aria-label="Go back"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-500 group-hover:text-green-600 transition-colors" />
                </button>
              )}
              {title && (
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              )}
            </div>

            {showUserNav && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
