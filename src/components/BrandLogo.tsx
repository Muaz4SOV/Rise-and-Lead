import logo from '../assets/Logo.png';
import { cn } from '../lib/utils';

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Rise & Lead 360"
      className={cn('h-10 w-10 rounded-lg object-cover shrink-0', className)}
    />
  );
}
