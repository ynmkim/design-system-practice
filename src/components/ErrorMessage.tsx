interface IErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: IErrorMessageProps) {
  return <p className="text-xs text-red">{children}</p>;
}
