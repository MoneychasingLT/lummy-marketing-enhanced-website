import { useState } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'SEO Optimization',
    'PPC Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Web Development',
    'Email Marketing',
    'Brand Strategy',
    'Analytics & Reporting'
  ];

  const [formSubmitted, setFormSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  // You can add your Netlify form submission logic here if needed
  // For now, we'll just simulate success

  setFormSubmitted(true);
  // Optionally, reset form after a delay
  setTimeout(() => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
    setFormSubmitted(false);
  }, 5000); // Message disappears after 5 seconds
};

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto fade-in-up">
        {/* Header */}
        <div className="bg-blue p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Get Started Today</h2>
              <p className="text-blue-100 mt-1">Let\'s grow your business together</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
       <form name="contact-modal" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact-modal" />
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
              Full Name *
            </label>
            <Input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail size={16} className="inline mr-2" />
              Email Address *
            </label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="inline mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              className="w-full"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service of Interest
            </label>
            <Select onValueChange={(value) => handleChange('service', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              Message
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your project or goals..."
              rows={4}
              className="w-full"
            />
          </div>

          <p className="text-sm text-gray-600 mb-4 text-center">
            By submitting this form, you agree to be contacted by Lummy Marketing via SMS or email. 
            You can reply STOP to opt out at any time.
          </p>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
        {formSubmitted && (
  <p className="text-green-600 text-center mt-4 font-semibold">
    Thank you for your message! We will get back to you within 24 hours.
  </p>
)}
      </div>
    </div>
  );
};

export default ContactModal;
