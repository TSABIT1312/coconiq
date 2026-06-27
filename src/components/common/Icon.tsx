import type { ComponentType, SVGProps } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Droplets,
  Feather,
  FlaskConical,
  HeartHandshake,
  Home,
  Leaf,
  LeafyGreen,
  MessageCircle,
  MoveRight,
  Quote,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
  Tractor,
  TreePine,
  Truck,
  Wheat,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>

const iconRegistry = {
  'arrow-right': ArrowRight,
  award: Award,
  'book-open': BookOpen,
  check: Check,
  'chevron-down': ChevronDown,
  droplets: Droplets,
  feather: Feather,
  flask: FlaskConical,
  'heart-handshake': HeartHandshake,
  home: Home,
  leaf: Leaf,
  'leafy-green': LeafyGreen,
  'message-circle': MessageCircle,
  'move-right': MoveRight,
  quote: Quote,
  recycle: Recycle,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  sprout: Sprout,
  tractor: Tractor,
  'tree-pine': TreePine,
  truck: Truck,
  wheat: Wheat,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconRegistry

export interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const Component = iconRegistry[name]
  return <Component aria-hidden className={cn('h-5 w-5', className)} />
}
