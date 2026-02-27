"use client";

export default function Location() {
    return (
        <section className="py-24 bg-white" id="location">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Location</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Digital Display Panel Solution – Saini Compound, Lohia Nagar, Ghaziabad, Uttar Pradesh 201001
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-8">
                        <iframe
                            src="https://www.google.com/maps?q=Digital+Display+Panel+Solution+Saini+Compound+Lohia+Nagar+Ghaziabad&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digital Display Panel Solution Location"
                            className="w-full"
                        ></iframe>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Digital+Display+Panel+Solution+Saini+Compound+Lohia+Nagar+Ghaziabad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex bg-primary hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors items-center justify-center gap-2"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
