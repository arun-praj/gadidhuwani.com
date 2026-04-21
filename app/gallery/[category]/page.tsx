import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const galleryData = {
  hatti: {
    title: "Hatti (Mini Trucks)",
    description: "Perfect for quick local transport and navigating narrow city streets. Agile and highly reliable.",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519003722824-194d4455a50c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582293041079-7814c811dc75?auto=format&fit=crop&q=80&w=800",
    ]
  },
  tata: {
    title: "Tata Transport",
    description: "Heavy-duty Tata trucks ready for long-haul transportation of goods across the country.",
    images: [
      "/vechiles/tata1.jpg",
      "/vechiles/tata2.jpg",
      "/vechiles/tata3.jpg",
      "/vechiles/tata4.jpg",
      "/vechiles/tata5.jpg",
    ]
  },
  nissan: {
    title: "Nissan Rental",
    description: "Premium towing services for stranded vehicles. Safe, secure, and prompt 24/7 response.",
    images: [
      "/vechiles/nissan1.webp",
    ]
  },
  tippers: {
    title: "Tippers",
    description: "Robust tipper trucks essential for construction sites and bulk material transport.",
    images: [
      "/vechiles/tipper1.webp",
      "/vechiles/tipper2.webp",
    ]
  },
  jcbs: {
    title: "JCBs & Excavators",
    description: "Heavy machinery for earthmoving, digging, and major construction projects. Handled by expert operators.",
    images: [
      "/vechiles/JCB1.jpg",
      "/vechiles/jcb2.jpg",
      "/vechiles/jcb3.JPG",
    ]
  },
  more: {
    title: "And Many More...",
    description: "Don't see what you need? We have a vast network of commercial vehicles for any specialized transport requirement. Just ask!",
    images: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590725140246-20acdbaf9f20?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610486044738-406a64ced3c1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582293041079-7814c811dc75?auto=format&fit=crop&q=80&w=800",
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(galleryData).map((category) => ({
    category,
  }));
}

export default async function GalleryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = galleryData[category as keyof typeof galleryData];

  if (!data) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col flex-1 pb-12">
      <header className="w-full py-6 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between border-b border-[var(--color-border)] opacity-80 mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent -ml-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
        <span className="font-serif font-bold tracking-tight text-xl">GadiDhuwani.com</span>
      </header>

      <div className="w-full px-6 flex flex-col max-w-6xl mx-auto flex-1">
        <div className="mb-12 max-w-3xl">
          <span className="small-caps text-[var(--color-accent)] mb-4 inline-block tracking-[0.15em]">Fleet Gallery</span>
          <h1 className="heading-hero mb-6 text-5xl md:text-6xl">{data.title}</h1>
          <p className="text-body text-[var(--color-muted-foreground)] text-lg">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pb-24">
          {data.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-muted)] border border-[var(--color-border)] group shadow-sm">
              <Image
                src={img}
                alt={`${data.title} photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
