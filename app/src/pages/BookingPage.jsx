import React, { useState } from 'react'
import Button from '../components/atoms/Button'

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDateTime, setSelectedDateTime] = useState(null)
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const steps = [
    { id: 1, name: 'Choose Service', description: 'Select your preferred service' },
    { id: 2, name: 'Pick Date & Time', description: 'Choose your appointment slot' },
    { id: 3, name: 'Your Details', description: 'Complete your booking' }
  ]

  const services = [
    {
      id: 'signature-haircut',
      name: 'Signature Haircut',
      duration: '60 minutes',
      price: 85,
      description: 'Premium cut and style with organic products',
      image: '/assets/images/haircut1.png'
    },
    {
      id: 'color-transformation',
      name: 'Color Transformation',
      duration: '120 minutes',
      price: 150,
      description: 'Full color service with organic, ammonia-free color',
      image: '/assets/images/haircut2.png'
    },
    {
      id: 'luxury-blowout',
      name: 'Luxury Blowout',
      duration: '45 minutes',
      price: 65,
      description: 'Professional styling with nourishing treatments',
      image: '/assets/images/haircut3.png'
    },
    {
      id: 'organic-facial',
      name: 'Organic Facial',
      duration: '75 minutes',
      price: 95,
      description: 'Deep cleansing facial with organic ingredients',
      image: '/assets/images/haircut4.png'
    },
    {
      id: 'wellness-manicure',
      name: 'Wellness Manicure',
      duration: '50 minutes',
      price: 55,
      description: 'Organic nail care with healing treatments',
      image: '/assets/images/haircut1.png'
    },
    {
      id: 'holistic-pedicure',
      name: 'Holistic Pedicure',
      duration: '60 minutes',
      price: 70,
      description: 'Complete foot care with organic products',
      image: '/assets/images/haircut2.png'
    }
  ]

  const renderStepProgress = () => (
    <div className="flex items-center justify-center space-x-8 mb-16\">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center\">
          <div className="text-center\">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-2 ${
                currentStep >= step.id 
                  ? 'bg-gray-800' 
                  : currentStep === step.id 
                    ? 'bg-pink-500' 
                    : 'bg-gray-300'
              }`}
            >
              {step.id}
            </div>
            <div className="text-center\">
              <p className={`font-medium text-sm ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                {step.name}
              </p>
              <p className="text-xs text-gray-400 max-w-[100px]\">
                {step.description}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-8 h-0.5 mx-4 mt-6 ${currentStep > step.id ? 'bg-gray-800' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  )

  const renderServiceSelection = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Choose Your Service
        </h2>
        <p className="text-lg text-gray-600">
          Select from our premium salon services crafted with organic ingredients
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            onClick={() => setSelectedService(service)}
            className={`bg-white rounded-2xl shadow-lg border cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              selectedService?.id === service.id 
                ? 'border-pink-500 ring-2 ring-pink-200' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            {/* Service Image */}
            <div className="h-48 relative overflow-hidden bg-gray-50">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover"
              />
              {selectedService?.id === service.id && (
                <div className="absolute bottom-2 left-2">
                  <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Selected</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                  <p className="text-gray-500 text-xs">{service.duration}</p>
                </div>
                <Button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedService?.id === service.id
                      ? 'bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-900 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {selectedService?.id === service.id ? 'Selected' : 'Select Service'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedService && (
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Selected Service</h3>
            <p className="text-lg font-bold text-pink-600">{selectedService.name}</p>
            <p className="text-gray-600 text-sm">{selectedService.duration} • ${selectedService.price}</p>
          </div>
          
          <Button 
            onClick={() => setCurrentStep(2)}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Continue to Date & Time
          </Button>
        </div>
      )}
    </div>
  )

  const renderDateTimeSelection = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8\">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center\">Pick Date & Time</h2>
      
      <div className="max-w-2xl mx-auto\">
        <div className="mb-6\">
          <h3 className="text-lg font-medium text-gray-900 mb-4\">Selected Service:</h3>
          <div className="bg-gray-50 p-4 rounded-lg\">
            <p className="font-semibold\">{selectedService?.name}</p>
            <p className="text-sm text-gray-600\">{selectedService?.duration} • ${selectedService?.price}</p>
          </div>
        </div>
        
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg\">
          <p className="text-gray-500 mb-4\">Calendar and time slot selection</p>
          <p className="text-sm text-gray-400 mb-6\">Interactive booking calendar will be implemented in Phase 2</p>
          
          {/* Placeholder for date/time selection */}
          <div className="space-y-4\">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2\">Preferred Date</label>
              <input 
                type="date" 
                className="border border-gray-300 rounded-lg px-3 py-2\"
                onChange={(e) => setSelectedDateTime({...selectedDateTime, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2\">Preferred Time</label>
              <select 
                className="border border-gray-300 rounded-lg px-3 py-2\"
                onChange={(e) => setSelectedDateTime({...selectedDateTime, time: e.target.value})}
              >
                <option value="">Select Time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-8\">
          <Button 
            onClick={() => setCurrentStep(1)}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium\"
          >
            Back to Services
          </Button>
          
          {selectedDateTime?.date && selectedDateTime?.time && (
            <Button 
              onClick={() => setCurrentStep(3)}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300\"
            >
              Continue to Details
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  const renderCustomerDetails = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8\">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center\">Your Details</h2>
      
      <div className="max-w-md mx-auto\">
        <div className="space-y-4 mb-8\">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2\">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your full name"
              value={customerDetails.name}
              onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2\">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="your@email.com"
              value={customerDetails.email}
              onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2\">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="(555) 123-4567"
              value={customerDetails.phone}
              onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
            />
          </div>
        </div>
        
        {/* Booking Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8\">
          <h3 className="font-semibold text-gray-900 mb-4\">Booking Summary</h3>
          <div className="space-y-2 text-sm\">
            <div className="flex justify-between\">
              <span className="text-gray-600\">Service:</span>
              <span className="font-medium\">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between\">
              <span className="text-gray-600\">Duration:</span>
              <span>{selectedService?.duration}</span>
            </div>
            <div className="flex justify-between\">
              <span className="text-gray-600\">Date:</span>
              <span>{selectedDateTime?.date}</span>
            </div>
            <div className="flex justify-between\">
              <span className="text-gray-600\">Time:</span>
              <span>{selectedDateTime?.time}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t\">
              <span>Total:</span>
              <span>${selectedService?.price}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between\">
          <Button 
            onClick={() => setCurrentStep(2)}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium\"
          >
            Back to Date & Time
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300\"
            disabled={!customerDetails.name || !customerDetails.email || !customerDetails.phone}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Book Your Experience
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Schedule your perfect salon and nourishment experience with just a few simple steps
        </p>
      </div>
      
      {/* Step Progress Indicator */}
      <div className="pb-8">
        {renderStepProgress()}
      </div>
      
      {/* Step Content */}
      {currentStep === 1 && (
        <section className="py-16 bg-white">
          {renderServiceSelection()}
        </section>
      )}
      {currentStep === 2 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {renderDateTimeSelection()}
        </div>
      )}
      {currentStep === 3 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {renderCustomerDetails()}
        </div>
      )}
    </div>
  )
}

export default BookingPage
