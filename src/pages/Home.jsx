import { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Users, Target, Zap, Star, Play } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const Home = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '500+', label: 'Clients Served', icon: Users },
    { number: '250%', label: 'Avg ROI Increase', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Target }
  ]

  const features = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'Every strategy is backed by comprehensive analytics and proven methodologies.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick turnaround times without compromising on quality or effectiveness.'
    },
    {
      icon: Target,
      title: 'Targeted Approach',
      description: 'Precision-focused campaigns that reach your ideal customers at the right time.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Grow Your Business with{' '}
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help businesses scale their online presence through data-driven digital marketing strategies that deliver real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={onContactClick}
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-slate-500 hover:from-sky-500 hover:to-slate-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 pulse-glow"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
              >
                <Play className="mr-2" size={20} />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div 
                    key={index} 
                    className={`text-center stagger-animation`}
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-sky-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Lummy Marketing</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with analytics to deliver marketing solutions that not only look great but drive measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have accelerated their growth with our proven digital marketing strategies.
          </p>
          <Button 
            onClick={onContactClick}
            size="lg"
            className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

