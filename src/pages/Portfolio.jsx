import { ExternalLink, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'TechStart Solutions',
      industry: 'Technology',
      challenge: 'Low online visibility and poor lead generation',
      solution: 'Comprehensive SEO strategy and PPC campaigns',
      results: [
        { metric: 'Organic Traffic', value: '+340%', icon: TrendingUp },
        { metric: 'Lead Generation', value: '+280%', icon: Users },
        { metric: 'Revenue Growth', value: '+195%', icon: DollarSign },
        { metric: 'Project Timeline', value: '6 months', icon: Clock }
      ],
      services: ['SEO', 'PPC', 'Content Marketing'],
      description: 'A B2B software company struggling with online visibility. We implemented a comprehensive digital strategy that transformed their online presence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    },
    {
      title: 'EcoFresh Organics',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'E-commerce optimization and email marketing automation',
      results: [
        { metric: 'Conversion Rate', value: '+165%', icon: TrendingUp },
        { metric: 'Customer Retention', value: '+220%', icon: Users },
        { metric: 'Average Order Value', value: '+85%', icon: DollarSign },
        { metric: 'Project Timeline', value: '4 months', icon: Clock }
      ],
      services: ['E-commerce', 'Email Marketing', 'CRO'],
      description: 'An organic food retailer needed to improve their online store performance and customer retention rates.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop'
    },
    {
      title: 'UrbanFit Gyms',
      industry: 'Fitness',
      challenge: 'Declining membership and poor social media presence',
      solution: 'Social media marketing and local SEO optimization',
      results: [
        { metric: 'Social Engagement', value: '+420%', icon: TrendingUp },
        { metric: 'New Memberships', value: '+180%', icon: Users },
        { metric: 'Local Visibility', value: '+250%', icon: DollarSign },
        { metric: 'Project Timeline', value: '5 months', icon: Clock }
      ],
      services: ['Social Media', 'Local SEO', 'Content Creation'],
      description: 'A chain of fitness centers looking to attract younger demographics and increase local market share.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop'
    },
    {
      title: 'LegalPro Associates',
      industry: 'Legal Services',
      challenge: 'Limited online presence and client acquisition',
      solution: 'Professional website redesign and content marketing',
      results: [
        { metric: 'Website Traffic', value: '+290%', icon: TrendingUp },
        { metric: 'Client Inquiries', value: '+240%', icon: Users },
        { metric: 'Case Value', value: '+120%', icon: DollarSign },
        { metric: 'Project Timeline', value: '7 months', icon: Clock }
      ],
      services: ['Web Design', 'Content Marketing', 'SEO'],
      description: 'A law firm specializing in corporate law needed to establish credibility and attract high-value clients online.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop'
    },
    {
      title: 'CloudTech Innovations',
      industry: 'SaaS',
      challenge: 'High customer acquisition cost and low trial conversions',
      solution: 'Marketing automation and conversion optimization',
      results: [
        { metric: 'Trial Conversions', value: '+310%', icon: TrendingUp },
        { metric: 'Customer LTV', value: '+185%', icon: Users },
        { metric: 'CAC Reduction', value: '-45%', icon: DollarSign },
        { metric: 'Project Timeline', value: '8 months', icon: Clock }
      ],
      services: ['Marketing Automation', 'CRO', 'Analytics'],
      description: 'A cloud software provider needed to optimize their funnel and reduce customer acquisition costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
    },
    {
      title: 'ArtisanCraft Marketplace',
      industry: 'Marketplace',
      challenge: 'Low seller adoption and buyer engagement',
      solution: 'Multi-channel marketing and community building',
      results: [
        { metric: 'Active Sellers', value: '+380%', icon: TrendingUp },
        { metric: 'Buyer Engagement', value: '+260%', icon: Users },
        { metric: 'Transaction Volume', value: '+210%', icon: DollarSign },
        { metric: 'Project Timeline', value: '9 months', icon: Clock }
      ],
      services: ['Social Media', 'Influencer Marketing', 'Community Management'],
      description: 'An online marketplace for handmade goods needed to build a thriving community of sellers and buyers.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve remarkable growth through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-xl border-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {study.industry}
                      </Badge>
                      <div className="flex gap-2">
                        {study.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {study.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, resultIndex) => {
                        const IconComponent = result.icon
                        return (
                          <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                            <IconComponent className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.metric}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <Button variant="outline" className="w-full group">
                      View Full Case Study
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results with our proven digital marketing strategies.
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Success Story
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

