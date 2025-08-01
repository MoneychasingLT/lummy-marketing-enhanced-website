import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, TrendingUp, Star, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  // Auto-open contact modal after 3 seconds, once per session
  useEffect(() => {
    const hasShownBefore = sessionStorage.getItem('contactModalShown');
    
    if (!hasShownBefore && !hasShownModal) {
      const timer = setTimeout(() => {
        setIsContactModalOpen(true);
        setHasShownModal(true);
        sessionStorage.setItem('contactModalShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasShownModal]);

  const stats = [
    { icon: Users, number: "500+", label: "Clients Served", delay: "0.1s" },
    { icon: TrendingUp, number: "250%", label: "Avg ROI Increase", delay: "0.2s" },
    { icon: Star, number: "98%", label: "Client Satisfaction", delay: "0.3s" },
    { icon: Target, number: "24/7", label: "Support Available", delay: "0.4s" }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "Every strategy is backed by comprehensive analytics and proven methodologies.",
      delay: "0.1s"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Quick turnaround times without compromising on quality or effectiveness.",
      delay: "0.2s"
    },
    {
      icon: Target,
      title: "Targeted Approach",
      description: "Precision-focused campaigns that reach your ideal customers at the right time.",
      delay: "0.3s"
    }
  ];

  return (
    <>
      {/* Hero Section with Fixed Mobile Spacing */}
      <section className="homepage-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Elements */}
        <div className="homepage-hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue rounded-full opacity-10 float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-light-grey rounded-full opacity-20 float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue rounded-full opacity-5 float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-shadow">
              Grow Your Business with{' '}
              <span className="text-blue">Digital Marketing</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help businesses scale their online presence through data-driven digital marketing strategies that deliver real results.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-full pulse-glow"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="btn-secondary px-8 py-4 text-lg font-semibold rounded-full border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats Section */}
            <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center stagger-1"
                  style={{animationDelay: stat.delay}}
                >
                  <div className="icon-blue w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white section-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue">Lummy Marketing</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with analytics to deliver marketing solutions that not only look great but drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                style={{animationDelay: feature.delay}}
              >
                <div className="icon-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful businesses that have accelerated their growth with our proven digital marketing strategies.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => setIsContactModalOpen(true)}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Home;

