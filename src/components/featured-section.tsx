import { ShieldCheck, CreditCard, Headphones, BarChart } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Authentication",
      description: "Two-Factor Authentication and Role-Based Access Control.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Automated Billing",
      description: "Seamless invoicing and subscription management.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description: "Built-in ticketing system with SLA tracking.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Analytics & Reports",
      description: "Track revenue, customer retention, and more.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <div className="text-indigo-500">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
