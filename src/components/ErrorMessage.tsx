interface IErrorMessageProps {
  children: string;
  className?: string;
}

export default function ErrorMessage({
  children,
  className,
}: IErrorMessageProps) {
  return <p className={`text-sm text-red ${className}`}>{children}</p>;
}
