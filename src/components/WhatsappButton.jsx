import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
    const phoneNumber = "919876543210"; // your whatsapp number
    const message = "Hello! I want to know more about Coorg Collection products.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 group flex items-center">

            {/* Tooltip */}
            <span className="mr-3 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Chat with us
            </span>

            {/* WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center text-2xl"
            >
                <FaWhatsapp />
            </a>

        </div>
    );
}

export default WhatsappButton;