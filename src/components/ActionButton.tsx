type ActionButtonAppreance = 'contained' | 'outlined' | 'ghost';
type ButtonTypes = 'submit' | 'reset' | 'button';

interface IActionButtonProps {
  type: ButtonTypes;
  appreance: ActionButtonAppreance;
  isDisabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const contained = 'bg-green text-white';
const outlined = 'border border-green text-green';
const ghost = 'text-green';
const disabledStyle = 'disabled:bg-gray-250 disabled:text-white';

const appreanceTypes: Record<ActionButtonAppreance, string> = {
  contained,
  outlined,
  ghost,
};

export default function ActionButton({
  type,
  appreance,
  isDisabled,
  children,
  onClick,
}: IActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-radius-200 w-full h-12 text-base font-bold ${appreanceTypes[appreance]} ${disabledStyle} hover:opacity-70 active:opacity-50 transition-opacity ease-in-out cursor-pointers`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
