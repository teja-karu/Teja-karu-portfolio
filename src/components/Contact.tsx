
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
            <p className="text-slate-600 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">hello@alexdeveloper.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-slate-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-slate-200 focus:border-blue-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-slate-200 focus:border-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Let's work together!" 
                    className="border-slate-200 focus:border-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="border-slate-200 focus:border-blue-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
