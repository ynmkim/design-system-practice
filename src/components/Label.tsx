interface ILabelProps {
  htmlFor: string;
  children: string;
}
export default function Lebel({ htmlFor, children }: ILabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-title-m text-blue-600">
      {children}
    </label>
  );
}
