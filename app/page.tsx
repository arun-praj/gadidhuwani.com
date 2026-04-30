import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Navigation / Header */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Truck className="w-8 h-8 text-[var(--color-accent)]" />
          <span className="font-serif text-2xl font-bold tracking-tight">GadiDhuwani.com</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="small-caps text-[var(--color-muted-foreground)]">24/7 Service Across Nepal</span>
          <a href="tel:+9779851420084">
            <Button variant="primary" className="gap-2">
              <Phone className="w-4 h-4" />
              +977 9851420084
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center">

        {/* Fleet & Services Hero Section */}
        <section className="w-full max-w-7xl mx-auto py-16 md:py-24 px-6 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16 max-w-6xl mx-auto w-full">
            <div className="flex-1">
              <span className="small-caps text-[var(--color-accent)] mb-6 inline-block tracking-[0.2em]">Nepal&#x27;s Premier Transport</span>
              <h1 className="heading-hero mb-6">
                Our Fleet &amp; Services.
              </h1>
              <p className="text-body text-[var(--color-muted-foreground)] max-w-xl">
                We provide 24-hour vehicle solutions for all your heavy lifting and transportation needs across Nepal. Machinery for every job, big or small.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row shrink-0 gap-4 w-full lg:w-auto pb-2">
              <a href="tel:+9779851420084" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full h-14 text-lg px-8 gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/9779851420084" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="w-full h-14 text-lg px-8 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="transparent" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {/* Hatti */}
            <Link href="/gallery/hatti" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" alt="Hatti / Mini Truck" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">Hatti (Mini Trucks)</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Perfect for quick local transport and navigating narrow city streets. Agile and highly reliable.
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Tata */}
            <Link href="/gallery/tata" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="/vechiles/tata_thumb.jpg" alt="Tata Truck" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">Tata Transport</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Heavy-duty Tata trucks ready for long-haul transportation of goods across the country.
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Nissan */}
            <Link href="/gallery/nissan" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="/vechiles/nissan_thumb.jpeg" alt="Nissan Tow Truck" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">Nissan Rental</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Premium towing services for stranded vehicles. Safe, secure, and prompt 24/7 response.
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Tippers */}
            <Link href="/gallery/tippers" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="/vechiles/tipper_thumb.webp" alt="Tipper Truck" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">Tippers</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Robust tipper trucks essential for construction sites and bulk material transport.
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* JCBs */}
            <Link href="/gallery/jcbs" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="/vechiles/jcb_thumb.jpg" alt="JCB Excavator" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">JCBs & Excavators</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Heavy machinery for earthmoving, digging, and major construction projects. Handled by expert operators.
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Many More */}
            <Link href="/gallery/more" className="group rounded-md block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden bg-[var(--color-muted)] shrink-0">
                  <Image src="/vechiles/manymore_thumb.jpg" alt="Fleet of Trucks" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-[var(--color-accent)] transition-colors">And Many More...</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="flex-1">
                    Don't see what you need? We have a vast network of commercial vehicles for any specialized transport requirement. Just ask!
                  </p>
                  <div className="mt-6 flex items-center justify-end text-sm font-medium text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:underline decoration-2 underline-offset-4 transition-all">
                    View Gallery <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="h-px w-full bg-[var(--color-border)] my-8" />
        </div>

        {/* About Section */}
        <section className="w-full max-w-5xl mx-auto py-16 md:py-24 px-6">
          <SectionLabel>About Us</SectionLabel>
          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-start mt-12">
            <div>
              <h2 className="heading-section mb-6">
                Always Ready. Always Local.
              </h2>
              <p className="text-body mb-6">
                Based in Chyasal, Lalitpur, GadiDhuwani.com is your trusted partner for all vehicle and heavy machinery needs. We understand that emergencies happen at any hour, which is why our dedicated team is on standby 24 hours a day, 7 days a week.
              </p>
              <p className="text-[var(--color-muted-foreground)] text-body">
                Whether you need a quick tow in the middle of the night or heavy machinery for construction, our fleet is meticulously maintained and ready to deploy. We pride ourselves on transparent pricing, rapid response times, and an unwavering commitment to safety.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card variant="default" className="p-6 md:p-6 bg-[var(--color-muted)] border-none">
                <Clock className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                <h3 className="heading-card mb-2">24 Hour Service</h3>
                <p className="text-[var(--color-muted-foreground)]">Available day and night for emergency towing and transport.</p>
              </Card>
              <Card variant="default" className="p-6 md:p-6 bg-[var(--color-muted)] border-none">
                <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                <h3 className="heading-card mb-2">Nepal Based</h3>
                <p className="text-[var(--color-muted-foreground)]">Local expertise with coverage across major cities and highways.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="w-full py-24 md:py-32 px-6 bg-[var(--color-foreground)] text-[var(--color-background)]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="heading-section mb-8 text-[var(--color-background)]">Need immediate assistance?</h2>
            <p className="text-body text-[var(--color-muted)] opacity-80 mb-10 max-w-2xl">
              Our dispatchers are standing by. We will send the right equipment to your location immediately.
            </p>
            <a href="tel:+9779851420084">
              <Button className="h-16 px-8 text-xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-secondary)] shadow-none border-none">
                <Phone className="w-6 h-6 mr-3" />
                Call +977 9851420084
              </Button>
            </a>
          </div>
        </section>

        {/* Contact & Footer */}
        <footer className="w-full max-w-6xl mx-auto py-24 px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="heading-card mb-8">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium mb-1">Primary Hotline (24/7)</span>
                    <a href="tel:+9779851420084" className="block text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] hover:underline">+977 9851420084</a>
                    <a href="tel:+9771524296" className="block text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] hover:underline">01-5242096</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium mb-1">Email Us</span>
                    <a href="mailto:info@gadidhuwani.com" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] hover:underline">info@gadidhuwani.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium mb-1">Headquarters</span>
                    <span className="text-[var(--color-muted-foreground)]">Chyasal, Lalitpur, Nepal<br />(Operating nationwide)</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full h-80 bg-[var(--color-muted)] rounded-lg overflow-hidden relative border border-[var(--color-border)] opacity-90 hover:opacity-100 transition-opacity">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.842777174626!2d85.31976215!3d27.67972415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd75cb79c5%3A0xe549887ec11f7c70!2sChyasal%2C%20Patan%2044700%2C%20Nepal!5e0!3m2!1sen!2sus!4v1714400262100!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-opacity"
              />
            </div>
          </div>

          <div className="h-px w-full bg-[var(--color-border)] mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6 text-[var(--color-accent)]" />
              <span className="font-serif font-bold text-lg">GadiDhuwani.com</span>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              &copy; {new Date().getFullYear()} GadiDhuwani.com. All rights reserved. Nepal.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
