import { SectionContainer } from "@/components/ui/SectionContainer";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  return (
    <SectionContainer id="gallery" className="bg-cloud-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="font-heading text-h2 text-royal-blue mb-4 text-left">
            Our Facility
          </h2>
          <p className="text-lg text-slate-gray leading-relaxed">
            Take a look at our modern, clean, and well-maintained laundromat.
            Every detail is designed for your comfort and convenience.
          </p>
        </div>
        <div className="lg:text-right">
          <p className="text-slate-gray text-sm">
            Brand new facility with state-of-the-art equipment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((image) => (
          <div
            key={image.id}
            className="relative aspect-[4/3] rounded-card overflow-hidden shadow-soft card-flow water-droplet group"
            style={{
              animationDelay: `${image.id * 0.1}s`,
            }}
          >
            {/* TODO: Replace with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-tint to-mint-glow flex items-center justify-center">
              <div className="text-center p-8">
                <div className="h-16 w-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal text-2xl font-bold">
                    {image.id}
                  </span>
                </div>
                <p className="text-slate-gray text-sm">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

