import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronDown, Menu, X, Smartphone, Monitor, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIosDialog, setShowIosDialog] = useState(false);
  const [showWindowsDialog, setShowWindowsDialog] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shutter Controller', path: '/product/shutter' },
    { name: 'Solar Monitoring', path: '/product/solar' },
    { name: 'Solar Washing', path: '/product/solar-wash-controller' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="EzRun" className="w-10 h-10 object-contain rounded-full" />
            <span className="text-xl font-bold tracking-tight">EzRun</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2">
                  <Download className="w-4 h-4" /> Download <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => window.open('https://play.google.com/store/apps/details?id=com.machmate.controller', '_blank')} className="cursor-pointer gap-2">
                  <Smartphone className="w-4 h-4" /> Android
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setShowIosDialog(true)} className="cursor-pointer gap-2">
                  <Smartphone className="w-4 h-4" /> iOS
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setShowWindowsDialog(true)} className="cursor-pointer gap-2">
                  <Monitor className="w-4 h-4" /> Windows
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full justify-start gap-2" variant="ghost" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.machmate.controller', '_blank')}>
              Download Android
            </Button>
            <Button className="w-full justify-start gap-2" variant="ghost" onClick={() => { setShowIosDialog(true); setIsOpen(false); }}>
              Download iOS
            </Button>
            <Button className="w-full justify-start gap-2" variant="ghost" onClick={() => { setShowWindowsDialog(true); setIsOpen(false); }}>
              Download Windows
            </Button>
          </div>
        )}
      </nav>

      {/* Dialogs */}
      <Dialog open={showIosDialog} onOpenChange={setShowIosDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>iOS App Coming Soon</DialogTitle>
            <DialogDescription>
              We are currently working on our iOS application. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowIosDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showWindowsDialog} onOpenChange={setShowWindowsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Windows Application</DialogTitle>
            <DialogDescription>
              Windows applications are custom-built based on user requirements. If you need a desktop solution, please contact us.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Button onClick={() => window.open('https://wa.me/919974776076?text=I%20am%20interested%20in%20the%20Windows%20application%20for%20EzRun.', '_blank')} className="w-full gap-2">
              Message us on WhatsApp
            </Button>
            <Button variant="outline" onClick={() => setShowWindowsDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
