export function VideoSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            See how creators succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch how successful creators are using our platform to share their knowledge
            and build their audience
          </p>
          <div className="mt-8 aspect-video overflow-hidden rounded-xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?w=800&auto=format&fit=crop&q=60"
              alt="Creator Platform Demo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}