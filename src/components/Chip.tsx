type ChipAppreance = 'contained' | 'outlined';
type ChipSize = 'small' | 'medium' | 'large';

interface IChipProps {
  children: string;
  appreance: ChipAppreance;
  size: ChipSize;
  onClick: () => void;
  isSelected: boolean;
}

export default function Chip({
  children,
  appreance = 'contained',
  size = 'small',
  onClick,
  isSelected,
}: IChipProps) {
  const contained = isSelected ? 'bg-green text-white' : 'bg-gray-150';
  const outlined = isSelected
    ? 'border border-green text-green'
    : 'border border-black text-black';

  const disabledStyle = 'disabled:bg-gray-250 disabled:text-white';

  const small = 'px-[14px] h-8 text-sm';
  const medium = 'px-[14px] h-9 text-[15px]';
  const large = 'px-6 h-[54px] text-[17px]';

  const appreanceTypes: Record<ChipAppreance, string> = {
    contained,
    outlined,
  };

  const sizeTypes: Record<ChipSize, string> = {
    small,
    medium,
    large,
  };

  return (
    <button
      className={`inline-flex justify-center items-center rounded-full ${appreanceTypes[appreance]} ${sizeTypes[size]} ${disabledStyle} hover:opacity-70 active:opacity-50 transition-opacity ease-in-out cursor-pointer`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}

// single or multiple selections
