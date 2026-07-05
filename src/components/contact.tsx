'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'priyankamehta2127@gmail.com',
      href: 'mailto:priyankamehta2127@gmail.com?subject=Hello%20Priyanka%20—%20found%20you%20through%20your%20portfolio',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+353 83 319 3708',
      href: 'tel:+353833193708',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Dublin, Ireland',
      href: 'https://www.google.com/maps/place/Dublin,+Ireland',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'priyanka-mehta21',
      href: 'https://linkedin.com/in/priyanka-mehta21',
      color: 'text-blue-700'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'priyanka603',
      href: 'https://github.com/priyanka603',
      color: 'text-gray-800'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          I'm always excited to connect with fellow tech enthusiasts, discuss opportunities, or just chat about the latest in AI and agentic systems!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  // mailto:/tel: must navigate in the same tab to open the
                  // user's mail/phone app; _blank just leaves a dead tab
                  if (/^(mailto|tel):/.test(contact.href)) {
                    window.location.href = contact.href;
                  } else {
                    window.open(contact.href, '_blank');
                  }
                }}
              >
                {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            • AI Engineer & GenAI Developer roles • Agentic AI & RAG projects • LLM evaluation & responsible AI work •
            Open source contributions • Tech community connections
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Feel free to reach out for collaborations, job opportunities, or just to discuss the latest in tech!
          I'm particularly interested in production AI systems with real-world impact.
        </p>
      </div>
    </div>
  );
}
