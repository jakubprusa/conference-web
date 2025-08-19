import React from 'react';

const Program = () => {
  const schedule = [
    { time: "09:00 - 09:30", title: "Registration and Welcome Coffee", speaker: "Event Team", type: "registration" },
    { time: "09:30 - 10:30", title: "Keynote: Future of Communication", speaker: "Dr. Jane Smith", type: "keynote" },
    { time: "10:30 - 10:45", title: "Coffee Break", speaker: "", type: "break" },
    { time: "10:45 - 11:30", title: "AI in Modern Communication", speaker: "John Doe", type: "talk" },
    { time: "11:30 - 12:15", title: "Digital Transformation Strategies", speaker: "Sarah Johnson", type: "talk" },
    { time: "12:15 - 13:15", title: "Lunch Break", speaker: "", type: "break" },
    { time: "13:15 - 14:00", title: "Workshop: Communication Tools", speaker: "Mike Wilson", type: "workshop" },
    { time: "14:00 - 14:45", title: "Panel: Industry Leaders Discussion", speaker: "Various Speakers", type: "panel" },
    { time: "14:45 - 15:00", title: "Coffee Break", speaker: "", type: "break" },
    { time: "15:00 - 15:45", title: "Closing Keynote & Q&A", speaker: "Dr. Robert Brown", type: "keynote" },
    { time: "15:45 - 16:00", title: "Closing Remarks & Networking", speaker: "Event Team", type: "closing" }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'keynote': return 'text-orange-600 bg-orange-50';
      case 'talk': return 'text-blue-600 bg-blue-50';
      case 'workshop': return 'text-green-600 bg-green-50';
      case 'panel': return 'text-purple-600 bg-purple-50';
      case 'break': return 'text-gray-500 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center p-6 rounded-lg border-l-4 ${
                item.type === 'keynote' ? 'border-orange-500' : 
                item.type === 'talk' ? 'border-blue-500' :
                item.type === 'workshop' ? 'border-green-500' :
                item.type === 'panel' ? 'border-purple-500' :
                'border-gray-300'
              } bg-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex-shrink-0 w-32">
                <span className="text-lg font-semibold text-gray-900">
                  {item.time}
                </span>
              </div>
              
              <div className="flex-grow ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.speaker && (
                  <p className="text-gray-600">
                    {item.speaker}
                  </p>
                )}
              </div>
              
              <div className="flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                  {item.type === 'keynote' ? 'Keynote' :
                   item.type === 'talk' ? 'Talk' :
                   item.type === 'workshop' ? 'Workshop' :
                   item.type === 'panel' ? 'Panel' :
                   item.type === 'break' ? 'Break' :
                   'Event'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;