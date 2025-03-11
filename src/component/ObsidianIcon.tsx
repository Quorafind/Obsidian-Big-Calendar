import React from 'react';
import {setIcon} from 'obsidian';

interface ObsidianIconProps {
  iconName: string;
  size?: number;
  className?: string;
  tooltip?: string;
}

const ObsidianIcon: React.FC<ObsidianIconProps> = React.memo(({iconName, size = 16, className = '', tooltip = ''}) => {
  const iconRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (iconRef.current) {
      // Clear previous content
      iconRef.current.empty();

      // Set the icon using setIcon method
      setIcon(iconRef.current, iconName);
    }
  }, [iconName]);

  return (
    <div
      ref={iconRef}
      style={{width: size, height: size}}
      aria-label={tooltip}
      className={`obsidian-icon ${className}`}
    />
  );
});

export default ObsidianIcon;
