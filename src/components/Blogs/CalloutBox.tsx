import { Lightbulb, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface CalloutBoxProps {
  type: 'tip' | 'warning' | 'success' | 'info';
  title: string;
  content: string;
}

export default function CalloutBox({ type, title, content }: CalloutBoxProps) {
  const getStyles = () => {
    switch (type) {
      case 'tip':
        return {
          container: 'bg-teal-50 border-teal-200 border-l-4 border-l-teal-500',
          icon: <Lightbulb className="w-5 h-5 text-teal-600" />,
          title: 'text-teal-800',
          content: 'text-teal-700'
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-200 border-l-4 border-l-yellow-500',
          icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
          title: 'text-yellow-800',
          content: 'text-yellow-700'
        };
      case 'success':
        return {
          container: 'bg-green-50 border-green-200 border-l-4 border-l-green-500',
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          title: 'text-green-800',
          content: 'text-green-700'
        };
      case 'info':
        return {
          container: 'bg-gray-50 border-gray-200 border-l-4 border-l-gray-500',
          icon: <Info className="w-5 h-5 text-gray-600" />,
          title: 'text-gray-800',
          content: 'text-gray-700'
        };
      default:
        return {
          container: 'bg-gray-50 border-gray-200 border-l-4 border-l-gray-500',
          icon: <Info className="w-5 h-5 text-gray-600" />,
          title: 'text-gray-800',
          content: 'text-gray-700'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`p-6 rounded-lg border ${styles.container} my-6`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {styles.icon}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold mb-2 ${styles.title}`}>{title}</h4>
          <p className={`leading-relaxed ${styles.content}`}>{content}</p>
        </div>
      </div>
    </div>
  );
}