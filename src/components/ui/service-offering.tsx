export interface ServiceOfferingProps {
  title: string;
  items: string[];
}

export function ServiceOffering({ title, items }: ServiceOfferingProps) {
  return (
    <div>
      <h2 className="font-semibold text-med mb-4 tracking-tighter">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceOffering;
