interface IIconButtonProps {
  iconPath: string;
  iconAlt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function IconButton({
  iconPath,
  iconAlt,
  onClick,
  className,
}: IIconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex justify-center items-center ${className}`}
    >
      <img src={iconPath} alt={iconAlt} />
    </button>
  );
}
