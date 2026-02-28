"use client";

import { MapPin } from "lucide-react";

export default function Location() {
    const areas = [
        "Indirapuram", "Vaishali", "Vasundhara", "Raj Nagar",
        "Raj Nagar Extension", "Kavi Nagar", "Lohia Nagar", "Crossings Republik",
        "Shalimar Garden", "Sahibabad", "RDC Ghaziabad", "Kaushambi"
    ];

    return (
        <section className="py-24 bg-white" id="location">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Location</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Digital Display Panel Solution, SAINI COMPOUND, B-59A, near WATER TANK, Block G, Lohia Nagar, Ghaziabad, Uttar Pradesh 201001.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-8 mx-auto aspect-[16/9] md:aspect-[21/9]">
                        <iframe
                            src="https://www.google.com/maps?q=Digital+Display+Panel+solution,+SAINI+COMPOUND,+B-59A,+near+WATER+TANK,+Block+G,+Lohia+Nagar,+Ghaziabad,+Uttar+Pradesh+201001&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digital Display Panel Solution Location"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.google.com/maps/dir//Digital+Display+Panel+solution,+SAINI+COMPOUND,+B-59A,+near+WATER+TANK,+Block+G,+Lohia+Nagar,+Ghaziabad,+Uttar+Pradesh+201001/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex bg-primary hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors items-center justify-center gap-2 shadow-md"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>

                {/* Popular Service Areas Grid */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Popular Service Areas in Ghaziabad</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We provide LED TV and Display Panel Repair across major locations in Ghaziabad and NCR.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {areas.map((area, idx) => (
                            <div key={idx} className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all rounded-xl p-4 flex items-center gap-3 group">
                                <span className="w-10 h-10 rounded-full bg-blue-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                                    <MapPin size={18} />
                                </span>
                                <span className="font-medium text-gray-800 text-sm md:text-base">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
