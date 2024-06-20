import IconButton from './IconButton';

interface ITopNavigationProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TopNavigation({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: ITopNavigationProps) {
  return (
    <div className="flex justify-between items-center gap-x-4 h-14 px-3">
      {/* 뒤로가기 버튼 */}
      <div className="flex gap-x-3">
        {showBackButton && (
          <IconButton
            iconPath={`/icons/ic-chevron-left${isDark ? '-white' : ''}.svg`}
            iconAlt="뒤로 가기"
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 제목 */}
        {showTitle && (
          <h1 className={`${isDark ? 'text-white' : 'text-black'}`}>{title}</h1>
        )}
      </div>

      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          iconPath={`/icons/ic-close${isDark ? '-white' : ''}.svg`}
          iconAlt="닫기"
          onClick={onCloseButtonClick}
          className="flex-shrink-0"
        />
      )}
    </div>
  );
}
