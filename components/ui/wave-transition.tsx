import { cn } from '@/lib/utils';

interface WaveTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  scrollProgress?: number;
}

export function WaveTransition({ className, scrollProgress = 0, ...props }: WaveTransitionProps) {
  return (
    <div 
      className={cn(
        "absolute bottom-0 left-0 right-0 h-24 overflow-hidden transition-transform duration-300",
        className
      )} 
      {...props}
    >
      <div 
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: `translateY(${scrollProgress * 50}px)`,
          opacity: 1 - scrollProgress * 0.8
        }}
      >
        <div className="relative h-24 w-full">
          <div 
            className="absolute bottom-0 left-0 right-0 h-24 bg-background"
            style={{
              clipPath: "url(#wave-clip)"
            }}
          />
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.2 C0.3,0.1 0.7,0.3 1,0.2 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}