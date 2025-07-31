import { Search, MousePointer, Share2, PenTool, Mail, Globe, BarChart3, Smartphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your organic visibility and drive qualified traffic with our proven SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MousePointer,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize your ROI with targeted PPC campaigns across Google, Bing, and social platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Conversion Tracking'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all major social platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Analytics'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that educates, engages, and converts your target audience.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Content Strategy'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns that drive results.',
      features: ['Email Automation', 'List Segmentation', 'A/B Testing', 'Performance Analytics'],
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-optimized websites that represent your brand perfectly.',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed performance reports.',
      features: ['Google Analytics', 'Custom Dashboards', 'ROI Tracking', 'Monthly Reports'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-optimized campaigns and app marketing strategies.',
      features: ['App Store Optimization', 'Mobile Ads', 'SMS Marketing', 'Location-Based Marketing'],
      color: 'from-red-500 to-pink-600'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Digital Marketing</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions designed to help your business grow, reach new customers, and achieve measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="mr-2 mb-2 bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your digital marketing campaigns deliver maximum results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, competitors, and target audience to understand your unique needs.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive digital marketing strategy tailored to your goals and budget.' },
              { step: '03', title: 'Implementation', description: 'Our expert team executes the strategy with precision and attention to detail.' },
              { step: '04', title: 'Optimization', description: 'We continuously monitor, analyze, and optimize campaigns for maximum performance.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

