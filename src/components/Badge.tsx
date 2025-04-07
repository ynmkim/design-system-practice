type BadgeProps =
  | { variant: 'new' }
  | { variant: 'dot' }
  | { variant: 'number'; count: number };

const baseStyle =
  'inline-flex items-center justify-center text-xl font-semibold bg-green text-white text-[20px]  rounded-full';

const variantStyles = {
  new: 'w-[36px] h-[36px]',
  dot: 'w-[11px] h-[11px]',
  number: 'min-w-[36px] h-[36px] px-[10px]',
};

export default function Badge(props: BadgeProps) {
  const { variant } = props;

  return (
    <div className={`${baseStyle} ${variantStyles[variant]}`}>
      {variant === 'new'
        ? 'N'
        : variant === 'dot'
          ? null
          : typeof props.count === 'number' && props.count > 999
            ? '999+'
            : props.count}
    </div>
  );
}
