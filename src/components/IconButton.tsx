interface IIconButtonProps {
  iconPath: string;
  iconAlt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
  iconPath,
  iconAlt,
  onClick,
}: IIconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center w-5 h-5 rounded-full bg-gray-350"
    >
      <img src={iconPath} alt={iconAlt} />
    </button>
  );
}
