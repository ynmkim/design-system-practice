import { useState } from 'react';
import Chip from './Chip';

type ChipAppreance = 'contained' | 'outlined';
type ChipSize = 'small' | 'medium' | 'large';

interface IChipListProps<T extends string> {
  chipList: T[];
  appreance: ChipAppreance;
  size: ChipSize;
  onClick: (chip: T) => void;
}

export default function ChipList<T extends string>({
  chipList,
  appreance,
  size,
  onClick,
}: IChipListProps<T>) {
  const [selectedChip, setSelectedChip] = useState<string>(chipList[0]);

  const handleChipClick = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLButtonElement;
    const chip = eventTarget.textContent as T;
    onClick(chip);
  };

  return (
    // 이벤트 버블링 활용: 자식 태그에서 발생한 이벤트를 부모에게 전파
    <div className="flex gap-x-3" onClick={handleChipClick}>
      {chipList.map((chip) => (
        <Chip
          key={chip}
          appreance={appreance}
          size={size}
          onClick={() => setSelectedChip(chip)}
          isSelected={chip === selectedChip}
        >
          {chip}
        </Chip>
      ))}
    </div>
  );
}
