interface ILabelProps {
  htmlFor: string;
  children: string;
}
export default function Lebel({ htmlFor, children }: ILabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-base font-bold">
      {children}
    </label>
  );
}
