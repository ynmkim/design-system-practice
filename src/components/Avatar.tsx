type AvatarSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

interface IAvatarProps {
  imgPath: string;
  imgAlt: string;
  size: AvatarSize;
  onClick?: () => void;
}

const XS = 'w-[32px] h-[32px]';
const S = 'w-[42px] h-[42px]';
const M = 'w-[50px] h-[50px]';
const L = 'w-[60px] h-[60px]';
const XL = 'w-[72px] h-[72px]';

const sizeTypes: Record<AvatarSize, string> = {
  XS,
  S,
  M,
  L,
  XL,
};

export default function Avatar({
  imgPath,
  imgAlt,
  size,
  onClick,
}: IAvatarProps) {
  return (
    <div
      className={`overflow-hidden rounded-radius-circle ${sizeTypes[size]} hover:opacity-70 active:opacity-50`}
      onClick={onClick}
    >
      <img src={imgPath} alt={imgAlt} className="w-full h-full object-cover" />
    </div>
  );
}
