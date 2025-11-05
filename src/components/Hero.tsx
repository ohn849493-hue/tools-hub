import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Tagline */}
            <div className="inline-block">
              <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
                Premium Fashion Collection
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Fashion, enjoy{' '}
              <span className="relative inline-block">
                and live
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C100 2 200 2 298 10" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              a new and full life
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover our curated collection of premium fashion pieces designed for the modern lifestyle. Express yourself with timeless elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const productsSection = document.getElementById('all-products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Find out more
              </button>

              <button className="flex items-center gap-3 text-gray-700 font-semibold hover:text-orange-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Play className="h-5 w-5 text-orange-500 ml-1" />
                </div>
                Play Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="https://raw.githubusercontent.com/Solved-Overnight/arvana-clothing/refs/heads/main/img/collections/home_woman_model.jpg"
                alt="Fashion Model"
                className="w-full h-auto object-contain max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Decorative plane icons */}
            <div className="absolute top-10 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.45 20.55 7 20 7H13L9 3H7L9 7H3L1 5V9L3 7H9L13 11H20C20.55 11 21 10.55 21 10V16Z" fill="#3B82F6"/>
              </svg>
            </div>

            <div className="absolute top-32 left-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.45 20.55 7 20 7H13L9 3H7L9 7H3L1 5V9L3 7H9L13 11H20C20.55 11 21 10.55 21 10V16Z" fill="#60A5FA"/>
              </svg>
            </div>

            <div className="absolute bottom-20 right-5 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.45 20.55 7 20 7H13L9 3H7L9 7H3L1 5V9L3 7H9L13 11H20C20.55 11 21 10.55 21 10V16Z" fill="#93C5FD"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
