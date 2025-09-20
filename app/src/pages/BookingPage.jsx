import React, { useState } from 'react'
import Button from '../components/atoms/Button'

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedStylist, setSelectedStylist] = useState(null)
  const [selectedDateTime, setSelectedDateTime] = useState(null)
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [bookingComplete, setBookingComplete] = useState(false)

  const steps = [
    { id: 1, name: 'Choose Service', description: 'Select your preferred service' },
    { id: 2, name: 'Choose Stylist', description: 'Pick your expert stylist' },
    { id: 3, name: 'Pick Date & Time', description: 'Choose your appointment slot' },
    { id: 4, name: 'Your Details', description: 'Complete your booking' }
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

  const stylists = [
    {
      id: 1,
      name: "Sofia Martinez",
      title: "Senior Stylist",
      specialties: ["Color Specialist", "Luxury Cuts", "Bridal Styling"],
      rating: 4.9,
      experience: "8 years",
      bio: "Expert in organic color treatments and precision cutting techniques.",
      image: "/assets/images/stylist1.jpg"
    },
    {
      id: 2,
      name: "Emma Thompson",
      title: "Master Stylist",
      specialties: ["Extensions", "Keratin Treatments", "Creative Styling"],
      rating: 4.8,
      experience: "12 years",
      bio: "Specializes in transformative styling and organic hair restoration.",
      image: "/assets/images/stylist2.jpg"
    },
    {
      id: 3,
      name: "Isabella Chen",
      title: "Spa Director",
      specialties: ["Facials", "Wellness Treatments", "Holistic Care"],
      rating: 5.0,
      experience: "10 years",
      bio: "Certified in organic skincare and holistic wellness treatments.",
      image: "/assets/images/stylist3.jpg"
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
            Continue to Stylist Selection
          </Button>
        </div>
      )}
    </div>
  )

  const renderStylistSelection = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Choose Your Stylist
        </h2>
        <p className="text-lg text-gray-600">
          Select from our expert team of certified organic beauty professionals
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylists.map((stylist) => (
          <div 
            key={stylist.id} 
            onClick={() => setSelectedStylist(stylist)}
            className={`bg-white rounded-2xl shadow-lg border cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              selectedStylist?.id === stylist.id 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            {/* Stylist Photo */}
            <div className="h-64 relative overflow-hidden bg-gradient-to-br from-pink-50 to-blue-50">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">{stylist.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
              </div>
              {selectedStylist?.id === stylist.id && (
                <div className="absolute bottom-2 left-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Selected</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {stylist.name}
                </h3>
                <p className="text-brand-blue font-medium">{stylist.title}</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(stylist.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{stylist.rating} • {stylist.experience}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {stylist.bio}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {stylist.specialties.slice(0, 2).map((specialty, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button 
                className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedStylist?.id === stylist.id
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg'
                    : 'bg-gray-800 hover:bg-gray-900 text-white shadow-md hover:shadow-lg'
                }`}
              >
                {selectedStylist?.id === stylist.id ? 'Selected' : 'Select Stylist'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedStylist && (
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Selected Stylist</h3>
            <p className="text-lg font-bold text-blue-600">{selectedStylist.name}</p>
            <p className="text-gray-600 text-sm">{selectedStylist.title} • {selectedStylist.rating} ⭐</p>
          </div>
          
          <Button 
            onClick={() => setCurrentStep(3)}
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
          <h3 className="text-lg font-medium text-gray-900 mb-4\">Your Selections:</h3>
          <div className="space-y-3\">
            <div className="bg-gray-50 p-4 rounded-lg\">
              <p className="font-semibold text-pink-600\">{selectedService?.name}</p>
              <p className="text-sm text-gray-600\">{selectedService?.duration} • ${selectedService?.price}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg\">
              <p className="font-semibold text-blue-600\">{selectedStylist?.name}</p>
              <p className="text-sm text-gray-600\">{selectedStylist?.title} • {selectedStylist?.rating} ⭐</p>
            </div>
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
            onClick={() => setCurrentStep(2)}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium\"
          >
            Back to Stylists
          </Button>
          
          {selectedDateTime?.date && selectedDateTime?.time && (
            <Button 
              onClick={() => setCurrentStep(4)}
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
              <span className="text-gray-600\">Stylist:</span>
              <span className="font-medium\">{selectedStylist?.name}</span>
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
            onClick={() => setCurrentStep(3)}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium\"
          >
            Back to Date & Time
          </Button>
          
          <Button 
            onClick={() => {
              // Simulate booking confirmation
              setBookingComplete(true)
            }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300\"
            disabled={!customerDetails.name || !customerDetails.email || !customerDetails.phone}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  )

  const renderBookingConfirmation = () => (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-lg text-gray-600">
            Your appointment has been successfully scheduled
          </p>
        </div>
        
        {/* Booking Details */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Appointment Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium text-pink-600">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Stylist:</span>
              <span className="font-medium text-blue-600">{selectedStylist?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{selectedDateTime?.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{selectedDateTime?.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span>{selectedService?.duration}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-bold text-xl text-gray-900">${selectedService?.price}</span>
            </div>
          </div>
        </div>
        
        {/* Customer Info */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">{customerDetails.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span>{customerDetails.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span>{customerDetails.phone}</span>
            </div>
          </div>
        </div>
        
        {/* Confirmation Number */}
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-4 mb-6 border border-pink-100">
          <p className="text-sm text-gray-600 mb-1">Confirmation Number</p>
          <p className="text-xl font-bold text-gray-900">PB-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        </div>
        
        {/* Next Steps */}
        <div className="text-left mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2"></div>
              <span>Confirmation email sent to {customerDetails.email}</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
              <span>SMS reminder will be sent 24 hours before your appointment</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2"></div>
              <span>Arrive 15 minutes early for consultation</span>
            </li>
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => {
              // Reset booking flow
              setCurrentStep(1)
              setSelectedService(null)
              setSelectedStylist(null)
              setSelectedDateTime(null)
              setCustomerDetails({name: '', email: '', phone: ''})
              setBookingComplete(false)
            }}
            variant="secondary"
            className="px-6 py-3 rounded-full font-medium"
          >
            Book Another Appointment
          </Button>
          <Button 
            as="a" 
            href="/" 
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Return to Homepage
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
      
      {/* Conditional rendering based on booking completion */}
      {bookingComplete ? (
        <div className="py-12">
          {renderBookingConfirmation()}
        </div>
      ) : (
        <>
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
            <section className="py-16 bg-white">
              {renderStylistSelection()}
            </section>
          )}
          {currentStep === 3 && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {renderDateTimeSelection()}
            </div>
          )}
          {currentStep === 4 && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {renderCustomerDetails()}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BookingPage
