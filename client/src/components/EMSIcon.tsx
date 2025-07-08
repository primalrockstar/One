interface EMSIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function EMSIcon({ size = 'md', className = '' }: EMSIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#gradient)"
          stroke="white"
          strokeWidth="2"
        />
        
        {/* Star of Life - EMS Symbol */}
        <g transform="translate(50,50)">
          {/* Six-pointed star */}
          <path
            d="M0,-20 L4,-8 L16,-8 L8,0 L12,12 L0,6 L-12,12 L-8,0 L-16,-8 L-4,-8 Z"
            fill="white"
            stroke="none"
          />
          
          {/* Rod of Asclepius in center */}
          <g transform="scale(0.4)">
            {/* Staff */}
            <line x1="0" y1="-15" x2="0" y2="15" stroke="#1e40af" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Snake body - simplified curves */}
            <path
              d="M-8,-10 Q-12,-5 -8,0 Q-4,5 -8,10 M8,-5 Q12,0 8,5 Q4,10 8,15"
              stroke="#1e40af"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Snake head */}
            <circle cx="-8" cy="-12" r="2" fill="#1e40af"/>
            <circle cx="8" cy="17" r="2" fill="#1e40af"/>
          </g>
        </g>
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Optional pulse animation for online status */}
      <div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20"></div>
    </div>
  );
}

export function EMSBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium ${className}`}>
      <EMSIcon size="sm" className="animate-none" />
      {children}
    </div>
  );
}