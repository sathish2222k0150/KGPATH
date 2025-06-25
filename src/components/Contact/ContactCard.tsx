// components/ContactCard.tsx
import { LucideIcon } from "lucide-react";
import {Link} from "react-router-dom";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  action?: string;
}

const ContactCard = ({ icon: Icon, title, content, action }: ContactCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{content}</p>
        {action && (
          <Link
            to="#"
            className="text-teal-600 font-medium hover:text-teal-700 transition-colors mt-auto inline-flex items-center"
          >
            {action}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContactCard;