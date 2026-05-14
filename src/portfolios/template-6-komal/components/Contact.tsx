import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { person, contactOpportunities } from "../data";

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Ready to drive revenue growth and exceed your sales targets? Let's discuss how my expertise in B2B sales and lead generation can benefit your organization.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
                { icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone}` },
                { icon: MapPin, label: "Location", value: person.location, href: null },
                { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: person.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">{value}</a>
                    ) : (
                      <div className="text-gray-400">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              onClick={() => window.open(`mailto:${person.email}?subject=Business Opportunity - Let's Connect`)}
            >
              <Mail size={20} /><span>Send Email</span>
            </button>
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="text-sm text-gray-400 mb-4">Open to opportunities in:</div>
              <div className="flex flex-wrap gap-2">
                {contactOpportunities.map((o) => (
                  <span key={o} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20">{o}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600/10 rounded-lg p-6 text-center border border-blue-500/20">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-blue-400 font-medium">Available for new opportunities</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Ready to start immediately and contribute to your team's success</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
